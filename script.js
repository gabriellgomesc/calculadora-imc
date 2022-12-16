// IMC
const btn = document.querySelector(".calcular");

var resultados = "";

btn.addEventListener("click", () => {
  let peso = document.querySelector("#mass").value;
  let altura = document.querySelector("#height").value;
  var imc = imc(peso, altura);

  function imc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
  }

  if (imc < 17) {
    resultados = `Peso: ${peso} kg
Altura: ${altura} m
IMC: ${imc}
Situação: muito abaixo do peso`;
  } else if (imc < 18.5) {
    resultados = `Peso: ${peso} kg
Altura: ${altura} m
IMC: ${imc}
Situação: abaixo do peso`;
  } else if ((imc >= 18.5, imc < 24.99)) {
    resultados = `Peso: ${peso} kg
Altura: ${altura} m
IMC: ${imc}
Situação: normal`;
  } else if ((imc >= 24.99, imc < 29.99)) {
    resultados = `Peso: ${peso} kg
Altura: ${altura} m
IMC: ${imc}
Situação: sobrepeso`;
  } else if ((imc >= 30, imc < 39.99)) {
    resultados = `Peso: ${peso} kg
Altura: ${altura} m
IMC: ${imc}
Situação: obesidade`;
  } else if (imc > 40) {
    resultados = `Peso: ${peso} kg
Altura: ${altura} m
IMC: ${imc}
Situação: obesidade grave`;
  }
  document.getElementById("resultados").innerHTML = resultados;
});
