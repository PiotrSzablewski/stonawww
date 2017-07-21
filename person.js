

function Person( name, surname, birthDate, PESEL, sex, phone){
            this.name = name;
            this.surname = surname;
            this.birthDate = birthDate;
            this.PESEL = PESEL;
            this.phone = phone;
}

let Marek = new Person('Marek', 'Zegarek', '22-04-1989', 1231231313, 'male', 403429508);
console.log(Marek);






function getPerson(){
    let name = '';
    let surname = '';   
    let names = ['Marek', 'Zdzisław', 'Bolko', 'Gniewko', 'Roman', 'Zocha', 'Lodzia', 'Zdzisława', 'Przecława','Lizarda' ];
    let surnames = ['Walcownia', 'Kalka', 'Młotek', 'Socha', 'Nakrętka', 'Zelasko', 'Wiocha', 'Kozłowski', 'Nowak', 'Chmiel'];
    function getName(names){
        let index = Math.floor(Math.random() * 10);
        name = names.index;
    }
    function getName(surnames){
        let index = Math.floor(Math.random() * 10);
        surname = surnames.index;
    }
    function getBirthDate(){
        let day = ;
    }
    
    
    
    
    
    
    
}