<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p>Lisa massiivi 15 HTML erinevat värvi.<br>
    Leia ilusad värvi nimed siit: http://www.w3schools.com/colors/colors_names.asp<br>
    Kuva tsükliga välja värvuste nimed ja värvi need sama värvi nt. <br>
    &#60; span style='color: cyan' &#62; cyan - sinine taevas &#60; /span &#62;</p>
<?php
$varv=array('Gold', 'DarkRed', 'Orange', 'DarkGoldenRod');

for($i=0; $i<4; $i++){
    echo "<span style='color: $varv[$i]'>$varv[$i]</span>";
    echo "<br>";
}
?>
</body>
</html>
