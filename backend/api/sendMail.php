<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'class.phpmailer.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    // Extract the data.
    $request = json_decode($postdata);



    // Sanitize.
    $contactAd = $request->contactAd;
    $contactSoyad = $request->contactSoyad;
    $contactEmail = $request->contactEmail;
    $contactTel = $request->contactTel;
    $contactMesaj = $request->contactMesaj;



    $mail = new PHPMailer;

    $mail->IsSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.ozaribranda.com';                 // Specify main and backup server
    $mail->Port = 587;                                    // Set the SMTP port
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'info@ozaribranda.com';             // SMTP username
    $mail->Password = 'OAmn54U3';                         // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

    $mail->From = $contactEmail;
    $mail->FromName = $contactAd.' '.$contactSoyad;
    $mail->AddAddress('mehemet.balarisi@ozaribranda.com', 'Mehemet Balarısı');  // Add a recipient

    $mail->IsHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'İletişim Mesajı';
    $mail->Body    = $contactMesaj;
    $mail->AltBody = 'Tel: '.$contactTel;

    if(!$mail->Send()) {
       echo 'Message could not be sent.';
       echo 'Mailer Error: ' . $mail->ErrorInfo;
       exit;
    }

    echo 'Message has been sent';

?>
