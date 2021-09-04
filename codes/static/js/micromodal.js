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
const sunflower_img = document.getElementById('sunflower');
sunflower_img.addEventListener('click', function() {
    seed_name = "sunflower";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA.png?alt=media&token=71f54a3b-5f37-481a-8086-abc7be1d6073", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA2.png?alt=media&token=7b96a6f2-9c13-4d91-88f3-cadc2948e4e5", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998"];
    console.log("pick sucflower");
    document.getElementById('click-img').textContent = "ひまわり";
    changePlantImg(seed_name);
})
const tulips_img = document.getElementById('tulips');
tulips_img.addEventListener('click', function() {
    seed_name = "tulips";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%972.png?alt=media&token=025ca678-3b54-49bc-8336-9d3b6fda7fa3","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%973.png?alt=media&token=48b6bbeb-7b1b-4dad-a1de-60600903447b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/turips.gif?alt=media&token=b7740863-979f-4085-b3a5-ca34e98eff01"];
    console.log("pick tulips");
    document.getElementById('click-img').textContent = "チューリップ";
    changePlantImg(seed_name);
})
const cherry_img = document.getElementById('cherry');
cherry_img.addEventListener('click', function() {
    seed_name = "cherry";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry1.png?alt=media&token=674824d4-d18d-46cf-ab68-6bee32d69e43","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry2.png?alt=media&token=543b9b77-4c7f-4a20-a46e-f19d11b47952","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry3.png?alt=media&token=ed6df089-9fdd-41ba-94ee-df40ef93e3c1"];
    console.log("pick cherry");
    document.getElementById('click-img').textContent = "サクラ";
    changePlantImg(seed_name);
})
const cosmos_img = document.getElementById('cosmos');
cosmos_img.addEventListener('click', function() {
    seed_name = "cosmos";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos1.png?alt=media&token=dbf4e15b-bab5-4411-9da6-1d81f9b6337f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos2.png?alt=media&token=51423780-3eda-4bf0-a267-9d7eb97eb3ba","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3.png?alt=media&token=0ca30a09-fcb0-42bd-a1ad-d51e48b3aaf5"];
    console.log("pick cosmos");
    document.getElementById('click-img').textContent = "コスモス";
    changePlantImg(seed_name);
})
const dandelion_img = document.getElementById('dandelion');
dandelion_img.addEventListener('click', function() {
    seed_name = "dandelion";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions1.png?alt=media&token=00a41927-b769-42e3-b044-119d64d158d8", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions2.png?alt=media&token=4bf36afd-a321-4b3f-9c34-42520a8b8c24", "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions3.png?alt=media&token=3de2fbc9-3f3a-40c3-9e7f-fee6daeafa30"];
    console.log("pick cosmos");
    document.getElementById('click-img').textContent = "タンポポ";
    changePlantImg(seed_name);
})
const palm_img = document.getElementById('palm');
palm_img.addEventListener('click', function() {
    seed_name = "palm";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm1.png?alt=media&token=04a6e02a-0f40-453f-8501-13a14bf472b8","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm2.png?alt=media&token=9ef2ed48-0d45-4da9-816b-9cee1a64f26c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm3.png?alt=media&token=4c5b190a-7d6f-47bb-ab21-72d619c1ba18"];
    console.log("pick palm");
    document.getElementById('click-img').textContent = "ヤシ";
    changePlantImg(seed_name);
})
const bamboo_img = document.getElementById('bamboo');
bamboo_img.addEventListener('click', function() {
    seed_name = "bamboo";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tree.png?alt=media&token=c0efacb6-ecc9-4e22-8754-b1768dc0f11c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo1.png?alt=media&token=4f926bc9-b3ca-4f5d-87d3-5b54825bd34c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo2.png?alt=media&token=8c54bd1f-1676-43de-8e33-50852b1c368b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo3.png?alt=media&token=09ae3559-8c57-46ea-9599-00a4cf3c490b"];
    console.log("pick bamboo");
    document.getElementById('click-img').textContent = "竹";
    changePlantImg(seed_name);
})
const cactus_img = document.getElementById('cactus');
cactus_img.addEventListener('click', function() {
    seed_name = "cactus";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus1.png?alt=media&token=ec0e8d0d-6be2-4c6b-bc22-f9133e3f5ed4","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus2.png?alt=media&token=c2ee966f-0870-4f88-bd2b-553465a74564","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus3.png?alt=media&token=9a5d26d9-b4c2-4057-8a2c-a3f1756df090"]
    console.log("pick cactus");
    document.getElementById('click-img').textContent = "サボテン";
    changePlantImg(seed_name);
})
const flytrap_img = document.getElementById('flytrap');
flytrap_img.addEventListener('click', function() {
    seed_name = "flytrap";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap1.png?alt=media&token=0ae9a40f-e8bb-4c9c-a564-13f927c52886","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap2.png?alt=media&token=320376cd-62dd-49f1-a345-94554c6931f6","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap3.png?alt=media&token=ffd92ad9-ec22-44e6-b9e2-7f6ebe15e50b"]
    console.log("pick flytrap");
    document.getElementById('click-img').textContent = "ハエトリグサ";
    changePlantImg(seed_name);
})
const roselle_img = document.getElementById('roselle');
roselle_img.addEventListener('click', function() {
    seed_name = "roselle";
    img = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle1.png?alt=media&token=43c24c91-fc7f-4b75-a73a-3b981acb9f7c","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle2.png?alt=media&token=64795f6f-d62a-4e6e-8ddf-145e08f19267","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle3.png?alt=media&token=03a04642-361b-43cd-a4fa-8f294e9a9c80"]
    console.log("pick roselle");
    document.getElementById('click-img').textContent = "ローゼル";
    changePlantImg(seed_name);
})

