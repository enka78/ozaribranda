<?php
/**
 * Returns the list of policies.
 */

require 'database.php';

$urunler = [];
$sql = "SELECT * FROM urunler ORDER BY sira asc ";

if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $urunler[$i]['id']    = $row['id'];
        $urunler[$i]['katid']    = $row['katid'];
        $urunler[$i]['urunAdi'] = $row['urunAdi'];
        $urunler[$i]['urunPic1'] = $row['urunPic1'];
        $urunler[$i]['urunPic2'] = $row['urunPic2'];
        $urunler[$i]['urunPic3'] = $row['urunPic3'];
        $urunler[$i]['urunDetay'] = $row['urunDetay'];
        $urunler[$i]['active'] = $row['active'];
        $urunler[$i]['sira'] = $row['sira'];
        $i++;
    }

    echo json_encode($urunler);
}
else
{
    http_response_code(404);
}
?>
