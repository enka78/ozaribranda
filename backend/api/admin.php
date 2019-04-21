<?php
/**
 * Returns the list of policies.
 */

require 'database.php';

$user = [];
$sql = "SELECT * FROM user";

if($result = mysqli_query($con,$sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $user[$i]['id']    = $row['id'];
        $user[$i]['userName'] = $row['userName'];
        $user[$i]['userPass'] = $row['userPass'];
        $user[$i]['userStatus'] = $row['userStatus'];
        $user[$i]['active'] = $row['active'];
        $i++;
    }

    echo json_encode($user);
}
else
{
    http_response_code(404);
}
?>
