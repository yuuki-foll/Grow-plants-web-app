let senti_level = 1; // 感情指数(レベルとして1スタートに変更)
let voice_recognition = "  　  "; // 発言（はじめは空白を指定）
let showson = "  　  "; // ネガポジ分析結果（はじめは空白を指定）
let plant_life = 50; // 植物の体力
var cookies = document.cookie;
var back_flag = new Boolean(false);
back_flag = false;
console.log(cookies);
var cookiesArray = cookies.split(';');
var savedata = "";
var seed_name = "None";
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
        plant_life = alterLife(0)
        back_flag = true
    }
    else if (sArray[0] == "\"plant\"") {
        seed_name = sArray[1].slice(1,-1)
        // console.log(seed_name)
    }
}
// let senti_level = 1; // 感情指数(レベルとして1スタートに変更)
document.getElementById("senti_level").innerHTML = senti_level
document.getElementById("voice_recognition").innerHTML = voice_recognition
document.getElementById("showson").innerHTML = showson

// 画像一覧のURLをリストで格納
var img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA.png?alt=media&token=71f54a3b-5f37-481a-8086-abc7be1d6073", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA2.png?alt=media&token=7b96a6f2-9c13-4d91-88f3-cadc2948e4e5", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998"]
var com_img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/grave.png?alt=media&token=e882ec80-5d7e-4cb2-98c9-aa2ea3dbbb24"]
var vlm_img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/saisei.png?alt=media&token=84e291fa-f530-41e9-b699-de29a53c34e7", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/teisi.png?alt=media&token=3c3af8d8-eecd-4708-bf3e-3bf1a98d4c84"]
let vlm_img_index = 0;
if (seed_name == "sunflower") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA.png?alt=media&token=71f54a3b-5f37-481a-8086-abc7be1d6073", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA2.png?alt=media&token=7b96a6f2-9c13-4d91-88f3-cadc2948e4e5", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998"]
}else if (seed_name == "tulips") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%972.png?alt=media&token=025ca678-3b54-49bc-8336-9d3b6fda7fa3","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%973.png?alt=media&token=48b6bbeb-7b1b-4dad-a1de-60600903447b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/turips.gif?alt=media&token=b7740863-979f-4085-b3a5-ca34e98eff01"]
}else if (seed_name == "cherry") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry1.png?alt=media&token=674824d4-d18d-46cf-ab68-6bee32d69e43","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry2.png?alt=media&token=543b9b77-4c7f-4a20-a46e-f19d11b47952","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry3.png?alt=media&token=ed6df089-9fdd-41ba-94ee-df40ef93e3c1"]
}else if (seed_name == "cosmos") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos1.png?alt=media&token=dbf4e15b-bab5-4411-9da6-1d81f9b6337f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos2.png?alt=media&token=51423780-3eda-4bf0-a267-9d7eb97eb3ba","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3.png?alt=media&token=0ca30a09-fcb0-42bd-a1ad-d51e48b3aaf5"]
}else if (seed_name == "dandelion") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions1.png?alt=media&token=00a41927-b769-42e3-b044-119d64d158d8", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions2.png?alt=media&token=4bf36afd-a321-4b3f-9c34-42520a8b8c24", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions3.png?alt=media&token=3de2fbc9-3f3a-40c3-9e7f-fee6daeafa30"]
}else if (seed_name == "palm") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm1.png?alt=media&token=04a6e02a-0f40-453f-8501-13a14bf472b8","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm2.png?alt=media&token=9ef2ed48-0d45-4da9-816b-9cee1a64f26c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm3.png?alt=media&token=8243efc3-32f6-478e-9002-8d0179fc9242"]
}else if (seed_name == "bamboo") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo1.png?alt=media&token=4f926bc9-b3ca-4f5d-87d3-5b54825bd34c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo2.png?alt=media&token=8c54bd1f-1676-43de-8e33-50852b1c368b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo3.png?alt=media&token=09ae3559-8c57-46ea-9599-00a4cf3c490b"]
}else if (seed_name == "cactus") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus1.png?alt=media&token=ec0e8d0d-6be2-4c6b-bc22-f9133e3f5ed4","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus2.png?alt=media&token=c2ee966f-0870-4f88-bd2b-553465a74564","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus3.png?alt=media&token=9a5d26d9-b4c2-4057-8a2c-a3f1756df090"]
}else if (seed_name == "flytrap") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap1.png?alt=media&token=0ae9a40f-e8bb-4c9c-a564-13f927c52886","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap2.png?alt=media&token=320376cd-62dd-49f1-a345-94554c6931f6","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap3.png?alt=media&token=ffd92ad9-ec22-44e6-b9e2-7f6ebe15e50b"]
}else if (seed_name == "roselle") {
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle1.png?alt=media&token=43c24c91-fc7f-4b75-a73a-3b981acb9f7c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle2.png?alt=media&token=64795f6f-d62a-4e6e-8ddf-145e08f19267","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle3.png?alt=media&token=03a04642-361b-43cd-a4fa-8f294e9a9c80"]
}

