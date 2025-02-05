const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === '=') {
            try {
                display.value = eval(display.value); // Evalúa la operación matemática
            } catch {
                display.value = 'Error'; // En caso de error, muestra "Error"
            }
        } else if (button.id === 'C') {
            display.value = ''; // Borra todo el contenido
        } else if (button.id === 'CE') {
            display.value = display.value.slice(0, -1); // Borra un solo carácter
        } else {
            display.value += button.textContent; // Agrega el contenido del botón al display
        }
    });
});
