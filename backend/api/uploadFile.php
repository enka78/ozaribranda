<?php
require 'database.php';


$response = array();
$upload_dir = 'uploads/';
$server_url = 'http://ozaribranda.com';
//$server_url = 'http://127.0.0.1:4200';
if($_FILES["uploadFile"]["name"])
{

	$avatar_name = $_FILES["uploadFile"]["name"];
	$avatar_tmp_name = $_FILES["uploadFile"]["tmp_name"];
	$error = $_FILES["uploadFile"]["error"];
	
    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    }else 
    {
        $random_name = rand(1000,1000000)."-". $avatar_name;
        $upload_name = $upload_dir.mb_strtolower($random_name, 'UTF-8');
        $upload_name = preg_replace('/\s+/', '-', $upload_name);


        if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $server_url."/api/".$upload_name
              );
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }
    
}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!"
    );
}
echo json_encode($response);
 ?>
