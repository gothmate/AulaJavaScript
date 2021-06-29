

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar no Botão de Teste.";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse sobre o texto";
}



/*
function validaidade(idade){
    var validar;
    if(idade >= 18){
        validar="Maior de idade";
    }else{
        validar="Menor de idade";
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaidade(idade));


var nome = "Gabriel Correia";
console.log("Meu nome é "+ nome);
alert("Bem vindo ao primeiro site do "+ nome);

var linguagem = "Python é a melhor linguagem do mundo."
console.log(linguagem.replace("Python", "JavaScript"));


var frutas = ["maçã", "pera", "laranja"];
frutas.push("uva");
frutas.pop();

console.log(frutas);

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
var frutas = [{nome:'maçã', cor:'vermelha'}, {nome:'uva', cor:'roxa'}];
console.log(frutas[1].nome);

var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

var count = 0;
while (count < 5){
    console.log(count);
    count++
}


var count;
for(count=0; count <= 5; count++){
    console.log(count);
};



var d = new Date();
alert(d.getDate() + "/" + (d.getMonth()+1))

function multiplica(n1, n2){
    return(n1 + " multiplicado por " + n2 + " é igual a " + (n1*n2));
}

console.log(multiplica(5, 10));


function validaidade(idade){
    var validar;
    if(idade >= 18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaidade(idade));
*/