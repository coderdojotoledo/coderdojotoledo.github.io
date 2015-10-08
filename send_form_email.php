<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "scott.thompson@coderdojotoledo.com, jakku.thompson@coderdojotoledo.com";
 
    $email_subject = "CoderDojo Toledo Newsletter Sign Up";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the information you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['first_name']) ||
 
        !isset($_POST['last_name']) ||
 
        !isset($_POST['email'])) {
 
        died('We are sorry, but there appears to be a problem with the information you submitted.');       
 
    }
 
     
 
    $first_name = $_POST['first_name']; // required
 
    $last_name = $_POST['last_name']; // required
 
    $email_from = $_POST['email']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
 
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
 
  }
 
  if(!preg_match($string_exp,$last_name)) {
 
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "NEWSLETTER READER APPROACHING";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
 
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
<!DOCTYPE html>
<html>
    <head lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Register | CoderDojo Toledo</title>
        <link rel="shortcut icon" href="https://coderdojo.com/favicon.ico">
        <link rel="stylesheet" href="css/import.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
        <style type="text/css">
    	#map {
      	width: 400px;
      	height: 400px;
    	}
  		</style>
    </head>
    <body class='  wsite-theme-dark'>
        <header class="main-header">
            <nav class="main-nav">
                <ul>
                    <li>
                        <a href="http://coderdojo.com" class="coderhub">More on CoderDojo</a>
                    </li>
                    <li>
                        <a href="index.html" class="codertoledo">CoderDojo Toledo</a>
                    </li>
                    <li>
                        <a href="register.html" class="startoday">Start Today</a>
                    </li>
                </ul>
            </nav>
        </header>
    	<h1 class="reg_offer">Wanna be a part of CoderDojo Toledo? Sign up for our weekly newsletter here!</h1>
    <form name="contactform" method="post" action="send_form_email.php">
<table width="450px">
<tr>
 <td valign="top">
  <label for="first_name">First Name *</label>
 </td>
 <td valign="top">
  <input  type="text" name="first_name" maxlength="50" size="30">
 
 </td>
 
</tr>
 
<tr>
 
 <td valign="top">
 
  <label for="last_name">Last Name *</label>
 
 </td>
 
 <td valign="top">
 
  <input  type="text" name="last_name" maxlength="50" size="30">
 
 </td>
 
</tr>
 
<tr>
 
 <td valign="top">
 
  <label for="email">Email Address *</label>
 
 </td>
 
 <td valign="top">
 
  <input  type="text" name="email" maxlength="80" size="30">
 
 </td>
 
</tr>

<tr>
 
 <td colspan="2" style="text-align:center">
 
  <input type="submit" value="Submit">
 
 </td>
 
</tr>
 
</table>
 
</form>
        <p class="location">The CoderDojo Toledo sessions take place at Potter Technology, 9750 Clark Drive Rossford, Ohio 43460. Each session is on a Saturday, from 12:00PM-3:00PM. 
		There are three things required.
	 	<ul class="require1">
	 		<li>A laptop for coding</li>
	 		<li class="food">A lunch/snack and a drink</li>
	 		<li class="parent"> If you are under 13, a parent</li>
	 	</ul>
	 	Hope to see you there!</p>
		<p class="signnow">Spaces are limited, so sign up now!</p>
		<footer>
            <strong>Coded by Jack Thompson, a 12 year old. Look what you can do with CoderDojo.</strong>
        </footer>
        <script src="app.js" type="code.jquery.com/jquery-1.11.3.min.js"></script>
    </body>
</html>
 
 
<?php
 
}
 
?>