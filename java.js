 // Generar un número aleatorio del 1 al 100
 const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
 let intentoActual = null;

 // Mostrar el número que el usuario podría estar pensando

 document.getElementById('resultado').innerHTML = `<p class="text-info"> ¿Es tu número ${numeroAleatorio}?</p>`;

 // Event listener para el botón "Menor"
 document.getElementById('menorBtn').addEventListener('click', function() {
   // Generar un nuevo número aleatorio menor que el número actual
   intentoActual = Math.floor(Math.random() * numeroAleatorio) + 1;
   actualizarResultado(intentoActual);
 });

 // Event listener para el botón "Correcto"
 document.getElementById('correctoBtn').addEventListener('click', function() {
    if (intentoActual === null) {
        alert('¡Excelente decisión! Has adivinado el número.');
    } else if (intentoActual === numeroAleatorio) {
    } else {
      alert(`Felicidades su Numero es:  ${intentoActual}`);
    }
  });

 // Event listener para el botón "Mayor"
 document.getElementById('mayorBtn').addEventListener('click', function() {
   // Generar un nuevo número aleatorio mayor que el número actual
   intentoActual = Math.floor(Math.random() * (100 - numeroAleatorio + 1)) + numeroAleatorio;
   actualizarResultado(intentoActual);
 });

 // Función para actualizar el resultado en el DOM
 function actualizarResultado(numero) {
   document.getElementById('resultado').innerHTML = `<p class="text-info">¿Es tu número ${numero}?</p>`;
 }