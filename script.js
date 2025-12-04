console.log("Inizio esecuzione");
let d =new Date();
console.log(d)
document.getElementById("saluto").innerHTML = "Oggi è " + d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();

function elabora() {
    let numero = document.getElementById("inNumber").value;
    if (numero >= 0 && numero <= 255){
        document.getElementById("outText").innerHTML = "Hai inserito il numero: " + numero;
        document.getElementById("error").innerHTML = "Errori";
    } else{
        document.getElementById("error").innerHTML = "Hai inserito un numero sbagliato";
        document.getElementById("outText").innerHTML = "Output";
    }
}

function annulla() {
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("error").innerHTML = "Errori";
}