<html>
<head>
    <title>install</title>
</head>
<body>
<?php
try {
    require_once "config.php";
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    $query = file_get_contents('user.sql');
    $dbh->exec($query);
    echo "<p>Successfully installed databases</p>";
}
catch (PDOException $e) {
    echo "<p>Error: {$e->getMessage()}</p>";
}
?>
</body>
</html>

<!-- INSTALL TABLE -->