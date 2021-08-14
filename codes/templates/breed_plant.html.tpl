<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>植物を育てよう！</title>

    <!--cssの読み込み-->
    <link rel="stylesheet" href="./../static/css/breed_plant.css" type="text/css">
</head>

<body>
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
    <img id="plant_pic" src="https://firebasestorage.googleapis.com/v0/b/grow-plants-d1673.appspot.com/o/child.png?alt=media&token=f1a36c8b-0581-460d-ab28-f898ecb382de" width="300" height="300">
    
    <!--体力バー-->
    <h5>植物の体力</h5>
    <div id="life-frame">
        <div id="life-bar"></div>
        <div id="life-mark"></div>
    </div>
    </div>

    <!--BGM関連-->
    <audio preload="auto" controls autoplay loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/grow-plants-d1673.appspot.com/o/bgm_nomal.mp3?alt=media&token=7f1b6487-50a5-49a9-8b43-39d4e3f0b1d2" />
        <p>オーディオ機能未対応です</p>
    </audio>

    <!--JavaScriptsの読み込み-->
    <script src="./../static/js/breed_plant.js">
    </script>
</body>

<script>
    let senti_level = 0; // 感情指数
    document.getElementById("senti_level").innerHTML = senti_level

    // 画像一覧のURLをリストで格納
    const img = ["https://firebasestorage.googleapis.com/v0/b/grow-plants-d1673.appspot.com/o/child.png?alt=media&token=f1a36c8b-0581-460d-ab28-f898ecb382de","https://firebasestorage.googleapis.com/v0/b/grow-plants-d1673.appspot.com/o/adult.jpeg?alt=media&token=b337d07e-f0fd-4ae1-bb70-e4fe4413945e"]

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
                    //alterLife( -1 )
                } else if (JSON.parse(jsonData.values).neg < JSON.parse(jsonData.values).pos) {
                    senti_level++;
                    //alterLife( 1 )
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