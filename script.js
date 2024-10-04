const containerOfTasks = document.querySelector(".container__tasks");
const addButton = document.querySelector("#add");
const form = document.querySelector("#form");
const containerOfActiveTasks = document.querySelector('.container__tasks-active');
const containerOfDoneTasks = document.querySelector('.container__tasks-done');
const containerOfNewTask = document.querySelector('.container__new-task');

addButton.addEventListener("click", addNewTask);
form.addEventListener('submit', addNewTask);
// document.getElementById("deadline").addEventListener("change", getDeadline);


containerOfTasks.addEventListener("click", removeTask);
containerOfTasks.addEventListener("click", editTask);
containerOfTasks.addEventListener("click", saveEditedTask);
containerOfTasks.addEventListener("click", moveToDone);
containerOfNewTask.addEventListener("click", showDiferentTasks);

function addNewTask(event) {
    event.preventDefault();
    const valueOfInput = document.querySelector("input").value;
    const dateFromInput = document.getElementById("deadline").value;
    const deadline = new Date(dateFromInput);
    const date = new Date();
    
    if (valueOfInput !== '') {
        containerOfActiveTasks.firstElementChild.insertAdjacentHTML(
        "afterend",
        `<div class="container__task">
        <span class="container__task-mark">
            <svg width="30px" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve"><g><g><polygon fill="" points="293.333,135.04 190.08,240.213 137.173,187.093 108.8,215.467 192.213,298.667 326.187,168.747 "></polygon></g></g><g><g><path fill="" d="M213.333,0C95.513,0,0,95.513,0,213.333s95.513,213.333,213.333,213.333s213.333-95.513,213.333-213.333 S331.154,0,213.333,0z M213.333,388.053c-96.495,0-174.72-78.225-174.72-174.72s78.225-174.72,174.72-174.72 c96.446,0.117,174.602,78.273,174.72,174.72C388.053,309.829,309.829,388.053,213.333,388.053z"></path></g></g></svg>
        </span>
        <div class="container__task-info">
            <div class="container__task-description">
                <p>${valueOfInput}</p>
            </div>
            <div class="container__task-deadline">
                <p>дата создания: ${zeros(date.getDate())}/${zeros(date.getMonth()+1)}/${date.getFullYear()}</p>
                <p>deadline:  ${zeros(deadline.getDate())}/${zeros(deadline.getMonth()+1)}/${deadline.getFullYear()} к ${zeros(deadline.getHours())}: ${zeros(deadline.getMinutes())}</p>
            </div>
        </div>
        <div class="container__task-actions">
            <span id="edit">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4.00023H6.8C5.11984 4.00023 4.27976 4.00023 3.63803 4.32721C3.07354 4.61483 2.6146 5.07377 2.32698 5.63826C2 6.27999 2 7.12007 2 8.80023V17.2002C2 18.8804 2 19.7205 2.32698 20.3622C2.6146 20.9267 3.07354 21.3856 3.63803 21.6732C4.27976 22.0002 5.11984 22.0002 6.8 22.0002H15.2C16.8802 22.0002 17.7202 22.0002 18.362 21.6732C18.9265 21.3856 19.3854 20.9267 19.673 20.3622C20 19.7205 20 18.8804 20 17.2002V13.0002M7.99997 16.0002H9.67452C10.1637 16.0002 10.4083 16.0002 10.6385 15.945C10.8425 15.896 11.0376 15.8152 11.2166 15.7055C11.4184 15.5818 11.5914 15.4089 11.9373 15.063L21.5 5.50023C22.3284 4.6718 22.3284 3.32865 21.5 2.50023C20.6716 1.6718 19.3284 1.6718 18.5 2.50022L8.93723 12.063C8.59133 12.4089 8.41838 12.5818 8.29469 12.7837C8.18504 12.9626 8.10423 13.1577 8.05523 13.3618C7.99997 13.5919 7.99997 13.8365 7.99997 14.3257V16.0002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span id="save">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" fill="#0F0F0F"/>
                </svg>
            </span>
            <span id="remove">
                <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 5H18M9 5V5C10.5769 3.16026 13.4231 3.16026 15 5V5M9 20H15C16.1046 20 17 19.1046 17 18V9C17 8.44772 16.5523 8 16 8H8C7.44772 8 7 8.44772 7 9V18C7 19.1046 7.89543 20 9 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </div>
    </div>`
    );
    }
    document.querySelector("input").value = "";
    sendAllTasksToStorage();
}

