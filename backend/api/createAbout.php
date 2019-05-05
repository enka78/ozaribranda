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
    $hakimizdaText = mysqli_real_escape_string($con, $request->hakimizdaText);
    $vizyonText = mysqli_real_escape_string($con, $request->vizyonText);
    $misyonText = mysqli_real_escape_string($con, $request->misyonText);
    $active = mysqli_real_escape_string($con, $request->active);
    $sira = mysqli_real_escape_string($con, $request->sira);


    // Create.
    $sql = "INSERT INTO `about`(`id`,`hakimizdaText`,`misyonText`, `vizyonText`, `active`, `sira`) VALUES (null,'{$hakimizdaText}','{$misyonText}','{$vizyonText}','{$active}', '{$sira}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        $about = [
            'hakimizdaText' => $hakimizdaText,
            'vizyonText' => $vizyonText,
            'misyonText' => $misyonText,
            'active' => $active,
            'sira' => $sira,
            'id'    => mysqli_insert_id($con)
        ];
        echo json_encode($about);
    }
    else
    {
        http_response_code(422);
    }
}
?>
