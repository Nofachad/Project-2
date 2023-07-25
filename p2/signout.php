<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    session_destroy();
    echo "<p>Signed Out<p>";
    echo "<a href=\"https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php\">Sign In</a><br>";
    ?>
</body>
</html>