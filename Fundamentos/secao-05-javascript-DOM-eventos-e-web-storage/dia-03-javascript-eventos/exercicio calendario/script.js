const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
const createDayOfMonth = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let getDaysList = document.querySelector('#days');
    
    for (let index = 0 ; index < decemberDaysList.length; index += 1){
        let day = decemberDaysList[index]
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;

        if(day === 24 || day === 31){
            dayItem.className = 'day holiday'
            getDaysList.appendChild(dayItem)

        }else if(day === 4 || day === 11 || day === 18){
            dayItem.className = 'day friday'
            getDaysList.appendChild(dayItem)

        }else if(day === 25){
            dayItem.className = 'day holiday friday'
            getDaysList.appendChild(dayItem)

        }else{
            dayItem.className = 'day'
            getDaysList.appendChild(dayItem);

        }
}
}
createDayOfMonth();

function createHolidayButton(buttonName){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button')
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;

    buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados');

function displayHolidays(){
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let  backgroundColor = 'rgb(238,238,238)';
    let newColor = 'green'

    getHolidayButton.addEventListener('click', () =>{
        for(let index = 0; index < getHolidays.length; index += 1){
            if(getHolidays[index].style.backgroundColor === 'green'){
                getHolidays[index].style.backgroundColor = backgroundColor;
                getHolidays[index].style.color = '#777'
            }
            else{
                getHolidays[index].style.backgroundColor = 'green';
                getHolidays[index].style.color = 'white'
            }
        }
    })
}
displayHolidays();

function createFridayButton(buttonName){
    let buttonContainer = document.querySelector('.buttons-container')
    let newButton = document.createElement('button')
    let newButtonID = 'btn-friday'
    
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;

    buttonContainer.appendChild(newButton)

}
createFridayButton('SEXTOU!');

function displayFridays(fridaysArray){
    let getFridayButton = document.querySelector('#btn-friday');
    let getFridayDays = document.getElementsByClassName('friday');
    let  backgroundColor = 'rgb(238,238,238)';
    let newText = 'Sextou!!'
    let newColor = 'yellow';

    getFridayButton.addEventListener('click', () => {
        for(let index = 0; index < getFridayDays.length ; index += 1){
            if(getFridayDays[index].style.backgroundColor !== newColor && getFridayDays[index].innerHTML !== newText){
                getFridayDays[index].style.backgroundColor = newColor;
                getFridayDays[index].innerHTML = newText;
                
            }
            else{
                getFridayDays[index].style.backgroundColor = backgroundColor;
                getFridayDays[index].innerHTML = fridaysArray[index]
               
            }
        }
       
    })
}
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

function zoomDay(){
    let daysList = document.querySelector('#days')

    daysList.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '30px'
        event.target.style.fontWeight = '600'
    })
}
zoomDay()

function reverseZoomDay(){
    let daysList = document.querySelector('#days')

    daysList.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200'
    })
}
reverseZoomDay();

function newTaskSpan(task){
    let taskContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');

    taskName.innerHTML = task;
    taskContainer.appendChild(taskName);
}
newTaskSpan('Projeto');

function newTasksDiv(color){

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div')
    
    newTask.className = 'task'
    newTask.style.backgroundColor = color

    tasksContainer.appendChild(newTask);

}
newTasksDiv('blue');

const setTaskClass = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
   
    myTasks.addEventListener('click', (event) =>{
        if(selectedTask.length === 0){
            event.target.className = 'task selected'
        }else{
            event.target.className = 'task'

        }
    })
  }
  setTaskClass();

  function setColorDay(){
    let daysList = document.querySelector('#days');
    let task = document.querySelector('.task');
    let taskColor = task.style.backgroundColor;
    let originalColor = 'rgb(238,238,238)'
    
    daysList.addEventListener('click', (event) => {
        if(daysList.style.backgroundColor === taskColor){
       
        event.target.style.backgroundColor = originalColor;
        }
        else{
        event.target.style.backgroundColor = taskColor
        } 
        
    })
   }

  

  setColorDay();
 
 