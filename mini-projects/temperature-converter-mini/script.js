console.log('script is ready');

const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

// Convert Celsius to Fahrenheit
celsiusInput.addEventListener('input', () => {
    const celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
        fahrenheitInput.value = '';
        return;
    }
    const fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
});

// Convert Fahrenheit to Celsius
fahrenheitInput.addEventListener('input', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) {
        celsiusInput.value = '';
        return;
    }
    const celsius = ((fahrenheit - 32) * 5) / 9;
    celsiusInput.value = celsius.toFixed(2);
});