const picbook_btn = document.getElementById("open-picbook");
var picbook = document.getElementById('pic-book');
picbook_btn.addEventListener('click', function() {
    picbook.classList.add('is-show');

})


var blackBg = document.getElementById('js-black-bg-picbook');
blackBg.addEventListener('click', function() {
    picbook.classList.remove('is-show');
}) 
var picbook_close_btn = document.getElementById('js-close-picbook');
picbook_close_btn.addEventListener('click', function() {
    picbook.classList.remove('is-show');
})

var pre_btn = document.getElementById('pre-btn');
pre_btn.addEventListener('click', function(){
    slide_img(-1);
})
var nxt_btn = document.getElementById('nxt-btn');
nxt_btn.addEventListener('click', function(){
    slide_img(1);
})
const pict_book_img_src = ["https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA3.png?alt=media&token=97fd9d06-ae82-4bc8-b0c4-681d1d8c3998","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%974.png?alt=media&token=cd7c8148-b2c0-4489-b6fd-803605ef0603","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cherry3.png?alt=media&token=ed6df089-9fdd-41ba-94ee-df40ef93e3c1","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3.png?alt=media&token=0ca30a09-fcb0-42bd-a1ad-d51e48b3aaf5","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/dandelions3.png?alt=media&token=3de2fbc9-3f3a-40c3-9e7f-fee6daeafa30","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/palm3.png?alt=media&token=8243efc3-32f6-478e-9002-8d0179fc9242","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/bamboo3.png?alt=media&token=09ae3559-8c57-46ea-9599-00a4cf3c490b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cactus3.png?alt=media&token=9a5d26d9-b4c2-4057-8a2c-a3f1756df090","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap3.png?alt=media&token=ffd92ad9-ec22-44e6-b9e2-7f6ebe15e50b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle3.png?alt=media&token=03a04642-361b-43cd-a4fa-8f294e9a9c80","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/flytrap3.png?alt=media&token=ffd92ad9-ec22-44e6-b9e2-7f6ebe15e50b","https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/roselle3.png?alt=media&token=03a04642-361b-43cd-a4fa-8f294e9a9c80"];
const not_bloom_src = "https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/%E3%83%92%E3%83%9E%E3%83%AF%E3%83%AA_%E7%A8%AE.png?alt=media&token=c0243462-1efb-4a1f-a2ba-453afc8f7c7f";
let index = 0;
const plant_name = ["sunflower", "tulips", "cherry", "cosmos", "dandelion", "palm", "bamboo", "flytrap", "roselle"]
function slide_img(slides) {
    if (index == pict_book_img_src.length - 1 && slides == 1){
        index = 0;
    }
    else if(index == 0 && slides == -1){
        index = pict_book_img_src.length - 1;
    }
    else {
        index = index + slides;
    }
    if (pictbook_f[plant_name[index]]) {
        document.getElementById("pict-book-img").src = pict_book_img_src[index];
    }
    else {
        document.getElementById("pict-book-img").src = not_bloom_src
    }
}
picbook_btn.addEventListener('click', function(){
    if (pictbook_f["sunflower"]) {
        document.getElementById("pict-book-img").src = pict_book_img_src[0];
    }
})