plant_pic.src = changeImage(senti_level)
window.addEventListener('DOMContentLoaded', function () {
    const btn_play = document.getElementById("btn_play");
    const btn_pause = document.getElementById("btn_pause");
    const btn_mute = document.getElementById("btn_mute");
    const slider_volume = document.getElementById("volume");
    const audioElement = document.querySelector("audio");
    const btn_mute_img = document.getElementById("btn_mute_img");
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
    btn_mute_img.addEventListener("click", e => {
        if (audioElement.muted) {
            audioElement.muted = false;
        } else {
            audioElement.muted = true;
        }

        if (vlm_img_index == 0) {
            btn_mute_img.src = vlm_img[1];
            vlm_img_index = 1;
        } else {
            btn_mute_img.src = vlm_img[0];
            vlm_img_index = 0;
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
            Username: "name",
            plant: seed_name,
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
    const seed = document.getElementById("change_seed").value;
    console.log(seed);
    plant_life = alterLife(50 - life) // 体力を50に戻す
    senti_level = 1;
    document.getElementById("senti_level").innerHTML = senti_level
    if (seed == "sunflower"){
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA.png?alt=media&token=71f54a3b-5f37-481a-8086-abc7be1d6073", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA2.png?alt=media&token=7b96a6f2-9c13-4d91-88f3-cadc2948e4e5", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998"]
    }else if (seed == "tulips"){
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%972.png?alt=media&token=025ca678-3b54-49bc-8336-9d3b6fda7fa3","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%973.png?alt=media&token=48b6bbeb-7b1b-4dad-a1de-60600903447b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/turips.gif?alt=media&token=b7740863-979f-4085-b3a5-ca34e98eff01"]
    }else if (seed == "cherry") {
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry1.png?alt=media&token=674824d4-d18d-46cf-ab68-6bee32d69e43","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry2.png?alt=media&token=543b9b77-4c7f-4a20-a46e-f19d11b47952","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry3.png?alt=media&token=ed6df089-9fdd-41ba-94ee-df40ef93e3c1"]
    }else if (seed == "cosmos") {
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos1.png?alt=media&token=dbf4e15b-bab5-4411-9da6-1d81f9b6337f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos2.png?alt=media&token=51423780-3eda-4bf0-a267-9d7eb97eb3ba","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3.png?alt=media&token=0ca30a09-fcb0-42bd-a1ad-d51e48b3aaf5"]
    }else if (seed == "dandelion") {
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions1.png?alt=media&token=00a41927-b769-42e3-b044-119d64d158d8", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions2.png?alt=media&token=4bf36afd-a321-4b3f-9c34-42520a8b8c24", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions3.png?alt=media&token=3de2fbc9-3f3a-40c3-9e7f-fee6daeafa30"]
    }else if (seed == "palm") {
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm1.png?alt=media&token=04a6e02a-0f40-453f-8501-13a14bf472b8","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm2.png?alt=media&token=9ef2ed48-0d45-4da9-816b-9cee1a64f26c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm3.png?alt=media&token=8243efc3-32f6-478e-9002-8d0179fc9242"]
    }else if (seed == "bamboo") {
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo1.png?alt=media&token=4f926bc9-b3ca-4f5d-87d3-5b54825bd34c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo2.png?alt=media&token=8c54bd1f-1676-43de-8e33-50852b1c368b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo3.png?alt=media&token=09ae3559-8c57-46ea-9599-00a4cf3c490b"]
    }else if (seed == "cactus") {
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus1.png?alt=media&token=ec0e8d0d-6be2-4c6b-bc22-f9133e3f5ed4","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus2.png?alt=media&token=c2ee966f-0870-4f88-bd2b-553465a74564","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus3.png?alt=media&token=9a5d26d9-b4c2-4057-8a2c-a3f1756df090"]
    }else if (seed == "flytrap") {
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap1.png?alt=media&token=0ae9a40f-e8bb-4c9c-a564-13f927c52886","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap2.png?alt=media&token=320376cd-62dd-49f1-a345-94554c6931f6","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap3.png?alt=media&token=ffd92ad9-ec22-44e6-b9e2-7f6ebe15e50b"]
    }else if (seed == "roselle") {
        img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle1.png?alt=media&token=43c24c91-fc7f-4b75-a73a-3b981acb9f7c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle2.png?alt=media&token=64795f6f-d62a-4e6e-8ddf-145e08f19267","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle3.png?alt=media&token=03a04642-361b-43cd-a4fa-8f294e9a9c80"]
    }
    plant_pic.src = changeImage(senti_level);
    seed_name = seed;
    changePlantImg(seed_name);
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
    if (life > 0) {
        recognition.start();
    } else {
        /* ニューゲームを押したら初期化処理を行う */
        plant_life = alterLife(50 - life) // 体力を50に戻す
        senti_level = 1;
        document.getElementById("senti_level").innerHTML = senti_level
        plant_pic.src = changeImage(senti_level);
        document.getElementById("btn").innerHTML = "植物と話す";
    }
    
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
                plant_life = alterLife(-100)
            } else if (JSON.parse(jsonData.values).neg < JSON.parse(jsonData.values).pos) {
                senti_level++;
                plant_life = alterLife(+10)
                document.getElementById("grow_se").volume = 0.05; // 成長時の効果音の音量調整
                document.getElementById("grow_se").play(); // 成長時効果音を鳴らす
            }
            document.getElementById("senti_level").innerHTML = senti_level
            console.log(Object.keys(jsonData))

            plant_pic.src = changeImage(senti_level);

            // 体力が0以下なら墓を表示してニューゲームボタンに切り替え
            if (plant_life <= 0) {
                plant_pic.src = com_img[0];
                document.getElementById("btn").innerHTML = "ニューゲーム";
            }
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