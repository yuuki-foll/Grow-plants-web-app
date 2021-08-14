/* JavaScriptファイルなどの変更を反映させるためには
Chrome > Developer > Network > Disable cache
にチェックを入れる  */

const lifeBar = document.getElementById('life-bar')         // ライフバー
const lifeMark = document.getElementById('life-mark')       // ライフの光部分
let life = 50                                              // ライフ初期値
lifeBar.style.width = "50%"                                // ライフ初期幅

// *** ライフ変更処理 ***
function alterLife( value ){
    // lifeの値を算出する
    life += value 
    if ( life <= 0 ){
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
    // スタイル(幅)を更新する
    lifeBar.style.width = life + "%"
}