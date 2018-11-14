var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 300){
    tdImc.textContent = "Peso inválido!";
    pesoValido = false;
}

if(altura <= 0 || altura >= 3.00){
    tdImc.textContent = "Altura inválida!";
    alturaValida = false;
}

if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}