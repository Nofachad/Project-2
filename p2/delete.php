<!DOCTYPE html>
<html>
<body>
<?php
require 'config.php';
date_default_timezone_set('America/Los_Angeles');

try {
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    $sth = $dbh->prepare("DELETE FROM user WHERE `id` = :del");
    $sth -> bindValue(':del', htmlspecialchars($_POST['delete']));
    $sth->execute();
    echo "<a href='https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php'>Sign in page</a>";
}
catch (PDOException $e) {
    echo "<p>Error connecting to database!</p>";
    echo "<p>" . $e->getMessage() . "</p>";
}
?>

</body>
</html>