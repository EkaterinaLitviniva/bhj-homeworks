const buttonAdd = document.getElementById('tasks__add');
buttonAdd.setAttribute('type', 'button');

const inputAdd = document.getElementById('task__input');
const toDoList = document.getElementById('tasks__list');

let eventBrought = false;

function addToDoList(event) {
    event.preventDefault();
    if (inputAdd.value != '') {
        toDoList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${inputAdd.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
        
        inputAdd.value = '';
        eventBrought = true;   
    }

    if (eventBrought) { 
        let arrayToDo = document.querySelectorAll('.task__remove')

        for (let i = 0; i < arrayToDo.length; i++)
        arrayToDo[i].onclick = function() {
            let yet = arrayToDo[i].closest('.task');
            yet.remove();
            eventBrought = false;
        }

        eventBrought = true;
    }
}

inputAdd.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        addToDoList(e);
    }
});

buttonAdd.addEventListener('click', addToDoList);