<?php

if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "IIekapb174@yandex.ru";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $txt, $headers);
  header("Location: index.php?mailsend");
}
else {
    echo '<p>Something went wrong</p>';
}
 ?>
