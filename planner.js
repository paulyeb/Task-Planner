const form = document.querySelector('#form');
const taskList = document.querySelector('#tasks');
const noTaskName = document.querySelector('#noTaskName');
const noTaskTime = document.querySelector('#noTaskTime');
const noTaskDate = document.querySelector('#noTaskDate');
const filter = document.querySelector('#filter');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
filter.addEventListener('keyup', filterItems);

function addTask(e) {
    
    e.preventDefault();

    const newTask = document.querySelector('#task').value;

    const newTaskTime = document.querySelector('#time').value;

    const newTaskDate = document.querySelector('#date').value;

    noTaskName.innerHTML = null;
    noTaskTime.innerHTML = null;
    noTaskDate.innerHTML = null;

    if (newTask == '') {

        noTaskName.className = 'text-danger h6 bold';

        const noTaskNameText = document.createTextNode('ADD TASK');

        noTaskName.appendChild(noTaskNameText);

        setTimeout(() => noTaskNameText.remove(), 1000);
        
    } else if (newTaskTime == '') {

        noTaskTime.className = 'text-danger h6 bold';

        const noTaskTimeText = document.createTextNode('ADD TIME');

        noTaskTime.appendChild(noTaskTimeText);

        setTimeout(() => noTaskTimeText.remove(), 1000);

    } else if (newTaskDate == '') {

        noTaskDate.className = 'text-danger h6 bold';

        const noTaskDateText = document.createTextNode('ADD DATE');

        noTaskDate.appendChild(noTaskDateText);

        setTimeout(() => noTaskDateText.remove(), 1000);

    } else {

        let li = document.createElement('li');
    
        li.className = 'list-group-item h4';
    
        li.style.borderLeft = '6px solid green';
    
        li.appendChild(document.createTextNode(newTask));

        const time = document.createElement('p');
    
        time.className = 'h6 pt-2';
    
        time.appendChild(document.createTextNode(newTaskTime));

        li.appendChild(time);
        
        const date = document.createElement('p');
    
        date.className = 'h6';
    
        date.appendChild(document.createTextNode(newTaskDate));

        li.appendChild(date);
      
        const deleteBtn = document.createElement('button');
        
        deleteBtn.className = ' btn btn-danger btn-sm float-end delete';
        
        deleteBtn.appendChild(document.createTextNode('X'));
    
        li.appendChild(deleteBtn);
    
        taskList.appendChild(li);
    }


}

function removeTask(e) {
    if (e.target.classList.contains('delete')){
        //if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            taskList.removeChild(li);
        //};
    };
}

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    
    const tasks = taskList.getElementsByTagName('li');

    Array.from(tasks).forEach((task) => {

            const taskName = task.firstChild.textContent;
            if (taskName.toLowerCase().indexOf(text) != -1) {

                task.style.display = 'block';

            } else {

                task.style.display = 'none';

            }
        })
}