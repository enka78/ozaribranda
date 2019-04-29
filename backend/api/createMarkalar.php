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
    $markaText = mysqli_real_escape_string($con, $request->markaText);
    $markaPic = mysqli_real_escape_string($con, $request->markaPic);
    $active = mysqli_real_escape_string($con, $request->active);
    $sira = mysqli_real_escape_string($con, $request->sira);


    // Create.
    $sql = "INSERT INTO `markalar`(`id`,`markaText`,`markaPic`, `active`, `sira`) VALUES (null,'{$markaText}','{$markaPic}','{$active}', '{$sira}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        $markalar = [
            'markaText' => $markaText,
            'markaPic' => $markaPic,
            'active' => $active,
            'sira' => $sira,
            'id'    => mysqli_insert_id($con)
        ];
        echo json_encode($markalar);
    }
    else
    {
        http_response_code(422);
    }
}
?>
