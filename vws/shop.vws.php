<?php  
include './cls/lib.cls.php'; 

$cust = new customer(1);
$id = $cust->getID();
$cartprods = $cust->getProducts();
echo count($cartprods)."<br>";
echo "<a href=\"./?pg=shop&pgv=cart\">Go To Cart</a>"."<br>";
include($cview);

?>
