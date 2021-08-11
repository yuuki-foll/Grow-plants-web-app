package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
)

// jsonを受け取る構造を宣言
type Ans struct {
	Text string `json:"result"`
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
func main() {
	fmt.Print("connection successflly\n")
	http.HandleFunc("/page0", HtmlHandler)
	http.ListenAndServe(":8999", nil) //ここで止まる
}
