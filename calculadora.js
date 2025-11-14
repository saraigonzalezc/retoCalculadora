
function agregar(valor) {
  document.getElementById('resultado').value += valor;
}

function calcular() {
  try {
    let expresion = document.getElementById('resultado').value;
    let resultado = eval(expresion);
    document.getElementById('resultado').value = resultado;
  } catch (error) {
    document.getElementById('resultado').value = 'Error';
  }
}

function borrar() {
  document.getElementById('resultado').value = '';
}