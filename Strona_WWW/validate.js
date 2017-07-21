window.addEventListener('load', function(){
    
    
    var forms = document.querySelectorAll('form');
    
    for (var i = 0; i < forms.length; i++) {
        
        forms[i].addEventListener('submit', function(e){
            
            e.preventDefault();
            console.log(e);
            
            var error = false;
            var message = '';
            
            var wszystkiePola = this.querySelectorAll('input, select, textarea');
            
            for (var j = 0; j < wszystkiePola.length; j++) {
                
                var pojedynczePole = wszystkiePola[j];
                var fieldName = pojedynczePole.name;
                var fieldValue = pojedynczePole.value;
                
                switch (pojedynczePole.dataReq) {
                
                    case 'name':
                        if (fieldValue.length < 3) {
                            error = true;
                            message += 'Podaj imię (min. 3 znaki)\n';
                        }
                        break;
                    case 'email':
                        if (fieldValue === '') {
                            error = true;
                            message += 'Podaj prawidłowy adres email\n';
                        }
                        break;
                    case 'subject':
                        if (fieldValue.length < 5) {
                            error = true;
                            message += 'Podaj temat (min. 5 znaków)\n';
                        }
                        break;
                    case 'content':
                        if (fieldValue.length < 10) {
                            error = true;
                            message += 'Uzupełnij treść (min. 10 znaków)\n';
                        }
                        break;
                    case 'howMuch':
                        if (fieldValue == '0') {
                            error = true;
                            message += 'Powiedz ile masz zamiar posmarować\n';
                        }
                        else if (error === false && fieldValue === 'wlasciwa') {
                            message = 'wzór! będą z Ciebie ludzie ;)';
                        }
                        break;
                    default:
                        // cokolwiek domyślnego
                }
                
            }
            
            
            if (error === false) {
                alert('zaraz wyślę \n' + message);
                this.submit();
            }
            else {
                alert('źle! \n' + message);
            }

            
            
        });
        
    }
    
    
});


