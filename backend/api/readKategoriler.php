<?php
/**
 * Returns the list of policies.
 */

require 'database.php';

$kategori = [];
$sql = "SELECT * FROM urunkategoriler ORDER BY sira asc ";

if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $kategori[$i]['id']    = $row['id'];
        $kategori[$i]['kategoriAdi'] = $row['kategoriAdi'];
        $kategori[$i]['active'] = $row['active'];
        $kategori[$i]['sira'] = $row['sira'];
        $i++;
    }

    echo json_encode($kategori);
}
else
{
    http_response_code(404);
}
?>
