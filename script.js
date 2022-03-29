var numsc = parseInt(Math.random() * 11);
var tentativs = 3;
console.log(numsc);
function Chutar() {
  var valorimput = parseInt(document.getElementById("valor").value);
  var retorno = document.getElementById("resultado");
  tentativs = tentativs - 1;

  if (valorimput > 10 || valorimput < 0) {
    retorno.innerHTML = "Numeros de 0 a 10!!!!";
  } else if (valorimput == numsc) {
    retorno.innerHTML =
      "Voçe acertou com " + tentativs + " tentativas restantes";
    resetar();
  } else {
    retorno.innerHTML = "Voçe errou!!!";
    attcont();
    verifica();
  }
}

function attcont() {
  const p = document.getElementById("chance");
  p.innerText = tentativs;
}

function resetar() {
  tentativs = 3;
  numsc = parseInt(Math.random() * 11);
  attcont();
}

function verifica() {
  if (tentativs == 0) {
    alert("Acabou as chances o valor era: " + numsc);
    resetar();
  } else {
    dicas();
  }
}

function dicas() {
  var valorimput = parseInt(document.getElementById("valor").value);
  if (numsc < valorimput) {
    alert("O numero secreto é menor que o numero digitado");
  } else {
    alert("O numero secreto é maior que o numero digitado");
  }
}