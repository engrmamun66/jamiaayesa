<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


//Load Composer's autoloader
require 'vendor/autoload.php';
include 'function-head.php';
function sendEmail($senderName, $Subject, $Body)
{
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'checkfor99@gmail.com';                     //SMTP username
        $mail->Password   = 'engrdevpass1';                               //SMTP password
        // $mail->Username   = 'jamiyamilliya.m@gmail.com';                     //SMTP username
        // $mail->Password   = '95@68@16@';                               //SMTP password
        $mail->SMTPSecure = 'tcl';            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        // $mail->setFrom('checkfor99@gmail.com', $senderName);
        // $mail->addAddress('checkfor99@gmail.com', 'jamiyamilliya-account');
        //Add a recipient
        $mail->setFrom('jamiyamilliya.m@gmail.com', $senderName);
        $mail->addAddress('jamiyamilliya.m@gmail.com', 'jamiyamilliya-account');     //Add a recipient


        // $mail->addAddress('ellen@example.com');               //Name is optional
        // $mail->addReplyTo('jamiyamilliya.m@gmail', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('assets/img/logo-round.png', 'new.jpg');    //Optional name
        // $mail->addAttachment('1.pdf', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Here is the subject';
        $mail->Subject = $Subject;
        $mail->Body    = $Body;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        return true;
        echo 'Message has been sent';
    } catch (Exception $e) {
        return false;
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        die();
    }
}


if (isset($_POST['action_name'])) {
    $failerSms = '';
    $error = '';
    $success = '';


    if ($_LAN == 'bl') $failerSms = 'মেইল পাঠানো যায়নি, তথ্যগুলো পরীক্ষা করুন।';
    if ($_LAN == 'en') $failerSms = 'Mail could not be sent, check the information.';
    if ($_LAN == 'ar') $failerSms = 'تعذر إرسال البريد ، تحقق من المعلومات.';

    if ($_LAN == 'bl') $success = 'আপনার প্রশ্নটি গ্রহণ করা হয়েছে';
    if ($_LAN == 'en') $success = 'Your question is accepted';
    if ($_LAN == 'ar') $success = 'سؤالك مقبول';


    $actionName = $_POST['action_name'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $question = $_POST['question'];



    if (($name) == 'a') {
        print_r(json_encode(['status' => 'nok', 'error' => $failerSms]));
        die();
    }
    if (($name) == 'b') {
        print_r(json_encode(['status' => 'ok', 'success' => $success]));
        die();
    }

    if (strlen($email)) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            print_r(json_encode(['status' => 'nok', 'error' => $error]));
            die();
        }
    }

    $Subject = '------';
    if ($actionName == 'ask_masala') $Subject = '🔴 মাসআলা জিজ্ঞাসা';
    if ($actionName == 'general_question') $Subject = '🔵 সাধারণ জিজ্ঞাসা';

    $senderName = $name;
    $Body = '<h3> প্রশ্নঃ </h3>';
    $Body .= '<p style="text-align:justify;">';
    $Body .= $question;
    $Body .= '</p>';
    $Body .= '<hr>';
    $Body .= '<p><b>মোবাইলঃ </b>';
    $Body .= $phone;
    $Body .= '</p>';
    if (!empty($email)) {
        $Body .= '<p><b>ইমেইলঃ </b>';
        $Body .= $email;
        $Body .= '</p>';
    }

    if (sendEmail($senderName, $Subject, $Body)) {
        print_r(json_encode(['status' => 'ok', 'success' => $success]));
    } else {
        print_r(json_encode(['status' => 'nok', 'error' => $failerSms]));
    }
}
die();
