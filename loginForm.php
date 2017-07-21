<?php

    if (!defined('KEY_CHECK') && KEY_CHECK === 162343645) {
        die('No direct script access! Get Out!');
    }
    
?>


<form method="POST" action="index.php">

    <div class="row">
        <input type="text" name="login" value="<?php echo $_POST['login']; ?>" placeholder="Login" />
    </div>

    <div class="row">
        <input type="password" name="password" value="<?php echo $_POST['password']; ?>" placeholder="Hasło" />
    </div>

    <div class="row">
        <input type="submit" value="Zaloguj" />
    </div>
    
    <input type="hidden" name="message" value="sended" />

</form>