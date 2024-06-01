<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the admin or user checkbox is selected
    $role = isset($_POST['role']) ? $_POST['role'] : '';

    $sql = "SELECT * FROM users WHERE username='$username' AND password=('$password') AND role='$role'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        $_SESSION['username'] = $user['username'];
        $_SESSION['role'] = $user['role'];

        // Check if the logged-in user is an admin
        if ($user['role'] == 'admin') {
            header("Location: admin.php");
            exit();
        } else {
            header("Location: user.php");
            exit();
        }
    } else {
        $error = "Invalid username, password, or role";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table id="login">
        <thead>
        <tr>
               <th> <img id="bingoimg" src="img/yegna.JPG" alt="image" width="150" height="150"> </th>
            </tr>
            <tr>
                <th>
    <form method="POST" action="">
        <h2>Login</h2>
        <h3>Please Enter user name and password </h3>
        <?php if (isset($error)) { echo "<p>$error</p>"; } ?>
        <label for="username">Username:</label>
        <input type="text" name="username" required> </br>
        <label for="password">Password:</label>
        <input type="password" name="password" required> </br>
        <tr>
            <th>
    
        <input type="checkbox" id="admin" name="role" value="admin">
        <label for="admin">Admin</label>
        <input type="checkbox" id="user" name="role" value="user">
        <label for="user">User</label>
        <button id="btnlogin" type="submit">Login</button>
        </th>
</tr>
    </form>
</th>
</tr>
</thead>
</table>
</body>
</html>
