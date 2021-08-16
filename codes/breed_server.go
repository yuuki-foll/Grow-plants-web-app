package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"path/filepath"
	"strings"
	"sync"

	firebase "firebase.google.com/go"
	"github.com/stretchr/gomniauth"
	"github.com/stretchr/gomniauth/providers/google"
	"github.com/stretchr/objx"
	"google.golang.org/api/option"
)

// jsonを受け取る構造を宣言
type Ans struct {
	Text string `json:"result"`
}

type templateHandler struct {
	once     sync.Once
	filename string
	tmpl     *template.Template
}
// セーブデータの構造
type saveData struct {
	UserName	string
	PlantLevel	int64
	PhysicalStrength	int64
}

func HtmlHandler(w http.ResponseWriter, r *http.Request) {
	//fmt.Println(r) //リクエストのヘッダ情報
	//fmt.Println(r)
	fmt.Println(r.Method)
	fmt.Println(r.Header.Get("Referer"))
	if r.Header.Get("Referer") == "http://127.0.0.1:8999/page0" { //8989(フロント)から受信した場合
		// POSTの時
		if r.Method == "POST" {
			var ans Ans
			json.NewDecoder(r.Body).Decode(&ans)
			fmt.Printf("%s", ans.Text) //受け取った文字列を出力
			if ans.Text != "" {
				//fmt.Printf("%T\n", r.Header)
				jsonString, err := json.Marshal(ans)
				if err != nil {
					panic("Error")
				}
				url_str := fmt.Sprintf("http://127.0.0.1:8998/ana_sent") //fraskのurlを宣言
				req, err := http.NewRequest("POST", url_str, bytes.NewBuffer(jsonString))
				if err != nil {
					panic("Error")
				}
				//ヘッダーのセット
				req.Header.Set("Content-Type", "application/json")
				client := new(http.Client)
				//送信
				resp, err := client.Do(req)
				if err != nil {
					panic("Error")
				}
				defer resp.Body.Close()

				//受信データの読み込み
				byteArray, err := ioutil.ReadAll(resp.Body)
				if err != nil {
					panic("Error")
				}

				//ネガポジ分析結果の表示
				fmt.Printf("%+v", string(byteArray))
				fmt.Fprint(w, string(byteArray))
				fmt.Print("\nsend successflly\n")

			}
		}
	} else { //ページ更新のGETの場合("http://127.0.0.1:8999/page0")以外の場合
		t := template.Must(template.ParseFiles("templates/breed_plant.html.tpl"))

		str := "Sample Message"

		if err := t.ExecuteTemplate(w, "breed_plant.html.tpl", str); err != nil {
			log.Fatal(err)
		}
	}
}
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("templates/breed_plant_main.html.tpl"))
	if err := t.ExecuteTemplate(w, "breed_plant_main.html.tpl", nil); err != nil {
		log.Fatal(err)
	}
}

func moveHandler(w http.ResponseWriter, r *http.Request) {
	authCookie, _ := r.Cookie("auth")
	if authCookie != nil {
		w.Header()["location"] = []string{"/after"}
		w.WriteHeader(http.StatusTemporaryRedirect)
	} else {
		w.Header()["location"] = []string{"/login"}
		w.WriteHeader(http.StatusTemporaryRedirect)
	}
}

func setAuthInfo() {
	gomniauth.SetSecurityKey("[ehah<m`[op>~1?am3mw")
	gomniauth.WithProviders(
		google.New(
			"405526073754-ob2aru8e43biapdddn9cahrprrvklnlh.apps.googleusercontent.com", // googleClientId
			"cBJdbfAmu6nf6e9cHmD1hlzL", // googleClientSecurityKey
			"http://127.0.0.1:8999/auth/callback/google",
		),
	)
}

func authHandler(w http.ResponseWriter, r *http.Request) {
	//URLを分解する
	segs := strings.Split(r.URL.Path, "/")
	action := segs[2]        //login or callback
	provider_name := segs[3] // google

	switch action {
	case "login":
		provider, err := gomniauth.Provider(provider_name)
		if err != nil {
			log.Fatalln("プロバイダの取得に失敗しました")
		}
		loginURL, err := provider.GetBeginAuthURL(nil, nil)
		if err != nil {
			log.Fatalln("認証ページの取得に失敗しました")
		}
		// 認証ページにリダイレクト
		w.Header().Set("Location", loginURL)
		w.WriteHeader(http.StatusTemporaryRedirect)

	case "callback":
		provider, err := gomniauth.Provider(provider_name)
		if err != nil {
			log.Fatalln("プロバイダの取得に失敗しました")
		}
		creds, err := provider.CompleteAuth(objx.MustFromURLQuery(r.URL.RawQuery))
		if err != nil {
			log.Fatalln("認証情報の取得に失敗しました")
		}
		user, err := provider.GetUser(creds)
		if err != nil {
			log.Fatalln("ユーザの情報の取得に失敗しました")
		}

		authCookieValue := objx.New(map[string]interface{}{
			"name":       user.Name(),
			"avatar_url": user.AvatarURL(),
			"provider":   provider_name,
		}).MustBase64()

		http.SetCookie(w, &http.Cookie{
			Name:  "auth",
			Value: authCookieValue,
			Path:  "/after",
		})

		w.Header()["location"] = []string{"/after"}
		w.WriteHeader(http.StatusTemporaryRedirect)
	}

}

func (t *templateHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path, err := filepath.Abs("./templates/") // テンプレートディレクトリの指定
	if err != nil {
		panic(err)
	}

	// 指定したファイルを一度だけコンパイルする
	t.once.Do(
		func() {
			t.tmpl = template.Must(template.ParseFiles(path + t.filename))
		})
	// HTMLに渡すデータ
	data := map[string]interface{}{
		"Host": r.Host,
	}

	// 認証済みはクッキーの値を渡す
	authCookie, err := r.Cookie("auth")
	if err == nil && authCookie != nil {
		data["UserData"] = objx.MustFromBase64(authCookie.Value)
	}
	t.tmpl.Execute(w, data)
}
func main() {
	// firebase初期化
	ctx := context.Background()
	sa := option.WithCredentialsFile("path/to/grow-plant-webapp-firebase-adminsdk-bf93i-cb28b9790b.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatalln(err)
	}
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	// データ追加
	_, _, err = client.Collection("save_data").Add(ctx, map[string]interface{}{
		"username": "mori",
		"plant_level": 1,
		"physical_strength": 50,
	})
	if err != nil {
		log.Fatalf("Failed adding alovelace: %v", err)
	}
	// 切断	
	defer client.Close()
	fmt.Print("connection successflly\n")
	http.HandleFunc("/", moveHandler)
	http.Handle("/login", &templateHandler{filename: "/login.html"})
	setAuthInfo() // 認証初期設定
	http.HandleFunc("/auth/", authHandler)
	http.Handle("/after", &templateHandler{filename: "/after.html"})
	// css・js・イメージファイル等の静的ファイル格納パス
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static/"))))
	http.HandleFunc("/page0", HtmlHandler)
	http.HandleFunc("/home", HomeHandler)
	http.ListenAndServe(":8999", nil) //ここで止まる
}
