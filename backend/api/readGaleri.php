<?php
/**
 * Returns the list of policies.
 */

require 'database.php';

$galeri = [];
$sql = "SELECT * FROM galeri ORDER BY sira asc ";

if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $galeri[$i]['id']    = $row['id'];
        $galeri[$i]['galeriPic'] = $row['galeriPic'];
        $galeri[$i]['active'] = $row['active'];
        $galeri[$i]['sira'] = $row['sira'];
        $i++;
    }

    echo json_encode($galeri);
}
else
{
    http_response_code(404);
}
?>
