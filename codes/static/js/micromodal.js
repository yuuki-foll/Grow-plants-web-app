window.onload = function() {
    if (seed_name != "None") return;
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');

    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');

    closePopUp(blackBg);
    closePopUp(closeBtn);

    function closePopUp(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
            popup.classList.remove('is-show');
        })
    }
}
const sunflower_img = document.getElementById('sunflower')
sunflower_img.addEventListener('click', function() {
    seed_name = "sunflower"
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA.png?alt=media&token=71f54a3b-5f37-481a-8086-abc7be1d6073", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA2.png?alt=media&token=7b96a6f2-9c13-4d91-88f3-cadc2948e4e5", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998"]
    console.log("pick sucflower")
    document.getElementById('click-img').textContent = "ひまわり"
})
const tulips_img = document.getElementById('tulips')
tulips_img.addEventListener('click', function() {
    seed_name = "tulips"
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%972.png?alt=media&token=025ca678-3b54-49bc-8336-9d3b6fda7fa3","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%973.png?alt=media&token=48b6bbeb-7b1b-4dad-a1de-60600903447b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/turips.gif?alt=media&token=b7740863-979f-4085-b3a5-ca34e98eff01"]
    console.log("pick tulips")
    document.getElementById('click-img').textContent = "チューリップ"
})
const cherry_img = document.getElementById('cherry')
cherry_img.addEventListener('click', function() {
    seed_name = "cherry"
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry1.png?alt=media&token=674824d4-d18d-46cf-ab68-6bee32d69e43","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry2.png?alt=media&token=543b9b77-4c7f-4a20-a46e-f19d11b47952","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry3.png?alt=media&token=ed6df089-9fdd-41ba-94ee-df40ef93e3c1"]
    console.log("pick cherry")
    document.getElementById('click-img').textContent = "サクラ"
})
