let display = document.getElementById('display'); // Получаем ссылку на поле ввода
let historyDiv = document.getElementById('history'); // Получаем ссылку на div истории
let currentExpression = ""; // переменная для хранения текущего выражения

function appendToDisplay(value) {
    currentExpression += value;  // Добавляем значение к текущему выражению
    display.value = currentExpression; // Обновляем отображение
}

function clearDisplay() {
    currentExpression = ""; // Очищаем текущее выражение
    display.value = ""; // Очищаем дисплей
}

function calculate() {
    try {
        let result = eval(currentExpression); // Вычисляем результат
        display.value = result; // Отображаем результат

        addToHistory(currentExpression + " = " + result); // Добавляем в историю
        currentExpression = result.toString(); // Сохраняем результат для след вычислений
    } catch (error) {
        display.value = "Error"; // Отображаем ошибку
    }
}

function addToHistory(expression) {
    let newEntry = document.createElement('p'); // Создаем новый элемент <p>
    newEntry.textContent = expression; // станавливаем текст элемента
    historyDiv.appendChild(newEntry); // Добавляем элемент в блок истории
}
