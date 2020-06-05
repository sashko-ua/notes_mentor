// Знаходимо кнопку
const btn = document.getElementById('button');

// Визначаємо дію для кнопки
btn.addEventListener('click', () => {
    // Беремо введений текст
    const text = document.getElementById('notes');
    // Знаходимо батьківський елемент
    const a = document.getElementById('ul');
    // Додаємо нове li на початок батьківського елемента
    a.insertAdjacentHTML('afterbegin', '<li></li><div>&#xd7;</div>');
    // Знаходимо нове li
    const writeText = document.querySelector('li');
    // Записуємо введений текст в нове li   
    writeText.textContent = (text.value);
    // Чистимо input 
    document.getElementById("notes").value = "";
    // Знаходимо всі li в ul
    const b = a.getElementsByTagName('li');

    if( b.length == 10) {
        document.getElementById("notes").style.display = "none";

        document.getElementById("button").style.display = "none";
        
        document.getElementById("h4").style.display = "block";
    };
});