<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Quaid Tahir</title>
</head>
<body>

    

    <?php 
     



     if(isset($_POST['firstName']) && !empty($_POST['firstName']) && isset($_POST['lastName']) && !empty($_POST['lastName']) && isset($_POST['subject']) && !empty($_POST['subject']) && isset($_POST['message']) && !empty($_POST['message'])){
        $user1->name = test_input($_POST['firstName']) . " " . test_input($_POST['lastName']);
        $user1->subject = test_input($_POST['subject']);
        $user1->email = test_input($_POST['email']);
        $user1->msg = test_input($_POST['message']) . " From " . $user1->name;
     }



     
      
      // Cleans the input data
      function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        
        return $data;
    }

    ?>
</body>
</html>