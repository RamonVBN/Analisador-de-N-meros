let valores = [];
let selnum = window.document.getElementById("selnum");
let res = window.document.getElementById("res");

function adicionar() {
  res.innerHTML = null;
  var num = window.document.getElementById("number");
  let n = Number(num.value);

  let validation = false;

  for (let pos in valores) {
    if (valores[pos] == n) {
      validation = true;
      break;
    }
  }

  // Same shit but with array function
  //   const validation = valores.some((value) => value === n);

  if (num.value.length == 0 || n > 100 || n <= 0 || validation) {
    window.alert("Valor inválido ou já encontrado na lista.");
  } else {
    valores.push(n);
    let item = window.document.createElement("option");
    item.text = `Valor ${n} foi adicionado.`;
    selnum.appendChild(item);
  }

  num.value = null;
  num.focus();
}

function menor() {
  
  let menor = valores.sort()[0];

  return menor;
}

function maior() {
  
  let maior = valores.sort()[valores.length - 1];

  return maior;
}

function soma() {
  let soma = null;
  for (let pos in valores) {
    soma += valores[pos];
  }

  // same shit but with array functions
  //   valores.forEach((value) => (soma += value));

  return soma;
}

function media() {
  let media = soma() / valores.length;

  return media;
}

function analisar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados <br>`;
    res.innerHTML += `<br> O menor valor  informado foi ${menor()} <br>`;
    res.innerHTML += `<br> O maior valor  informado foi ${maior()} <br>`;
    res.innerHTML += `<br> Somando todos os valores, temos ${soma()} <br>`;
    res.innerHTML += `<br> A média dos valores digitados é  ${media()} <br>`;
  }
}

function reset() {
  valores = [];
  selnum.replaceChildren(null);
  res.innerHTML = null;
  
}
