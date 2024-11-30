<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Configuration du serveur SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.votre-fournisseur.com'; // Remplacez par votre serveur SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'votre_email@votre-domaine.com'; // Remplacez par votre adresse email
        $mail->Password = 'votre_mot_de_passe'; // Remplacez par votre mot de passe
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinataires
        $mail->setFrom('votre_email@votre-domaine.com', 'Nom de l\'expéditeur');
        $mail->addAddress('leleutitou@gmail.com'); // Remplacez par votre adresse email

        // Contenu de l'email
        $mail->isHTML(true);
        $mail->Subject = 'Nouveau message de ' . $name;
        $mail->Body    = '<p><strong>Nom:</strong> ' . $name . '</p><p><strong>Email:</strong> ' . $email . '</p><p><strong>Message:</strong><br>' . nl2br($message) . '</p>';

        $mail->send();
        echo 'Le message a été envoyé avec succès.';
    } catch (Exception $e) {
        echo "Le message n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}";
    }
}
?>