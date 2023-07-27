<!DOCTYPE html>
<html>
<body>
<?php
require 'config.php';
session_start();
date_default_timezone_set('America/Los_Angeles');
try {
    
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    
    $sth1 = $dbh->prepare("UPDATE user SET `email` = :email WHERE `id` = :blob");
    $sth1 -> bindValue(':email', $_POST['UpdateEmail']);
    $sth1 -> bindValue(':blob', $_POST['update']);
    $sth1->execute();
    $sth2 = $dbh->prepare("UPDATE user SET `username` = :username WHERE `id` = :blob");
    $sth2 -> bindValue(':username', $_POST['UpdateUsername']);
    $sth2 -> bindValue(':blob', $_POST['update']);
    $sth2->execute();
    $sth3 = $dbh->prepare("UPDATE user SET `password` = :password WHERE `id` = :blob");
    $sth3 -> bindValue(':password', $_POST['UpdatePassword']);
    $sth3 -> bindValue(':blob', $_POST['update']);
    $sth3->execute();

    echo "<a href='https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php'>Sign in page</a>";
}
catch (PDOException $e) {
    echo "<p>Error connecting to database!</p>";
    echo "<p>" . $e->getMessage() . "</p>";
}
?>

</body>
</html>
