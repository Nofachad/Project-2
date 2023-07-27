<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    require_once "config.php";
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    $sth = $dbh->prepare("SELECT * FROM user");
    $sth->execute();
    $player1 = $sth->fetchAll();
        echo "<form action=\"signupongoing.php\" method=\"post\">
            <input type=\"email\" name=\"email\" value=\"Email\" required>
            <input type=\"text\" name=\"username\" value=\"Username\" required>
            <input type=\"text\" name=\"password\" value=\"Password\" required>
            <input type=\"submit\" id = \"subutton\"></form>

            <form action=\"signin.php\">
            <button type=\"submit\">Return To Sign In Page</button>
            </form>";
        ?>
</body>
</html>
