let senti_level = 1; // 感情指数(レベルとして1スタートに変更)
var cookies = document.cookie;
var back_flag = new Boolean(false);
back_flag = false;
console.log(cookies);
var cookiesArray = cookies.split(';');
var savedata = ""
for (var c of cookiesArray) {
    var cArray = c.split('=');
    if (cArray[0] == 'auth') {
        savedata = atob(cArray[1]);
    }
}
console.log(savedata)
var savedataArray = savedata.split(',');
for (var s of savedataArray) {
    var sArray = s.split(':');
    console.log(sArray)
    if (sArray[0] == "\"plant_level\"") {
        senti_level = parseInt(sArray[1].slice(0, 1))
    }
    else if (sArray[0] == "\"physical_strength\"") {
        life = parseInt(sArray[1])
        alterLife(0)
        back_flag = true
    }
}
// let senti_level = 1; // 感情指数(レベルとして1スタートに変更)
document.getElementById("senti_level").innerHTML = senti_level

// 画像一覧のURLをリストで格納
var img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA.png?alt=media&token=71f54a3b-5f37-481a-8086-abc7be1d6073", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA2.png?alt=media&token=7b96a6f2-9c13-4d91-88f3-cadc2948e4e5", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998"]

window.addEventListener('DOMContentLoaded', function () {
    const btn_play = document.getElementById("btn_play");
    const btn_pause = document.getElementById("btn_pause");
    const btn_mute = document.getElementById("btn_mute");
    const slider_volume = document.getElementById("volume");
    const audioElement = document.querySelector("audio");
    // ボリュームの初期設定
    audioElement.volume = slider_volume.value;
    btn_play.addEventListener("click", e => {
        audioElement.play();
    });
    btn_pause.addEventListener("click", e => {
        audioElement.pause();
    });
    btn_mute.addEventListener("click", e => {
        if (audioElement.muted) {
            audioElement.muted = false;
            btn_mute.textContent = "消音";
        } else {
            audioElement.muted = true;
            btn_mute.textContent = "消音解除";
        }
    });
    slider_volume.addEventListener("input", e => {
        audioElement.volume = slider_volume.value;
    });
});
/* セーブ処理 */
const save = document.getElementById('save_btn');
save.addEventListener('click', function () {

    // Fetch APIでデータ送信
    fetch('http://127.0.0.1:8999/save', {　 // 送信先URL
        method: "POST", // 通信メソッド
        mode: "no-cors",
        header: {
            'Content-Type': 'application/json' // JSON形式のデータのヘッダー
        },

        body: JSON.stringify({
            PhysicalStrength: life,
            PlantLevel: senti_level,
            Username: "name"
        }) // JSON形式のデータ
    })
});

/* senti_levelの値により植物の画像を変更する関数 */
function changeImage(senti_level) {
    if (senti_level == 1) {
        img_path = img[0];
    } else if (senti_level >= 6) {
        img_path = img[3];
    } else if (senti_level >= 4) {
        img_path = img[2];
    } else if (senti_level >= 2) {
        img_path = img[1];
    }
    return img_path
}

/* 植物の変更 */
const change = document.getElementById('change_btn');
change.addEventListener('click', function () {
    const seed = document.getElementById("change seed").value;
    console.log(seed);
    alterLife(50 - life) // 体力を50に戻す
    senti_level = 1;
    document.getElementById("senti_level").innerHTML = senti_level
    if (seed == "sunflower"){
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA.png?alt=media&token=71f54a3b-5f37-481a-8086-abc7be1d6073", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA2.png?alt=media&token=7b96a6f2-9c13-4d91-88f3-cadc2948e4e5", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998"]
        console.log("change sunflower");
    }else if (seed == "tulips"){
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%972.png?alt=media&token=025ca678-3b54-49bc-8336-9d3b6fda7fa3","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%973.png?alt=media&token=48b6bbeb-7b1b-4dad-a1de-60600903447b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/turips.gif?alt=media&token=b7740863-979f-4085-b3a5-ca34e98eff01"]
        console.log("change tulips");
    }
    plant_pic.src = changeImage(senti_level);
// 植物の変更時にステータスを引き継いでしまう
});
//音声認識の準備
const recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';

//使用する変数を用意
const btn = document.getElementById('btn');

// ボタンと処理
btn.addEventListener('click', function () {
    // 音声認識をスタート
    recognition.start();
});

// 音声認識結果を表示
recognition.addEventListener('result', function (evt) {
    var sentence = ""; //解析したテキストを代入
    // 音声認識で取得した情報を、コンソール画面に表示
    console.log(evt);
    const txt = evt.results[0][0].transcript; //テキスト部分
    if (txt) {
        sentence += `${txt}\n`;
        // テキストを「voice_recognition」としてHTML Elementにする
        document.getElementById("voice_recognition").innerHTML = sentence;
    }
    // Fetch APIでデータ送信
    fetch('http://127.0.0.1:8999/page0', {　 // 送信先URL
        method: "POST", // 通信メソッド
        mode: "no-cors",
        header: {
            'Content-Type': 'application/json' // JSON形式のデータのヘッダー
        },
        body: JSON.stringify({ result: sentence }) // JSON形式のデータ
    })
        .then(response => {
            if (!response.ok) {
                console.log("error");
            } else {
                console.log("ok");
            }
            console.log(response.status)
            return response.json(); //レスポンスをJSON形式で受け取るように指定
        })

        // JSON形式で受け取った後の操作
        .then(jsonData => {
            console.log('jsonData: ', jsonData);

            var neg = JSON.parse(jsonData.values).neg
            var pos = JSON.parse(jsonData.values).pos

            // 感分析の結果を代入
            document.getElementById("showson").innerHTML = "ネガティブ:" + neg + "　　ポジティブ:" + pos
            console.log(jsonData.values)
            console.log(JSON.parse(jsonData.values))
            console.log(JSON.parse(jsonData.values).neg)
            if (JSON.parse(jsonData.values).neg > JSON.parse(jsonData.values).pos) {
                //senti_level--; // ネガティブよりならデクリメント
                alterLife(-10)
            } else if (JSON.parse(jsonData.values).neg < JSON.parse(jsonData.values).pos) {
                senti_level++;
                alterLife(+10)
                document.getElementById("grow_se").play(); // 成長時効果音を鳴らす
            }
            document.getElementById("senti_level").innerHTML = senti_level
            console.log(Object.keys(jsonData))

            plant_pic.src = changeImage(senti_level);
        })
}, false);//何のfalse
var back_URL = document.getElementById("back_btn");
console.log(back_flag)
if (back_flag) {
    back_URL.onclick = function () {
        location.href = 'http://127.0.0.1:8999/after';
    }
    console.log("True");
} else {
    back_URL.onclick = function () {
        location.href = 'http://127.0.0.1:8999/logout';
    }
    console.log("logout");
}