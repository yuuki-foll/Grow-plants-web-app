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
    <link rel="stylesheet" href="./../static/css/home.css">
</head>

<body>
    <h1>植物を育てよう</h1>
    <button class="btn-hov" id = "start_btn" >ゲストモード</button> <br>
    <button class="btn-hov " id = "member_btn" >ログイン</button>
    <script src="https://unpkg.com/vue@next"></script>
    
    <div class="container panel panel-success">
        <div class="alert alert-primary">あなたの情報 : ログインされていません</div>
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr>
                <th>アイコン</th>
                <th>名前</th>
              </tr>
            </thead>
            <tbody>
              <th>
                <img src="{{.UserData.avatar_url}}" />
              </th>
              <th>{{.UserData.name}}</th>
            </tbody>
          </table>
        </div>
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