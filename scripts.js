// Знаходимо кнопку
const btn = document.getElementById('button');

// Визначаємо дію для кнопки
btn.addEventListener('click', () => {
    // Беремо введений текст
    const text = document.getElementById('notes');
    // Знаходимо батьківський елемент
    const findElement = document.getElementById('ul');
    // Додаємо нове li на початок батьківського елемента
    findElement.insertAdjacentHTML('afterbegin', '<div><li></li><span class="delete">&#xd7;</span></div>');
    // Знаходимо нове li
    const writeText = document.querySelector('li');
    // Записуємо введений текст в нове li   
    writeText.textContent = (text.value);
    // Чистимо input 
    document.getElementById("notes").value = "";
    // Знаходимо всі li в ul
    const findAllLi = findElement.getElementsByTagName('li');

    if( findAllLi.length == 10) {
        document.getElementById("notes").style.display = "none";

        document.getElementById("button").style.display = "none";
        
        document.getElementById("h2").style.display = "block";
    };
});

// Goose
btn.addEventListener('mousedown', () => {
    document.getElementById("goose").style.display = "block";
});

btn.addEventListener('mouseup', () => {
    document.getElementById("goose").style.display = "none";
});

// Видалення
// const task = document.getElementsByTagName('span');

// let deleteTask = document.createElement('span');
// deleteTask.innerHTML = '&times;';
// task.append(deleteTask);

// task.addEventListener('mousedown', function(e){
//     if (e.target == deleteTask && e.target != this) {
//         task.addEventListener('click', function(e){
//             this.remove();
//         })
//     };
// });