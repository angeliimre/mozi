<?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $file=fopen("tarol.txt","a");
		$tomb=json_decode(file_get_contents("php://input"));
        foreach($tomb as $elem){
			fwrite($file,$elem."\n");
		}
        fclose($file);
		header('Content-Type: application/json');
		print_r(file_get_contents("php://input"));
		exit;
    }
    
    $file=fopen("tarol.txt","r");
	$tomb=array();
    while(!feof($file)){
		
		array_push($tomb,intval(fgets($file)));
		
    }
    fclose($file);
	print_r(json_encode($tomb));
?>