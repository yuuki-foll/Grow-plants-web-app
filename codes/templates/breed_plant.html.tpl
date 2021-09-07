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
                <input type="image" name="cosmos" id="cosmos" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3.png?alt=media&token=0ca30a09-fcb0-42bd-a1ad-d51e48b3aaf5">
                <input type="image" name="dandelion" id="dandelion" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions3.png?alt=media&token=3de2fbc9-3f3a-40c3-9e7f-fee6daeafa30">
                <input type="image" name="palm" id="palm" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm3.png?alt=media&token=8243efc3-32f6-478e-9002-8d0179fc9242">
                <input type="image" name="bamboo" id="bamboo" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo3.png?alt=media&token=09ae3559-8c57-46ea-9599-00a4cf3c490b">
                <input type="image" name="cactus" id="cactus" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus3.png?alt=media&token=9a5d26d9-b4c2-4057-8a2c-a3f1756df090">
                <input type="image" name="flytrap" id="flytrap" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap3.png?alt=media&token=ffd92ad9-ec22-44e6-b9e2-7f6ebe15e50b">
                <input type="image" name="roselle" id="roselle" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle3.png?alt=media&token=03a04642-361b-43cd-a4fa-8f294e9a9c80">

            </div>
            <div id="click-img"></div>
            <div>を選択しました</div>
            <button id="js-close-btn">閉じる</button>
        </div>
        <div class="black-background" id="js-black-bg"></div>
    </div>
    <!--辞書-->
    <div class="pic-book" id="pic-book">
        <div class="pic-book-inner">
            <div class="pic-book-title">植物図鑑</div>
            <div class="book-img">
                <input type="image" name="sunflower" id="pict-book-img" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f">
                <!--input type="image" name="tulips" id="tulips" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%974.png?alt=media&token=cd7c8148-b2c0-4489-b6fd-803605ef0603">
                <input type="image" name="cherry" id="cherry" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry3.png?alt=media&token=ed6df089-9fdd-41ba-94ee-df40ef93e3c1">
                <input type="image" name="cosmos" id="cosmos" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3.png?alt=media&token=0ca30a09-fcb0-42bd-a1ad-d51e48b3aaf5">
                <input type="image" name="dandelion" id="dandelion" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions3.png?alt=media&token=3de2fbc9-3f3a-40c3-9e7f-fee6daeafa30">
                <input type="image" name="palm" id="palm" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm3.png?alt=media&token=8243efc3-32f6-478e-9002-8d0179fc9242">
                <input type="image" name="bamboo" id="bamboo" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo3.png?alt=media&token=09ae3559-8c57-46ea-9599-00a4cf3c490b">
                <input type="image" name="cactus" id="cactus" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus3.png?alt=media&token=9a5d26d9-b4c2-4057-8a2c-a3f1756df090">
                <input type="image" name="flytrap" id="flytrap" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap3.png?alt=media&token=ffd92ad9-ec22-44e6-b9e2-7f6ebe15e50b">
                <input type="image" name="roselle" id="roselle" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle3.png?alt=media&token=03a04642-361b-43cd-a4fa-8f294e9a9c80"-->
            </div>
            <div class="nx-pre-btn">
                <button id="pre-btn">前へ</button>
                <button id="nxt-btn">次へ</button>
            </div>
            <button id="js-close-picbook">閉じる</button>
        </div>
        <div class="black-background-picbook" id="js-black-bg-picbook"></div>
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
        <option value="cactus">サボテン</option>
        <option value="flytrap">ハエトリグサ</option>
        <option value="roselle">ローゼル</option>
        <option value="rose">バラ</option>
    </select>

    <button class="btn" id="change_btn">植物を変更</button>

    <!--ページタイトル-->
    <div style="text-align: center">
        <div class="pbox">
            <div class="cbox boxA">
                <h2><img src = "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/logo.png?alt=media&token=8314ea55-7225-4134-89e4-6d1b0626b0d2" width="264" height="48"></h2>
                
                <!-- 画面左側 -->
                <button id="btn">植物と話す</button>


                <p>あなたの発言</p>
                <div id="voice_recognition"></div>

                <p>感情分析結果</p>
                <div id="showson"></div>

                <p>感情レベル</p>
                <div id="senti_level"></div>
            </div>
            <!-- 画面右側 -->
            <!--植物の画像-->
            <div class="cbox boxB">
                <img id="plant_pic"
                    src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f"
                    class="plant-img">

                <img id="effect_pic" src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/grow_effect.gif?alt=media&token=65deae10-7314-4735-8a08-189066dfbbb7" class="effect-img">
                <!--体力バー-->
                <p class="plant-life">植物の体力</p>
                <div id="life"></div>
                <div id="life-frame">
                    <div id="life-bar"></div>
                    <div id="life-mark"></div>
                </div>
            </div>
        </div>
    </div>

    <!--BGM関連-->
    <!--     <audio preload="auto" controls autoplay loop controlslist="nodownload">
        <source src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bgm_nomal.mp3?alt=media&token=39bda9bc-de03-45c9-b85c-a61d62918570" />
        <p>オーディオ機能未対応です</p>
    </audio> -->

    <!-- BGM変更 -->
    <audio id="game-bgm"
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
    <button id="open-picbook">図鑑を表示</button>
    <!-- SE -->
    <audio id="grow_se"
        src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/grow_se.mp3?alt=media&token=52e9d0f4-385d-47bc-adcd-cce666960928"
        type="audio/mpeg" preload="auto"></audio>

        <audio id="damage_se"
        src="https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/se_damage.mp3?alt=media&token=58ce4bda-96d1-45e2-82ef-b27a30805b6e"
        type="audio/mpeg" preload="auto"></audio>

    <!--JavaScriptsの読み込み-->
    <script src="./../static/js/breed_plant.js"></script>

</body>

<script type="text/javascript" src="./../static/js/page0.js"></script>
<script type="text/javascript" src="./../static/js/micromodal.js"></script>
<script type="text/javascript" src="./../static/js/choice_color.js"></script>
</html>