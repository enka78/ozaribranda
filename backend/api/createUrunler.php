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
    $katid = mysqli_real_escape_string($con, $request->katid);
    $urunAdi = mysqli_real_escape_string($con, $request->urunAdi);
    $urunPic1 = mysqli_real_escape_string($con, $request->urunPic1);
    $urunPic2 = mysqli_real_escape_string($con, $request->urunPic2);
    $urunPic3 = mysqli_real_escape_string($con, $request->urunPic3);
    $urunDetay = mysqli_real_escape_string($con, $request->urunDetay);
    $metaTitle = mysqli_real_escape_string($con, $request->metaTitle);
    $metaDescription = mysqli_real_escape_string($con, $request->metaDescription);
    $metaKeywords = mysqli_real_escape_string($con, $request->metaKeywords);
    $active = mysqli_real_escape_string($con, $request->active);
    $sira = mysqli_real_escape_string($con, $request->sira);


    // Create.
    $sql = "INSERT INTO `urunler`(`id`,`katid`,`urunAdi`, `urunPic1`, `urunPic2`, `urunPic3`, `urunDetay`, `metaTitle`, `metaDescription`, `metaKeywords`,  `active`, `sira`) VALUES (null,'{$katid}','{$urunAdi}','{$urunPic1}', '{$urunPic2}', '{$urunPic3}', '{$urunDetay}', '{$metaTitle}', '{$metaDescription}', '{$metaKeywords}','{$active}', '{$sira}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        $urunler = [
            'sliderText1' => $katid,
            'sliderText2' => $urunAdi,
            'urunPic1' => $urunPic1,
            'urunPic2' => $urunPic2,
            'urunPic3' => $urunPic3,
            'urunDetay' => $urunDetay,
            'metaTitle' => $metaTitle,
            'metaDescription' => $metaDescription,
            'metaKeywords' => $metaKeywords,
            'active' => $active,
            'sira' => $sira,
            'id'    => mysqli_insert_id($con)
        ];
        echo json_encode($urunler);
    }
    else
    {
        http_response_code(422);
    }
}
?>
