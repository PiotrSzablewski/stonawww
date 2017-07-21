//var x = 5;
//
//a();
//console.log(x);
//
//
//function a() {
//    c();
//    var x = 7;
//    b(x);
//    console.log(x);
//}
//
//function b(z) {
////    var x;
//    var d = 'aaa';
//    console.log('wewnątrz b x = ' + x);
////    e();
//    function e() {
//        console.log(d);
//    }
//}
//
//
//
//function c() {
//    console.log('aaaaa');
//}
//
//
//
//b();
//
//
//function f(x) {
//    return x + 1;
//}
//
//var y = f(6);


var x;

var a = 'to ja string niepokorny';

var logicznyTyp = true;

var numerros = 0;
var zmiennoprzecinkowos = 1.24;

var obiektos = {
    nazwa: 'wartość',
    nazwa2: 1
};

var tabla = ['w1', 153, {k: 'w'}, x, [1,2,3,4,5]];
var struna = tabla[0];


var nic = null;



//if (numerros === false) {
//    alert('są identyczne');
//}
//else if (numerros == false) {
//    alert('są równe');
//}
//else {
//    alert('nie są identyczne ani równe');
//}



//switch(zmiennoprzecinkowos) {
//    case '1':
//        alert('równe 1');
//        break;
//    case 2:
//        alert('równe 2');
//        break;
//    case 1.24:
//        alert('tak jest');
//        break;
//    default:
//        alert('nara');
//}


//for (var i = 0; i < tabla.length; i++) {
//    document.write(tabla[i] + '<br/>');
//}
//
//
//
//for (var majkel in document) {
//    document.write(majkel + ': ' + document[majkel] + '<br/>');
//}

//console.log(a.split('a'));


function sumaCyfr(liczba) {
    
    if (isNaN(liczba)) {
        alert('Gumbasie podaj wartość liczbową');
        return false;
    }
    
    var suma = 0;
    
    
    console.log(liczba, typeof liczba);
    liczba = liczba.toString();
    console.log(liczba, typeof liczba);
    
    var cyfry = liczba.split('');
    console.log(cyfry);
    
    for (var i = 0; i < cyfry.length; i++) {
        suma += parseInt(cyfry[i]);
//        console.log(cyfry[i]);
    }
    
//    liczba.split('');
    
    
    return suma;
    
    
}

//console.log(sumaCyfr(128423));
//console.log(sumaCyfr(78237834));



function Kursant(imie, nazwisko, skille) {
    
    this.name = imie;
    this.surname = nazwisko;
    this.skills = skille;
    this.foot = null;
    
    this.describe = function() {
        var cnt = '';
        cnt += 'Imię: ' + this.name + '<br/>';
        cnt += 'Nazwisko: ' + this.surname + '<br/>';
        cnt += 'Skille: ' + this.skills + '/10<br/>';
        return cnt;
    };
    
    this.changeSkills = function(newSkills) {
        this.skills = newSkills;
    };
    
}


var k1 = new Kursant('Piotr', 'Mariański', '3');
var k2 = new Kursant('Piotr 2', 'Mariański 2', '3');
//console.log(Math.round(Math.random() * 10));


//document.write(k1.describe());
//k1.changeSkills(Math.round(Math.random() * 10));
//document.write(k1.describe());
//console.log(window.onload);

//window.onload = function() {
//    var sauron = document.querySelector('.logo a');
//    console.log(sauron);
//};

window.addEventListener('load', function(){
    
    var sauron = document.querySelector('.logo a');
    console.log(sauron);
    
    sauron.addEventListener('click', function(e){
        
        e.preventDefault();
        
        var ans = prompt('One does not simply walk in to Mordor... Sure?');
        console.log(ans);
        
        if (ans.toLowerCase() === 'yes') {
            window.location = this.href;
        }
        else if (ans.toLowerCase() === 'no') {
            window.location = 'http://bing.com';
        }
        else {
            alert('U shall not pass!');
            document.querySelector('body').style.background = '#FF0000';
            setTimeout(function(){document.querySelector('body').remove();}, 1500);
        }
        
    });
    
});




var x = 72642;




Number.prototype.sumaCyfr = function(a = false) {
    
    if (isNaN(this)) {
        alert('Gumbasie podaj wartość liczbową');
        return false;
    }
    
    var suma = 0;
    
    var liczba = this;
    
    liczba = liczba.toString();
    
    var cyfry = liczba.split('');
    
    for (var i = 0; i < cyfry.length; i++) {
        suma += parseInt(cyfry[i]);
    }
    
    if (a === true) {
        return alert(suma);
    }

    return suma;
    
};

var y = 24534534;
console.log(x.sumaCyfr(), y.sumaCyfr());



var tabla = [1, 4, 62, 7, 4, 81, 5, 14, 5, 12];

function ileWiecejNiz12(arr) {
    
    var powyzej = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 12) {
            powyzej++;
        }
    }
    
    return powyzej;
    
}

console.log(ileWiecejNiz12(tabla));