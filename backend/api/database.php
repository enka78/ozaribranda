<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//define('DB_HOST', '94.73.170.245');
//define('DB_USER', 'kayen');
//define('DB_PASS', 'HDbj18N6');
//define('DB_NAME', 'ozaridb');

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'ozaridb');

function connect()
{
    $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

    if (mysqli_connect_errno($connect)) {
        die("Failed to connect:" . mysqli_connect_error());
    }

    mysqli_set_charset($connect, "utf8");

    return $connect;
}

$con = connect();

?>
