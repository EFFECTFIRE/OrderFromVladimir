<?php 

$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail("arturgareev2000artur@gmail.com", "Загаловок", "1\n 2\n 2-ая строчка \n 3-ая строчка",$headers); 

?>