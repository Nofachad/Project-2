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

        echo "<form action=\"load.php\" method=\"post\">";
            echo"<input type=\"text\" name=\"username\" value=\"Username\">";
            echo"<input type=\"text\" name=\"password\" value=\"Password\">";
        echo" <input type=\"submit\" id = \"subutton\"></form>";
        echo"<form action=\"signup.php\">
            <button type=\"submit\">Sign Up</button>
            </form>";
        ?>
</body>
</html>