function removeTask(event) {
    if (event.target.id === "remove") {
        event.target.closest(".container__task").remove();
        sendAllTasksToStorage();
    }
}

function editTask(event) {
    if (event.target.id === "edit") {
        const parent = event.target.closest('.container__task');
        const descriptionOfTask = parent.querySelector(
            ".container__task-description"
        );
        let textOfTask = descriptionOfTask.firstElementChild.textContent;
        descriptionOfTask.outerHTML =
            '<input class="container__task-input" type="text">';
        parent.querySelector(".container__task-input").value = textOfTask;
    }
}

function saveEditedTask(event) {
    if (event.target.id === "save") {
        const parent = event.target.closest('.container__task');
        const input = parent.querySelector(".container__task-input"); // querySelector и сотальные можно применить не только к document
        const valueOfInput = input.value;
        input.outerHTML = 
        `<div class="container__task-description">
            <p>${valueOfInput}</p>
        </div>`;
    }
    sendAllTasksToStorage();
}

function moveToDone(event) {
    if (event.target.className === 'container__task-mark') {
        const task = event.target.closest('.container__task');
        event.target.className = 'container__task-mark selected';
        const parentForDone = document.querySelector('.container__tasks-done');
        parentForDone.append(task);
    }
    sendAllTasksToStorage();
}

function showDiferentTasks(event) {
    if (event.target.value === 'active') {       // option передает value в select. И брать value надо из select
        containerOfDoneTasks.style.display = 'none';
        containerOfActiveTasks.style.display = 'block';
        document.querySelector('#all-tasks').style.display = 'none';
    } else if (event.target.value === 'done') {
        containerOfDoneTasks.style.display = 'block';
        containerOfActiveTasks.style.display = 'none';
    } else if (event.target.value === 'all') { 
        containerOfDoneTasks.style.display = 'block';
        containerOfActiveTasks.style.display = 'block';
        document.querySelector('#all-tasks').style.display = 'block';
    }    
}

function sendAllTasksToStorage() {
    const tasks = document.querySelectorAll('.container__task');
    const tasksToLocalStorage = [];
    tasks.forEach(task => {
    tasksToLocalStorage.push(task.outerHTML)   
    });
    localStorage.setItem('tasks', JSON.stringify(tasksToLocalStorage));
}


function getTasksFromStordge() {

    const tasks = JSON.parse(localStorage.tasks);
    tasks.forEach(task => {
        if(!task.includes('selected')) {
            containerOfActiveTasks.firstElementChild.insertAdjacentHTML(
                "afterend", task);
        } else {
            containerOfDoneTasks.firstElementChild.insertAdjacentHTML(
                "afterend", task); 
        }
    })


    // const tasks = JSON.parse(localStorage.tasks);
    // tasks.forEach(task => {
    //         containerOfActiveTasks.firstElementChild.insertAdjacentHTML(
    //             "afterend", task); // просто task потому что вытаскиваем из хранилища а там у нас уже outerHTML
    // })

    // const gotTasks = document.querySelectorAll('.container__task');
    // gotTasks.forEach(task => {
    //     if(task.firstElementChild.classList.contains('selected')) {
    //         containerOfDoneTasks.firstElementChild.after(task); // а тут мы получаем уже готовые объекты со страницы
    //     }
    // })  
}

getTasksFromStordge()

function getTodayDate() {
    const date = new Date();
    const todayDateContainer = document.querySelector('#today-date');
    const clockContainer = document.querySelector('#clock');

    todayDateContainer.innerHTML = `${zeros(date.getDate())}/${zeros(date.getMonth()+1)}/${date.getFullYear()}`;
    clockContainer.innerHTML = `${zeros(date.getHours())}:${zeros(date.getMinutes())}:${zeros(date.getSeconds())}`;
}

function zeros(i) {
    if (i < 10) {
      return "0" + i;
    } else {
      return i;
    }
}

setInterval(getTodayDate, 1000);


function timer(deadline) {
    const currentDate = new Date();
    const hours = Math.floor ( (deadline - currentDate) / 3600000 );
    const min = Math.floor( ((deadline - currentDate) % 3600000) / 60000 );
    const sec = Math.floor ( (((deadline - currentDate) % 3600000) % 60000) / 1000 )
    console.log(`${hours} : ${min} : ${sec}`)
}
