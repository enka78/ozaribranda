<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    // Extract the data.
    $request = json_decode($postdata);

    // Validate.
//    if ((int)$request->id < 1 || trim($request->number) == '' || (float)$request->amount < 0) {
//        return http_response_code(400);
//    }

    // Sanitize.
    $id    = mysqli_real_escape_string($con, (int)$request->id);
    $sliderText1 = mysqli_real_escape_string($con, trim($request->sliderText1));
    $sliderText2 = mysqli_real_escape_string($con, trim($request->sliderText2));
    $sliderimg = mysqli_real_escape_string($con, trim($request->sliderimg));
    $active = mysqli_real_escape_string($con, (int)$request->active);
    $sira = mysqli_real_escape_string($con, (int)$request->sira);

    // Update.
    $sql = "UPDATE `slider` SET `sliderText1`='$sliderText1',`sliderText2`='$sliderText2',`sliderimg`='$sliderimg',`active`='$active',`sira`='$sira' WHERE `id` = '{$id}' LIMIT 1";

    if(mysqli_query($con, $sql))
    {
        http_response_code(204);
    }
    else
    {
        return http_response_code(422);
    }
}
?>
