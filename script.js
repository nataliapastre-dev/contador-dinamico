function contar() {
  const ini = document.getElementById('txti');
  const fim = document.getElementById('txtf');
  const passo = document.getElementById('txtp');
  const res = document.getElementById('res');
  const progress = document.getElementById('progress');

  if (!ini.value || !fim.value || !passo.value) {
    res.innerHTML = '⚠️ Preencha todos os campos.';
    return;
  }

  let i = Number(ini.value);
  let f = Number(fim.value);
  let p = Number(passo.value);

  if (p <= 0) {
    alert("Passo inválido! Usando PASSO 1.");
    p = 1;
  }

  res.innerHTML = "<strong>Contando...</strong>";
  progress.style.width = "0%";

  let numeros = [];

  if (i < f) {
    for (let c = i; c <= f; c += p) {
      numeros.push(c);
    }
  } else {
    for (let c = i; c >= f; c -= p) {
      numeros.push(c);
    }
  }

  // Animação da contagem
  let index = 0;
  res.innerHTML = "";
  
  let intervalo = setInterval(() => {
    res.innerHTML += `${numeros[index]} 👉 `;

    // Atualiza barra de progresso
    let progresso = ((index + 1) / numeros.length) * 100;
    progress.style.width = progresso + "%";

    index++;

    if (index === numeros.length) {
      clearInterval(intervalo);
      res.innerHTML += "🏁";
    }
  }, 200);
}
