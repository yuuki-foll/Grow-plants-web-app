<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>植物を育てよう</title>
    <link
    rel="stylesheet"
    href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"
    />
</head>
<style>
    img {
      width: 50px;
    }
    input {
      margin: 10px;
    }
    .container {
      margin: 10px;
    }
  </style>
<body>
    <h1>植物を育てよう</h1>
    <button class="btn btn-primary" onclick="location.href='http://127.0.0.1:8999/page0'">スタート</button>
    <button class="btn btn-primary" onclick="location.href='http://127.0.0.1:8999/login'">ログイン</button>
    <script src="https://unpkg.com/vue@next"></script>
    
    <div class="container panel panel-success">
        <div class="panel-heading">あなたの情報 : ログインされていません</div>
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
    <div class="border-promary">
        <form action="/logout" type="poth">
          <input type="submit" value="ログアウト" class="btn btn-primary" />
        </form>
      </div>
</body>
<script>

</script>
</html>