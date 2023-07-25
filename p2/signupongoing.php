<!-- ADD PASSWORD -->

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

    $email = htmlspecialchars($_POST['email']);
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    $sth = $dbh->prepare("SELECT username FROM user");
    $sth->execute();
    $check1 = $sth->fetchAll();
    $checker = False;

    foreach($check1 as $check){
        if($check['username'] == $username){
            $checker = True;
        }
    }
    if($checker == False){
        if(!($username == 'Username') || !($password == 'Password')){
            if(strlen($email) < 255 && strlen($username) < 20 && strlen($password) < 64){
                if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                    $sth = $dbh->prepare("INSERT INTO user (`email`, `username`, `password`) VALUES (:em, :us, :pa)");
                    $sth->bindValue(':em', $email);
                    $sth->bindValue(':us', $username);
                    $sth->bindValue(':pa', $password);
                    $sth->execute();
                    header("Location: https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php");
                }
                else{
                    echo "Invalid email adress, Please use valid email adress";
                }
            }
            else{
                echo "Please enter valid Email, Username, and Password length. Length should be 255, 20, and 64 at most";
            }
        }
        else{
            echo "Please customize Username and Password";
        }
    }
    else{
        echo "Username already exists";
    }

    echo"<form action=\"signup.php\">
        <button type=\"submit\">Return To Sign Up Page</button>
        </form>";

    // $sth = $dbh->prepare("SELECT * FROM user");
    // $sth->execute();
    // $player1 = $sth->fetchAll();
    //     echo "<form action=\"signupongoing.php\" method=\"post\">
    //         <input type=\"email\" name=\"email\" value=\"Email\">
    //         <input type=\"text\" name=\"username\" value=\"Username\">
    //         <input type=\"text\" name=\"password\" value=\"Password\">
    //         <input type=\"submit\" id = \"subutton\"></form>

    //         <form action=\"signin.php\">
    //         <button type=\"submit\">Return To Sign In Page</button>
    //         </form>";


 
        ?>
</body>
</html>
