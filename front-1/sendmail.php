<?php 
    require_once ('PHPMailer/PHPMailerAutoload.php');

    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language');
    $mail->IsHTML(true);
    $mail->isSMTP();
    $mail->SMTPSecure = 'ssl'; 
    $mail->Host = 'smtp.mail.ru';
    $mail->Port = 993;
    $mail->SMTPAuth = true;
    $mail->Username = 'testingphpmailer@mail.ru';
    $mail->Password = 'yareskoo1';
    $mail->setFrom('testingphpmailer@mail.ru');
    $mail->addAddress('roma040805@gmail.com');
    $mail->Subject = "Hello! Go to the library!";
    if(thrim(!empty($_POST['name']))){
        $name = $_POST['name'];
    }
    if(thrim(!empty($_POST['email']))){
        $email = $_POST['email'];
    }
    if(thrim(!empty($_POST['message']))){
        $message = $_POST['message'];
    }

    $mail->Body = ''.$name . "Send email: " .$email. ',and ask: ' .$message;
    $mail->AltBody = '';
    if (!$mail->send()) {
        echo 'Error';
    } else {
        echo 'kp90';
    }
?>