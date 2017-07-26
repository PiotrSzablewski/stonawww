function wszycho() {


    function licz() {

        var number = prompt("Wpisz liczbę");

        if (isNaN(number)) {
            return "Zła wartość";
        }

        number = parseFloat(number);

        alert("Liczba bezwzględna to: " + Math.abs(number));

        if (number <= 0) {
            return number * (-1);
        }

        return number;

    }


    //licz();

    function dni() {

        var tabla = ['pon', 'wt', 'sr', 'czw', 'pt', 'sob', 'nd'];

        var podaj = prompt('Podaj nr dnia tygodnia: ');

        if (isNaN(podaj) || podaj < 1 || podaj > 7) {
            alert('Zła wartość. Podaj liczbe w zakresie 1-7');
            return dni();
        }

        podaj = parseInt(podaj);

        return tabla[podaj - 1];


    }

    //alert(dni());


    function h(g, m, s) {

        console.log(g, m, s);

        g === null ? g = false : '';
        m === null ? m = false : '';
        s === null ? s = false : '';

        console.log(g, m, s);

        if (!g && g !== 0) {
            g = prompt("Podaj godziny: ");
            if (isNaN(g) || !g) {
                g = false;
            }
        }

        if (!m && m !== 0) {
            m = prompt("Podaj minuty: ");
            if (isNaN(m) || !m) {
                m = false;
            }
        }

        if (!s && s !== 0) {
            s = prompt("Podaj sekundy: ");
            if (isNaN(s) || !s) {
                s = false;
            }
        }

        if (isNaN(g) || isNaN(m) || isNaN(s) || g === false || m === false || s === false) {
            alert('to muszą być liczby');
            return h(g, m, s);
        }

        var sec = Math.floor(s);
        var min = Math.floor(m) * 60;
        var hr = Math.floor(g) * 3600;

        return sec + min + hr;

    }
    //console.log(h());


    //x = 0;

    //while (x > 0) {
    //    
    //    if (x === 8) {
    //        x--;
    //        continue;
    //    }
    //    
    //    console.log(x);
    //    
    //    if (x === 5) {
    //        break;
    //    }
    //    
    //    x--;
    //    
    //}
    //
    //
    //
    //x = 10;
    //
    //do {
    //    x++;
    //}

    //while(x < 10);

    function Euklides(a, b) {
        if (a % 1 !== 0 || b % 1 !== 0 || a < 0 || b < 0) {
            alert("Wprowadzono liczbę nienaturalną");
            return false;
        }
        while (a !== b) {
            while (a > b) {
                a = a - b;
            }
            while (a < b) {
                b = b - a;
            }
        }
        return a;
    }

    //console.log(Euklides(23, 13));

    function wydrukujLiczbe(a, b) {

        if (a > 255 || a < 0 || b > 255 || b < 0 || b < a) {
            return false;
        }

        var tab = [];
        var tab2 = [];

        for (var i = a; i <= b; i++) {
            if (i % 2 === 0) {
                tab.push(i);
            } else {
                tab2.unshift(i);
            }
        }

        return tab.concat(tab2);

    }

    //console.log(wydrukujLiczbe(2,10));


    var tabla = new Array(50);
    //console.log(tabla);

    for (var i = 0; i < tabla.length; i++) {
        var rand = Math.round(Math.random() * 100);
        tabla[i] = rand;
    }

    //console.log(tabla);

    function babelki(para) {
        for (var i = 0; i < para.length - 1; i++) {
            for (var j = 0; j < para.length - 1; j++) {
                if (para[j] > para[j + 1]) {
                    var x = para[j];
                    para[j] = para[j + 1];
                    para[j + 1] = x;
                }
            }
        }
        return para;
    }
    //console.log(babelki(tabla));


    function sumaKwadratow(n, a) {
        var x = 0;
        var t = [];
        n = n || prompt('wpisz liczbę');
        if (n > 10 || n < 1 || isNaN(n)) {
            return('bledna wartosc');
        }
        for (i = 1; i <= n; i++) {
            x += i * i;
            t.push(i * i);
        }
        if (a) {
            return {suma: x, skladniki: t};
        }
        return x;
    }
//    console.log(sumaKwadratow(7, false));


    var table2 = [1, 2, 3, 4, 5, 6, 7];
    var table1 = [1, 3, 4, 6, 8, 9];


    function tables(t1, t2) {

        var a = [];
        var b = [];

        for (var i = 0; i < t1.length; i++) {
            if (t2.indexOf(t1[i]) !== -1) {
                a.push(t1[i]);
                t2.splice(t2.indexOf(t1[i]), 1);
            } else {
                b.push(t1[i]);
            }
        }

        b = b.concat(t2);
        return [a, b];

    }


//    console.log(tables([1, 2, 3, 4, 5, 6, 7], [1, 3, 4, 6, 8, 9]));

}


