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
    $sliderText1 = mysqli_real_escape_string($con, $request->sliderText1);
    $sliderText2 = mysqli_real_escape_string($con, $request->sliderText2);
    $sliderimg = mysqli_real_escape_string($con, $request->sliderimg);
    $active = mysqli_real_escape_string($con, $request->active);
    $sira = mysqli_real_escape_string($con, $request->sira);


    // Create.
    $sql = "INSERT INTO `slider`(`id`,`sliderText1`,`sliderText2`, `sliderimg`, `active`, `sira`) VALUES (null,'{$sliderText1}','{$sliderText2}','{$sliderimg}','{$active}', '{$sira}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        $slider = [
            'sliderText1' => $sliderText1,
            'sliderText2' => $sliderText2,
            'sliderimg' => $sliderimg,
            'active' => $active,
            'sira' => $sira,
            'id'    => mysqli_insert_id($con)
        ];
        echo json_encode($slider);
    }
    else
    {
        http_response_code(422);
    }
}
?>
