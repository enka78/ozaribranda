<?php
/**
 * Returns the list of policies.
 */

require 'database.php';

$about = [];
$sql = "SELECT * FROM about ORDER BY sira asc ";

if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $about[$i]['id']    = $row['id'];
        $about[$i]['hakimizdaText'] = $row['hakimizdaText'];
        $about[$i]['misyonText'] = $row['misyonText'];
        $about[$i]['vizyonText'] = $row['vizyonText'];
        $about[$i]['aktif'] = $row['active'];
        $about[$i]['sira'] = $row['sira'];
        $i++;
    }

    echo json_encode($about);
}
else
{
    http_response_code(404);
}
?>
