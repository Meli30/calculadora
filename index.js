const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === '=') {
            try {
                let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*"); // Reemplaza '÷' por '/' y '×' por '*'
                const result = new Function(`return ${expression}`)();
                
                display.value = result === Infinity || isNaN(result) ? 'Error' : result;
            } catch {
                display.value = 'Error';
            }
        } 
        // Borra todo el contenido
        else if (button.id === 'C') {
            display.value = ''; 
        } 
        // Borra un solo carácter
        else if (button.id === 'CE') {
            display.value = display.value.slice(0, -1); 
        } 
        // Aplicar porcentaje a toda la expresión
        else if (button.id === '%') {
            try {
                let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*"); 
                let result = eval(expression) / 100;
                display.value = isNaN(result) ? 'Error' : result;
            } catch {
                display.value = 'Error';
            }
        } 
        else {
            // Evita operadores duplicados seguidos (ej. `++`, `**`, `//`, `××`, `÷÷`)
            if (/[\+\-\*\/×÷]$/.test(display.value + value)) return;

            display.value += value;
        }
    });
});
