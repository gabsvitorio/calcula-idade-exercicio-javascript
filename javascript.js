var idade, categoria

function calcularIdade(){
    idade = document.getElementById("idade").value

    if(idade > 0 && idade < 8){
        categoria = document.getElementById("categoria").innerHTML = "<p>Infantil A</p>"
    }else if(idade >= 8 && idade <= 11){
        categoria = document.getElementById("categoria").innerHTML = "<p>Infantil B</p>"
    }else if(idade >= 12 && idade <= 17){
        categoria = document.getElementById("categoria").innerHTML = "<p>Juvenil</p>"
    }else if (idade > 17){
        categoria = document.getElementById("categoria").innerHTML = "<p>Adulto</p>"
    }else{
        alert('Digite uma idade válida!')
    }
}