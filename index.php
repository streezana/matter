<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
	$arr = ['html', 'css', 'php', 'js', 'jq'];
	foreach ($arr as $elem) {
		echo $elem.'<br>'; 
	}

    $mass = [11, 25, 34, 98, 103];
    $result = 0;
	foreach ($mass as $elem) {
        $result = $result + $elem;
        if ($elem ==34) {
            
            break;
        } 
        else {
        //$result = $result + $elem;
		echo $elem.'<br>'; 
        }
	}
    echo $result.'<br>'; 

    $sum = 0;

    for ($i = 0; $i < 10; $i++) {
        echo $sum = $sum+$i; 
    }
    echo '<br>'.$sum;

?>
</body>
</html>