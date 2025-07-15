<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Contact page</title>
</head>

<body>

    <main>
        <?php
        $name = $_GET["name"];
        $email = $_GET["email"];
        echo "<p>Thank you for your message!"
        ?>

        <p><a href="javascript:history.go(-1)">Back to main page</a></p>
    </main>
</body>

</html>