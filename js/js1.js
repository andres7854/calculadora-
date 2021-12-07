 function sumar(){

    var casilla_uno = parseInt(document.getElementById("casilla_uno").value);
    var casilla_dos = parseInt(document.getElementById("casilla_dos").value);

    var resultado = casilla_uno + casilla_dos;
    document.write(resultado);
}

function restar(){

    var casilla_uno = parseInt(document.getElementById("casilla_uno").value);
    var casilla_dos = parseInt(document.getElementById("casilla_dos").value);

    var resultado = casilla_uno - casilla_dos;
    document.write(resultado);
}

function dividir(){

    var casilla_uno = parseInt(document.getElementById("casilla_uno").value);
    var casilla_dos = parseInt(document.getElementById("casilla_dos").value);

    var resultado = casilla_uno / casilla_dos;
    document.write(resultado);
}

function multiplicar(){

    var casilla_uno = parseInt(document.getElementById("casilla_uno").value);
    var casilla_dos = parseInt(document.getElementById("casilla_dos").value);

    var resultado = casilla_uno * casilla_dos;


    if (resultado= Infinity){

        alert("todo numero que se divida entre cero dara como resultado 0");
        return;
        document.write(resultado);

    }

}


