<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contact.css" type="text/css">
    <link rel="stylesheet" href="boiler.css">
    <link rel="stylesheet" href="logo.css">
    <title>Contact Me</title>
</head>
<body>
    <!--Nav Bar -->
    <nav class="nav-bar">
        <a class="logo"  href="../index.html">Quaid Tahir</a>
        <div class="nav-container">
            <a href="papers.html" class="nav-items">Papers</a>
            <a href="3d-art.html" class="nav-items">3d art</a>
            <a href="projects.html" class="nav-items">Projects<span></a>
            <a href="#" class="nav-items highlighted">Contact Me</a>
        </div>       
    </nav>
    
    <h1>Contact Quaid</h1>
        <div class="container">
            
            
            <div class="form">
                <form action="contact.php" method="POST" autocomplete="off">
                    <input type="text" name="firstName" placeholder="First Name">
                    
                    <input type="text" name="lastName" placeholder="Last Name">
                    
                    <input type="text" name="subject" placeholder="Subject">

                    <input type="text" name="email" placeholder="Email">
                    
                    <textarea type="text" name="message" placeholder="Enter your message here" rows="5" class="textarea"></textarea>
                    
                    <input type="submit">
                </form>
            </div>
            
        </div>

        <?php
        class user {
            var $name = "";
            var $subject = "";
            var $email = "";
            var $msg = "";
        }
        $user1 = new user; 

        if(isset($_POST['firstName']) && !empty($_POST['firstName']) && isset($_POST['lastName']) && !empty($_POST['lastName']) && isset($_POST['subject']) && !empty($_POST['subject']) && isset($_POST['message']) && !empty($_POST['message'])){
            $user1->name = test_input($_POST['firstName']) . " " . test_input($_POST['lastName']);
            $user1->subject = test_input($_POST['subject']);
            $user1->email = test_input($_POST['email']);
            $user1->msg = test_input($_POST['message']) . " From " . $user1->name;
    
            // echo $user1->subject;
            // echo $user1->msg;

            mail('mcbadejake@gmail.com', $user1->subject, $user1->msg);
        }

        

      
        // ------------------- Funtions Initializations-------------------
        // if($Server["REQUEST_METHOD"] == "POST"){
        //     echo "HI";
            
        //     // Check the input for only letters and white space;
        //     if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
        //         $nameErr = "Only letters and white space allowed";
        //     }
            
            
        //     // Validates the email
        //     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //         $emailErr = "Invalid email format";
        //     }
            
        // }
        
        // Cleans the input data
        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            
            return $data;
        }
        // ------------------- Funtions Initializations-------------------
?>
</body>
</html>