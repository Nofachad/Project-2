<!DOCTYPE html>
<html>
<body>
<?php
require 'config.php';
date_default_timezone_set('America/Los_Angeles');

try {
    require_once "config.php";
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    
    $sth = $dbh->prepare("SELECT username FROM user");
    $sth->execute();
    $check1 = $sth->fetchAll();
    $checker = False;
    foreach($check1 as $check){
        if($check['username'] == $username){
            $checker = True;
        }
    }
    if(isset($htmlspecialchars($_POST['Email'])) && isset($htmlspecialchars($_POST['Username'])) && isset(htmlspecialchars($_POST['UpdatePassword']))){
        if($checker == False){
            if(!($username == 'Username') || !($password == 'Password')){
                if(strlen($email) < 255 && strlen($username) < 20 && strlen($password) < 64){
                    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                        $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
                        $sth = $dbh->prepare("INSERT INTO user (`email`, `username`, `password`) VALUES (:email, :username, :password)");
                        $sth -> bindValue(':email', htmlspecialchars($_POST['Email']));
                        $sth -> bindValue(':username', htmlspecialchars($_POST['Username']));
                        $sth -> bindValue(':password', password_hash(htmlspecialchars($_POST['UpdatePassword']), PASSWORD_DEFAULT));
                        $sth->execute();
                        
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
    }
    else{
        echo "Please fill out all fields";
    }
}
catch (PDOException $e) {
    echo "<p>Error connecting to database!</p>";
    echo "<p>" . $e->getMessage() . "</p>";
}
echo "<a href='https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php'>Sign in page</a>";
?>

</body>
</html>
