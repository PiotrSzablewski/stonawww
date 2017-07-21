<script type="text/javascript" src="validate.js"></script>

<form method="POST">

    <div class="row">
        <input type="text" name="name" value="<?php echo $_POST['name']; ?>" placeholder="Imię" data-req="true" dat-min="3" />
    </div>

    <div class="row">
        <input type="email" name="email" value="<?php echo $_POST['email']; ?>" placeholder="Email" />
    </div>
    
    <div class="row">
        <input type="number" name="shoe" value="<?php echo $_POST['shoe']; ?>" placeholder="Numer buta" />
    </div>
    
    <div class="row">
        <input type="text" name="subject" value="<?php echo $_POST['subject']; ?>" placeholder="Temat" />
    </div>
    
    <div class="row">
        <textarea name="content" ><?php echo $_POST['content']; ?></textarea>
    </div>
    
    <div class="row">
        <label>Ile zapłacisz?</label>
        <select name="howMuch">
            <option value="0">wybierz</option>
            <option value="mało">mało</option>
            <option value="średnio">średnio</option>
            <option value="dużo">dużo</option>
            <option value="wlasciwa">ile będzie trzeba</option>
        </select>
    </div>

    <div class="row">
        <input type="submit" value="Wyślij" />
    </div>
    
    <input type="hidden" name="message" value="prawda" />
    
    <input type="hidden" name="czas_wejscia" value="<?php echo date('Y-m-d H:i:s'); ?>" />

</form>

