let display = document.getElementById('display'); // �������� ������ �� ���� �����
let historyDiv = document.getElementById('history'); // �������� ������ �� div �������
let currentExpression = ""; // ���������� ��� �������� �������� ���������

function appendToDisplay(value) {
    currentExpression += value;  // ��������� �������� � �������� ���������
    display.value = currentExpression; // ��������� �����������
}

function clearDisplay() {
    currentExpression = ""; // ������� ������� ���������
    display.value = ""; // ������� �������
}

function calculate() {
    try {
        let result = eval(currentExpression); // ��������� ���������
        display.value = result; // ���������� ���������

        addToHistory(currentExpression + " = " + result); // ��������� � �������
        currentExpression = result.toString(); //��������� ��������� ��� ���� ����������

    } catch (error) {
        display.value = "Error"; // ���������� ������
    }
}

function addToHistory(expression) {
    let newEntry = document.createElement('p'); // ������� ����� ������� <p>
    newEntry.textContent = expression; // ������������� ����� ��������
    historyDiv.appendChild(newEntry); // ��������� ������� � ���� �������
}
