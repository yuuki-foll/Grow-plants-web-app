<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>音声認識サンプル</title>
</head>

<body>
    <h2>音声認識サンプル</h2>
    <button id="btn">start</button>
    <div id="voice_recognition"></div>
    <h5>分析結果</h5>
    <table id="senti_list"></table>
    <div id="showson"></div>
    <h5>感情指数</h5>
    <div id="senti_level"></div>
</body>

<script>
    let senti_level = 0; // 感情指数
    document.getElementById("senti_level").innerHTML = senti_level

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
                var row = document.getElementById("senti_list").insertRow();
                document.getElementById("showson").innerHTML = jsonData.values
                console.log(jsonData.values)
                console.log(JSON.parse(jsonData.values))
                console.log(JSON.parse(jsonData.values).neg)
                if (JSON.parse(jsonData.values).neg > JSON.parse(jsonData.values).pos) {
                    senti_level--; // ネガティブよりならデクリメント
                } else if (JSON.parse(jsonData.values).neg < JSON.parse(jsonData.values).pos) {
                    senti_level++;
                }
                document.getElementById("senti_level").innerHTML = senti_level
                console.log(Object.keys(jsonData))
            })
    }, false);//何のfalse
</script>

</html>