wszycho();

function czasPodrozy(v) {
    
    if (isNaN(v)) {
        alert('wpisz wartość liczbową');
        return false;
    }
    
    var s = 132;
    var t = s / v;

    var godz = parseInt(t);
    t = (t - godz) * 60;
    var min = parseInt(t);
    t = (t - min) * 60;
    var sec = parseInt(t);
    console.log(t, godz, min, sec);
    
    (min < 10) ? min = '0' + min : "";
    (sec < 10) ? sec = '0' + sec : "";

    return godz + ':' + min + ':' + sec; //s=v*t
}
//console.log(czasPodrozy(120));


function addDaysToDate(date) {
    (date) ? date = new Date(date) : date = new Date();
    console.log(date.get);
}

addDaysToDate('2014-05-23', 10);


function Person(n, ln, bD, soc, sex, ph) {
    
    this.__construct = function() {
        if (!n || !ln || !bD || !soc || !sex || !ph) {
            alert('lipa - nie podałeś wszystkich potrzebnych danych');
            return false;
        }
    };
    
    if (this.__construct() === false) {
        return null;
    }
    
    this.name = n;
    this.lastname = ln;
    this.birthDate = bD;
    this.PESEL = soc; 
    this.sex = sex;
    this.phone = ph;
    
    this.show = function() {
        var desc = '';
        with (this) {
            desc += 'Imię: ' + name + '<br/>';
            desc += 'Nazwisko: ' + lastname + '<br/>';
            desc += 'Data przyjścia na padół łez: ' + birthDate + '<br/>';
            desc += 'Identyfikator systemowy: ' + PESEL + '<br/>';
            desc += 'Gender: ' + sex + '<br/>';
            desc += 'Fołn: ' + phone + '<br/>';
        }
        return desc;
        
    };
    
    this.getName = function() {
        return this.name;
    };
    
    this.getSurname = function() {
        return this.lastname;
    };
    
    this.getBD = function() {
        return this.birthDate;
    };
    
    this.getSocialNr = function() {
        return this.PESEL;
    };
    
    this.getSocialGender = function() {
        return this.sex;
    };
    
    this.getPhone = function() {
        return this.phone;
    };
    
}



