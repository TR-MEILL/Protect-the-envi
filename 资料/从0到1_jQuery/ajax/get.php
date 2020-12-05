<?php 
    header("Content-Type:text/html; charset=utf-8");
    echo "<div class='item'><h4>{$_REQUEST['username']}:</h4><p>{$_REQUEST['content']}</p></div>";
?>