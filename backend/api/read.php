<?php
/**
 * Returns the list of policies.
 */
phpinfo();
require 'database.php';

$sliders = [];
$sql = "SELECT id, slider_text1, slider_text2, slider_pic FROM slider";

if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $sliders[$i]['id']    = $row['id'];
        $sliders[$i]['slider_text1'] = $row['slider_text1'];
        $sliders[$i]['slider_text2'] = $row['slider_text2'];
        $sliders[$i]['slider_pic'] = $row['slider_pic'];
        $i++;
    }

    echo json_encode($sliders);
}
else
{
    http_response_code(404);
}
?>
