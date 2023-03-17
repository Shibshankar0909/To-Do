//selectors
const todoInput=document.querySelector(".Todo-input");
const todoButton=document.querySelector(".Todo-button");
const todolist=document.querySelector(".Todo-list");
const todoDesc=document.querySelector(".taskDes");

//event listeners
todoButton.addEventListener("click" , addTodo);
todolist.addEventListener("click", deleteCheck);

//functions
function addTodo(event){
    if(todoInput.value==''){
        alert('Add a task first');
    }else{
        event.preventDefault();
    const todoDiv= document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement("li");
    newTodo.classList.add("todo-item");
    const todopara=document.createElement("p");
    todopara.classList.add("paraclass");
    todopara.innerText=todoInput.value;

    newTodo.appendChild(todopara);
    todoDiv.appendChild(newTodo);
    
    if(todoDesc.value==''){
    }else{
        const descPara=document.createElement('p');
        descPara.classList.add('description');
        descPara.innerText='Description Of Task :'+todoDesc.value;
        newTodo.appendChild(descPara);
    }
    const donebtn=document.createElement("button");
    donebtn.classList.add("doneclass");
    donebtn.innerHTML='Done';
    newTodo.appendChild(donebtn);

    const delbtn=document.createElement("button");
    delbtn.classList.add("delclass");
    delbtn.innerHTML='Delete';
    newTodo.appendChild(delbtn);

    todolist.appendChild(todoDiv);
    alert('Task Added');
    }
    todoDesc.value='';
    todoInput.value='';
}

function deleteCheck(event2){
    const item=event2.target;
    if(item.classList=='delclass'){
        const delt=item.parentElement;
        delt.classList.toggle('deleted');
        delt.addEventListener('transitionend',function(){
            delt.remove();
        })
    }
    else if(item.classList=='doneclass'){
        const delt=item.parentElement;
        delt.classList.toggle('completed');
    }

}
