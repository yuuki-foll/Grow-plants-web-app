<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>植物を育てよう！</title>
    <!--cssの読み込み-->
    <link rel="stylesheet" href="./../static/css/breed_plant.css" type="text/css">
</head>

<body id="html_body">
    <!-- モーダル -->
    <div class="popup" id="js-popup">
        <div class="popup-inner">
            <div class="close-btn">植物を選択してさい</div>
            <div id="pick-img">
                <input type="image" name="sunflower" id="sunflower" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998">
                <input type="image" name="tulips" id="tulips" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%974.png?alt=media&token=cd7c8148-b2c0-4489-b6fd-803605ef0603">
                <input type="image" name="cherry" id="cherry" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry3.png?alt=media&token=ed6df089-9fdd-41ba-94ee-df40ef93e3c1">
            </div>
            <div id="click-img"></div>
            <div>を選択しました</div>
            <button id="js-close-btn">閉じる</button>
        </div>
        <div class="black-background" id="js-black-bg"></div>
    </div>
    <!-- セーブボタン　＆　タイトルバックボタン-->
    <button class="btn" id="save_btn">save</button>
    <button class="btn" id="back_btn" class="titleback_btn" onclick="">タイトル画面に戻る</button>

    <select id="change_seed" name="seed">
        <option value="">植物を選択</option>
        <option value="sunflower">ヒマワリ</option>
        <option value="tulips">チューリップ</option>
        <option value="cherry">サクラ</option>
        <option value="cosmos">コスモス</option>
        <option value="dandelion">タンポポ</option>
        <option value="palm">ヤシ</option>
        <option value="bamboo">竹</option>
    </select>

    <button class="btn" id="change_btn">植物を変更</button>

    <!--ページタイトル-->
    <div style="text-align: center">
        <h2><img src = "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/logo.png?alt=media&token=8314ea55-7225-4134-89e4-6d1b0626b0d2" width="264" height="48"></h2>
        
        <!-- 画面左側 -->
        <button id="btn">植物と話す</button>


        <h5>あなたの発言</h5>
        <div id="voice_recognition"></div>

        <h5>感情分析結果</h5>
        <div id="showson"></div>

        <h5>感情レベル</h5>
        <div id="senti_level"></div>

        <!-- 画面右側 -->
        <!--植物の画像-->
        <img id="plant_pic"
            src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f"
            width="250" height="250">

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
    <audio
        src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bgm_nomal.mp3?alt=media&token=39bda9bc-de03-45c9-b85c-a61d62918570"
        type="audio/mpeg" loop autoplay preload="auto">
        <p>お使いの環境では再生できません。</p>
    </audio>
    <button id="btn_play">再生</button>
    <button id="btn_pause">一時停止</button>
    <button id="btn_mute">消音</button>
    <input  id="btn_mute_img" type="image" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/saisei.png?alt=media&token=84e291fa-f530-41e9-b699-de29a53c34e7">
    <!--音量調整　マージの時にコメント削除-->
    <input type="range" id="volume" value="0.05" min="0.0" max="0.5" step="0.01">

    <!-- SE -->
    <audio id="grow_se"
        src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/grow_se.mp3?alt=media&token=52e9d0f4-385d-47bc-adcd-cce666960928"
        type="audio/mpeg" preload="auto"></audio>

    <!--JavaScriptsの読み込み-->
    <script src="./../static/js/breed_plant.js"></script>

</body>

<script type="text/javascript" src="./../static/js/page0.js"></script>
<script type="text/javascript" src="./../static/js/micromodal.js"></script>
</html>