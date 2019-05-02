<?php
/**
 * Returns the list of policies.
 */

require 'database.php';

$sliders = [];
$sql = "SELECT * FROM slider ORDER BY sira asc ";

if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $sliders[$i]['id']    = $row['id'];
        $sliders[$i]['sliderText1'] = $row['sliderText1'];
        $sliders[$i]['sliderText2'] = $row['sliderText2'];
        $sliders[$i]['sliderimg'] = $row['sliderimg'];
        $sliders[$i]['active'] = $row['active'];
        $sliders[$i]['sira'] = $row['sira'];
        $i++;
    }

    echo json_encode($sliders);
}
else
{
    http_response_code(404);
}
?>
