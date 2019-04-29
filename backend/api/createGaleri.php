<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    // Extract the data.
    $request = json_decode($postdata);


    /* Validate.
    if(trim($request->number) === '' || (float)$request->amount < 0)
    {
        return http_response_code(400);
    }*/

    // Sanitize.
    $galeriPic = mysqli_real_escape_string($con, $request->galeriPic);
    $aktif = mysqli_real_escape_string($con, $request->active);
    $sira = mysqli_real_escape_string($con, $request->sira);


    // Create.
    $sql = "INSERT INTO `galeri`(`id`,`galeriPic`,`active`, `sira`) VALUES (null,'{$galeriPic}','{$aktif}', '{$sira}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        $galeri = [
            'galeriPic' => $galeriPic,
            'active' => $aktif,
            'sira' => $sira,
            'id'    => mysqli_insert_id($con)
        ];
        echo json_encode($galeri);
    }
    else
    {
        http_response_code(422);
    }
}
?>
