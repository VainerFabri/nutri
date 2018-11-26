var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    var pacientes  = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for(var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
    
            if(nome != this.value){
                paciente.classList.add("oculta");
            }else{
                paciente.classList.remove("oculta");
            }
        }
    }else{
        for(var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("oculta");
        }
    }

    
});