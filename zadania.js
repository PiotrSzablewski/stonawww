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