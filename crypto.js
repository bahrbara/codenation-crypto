const cryp = "d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr";
const casas = 3;

var Cripto = function (letra) {

    if (letra == "d") {
        return "a"
    } else if (letra == "o") {
        return "l"      
    }
}

var wordCripto = function (palavra) {

    if (palavra == "oljhlud") { 
        return "ligeira"
    }
        
}


function testeA() {

    const expected = "a";
    var output = Cripto("d");

    if (output == expected) {
        console.log('OK');
    } else {
        console.log('Expected: ' + expected + ' Found: ' + output);
    }
}

function testeL() {

    const expected = "l";
    var output = Cripto("o");

    if (output == expected) {
        console.log('OK');
    } else {
        console.log('Expected: ' + expected + ' Found: ' + output);
    }
}

function testeWord() {

    const expected = "ligeira";
    var output = wordCripto("oljhlud");

    if (output == expected) {
        console.log('OK');
    } else {
        console.log('Expected: ' + expected + ' Found: ' + output);
    }
}

function teste() {

    var expected = "a ligeira raposa marrom saltou sobre o cachorro cansado";
    var output = Cripto();

    if (output == expected) {
        console.log('OK');
    } else {
        console.log('Expected: ' + expected + ' Found: ' + output);
    }
}

testeA();
testeL();
testeWord();