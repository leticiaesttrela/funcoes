const calcularPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
  };
  
  function imprimirResposta() {
    var base = document.querySelector("#base").value;
    var expoente = document.querySelector("#expoente").value;
    var resposta = calcularPotencia(base, expoente);
    var respostadiv = document.querySelector("#resposta");
    respostadiv.textContent = resposta;
  }
  