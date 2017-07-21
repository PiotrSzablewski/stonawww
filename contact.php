<?php

    error_reporting(0);
   
    
    if (isset($_POST['message']) && $_POST['message'] === 'prawda') {
        
        $error = False;
        $message = '';
        
        $wszystkiePola = $_POST;
        
        foreach ($wszystkiePola as $FieldName => $FieldValue) {
            
            switch ($FieldName) {
                
                case 'name':
                    if (strlen($FieldValue) < 3) {
                        $error = True;
                        $message .= 'Podaj imię (min. 3 znaki)<br/>';
                    }
                    break;
                case 'email':
                    if ($FieldValue === '') {
                        $error = True;
                        $message .= 'Podaj prawidłowy adres email<br/>';
                    }
                    break;
                case 'subject':
                    if (strlen($FieldValue) < 5) {
                        $error = True;
                        $message .= 'Podaj temat (min. 5 znaków)<br/>';
                    }
                    break;
                case 'content':
                    if (strlen($FieldValue) < 10) {
                        $error = True;
                        $message .= 'Uzupełnij treść (min. 10 znaków)<br/>';
                    }
                    break;
                case 'howMuch':
                    if ($FieldValue == '0') {
                        $error = True;
                        $message .= 'Powiedz ile masz zamiar posmarować<br/>';
                    }
                    else if ($error === False && $FieldValue === 'wlasciwa') {
                        $message = 'wzór! będą z Ciebie ludzie ;)';
                    }
                    break;
                default:
                    // cokolwiek domyślnego
            }
            
        }
        

        if ($error === False) {
            if ($message !== '') {
                include_once './message.php';
            }
            echo 'Super - wielkie thx za wysyłkę';
        }
        else {
            $message .= 'Popraw się Goopcze';
            include_once './message.php';
            include_once './contactForm.php';
        }
        
    }
    
    else {
        include_once './contactForm.php';
    }

    
    
