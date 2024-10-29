<?php
require __DIR__ . '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);
    try {
        // Configuration du serveur SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Utilisez le serveur SMTP de votre choix
        $mail->SMTPAuth = true;
        $mail->Username = 'votre-email@gmail.com'; // Remplacez par votre adresse email
        $mail->Password = 'votre-mot-de-passe'; // Remplacez par votre mot de passe
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinataires
        $mail->setFrom($email, $name);
        $mail->addAddress('leleutitou@gmail.com'); // Remplacez par l'adresse email de destination

        // Contenu de l'email
        $mail->isHTML(true);
        $mail->Subject = "Nouveau message de $name";
        $mail->Body    = "Nom: $name<br>Email: $email<br>Téléphone: $phone<br>Message:<br>$message";

        $mail->send();
        echo "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.";
    } catch (Exception $e) {
        echo "Une erreur est survenue. Veuillez réessayer plus tard. Erreur: {$mail->ErrorInfo}";
    }
} else {
    echo "Méthode de requête non supportée.";
}
?>