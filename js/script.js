

let firstToDo = [];

function myFunction() {
  firstToDo.unshift(document.getElementById('enter-todo').value);

  console.log(firstToDo)

  document.getElementById('Todo1').innerHTML = firstToDo;
}


