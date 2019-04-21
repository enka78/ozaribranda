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
    $hakimizda = mysqli_real_escape_string($con, $request->hakimizda);
    $vizyonumuz = mysqli_real_escape_string($con, $request->vizyonumuz);
    $misyonumuz = mysqli_real_escape_string($con, $request->misyonumuz);
    $aktif = mysqli_real_escape_string($con, $request->aktif);
    $sira = mysqli_real_escape_string($con, $request->sira);


    // Create.
    $sql = "INSERT INTO `about`(`id`,`hakimizdaText`,`misyonText`, `vizyonText`, `active`, `sira`) VALUES (null,'{$hakimizda}','{$vizyonumuz}','{$misyonumuz}','{$aktif}', '{$sira}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        $about = [
            'hakimizda' => $hakimizda,
            'vizyonumuz' => $vizyonumuz,
            'misyonumuz' => $misyonumuz,
            'aktif' => $aktif,
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
