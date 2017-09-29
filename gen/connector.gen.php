<?php
$host = "localhost";
$pword = "";
$dbname = "klc";
$uname = "root";

// Create connection
$con = new mysqli( $host , $uname , $pword , $dbname );

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
