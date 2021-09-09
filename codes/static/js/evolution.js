/* 画像の進化アニメーション（点滅）を動かす */
// 進化前→進化後→進化前と累計5回画像を切り替える
function plant_evolution(img, evo_num) {
    flash_img = new Array(img[evo_num -1],img[evo_num]);
    count = -1;
    allCount = 0;
    imgTimer();
}

/* 画像を切り替える関数 */
function imgTimer() {
    //画像番号
    count++; //*3
    allCount++;
    //画像の枚数確認
    if (count == flash_img.length) count = 0; 
    //画像出力
    plant_pic.src = flash_img[count];
    //次のタイマー呼びだし
    if (allCount <= 5) {
        setTimeout("imgTimer()", 200);
    }
}