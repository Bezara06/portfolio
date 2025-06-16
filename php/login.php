<?php

include('db.php');

if(isset($_POST['LogIn'])){
    $uName = $_POST['nom'];
    $uPass = $_POST['sequirity'];

    $stat = mysqli_query($con, "SELECT * FROM USERS WHERE `password` LIKE('$uPass') AND nom LIKE('$uName') OR `password` LIKE('$uPass') AND email LIKE('$uName')");

    if($stat->num_rows == 0){
        header("Location: ../index.html");
    }else{
        while ($result = mysqli_fetch_assoc($stat)) {
            # code...
            header("Location: ../html/about.html");
            echo "alert('Connectée!')";
        }
    }
    
}else{
    header("Location: ../index.html");
}