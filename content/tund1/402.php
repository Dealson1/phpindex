<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>402</title>
</head>
<body>
<h2>Tee tsükliga 20 "checkboxi". Pane neile kõigile oma nimi stiilis box[1], box[2], jne.</h2>
<?php
$i=1;
    while($i<=20){
        echo "<input type='checkbox' id='$i' name='box[]' value='$i'>";
        echo "<label for='$i'>box".$i."</label>";
        echo "<br>";
        $i++;
    }
?>
<h2>Tee tsükliga 20 "teksti lahtrit". Pane neile kõigile oma nimi stiilis cell[1], cell[2], jne.</h2>
<?php
$i=1;
    while($i<=20){
        echo "<input type='textbox' id=2'$i' name2='cell[]' value2='$i'>";
        echo "<label for='$i'>cell".$i."</label>";
        echo "<br>";
        $i++;
    }
?>
<h2>Tee tsükliga 20 "radio buttonit". Pane neile kõigile üks nimi "radio" ja erinevad väärtused stiilis value1, value2 jne.</h2>
<?php
$i=1;
while($i<=20){
    echo "<input type='radio' id=3'$i' name3='value[]' value3='$i'>";
    echo "<label for='$i'>value".$i."</label>";
    echo "<br>";
    $i++;
}
?>
</body>
</html>
