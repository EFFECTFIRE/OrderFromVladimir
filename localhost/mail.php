<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer;

try {
    $mail->CharSet = 'utf-8';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comments = $_POST['comment'];

# Define the Base64 string of the PDF file
$b64 = $_POST['pdf'];
#Decode the Base64 string, making sure that it contains only valid characters
$bin = base64_decode($b64, true);
# Write the PDF contents to a local file
file_put_contents('file.pdf', $bin);

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';                          // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'accelevent@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '112233Ac'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('accelevent@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('accelevent@yandex.ru');     // Кому будет уходить письмо

$mail->isHTML(true);                                  // Set email format to HTML

$mail->addAttachment('file.pdf');

$mail->Subject = 'Заявка с timefirst.ru';
$mail->Body = 'Имя: ' . $name .
    '<br>Email: ' . $email .
    '<br>Номер телефона: ' . $phone .
    '<br>Комментарии: ' . $comments;
$mail->AltBody = 'Имя: ' . $name .
    '\nEmail: ' . $email .
    '\nНомер телефона: ' . $phone .
    '\nКомментарии: ' . $comments;

if (!$mail->send()) throw new Exception();
} catch (Exception $e) {
    echo $e->getMessage() . ' on line ' . $e ->getLine();
    die();
}

header('location: /');