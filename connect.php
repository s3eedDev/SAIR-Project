<?php
// نتحقق إذا المستخدم ضغط زر الإرسال
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // نخزن البيانات المرسلة من النموذج
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // نعرض القيم على الصفحة
    echo "<h1>Thank you for contacting us!</h1>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Message:</strong> $message</p>";
} else {
    // لو أحد دخل على الصفحة بدون إرسال النموذج
    echo "<h2>Please fill out the contact form first.</h2>";
}
?>