var names = ['Apollona','Apollina','Apolonia','Arabella','Ariadna','Arleta','Arnolda','Astryda','Atena','Augusta','Augustyna','Aurelia','Aurora','Babeta','Balbina','Barbara','Bartłomieja','Beata','Beatrycja','Beatrycze','Beatryksa','Benedykta','Beniamina','Berenika','Bernarda','Bernadeta','Berta','Betina','Bianka','Bibiana','Blanka','Błażena','Bogdana','Bogna','Boguchwała','Bogumiła','Bogusława','Bojana','Bolesława','Bona','Bożena','Bromira','Bronisława','Brunhilda','Brygida','Cecylia','Celestyna','Celina','Cezaria','Chociemira','Chwalisława','Czesława','Dajmira','Dagna','Dagmara','Dalia','Dalila','Dalmira','Damroka','Dana','Daniela','Danisława','Danuta','Dargomira','Dargosława','Daria','Dąbrówka','Delia','Diana','Dilara','Dobiesława','Domasława','Dominika','Donata','Dorosława','Dorota','Dyzma','Dżanan','Dżamila','Dżesika','Edyta','Eleonora','Eliza','Elwira','Elżbieta','Elmira','Emanuela','Emilia','Emina','Emma','Ernesta','Ernestyna','Eryka','Estera','Eugenia','Ewa','Ewelina','Fabia','Fabiana','Fabiola','Farida','Fatima','Fatma','Faustyna','Felicja','Felicjana','Felicyta','Feliksa','Ferdynanda','Filipa','Filipina','Flora','Floriana','Franciszka','Fryderyka','Gabriela','Gaja','Genowefa','Gerarda','Gertruda','Gizela','Gloria','Gniewomira','Gracja','Gracjana','Grażyna','Greta','Gryzelda','Grzymisława','Gustawa','Gwidona','Hadriana','Halina','Halszka','Hanna','Hedwiga','Helena','Helga','Henrieta','Henryka','Herma','Hermana','Hermenegilda','Hermina','Hestia','Hiacynta','Hilaria','Hildegarda','Hipolita','Honorata','Hortensja','Huberta','Ida','Idosława','Idzia','Idalia','Idzisława','Iga','Ildefonsa','Ilia','Iliana','Ilona','Ilza','Inga','Ingeborga','Ingryda','Irena','Iryda','Iwa','Iwona','Izabela','Izolda','Izydora','Jadwiga','Jagoda','Jana','Janina','Jarmiła','Jaromiła','Jaromira','Jarosława','Jasława','Jaśmina','Joachima','Joanna','Jolanta','Jowita','Józefa','Józefina','Judyta','Julia','Julianna','Julisława','Julita','Justyna','Juta','Kaja','Kalina','Kamila','Karima','Karina','Karola','Karolina','Karyna','Katarzyna','Kasandra','Kazimiera','Kiara','Kiliana','Kinga','Kira','Klara','Klarysa','Klaudia','Klaudyna','Klementyna','Kleopatra','Klotylda','Konstancja','Kordula','Kornelia','Koryna','Kosma','Krystiana','Krystyna','Krzysztofa','Ksawera','Ksenia','Kunegunda','Kwiatosława','Kwietosława','Laila','Lajla','Lana','Larysa','Latifa','Laura','Laurenjca','Lea','Lejla','Lena','Leokadia','Leona','Leonarda','Leoncja','Leonora','Leopolda','Lidia','Ligia','Lilia','Liliana','Linda','Liwia','Lora','Luborada','Lucjana','Lucjola','Lucyna','Ludmiła','Ludolfa','Ludwika','Ludwina','Luiza','Luna','Ładana','Ładysława','Łagoda','Łucja','Macieja','Magda','Magdalena','Maja','Maksa','Maksyma','Malina','Malwina','Małgorzata','Manuela','Marcela','Marcjana','Marcjanna','Maria','Mariam','Marianna','Marietta','Marika','Mariola','Marlena','Marta','Martyna','Maryja','Maryla','Maryna','Marzena','Matylda','Melania','Michalina','Mieczysława','Milena','Milomira','Miłosława','Miłowita','Mira','Mirabela','Miranda','Mirela','Miriam','Mirka','Miroda','Mirołada','Mirosława','Mojmira','Monika','Morzana','Morzena','Nadia','Nadzieja','Najmiła','Najsława','Narcyza','Natalia','Natasza','Nela','Nika','Nikodema','Nikola','Nikoleta','Nina','Nora','Norberta','Norma','Oda','Odeta','Odyla','Ofelia','Oksana','Oktawia','Ola','Olga','Olimpia','Oliwia','Oriana','Ota','Otylia','Ożanna','Olena','Pabiana','Pamela','Patrycja','Paula','Paulina','Pelagia','Petra','Petronela','Petronia','Placyda','Pola','Polmira','Przemysława','Przybysława','Rachela','Ramona','Radmiła','Radomiła','Radomira','Radosława','Rafaela','Rajmunda','Rajna','Raszyda','Rebeka','Regina','Remigia','Renata','Rita','Roberta','Rodzisława','Roksana','Roma','Romana','Romualda','Rozalia','Rozalinda','Rozamunda','Rozetta','Rozwita','Róża','Rudolfina','Ruta','Ryszarda','Sabina','Safira','Salma','Saloma','Salomea','Samanta','Sandra','Sara','Sebastiana','Selena','Selma','Serafina','Seweryna','Sędomira','Sędzisława','Sława','Sławina','Sławomira','Sobiesława','Sonia','Stamira','Stanisława','Stefania','Stela','Stoisława','Stella','Sydney','Strzeżymira','Subisława','Sulima','Sulisława','Sybilla','Sylwana','Sylwia','Szarlota','Szarlin','Szarlina','Szejma','Szymona','Świetlana','Świętomira','Świętosława','Tabita','Tacjana','Tadea','Tamara','Tatiana','Tekla','Telimena','Teodora','Teodozja','Teresa','Tęgomira','Tina','Tolisława','Tomiła','Tomisława','Tulimira','Ulana','Ulryka','Uma','Una','Unima','Urszula','Uta','Wacława','Walentyna','Waleria','Wanda','Wanessa','Wera','Weronika','Wesna','Wiara','Wielina','Wiera','Wierada','Wiesława','Wiktoria','Wilhelmina','Wilma','Wincentyna','Wioleta','Wirgilia','Wirginia','Wisława','Witosława','Władysława','Włodzimiera','Wolimira','Wrocisława','Zaida','Zaira','Zdzisława','Zefiryna','Zenobia','Zenona','Zofia','Zuzanna','Zwinisława','Zygfryda','Zyta','Żaklina','Żaneta','Żanna','Żelisława','Żużanna','Żywia','Żywisława','Abdon','Abel','Abelard','Abraham','Achilles','Achmed','Adam','Adelard','Adnan','Adrian','Agapit','Agaton','Agrypin','Ajdin','Albert','Albin','Albrecht','Aleksander','Aleksy','Alfons','Alfred','Alojzy','Alwin','Amadeusz','Ambroży','Anastazy','Anatol','Andrzej','Anioł','Annasz','Antoni','Antonin','Antonius','Anzelm','Apollo','Apoloniusz','Ariel','Arkadiusz','Arkady','Arnold','Aron','Artur','August','Augustyn','Aurelian','Baldwin','Baltazar','Barabasz','Barnim','Bartłomiej','Bartosz','Bazyli','Beat','Benedykt','Beniamin','Benon','Bernard','Bert','Błażej','Bodosław','Bogdał','Bogdan','Boguchwał','Bogumił','Bogumir','Bogusław','Bogusz','Bolebor','Bolelut','Bolesław','Bonawentura','Bonifacy','Borys','Borysław','Borzywoj','Bożan','Bożidar','Bożydar','Bożimir','Bromir','Bronisław','Bruno','Brunon','Budzisław','Cecyl','Cecylian','Celestyn','Cezar','Cezary','Chociemir','Chrystian','Chwalibóg','Chwalimir','Chwalisław','Cichosław','Cyprian','Cyryl','Czesław','Dajmir','Dal','Dalbor','Damazy','Damian','Daniel','Danisław','Danko','Dargomir','Dargosław','Dariusz','Darwit','Dawid','Denis','Derwit','Dionizy','Dobiesław','Dobrogost','Dobrosław','Domasław','Dominik','Donald','Donat','Dorian','Duszan','Dymitr','Dyter','Dżamil','Dżan','Dżem','Dżemil','Edmund','Edward','Edwin','Efrem','Eliasz','Eligiusz','Emanuel','Emil','Emir','Erazm','Ernest','Erwin','Eugeniusz','Eryk','Ewald','Ewaryst','Ezaw','Ezechiel','Fabian','Farid','Faris','Faustyn','Felicjan','Feliks','Ferdynand','Filip','Florentyn','Florian','Fortunat','Franciszek','Fryc','Fryderyk','Gabriel','Gaj','Gardomir','Gaweł','Gerard','Gerwazy','Gilbert','Ginter','Gniewomir','Godfryg','Godfryd','Godzisław','Gościsław','Gracjan','Grodzisław','Grzegorz','Grzymisław','Gustaw','Gwalbert','Gwido','Gwidon','Hadrian','Hamza','Hanusz','Hasan','Hektor','Heliodor','Henryk','Herakles','Herbert','Herman','Hermes','Hiacynt','Hieronim','Hilary','Hipolit','Honorat','Horacy','Hubert','Hugo','Hugon','Husajn','Idzi','Ignacy','Igor','Ildefons','Inocenty','Ireneusz','Iwan','Iwo','Iwon','Izajasz','Izydor','Jacek','Jacenty','Jakub','Jan','January','Janusz','Jarad','Jaromir','Jaropełk','Jarosław','Jarowit','Jeremiasz','Jerzy','Jędrzej','Joachim','Jona','Jonasz','Jonatan','Jozafat','Józef','Józefat','Julian','Juliusz','Jur','Juri','Justyn','Justynian','Jasuf','Kacper','Kain','Kajetan','Kajfasz','Kajusz','Kamil','Kanimir','Karol','Kasjusz','Kasper','Kastor','Kazimierz','Kemal','Kilian','Klaudiusz','Klemens','Kochan','Kondrat','Konrad','Konradyn','Konstancjusz','Konstanty','Konstantyn','Kordian','Kornel','Korneli','Korneliusz','Kosma','Kryspyn','Krystian','Krystyn','Krzesisław','Krzysztof','Ksawery','Kwiatosław','Kwietosław','Lambert','Laurencjusz','Lech','Lechosław','Lenart','Leo','Leon','Leokadiusz','Leonard','Leopold','Lesław','Leszek','Lew','Longin','Lubisław','Lubogost','Lubomił','Lubomir','Luborad','Lubosław','Lucjan','Ludmił','Ludomił','Ludolf','Ludomir','Ludowit','Ludwik','Ładysław','Łazarz','Łucjan','Łukasz','Maciej','Magnus','Makary','Maksymilian','Malachiasz','Mamert','Manfred','Manuel','Marcel','Marceli','Marcin','Marcjan','Marek','Marian','Marin','Mariusz','Maryn','Mateusz','Maurycjusz','Maurycy','Maurycjusz','Medard','Melchior','Metody','Michał','Mieszko','Mieczysław','Mikołaj','Milan','Miłobąd','Miłogost','Miłomir','Miłorad','Miłosław','Miłowan','Miłowit','Miłosz','Miłowit','Mirod','Miroład','Miron','Mirosław','Mirosz','Modest','Mojmierz','Mojmir','Mojżesz','Mściwoj','Muhamed','Murat','Myślimir','Napoleon','Narcyz','Nasif','Natan','Natanael','Nataniel','Nestor','Nicefor','Niecisław','Nikodem','Norbert','Norman','Odo','Odon','Oktawian','Oktawiusz','Olaf','Oleg','Olgierd','Omar','Onufry','Oskar','Orian','Otniel','Oswald','Otokar','Otto','Otton','Owidiusz','Pabian','Pafnucy','Pakosław','Pankracy','Paskal','Patrycjusz','Patryk','Paweł','Pelagiusz','Petroniusz','Piotr','Placyd','Polikarp','Prokop','Prot','Protazy','Przemysł','Przemysław','Przedpełk','Przybysław','Radogost','Radomił','Radomir','Radosław','Radowit','Radzimir','Rafał','Rajmund','Rajner','Remigiusz','Renat','Robert','Roch','Roderyk','Roger','Roland','Roman','Romeo','Romuald','Ronald','Rosłan','Rudolf','Rufus','Ryszard','Salomon','Samir','Sambor','Samson','Samuel','Sebastian','Serafin','Sergiusz','Serwacy','Seweryn','Sędomir','Sędzisław','Siemowit','Sław','Sławek','Sławomierz','Sławomir','Sobiesław','Sofroniusz','Stanisław','Starwit','Stefan','Stoigniew','Stoisław','Stojan','Strzeżymir','Subisław','Sulibor','Sulisław','Sykstus','Sylwan','Sylwester','Sylwiusz','Symeon','Syriusz','Szczepan','Szymon','Ścibor','Świętibor','Świętomir','Świętopełk','Świętosław','Tadeusz','Tarik','Telesfor','Telimena','Teobald','Teodor','Teodozjusz','Teofil','Tęgomir','Tobiasz','Tomasz','Tomisław','Tristan','Tulimir','Tulimierz','Tymon','Tymoteusz','Tytus','Urban','Ursyn','Wacław','Wahid','Waldemar','Walenty','Walentyn','Walerian','Walery','Walid','Walter','Wandelin','Wawrzyniec','Więcesław','Wenancjusz','Wendelin','Wespazjan','Wielisław','Wiesław','Wiktor','Wilhelm','Wincenty','Wirgiliusz','Wirginiusz','Wisław','Wit','Witold','Witołd','Witosław','Władysław','Włodzimierz','Włodzisław','Wojciech','Wolimir','Wojsław','Wrocisław','Wszebor','Zachariasz','Zbigniew','Zdzisław','Zenobiusz','Zefir','Zefiryn','Zenon','Ziemowit','Zwinisław','Zygfryd','Zygmunt','Żarek','Żarko','Żelisław','Żytomir'];
var surnames = ['Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk', 'Kamiński', 'Lewandowski', 'Zieliński', 'Szymański', 'Dąbrowski', 'Kozłowski', 'Mazur', 'Wojciechowski', 'Kwiatkowski', 'Krawczyk', 'Kaczmarek', 'Grabowski'];



