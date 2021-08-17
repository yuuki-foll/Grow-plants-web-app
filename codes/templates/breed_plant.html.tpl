<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>植物を育てよう！</title>

    <!--cssの読み込み-->
    <link rel="stylesheet" href="./../static/css/breed_plant.css" type="text/css">
</head>

<body>
    <button id="save_btn">save</button>
    <!--ページタイトル-->
    <div style="text-align: center">
    <h2>植物を育てよう！</h2>
    <button id="btn">植物と話す</button>


    <h5>あなたの発言</h5>
    <div id="voice_recognition"></div>

    <h5>感情分析結果</h5>
    <div id="showson"></div>

    <h5>感情レベル</h5>
    <div id="senti_level"></div>

    <!--植物の画像-->
    <img id="plant_pic" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/wakaba.png?alt=media&token=310330a4-364b-4ddd-a1b6-4695948fecb6
    " width="300" height="300">
    
    <!--体力バー-->
    <h5>植物の体力</h5>
    <div id="life"></div>
    <div id="life-frame">
        <div id="life-bar"></div>
        <div id="life-mark"></div>
    </div>
    </div>

    <!--BGM関連-->
<!--     <audio preload="auto" controls autoplay loop controlslist="nodownload">
        <source src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bgm_nomal.mp3?alt=media&token=39bda9bc-de03-45c9-b85c-a61d62918570" />
        <p>オーディオ機能未対応です</p>
    </audio> -->

    <!-- BGM変更 -->
    <audio src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bgm_nomal.mp3?alt=media&token=39bda9bc-de03-45c9-b85c-a61d62918570" type="audio/mpeg" loop autoplay preload="auto"></audio>
    <button id="btn_play">再生</button>
    <button id="btn_pause">一時停止</button>
    <button id="btn_mute">消音</button>
    <!--音量調整　マージの時にコメント削除-->
    <input type="range" id="volume" value="0.05" min="0.0" max="0.5" step="0.01">

    <!--JavaScriptsの読み込み-->
    <script src="./../static/js/breed_plant.js">
    </script>

</body>

<script>
    let senti_level = 1; // 感情指数(レベルとして1スタートに変更)
    document.getElementById("senti_level").innerHTML = senti_level

    // 画像一覧のURLをリストで格納
    const img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/wakaba.png?alt=media&token=310330a4-364b-4ddd-a1b6-4695948fecb6","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/wakaba2.png?alt=media&token=d2b4b045-d398-400d-b211-625da2e5771f"]

    window.addEventListener('DOMContentLoaded', function(){
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

        if( audioElement.muted ) {
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

    //使用する変数を用意
    const save = document.getElementById('save_btn');
    // ボタンと処理
    save.addEventListener('click', function () {
        
        // Fetch APIでデータ送信
        fetch('http://127.0.0.1:8999/save', {　 // 送信先URL
        method: "POST", // 通信メソッド
        mode: "no-cors",
        header: {
            'Content-Type': 'application/json' // JSON形式のデータのヘッダー
        },

        body: JSON.stringify({ PhysicalStrength:life,
                                PlantLevel: senti_level,
                                Username:"name" }) // JSON形式のデータ
        })
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
                document.getElementById("showson").innerHTML = "neg:" + neg + "　　pos:" +pos
                console.log(jsonData.values)
                console.log(JSON.parse(jsonData.values))
                console.log(JSON.parse(jsonData.values).neg)
                if (JSON.parse(jsonData.values).neg > JSON.parse(jsonData.values).pos) {
                    senti_level--; // ネガティブよりならデクリメント
                    alterLife( -10 )
                } else if (JSON.parse(jsonData.values).neg < JSON.parse(jsonData.values).pos) {
                    senti_level++;
                    alterLife( +10 )
                }
                document.getElementById("senti_level").innerHTML = senti_level
                console.log(Object.keys(jsonData))

                if (senti_level >= 1){
                    plant_pic.src = img[1];
                }else{
                    plant_pic.src = img[0];
                }
            })
    }, false);//何のfalse
</script>

</html>