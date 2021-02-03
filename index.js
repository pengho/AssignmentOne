// Assignment One (02.526 IDV)
'use strict'

/*window.onload = () => { // execute commands inside every time browser reloaded
    createtodoList()
}*/

const getData = async () => {
  try {
    const response = await fetch('https://api.data.gov.sg/v1/transport/carpark-availability');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error); 
  }
}



/*function calculate(){
    let n1 = parseInt(document.getElementById("inputOne").value);
    let n2 = parseInt(document.getElementById("inputTwo").value);
    let operator = document.getElementById("operator").value;
    let result;


    switch(operator){
        case "+":
            result = n1+n2;
            break;
        case"-":
            result = n1-n2;
            break;
        case"*":
            result = n1*n2;
            break;
        case"/":
            result = n1/n2;
            break;
    }
    document.getElementById("result").innerHTML=result;
}

function addTask(){
    let task = document.getElementById("task").value;
    if(localStorage.getItem("todo")===null){ //if no list, then create one
        let todo = {}; 
        localStorage.setItem("todo", JSON.stringify(todo)) //string it
    }
    let todoStore = JSON.parse(localStorage.getItem("todo"));
    let todoIDS = Object.keys(todoStore)
    let id;
    if (todoIDS.length === 0){
        id = 1;        
    } else {
        id = parseInt(todoIDS[todoIDS.length -1])+1; //adding index for new item
    }
    todoStore[id.toString()] = task;
    localStorage.setItem("todo", JSON.stringify(todoStore))
    location.reload() //reload browser
}

function deleteTask(){
    let taskID= document.getElementById("taskID").value;
    let todoStore = JSON.parse(localStorage.getItem("todo"));
    if (todoStore){
        delete todoStore[taskID];
        localStorage.setItem("todo", JSON.stringify(todoStore));  
    }
    location.reload(); //refreshes browser
}


function deleteAllTasks() {
    if(localStorage.getItem("todo")){ //if there is still a todo list, remove all the whole list
        localStorage.removeItem("todo");
        location.reload(); //refreshes browser
    }
}


function createtodoList() {
    let todo = JSON.parse(localStorage.getItem("todo"))
    let todoList = document.getElementById("todo"); //accessing the todo container

    if(todo) {
        for(let item of Object.keys(todo)) { //accessubg all ids in the todo store
            let task = document.createElement('p') // empty p tag <p>1) task...</p>
            task.innerHTML = `(${item}) ` + todo[item] // 1) item
            todoList.appendChild(task) // div with id == "todo" with new p created
        }
    }
}
*/

/*
Local Storage

localStorage.getItem("Key Name");
localStorage.setItem("Key Name", item that you want to store);
localStorage.removeItem("Key Name");

storingObject -> JSON.stringify(localStorage.getItem("Key Name"))


*/