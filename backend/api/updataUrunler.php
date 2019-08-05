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
    $katid    = mysqli_real_escape_string($con, (int)$request->katid);
    $urunAdi = mysqli_real_escape_string($con, trim($request->urunAdi));
    $urunPic1 = mysqli_real_escape_string($con, trim($request->urunPic1));
    $urunPic2 = mysqli_real_escape_string($con, trim($request->urunPic2));
    $urunPic3 = mysqli_real_escape_string($con, trim($request->urunPic3));
    $urunDetay = mysqli_real_escape_string($con, trim($request->urunDetay));
    $metaTitle = mysqli_real_escape_string($con, trim($request->metaTitle));
    $metaDescription = mysqli_real_escape_string($con, trim($request->metaDescription));
    $metaKeywords = mysqli_real_escape_string($con, trim($request->metaKeywords));
    $active = mysqli_real_escape_string($con, (int)$request->active);
    $sira = mysqli_real_escape_string($con, (int)$request->sira);

    // Update.
    $sql = "UPDATE `urunler` SET `katid`='$katid',`urunAdi`='$urunAdi',`urunPic1`='$urunPic1', `urunPic2`='$urunPic2', `urunPic3`='$urunPic3',  `urunDetay`='$urunDetay', `metaTitle`='$metaTitle', `metaDescription`='$metaDescription', `metaKeywords`='$metaKeywords', `active`='$active',`sira`='$sira' WHERE `id` = '{$id}' LIMIT 1";

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
