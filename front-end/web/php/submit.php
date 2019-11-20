<?php
session_start();
$id = $_POST['id'];
$_SESSION['user_id'] = $id;
echo $_SESSION['user_id'] ;
?>