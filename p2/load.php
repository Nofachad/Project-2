<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="loadstyle.css">
    <title>Document</title>
</head>
<body>

 

    <?php

require_once "config.php";
        
        $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
        
        if (!isset($_SESSION["sessionID"])) {
            if(htmlspecialchars($_POST['password']) == "McNugget" && htmlspecialchars($_POST["username"]) == "admin"){//admin
                $sth = $dbh->prepare("SELECT * FROM user");
                $sth->execute();
                $user = $sth->fetchAll();
                echo"
                        <table>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>";
                            foreach($user as $data){
                             echo "<tr><td>".$data['id']."</td>
                                <td>".$data['email']."</td>
                                <td>".$data['username']."</td>
                                <td>".$data['password']."</td></tr><br>";
                                
                            }
                        echo"</table>
                    ";
                echo "<br>";
                echo "<form action='insert.php' method='post'>";
                echo "<textarea id='Email' name='Email' rows='4' cols='50'>Email</textarea>";
                echo "<textarea id='Username' name='Username' rows='4' cols='50'>Username</textarea>";
                echo "<input type='password' id='UpdatePassword' name='UpdatePassword'>";
                echo "<input type='submit' value='insert'>";
                echo "</form>";
                echo "<form action='delete.php' method = 'post'>";
                echo "<label for='delete'>Choose the index to delete:</label>";
                echo "<select name='delete' id='delete'>";
                
                foreach ($user as $data) {
                echo "<option value=\"{$data['id']}\">".$data['id']."</option>";
                }
                echo "<input type='submit' value='delete'>";
                echo "</form>";
                echo "<form action='update.php' method = 'post'>";
                echo "<label for='update'>Choose the index to update:</label>";
                echo "<select name='update' id='update'>";
                
                foreach ($user as $data) {
                echo "<option value==\"{$data['id']}\">".$data['id']."</option>";
                }
                echo "<textarea id='UpdateEmail' name='UpdateEmail' rows='4' cols='50'>Email</textarea>";
                echo "<textarea id='UpdateUsername' name='UpdateUsername' rows='4' cols='50'>Username</textarea>";
                echo "<input type='password' id='UpdatePassword' name='UpdatePassword'>";
                echo "<input type='submit' value='update'>";
                echo "</form>";
                
                    die();
            }//end of admin
            $username = htmlspecialchars($_POST["username"]);
            $sth = $dbh->prepare("SELECT password, id FROM user WHERE username = :JID");
            $sth->bindValue(':JID', $username);
            $sth->execute();
            $data = $sth->fetch();
            $password_hash = $data['password'];
                if (password_verify(htmlspecialchars($_POST['password']), $password_hash)) {
                    if(isset($_POST['username'])){
                        $sessionID = $data['id'];
                        $_SESSION["sessionID"] = $sessionID;
                    }  
                    else{
                        header("Location: https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php");
                    }
                }
                else{
                    header("Location: https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php");
                }
        }//password validation

        

        $sth = $dbh->prepare("SELECT * FROM user WHERE id = :JID");
        $sth->bindValue(':JID', $_SESSION["sessionID"]);
        $sth->execute();
        $playerName = $sth->fetch();
        echo"<p>hello " . $playerName['username'] . "!</p>"; //announce player name

        
        echo "<form action=\"newsave.php\" method=\"post\">
            <label for=\"newsave\">New Save</label>";
        echo"<input type=\"submit\" class = \"subutton\" value = \"New Save\">
        </form>"; //Create New Save


        $sth = $dbh->prepare("SELECT * FROM unlocked");
        $sth->execute();
        $un = $sth->fetchAll();
        // var_dump($un);

        // echo "<br>";
        $sth = $dbh->prepare("SELECT saves.id, unlocked.level_unlocked FROM saves JOIN unlocked ON saves.id = unlocked.save_id WHERE user_id = :id");
        $sth->bindValue(':id', $_SESSION["sessionID"]);
        $sth->execute();
        $saves = $sth->fetchAll();
        // var_dump($saves);

        echo "<br>";
        $sth = $dbh->prepare("SELECT * FROM unlocked");
        $sth->execute();
        $objs = $sth->fetchAll();
        // var_dump($objs);

            echo "<form action=\"lvl1/lvl1.php\" method=\"post\">
            <label for=\"menu\">Select Save</label>
            <select name=\"menu\" id=\"menu\">";
            foreach($saves as $save){
                $unlocked = $save['level_unlocked'];
                
                echo"<option value=\"{$save['id']}\">This save has level $unlocked unlocked</option>";
            }
        echo"<label for=\"select\">Select</label>
        <input type=\"submit\" class = \"subutton\">
        </form>"; //Select Save


        echo "<a href=\"https://atdpsites.berkeley.edu/rsun/AIC/p2/signout.php\">Sign Out</a><br>";
       
    ?>

</body>
</html>