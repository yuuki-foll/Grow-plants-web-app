<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>植物を育てよう</title>
    <!--link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" 
    crossorigin="anonymous"-->
    <!--google fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./../static/css/home.css">
</head>

<body>
    <h1>しょくぶつをそだてよう</h1>
    <button class="btn-hov" id = "start_btn"  >ゲストモード</button>
    <button class="btn-hov " id = "member_btn" >ログイン</button>
    <script src="https://unpkg.com/vue@next"></script>
    
    <div class="container panel panel-success">
        <div class="alert alert-primary">あなたのじょうたい : ログインされていません</div>
        <!--div class="panel-body">
          <table class="table">
            <thead>
              <tr>
                <th>アイコン</th>
                <th>なまえ</th>
              </tr>
            </thead>
            <tbody>
              <th>
                <img src="{{.UserData.avatar_url}}" />
              </th>
              <th>{{.UserData.name}}</th>
            </tbody>
          </table>
        </div-->
    </div>
        <!--ログインしてない前提なのでログアウトボタンは削除-->
        <!--     <div class="border-promary">
                <form action="/logout" type="poth">
                <input type="submit" value="ログアウト" class="btn btn-primary" />
                </form>
            </div> -->
</body>
<script type="text/javascript" src="./../static/js/mainpage.js"></script>
</html>