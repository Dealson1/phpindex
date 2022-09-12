<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Alexey PHP lehestik</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <script scr="js/legojs.js"></script>
</head>
<body>
<?php
    include("header.php");
    include("navigation.php");
?>
<main>
    <?php
    if(isSet($_GET["leht"])){
        include('content/'.$_GET["leht"].'.php');
    } else{
        echo "Siia tuleb sisu";
    }
    ?>
</main>
<?php
    include("footer.php");
?>

</body>
</html>
