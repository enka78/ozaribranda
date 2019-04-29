<?php
/**
 * Returns the list of policies.
 */

require 'database.php';

$markalar = [];
$sql = "SELECT * FROM markalar ORDER BY sira asc ";

if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $markalar[$i]['id']    = $row['id'];
        $markalar[$i]['markaText'] = $row['markaText'];
        $markalar[$i]['markaPic'] = $row['markaPic'];
        $markalar[$i]['active'] = $row['active'];
        $markalar[$i]['sira'] = $row['sira'];
        $i++;
    }

    echo json_encode($markalar);
}
else
{
    http_response_code(404);
}
?>
