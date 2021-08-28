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

const Body = document.getElementById('html_body')  
Body.style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/background.png?alt=media&token=ec0a9f35-9252-4c96-8a52-f99d0ae67b22)"


function changeBackground(life) {
    if (life > 0) {
        Body.style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/background.png?alt=media&token=ec0a9f35-9252-4c96-8a52-f99d0ae67b22)"
    } else {
        Body.style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/background_die2.png?alt=media&token=9be8009e-2980-433f-bfcf-9b8db088372f)"
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