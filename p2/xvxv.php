<html>
<head>
    <title>Drop</title>
</head>
<body>
<?php
require_once "config.php";

try {
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    $dbh->exec('DROP TABLE IF EXISTS user; DROP TABLE IF EXISTS saves; DROP TABLE IF EXISTS unlocked; DROP TABLE IF EXISTS levels; DROP TABLE IF EXISTS scenes; DROP TABLE IF EXISTS objects; DROP TABLE IF EXISTS permaObjects; DROP TABLE IF EXISTS contains;');
    echo "<p>Successfully dropped databases</p>";
}
catch (PDOException $e) {
    echo "<p>Error: {$e->getMessage()}</p>";
}
?>
</body>
</html>

 <!-- DROP TABLE -->