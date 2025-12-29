<?php
include('db.php');

if(isset($_POST['registre'])){
    if(!empty($_POST['nom']) || !empty($_POST['prenom']) || !empty($_POST['e_mail']) || !empty($_POST['mot_passe'])){
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $e_mail = $_POST['e_mail'];
        $mot_passe = $_POST['mot_passe'];
        
        $stat = mysqli_query($con, "INSERT INTO users VALUES('$nom', '$prenom','$e_mail','$mot_passe');");
    }
}

header("Location: ../html/cours.html");