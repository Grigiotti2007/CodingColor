console.log("Inizio esecuzione");
function elabora() {
    let numero = document.getElementById("inNumber").value;
    if (numero >= 0 && numero <= 255){
        document.getElementById("outText").innerHTML = "Hai inserito il numero " + numero;;
    } else{
        document.getElementById("error").innerHTML = "Hai inserito un numero sbagliato";
    }
}

function annulla() {
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("error").innerHTML = "Errori";
}