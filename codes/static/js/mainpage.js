/* ゲストで遊ぶ */
const start = document.getElementById('start_btn');
start.addEventListener('click', function () {

    var move_url = ""
    move_url += window.location.protocol
    move_url += "//"
    move_url += window.location.hostname
    move_url += ":"
    move_url += window.location.port
    move_url += "/page0"
    console.log(move_url)
    window.location.href = move_url; // 通常の遷移
});

/* ログイン画面に移動 */
const member = document.getElementById('member_btn');
member.addEventListener('click', function () {
    var move_url = ""
    move_url += window.location.protocol
    move_url += "//"
    move_url += window.location.hostname
    move_url += ":"
    move_url += window.location.port
    move_url += "/login"
    console.log(move_url)
    window.location.href = move_url; // 通常の遷移
});

/* ログアウトする */
const logout = document.getElementById('logout_btn');
logout.addEventListener('click', function () {
    var move_url = ""
    move_url += window.location.protocol
    move_url += "//"
    move_url += window.location.hostname
    move_url += ":"
    move_url += window.location.port
    move_url += "/logout"
    console.log(move_url)
    window.location.href = move_url; // 通常の遷移
});