let Todo=localStorage.getItem('TodoList');
let todoList=Todo ? JSON.parse(Todo) : [];
displayItems();

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let dateItem=dateElement.value;
    dateItem = new Date(dateElement.value).toLocaleDateString('en-GB');// to convert year-month-day to day/month/year format
    todoList.push({item:todoItem, dueDate:dateItem});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    localStorage.setItem('TodoList',JSON.stringify(todoList));
    let containerElement=document.querySelector('.todo-container');
    let newHTML='';
    for(let i=0;i<todoList.length;i++)
    {
        let {item, dueDate}=todoList[i];
        newHTML+= `
        <span class="itm" >${item}</span>
        <span class="dt" >${dueDate}</span>
        <button id="dlt-btn" onclick="todoList.splice(${i},1);
        displayItems();">Delete</button>
        `
    }
    containerElement.innerHTML=newHTML;
}