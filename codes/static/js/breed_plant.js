/* JavaScriptファイルなどの変更を反映させるためには
Chrome > Developer > Network > Disable cache
にチェックを入れる  */

const lifeBar = document.getElementById('life-bar')         // ライフバー
const lifeMark = document.getElementById('life-mark')       // ライフの光部分
let life = 50                                              // ライフ初期値
lifeBar.style.width = "50%"                            // ライフ初期幅
let red = 255                        // 初期赤値
let green = 255                      //初期緑値
lifeBar.style.backgroundColor = "rgb(255, 255, 0)"  // 初期ライフの色　

// const PlantName = document.getElementById("change_seed").value; //植物の名前
const Bgm = document.getElementById("game-bgm")

const PlantImg = document.getElementById('plant_pic')
PlantImg.style.top = "calc(60% + (25vh - min(25vh,25vw)))"
PlantImg.style.left = "calc(50% - (min(25vh,25vw)/2)"
PlantImg.style.width = "min(25vh,25vw)"
PlantImg.style.height = "min(25vh,25vw)"

const EffectImg = document.getElementById('effect_pic')
EffectImg.style.top = "calc(60% + (25vh - min(25vh,25vw)))"
EffectImg.style.left = "calc(50% - (min(25vh,25vw)/2)"
EffectImg.style.width = "min(25vh,25vw)"
EffectImg.style.height = "min(25vh,25vw)"

/* 感情分析結果のハート関連 */
const HeartBack = document.getElementById('heart_color')
HeartBack.style.height = "0px"
HeartBack.style.background = "rgb(255, 0, 0)"
function changeHeartColor(senti_neg, senti_pos) {
    console.log(senti_pos);
    if (senti_neg > senti_pos) {
        HeartBack.style.background = "rgb(0, 0, 255)"
        var heart_height = 100 * senti_neg
        HeartBack.style.height = heart_height + "px"
    } else {
        HeartBack.style.background = "rgb(255, 0, 0)"
        var heart_height = 100 * senti_pos
        HeartBack.style.height = heart_height + "px"
    }
}

function changePlantImg(name) {
    if (name == "cherry" || name == "palm" || name == "bamboo") {
        document.getElementById('plant_pic').setAttribute('src', "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c");
        PlantImg.style.top = "calc(5% + (70vh - min(70vh,70vw)))"
        PlantImg.style.left = "calc(50% - (min(70vh,70vw)/2)"
        PlantImg.style.width = "min(70vh,70vw)"
        PlantImg.style.height = "min(70vh,70vw)"
        EffectImg.style.top = "calc(5% + (70vh - min(70vh,70vw)))"
        EffectImg.style.left = "calc(50% - (min(70vh,70vw)/2)"
        EffectImg.style.width = "min(70vh,70vw)"
        EffectImg.style.height = "min(70vh,70vw)"
    } else {
        document.getElementById('plant_pic').setAttribute('src', "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f");
        PlantImg.style.top = "calc(60% + (25vh - min(25vh,25vw)))"
        PlantImg.style.left = "calc(50% - (min(25vh,25vw)/2)"
        PlantImg.style.width = "min(25vh,25vw)"
        PlantImg.style.height = "min(25vh,25vw)"
        EffectImg.style.top = "calc(60% + (25vh - min(25vh,25vw)))"
        EffectImg.style.left = "calc(50% - (min(25vh,25vw)/2)"
        EffectImg.style.width = "min(25vh,25vw)"
        EffectImg.style.height = "min(25vh,25vw)"
    }
}


const Body = document.getElementById('html_body')  
Body.style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/background.gif?alt=media&token=c44a176b-0cc8-4d77-b4ef-4ab62abc26ff)"


function changeBackground(life) {
    if (life > 0) {
        Body.style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/background.gif?alt=media&token=c44a176b-0cc8-4d77-b4ef-4ab62abc26ff)"
        
        // 一応植物が死んでいるときに植物変更するとBGMも初期化する様にしておいた
        if (Bgm.src != "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bgm_nomal.mp3?alt=media&token=39bda9bc-de03-45c9-b85c-a61d62918570") {
            Bgm.src = "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bgm_nomal.mp3?alt=media&token=39bda9bc-de03-45c9-b85c-a61d62918570";
        }
    } else {
        Body.style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/background_die2.png?alt=media&token=9be8009e-2980-433f-bfcf-9b8db088372f)"
        Bgm.src = "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bgm_death.mp3?alt=media&token=e9b0176f-1533-4a39-a7a2-59bef088bee7"
    }
}

// *** ライフ変更処理 ***
function alterLife( value ){
    // lifeの値を算出する
    life += value

    // 色の変化
    if (value < 0) {
        if (red < 255) {
            red += 51
        } else {
            green -= 51
        }
    } else {
        if (green < 255) {
            green += 51
        } else {
            red -= 51
        }
    }

    if (life == 50) {
        red = 255;
        green = 255;
    }

    if (life <= 0) {
        // 算出の結果 0 以下になった場合
        life = 0
        // 0.3秒後に光部分を非表示にする
        setTimeout(function(){
            lifeMark.style.visibility = 'hidden'
        }, 300)
    } else {
        // 算出の結果 100 を超過した場合
        if ( life > 100 ) {
            life = 100
        }
        // 光部分を表示する
        lifeMark.style.visibility = 'visible'
    }
    document.getElementById('life').innerHTML = life;

    // 体力によって背景を変更する
    changeBackground(life)
    
    // 色の変化を適用
    lifeBar.style.backgroundColor = "rgb(" + red + "," + green + ",0)"
    // スタイル(幅)を更新する
    lifeBar.style.width = life + "%"

    return life
}