function GeneratePerson(quan) {  
    
    this.quantity = quan;
    
    this.name = null;
    this.surname = null;
    this.birthDate = null;
    this.socialNr = null;
    this.sex = null;
    
    this.generateName = function () {
        var indexNames = Math.floor(Math.random() * names.length);
        return names[indexNames];
    };
    
    this.generateSurname = function () {
        var indexSurnames = Math.floor(Math.random() * surnames.length);
        var surname = surnames[indexSurnames];
        if (surname[surname.length - 1] === 'i' && this.name[this.name.length - 1] === 'a') {
           surname = surname.slice(0,-1) + 'a';           
        }              
        return surname;        
    };
    
    this.generateBirthDate = function () {
        
        var retDate = {};
        
        var year = Math.round(Math.random() * 46) + 1970;
        var month = Math.ceil(Math.random() * 12);

        var max = 31;
        
        if (month === 2) {
            max = 28;
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                max = 29;
            }
        }
        else if (month === 4 || month === 6 || month === 9 || month === 11){
            max = 30;
        }
        
        var day = Math.ceil(Math.random() * max);

        if (day < 10 ) {
            day = '0' + day;
            
        }
         if (month < 10 ) {
            month = '0' + month;
        }
        
        retDate.d = day;
        retDate.m = month;
        retDate.y = year;
        
        retDate.full = day + '-' + month + '-'+ year;
        
        return retDate;
           
    };
    
    this.generateSex = function () {
        if(this.name[this.name.length - 1] === 'a'){
            return 'kobieta';
        }
        else {
            return 'mężczyzna';
        }
    };
    
    this.generateSocialNr = function() {
        
        var cyfry = [];
        
        var yyyy = this.birthDate.y.toString();
        var mm = this.birthDate.m.toString();
        var dd = this.birthDate.d.toString();
        
        cyfry.push(parseInt(yyyy[2]));
        cyfry.push(parseInt(yyyy[3]));
        cyfry.push(parseInt(mm[0]));
        cyfry.push(parseInt(mm[1]));
        cyfry.push(parseInt(dd[0]));
        cyfry.push(parseInt(dd[1]));
        
        cyfry.push(generateRandom(0,9));
        cyfry.push(generateRandom(0,9));
        cyfry.push(generateRandom(0,9));
        
        var dziesiataCyfra = generateRandom(0,9);
        if(this.sex === 'kobieta'){
            while(dziesiataCyfra % 2 !== 0){
                dziesiataCyfra = generateRandom(0,9);
            }
        }
        else if(this.sex === 'mężczyzna'){
            while(dziesiataCyfra % 2 === 0){
                dziesiataCyfra = generateRandom(0,9);   
            }
        }
        else if(this.sex === null) {
            dziesiataCyfra = null;
        }
            
        cyfry.push(dziesiataCyfra);
        
        var jedenastaCyfra = (9* cyfry[0] + 7*cyfry[1] + 3*cyfry[2] + 1*cyfry[3] + 9*cyfry[4] + 7*cyfry[5] + 
                            3*cyfry[6] + 1*cyfry[7] + 9*cyfry[8] + 7*cyfry[9]) % 10;
      
        
        var sumaKontrolna = (1* cyfry[0] + 3*cyfry[1] + 7*cyfry[2] + 9*cyfry[3] + 1*cyfry[4] + 3*cyfry[5] + 
                            7*cyfry[6] + 9*cyfry[7] + 1*cyfry[8] + 3*cyfry[9] + 1*jedenastaCyfra) % 10;
            
        if(sumaKontrolna === 0){
            cyfry.push(jedenastaCyfra);
        }
        
        return cyfry.join('');
        
        console.log(sumaKontrolna, jedenastaCyfra);
        
        console.log(cyfry);
//        return [parseInt(this.birthDate.y.toString()[2]), parseInt(this.birthDate.y.toString()[3])].join('');

    }
    
    this.construct = function (){
        this.name = this.generateName();
        this.surname = this.generateSurname();     
        this.birthDate = this.generateBirthDate();
        this.sex = this.generateSex();
        this.socialNr = this.generateSocialNr();
    };           
 
    this.construct();
    
    
}


var person1 = new GeneratePerson();
console.log(person1);


function generateRandom(min, max) {
    var dif = max - min;
    if(dif < 0) {
        dif *= (-1);
    }
        
    return Math.round(Math.random() * dif) + min;
}

//
//var p1 = new Person(false, 'B', '01-01-2000', '123457689', 'NN', 'classified');
//console.log(p1);
//document.write(p1.show());