<?php
    session_start();
    require_once("../config.php");
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    
    $save_id = htmlspecialchars($_POST["menu"]);

    if (!isset($_SESSION["sessionID"])) {
        header("Location: https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php");
    }
    else{
        $_SESSION["saveID"] = $save_id;
    }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Level 1</title>
    <link rel="stylesheet" href="lvl1.css">
    <script
    src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>
    <script src="scene.js"></script> 
  </head>
  <body>
	<img src="trianglethingy.png" alt="left" class = "navg visible" id="rightbutton">
    <img src="trianglethingy.png" alt="left" class = "navg visible" id="leftbutton">
    <img src="trianglethingy.png" alt="left" class = "navg visible" id="topbutton">
    <img src="trianglethingy.png" alt="left" class = "navg visible" id="bottombutton">

    <div class="divimg visible" id="rm1">
        <img src="scenes/room1.png" alt="r1" class = "scene" id = "rm1">
    </div>
    <div class="divimg hidden" id="rm2_1">
        <img src="scenes/room2_1.png" alt="r1" class = "scene" id = "rm2_1">
        <img src="scenes/key.png" alt="key1" class = "key" id="key1">
    </div>
    <div class="divimg hidden" id="rm2_2">
        <img src="scenes/room2_2.png" alt="r1" class = "scene" id = "rm2_2">
    </div>
    <div class="divimg hidden" id="rm3_1">
        <img src="scenes/room3_1.png" alt="r1" class = "scene" id = "rm3_1">
    </div>
    <div class="divimg hidden" id="rm3_2">
        <img src="scenes/room3_2.png" alt="r1" class = "scene" id = "rm3_2">
    </div>
    <div class="divimg hidden" id="rm4">
        <img src="scenes/room4.png" alt="r1" class = "scene" id = "rm4">
        <img src="scenes/key.png" alt="key1" class = "key" id="key3">
    </div>
    <div class="divimg hidden" id="rm5_1">
        <img src="scenes/room5_1.png" alt="r1" class = "scene" id = "rm5_1">
    </div>
    <div class="divimg hidden" id="rm5_2">
        <img src="scenes/room5_2.png" alt="r1" class = "scene" id = "rm5_2">
    </div>
    <div class="divimg hidden" id="rm6_1">
        <img src="scenes/room6_1.png" alt="r1" class = "scene" id = "rm6_1">
    </div>
    <div class="divimg hidden" id="rm6_2">
        <img src="scenes/room6_2.png" alt="r1" class = "scene" id = "rm6_2">
    </div>
    <div class="divimg hidden" id="rm7_1">
        <img src="scenes/room7_1.png" alt="r1" class = "scene" id = "rm7_1">
    </div>
    <div class="divimg hidden" id="rm7_2">
        <img src="scenes/room7_2.png" alt="r1" class = "scene" id = "rm7_2">
    </div>
    <div class="divimg hidden" id="rm8">
        <img src="scenes/room8.png" alt="r1" class = "scene" id = "rm8">
        <img src="scenes/key.png" alt="key1" class = "key" id="key2">
    </div>

  </body>
</html>