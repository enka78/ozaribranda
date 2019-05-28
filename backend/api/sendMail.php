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

    $request = json_decode($postdata);

    $contactAd = $request -> contactAd;
    $contactSoyad = $request -> contactSoyad;
    $contactEmail = $request -> contactEmail;
    $contactTel = $request -> contactTel;
    $contactMesaj = $request -> contactMesaj;

    $icerik="<h4>Gönderen Kişinin Bilgileri</h4><div style='border-top:1px #000000 solid; padding:10px;'><strong>Adı : </strong>".$contactAd."&emsp;<strong> Soyadı : </strong>".$contactSoyad."&emsp; <strong>Telefon : </strong>".$contactTel."&emsp; <strong> Mail : </strong>".$contactEmail."<br><br> <strong>Mesaj : </strong>".$contactMesaj."</div>";


          $mail = new PHPMailer();
          $mail->IsSMTP();
          $mail->Host = 'mail.ozaribranda.com';
          $mail->SMTPAuth = true;
          $mail->IsHTML(true);
          $mail->Username = 'info@ozaribranda.com';
          $mail->Password = 'OAmn54U3';
          $mail->Port     = 587;
          $mail->From="info@ozaribranda.com";
          $mail->Fromname = "Özarı Branda İletişim Maili";
          $mail->AddAddress('mehmet.balarisi@ozaribranda.com');
          $mail->CharSet = 'UTF-8';
          $mail->Subject = 'Özarı Branda | İletişim Maili';
          $mail->Body = $icerik;
          $mail->Send();
}
?>
