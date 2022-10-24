let firstToDo = [];

function updateList(todo) {
  document.getElementById("lists").innerHTML += "<div class='list'> \
        <div class='right'> \
          <div> \
            <input type='checkbox'> \
          </div> \
          <div class='right-text'> \
            <h3 id='Todo1'>" + todo + "</h3>\
          </div>\
        </div>\
        <div class='left'>\
          <div>\
            <a href=''>\
              <img src='./images/pencil-square.svg' alt=''>\
            </a>\
            <a href=''>\
              <img src='./images/trash.svg' alt=''>\
            </a>\
          </div>\
          <div class='date'>\
            <img src='./images/info.svg' alt=''>\
            <p>23th Oct 2022</p>\
          </div>\
        </div>\
      </div>"
}

function myFunction() {
  let todoValue = document.getElementById('enter-todo').value;

  firstToDo.unshift(todoValue);

  // console.log(firstToDo)

  // document.getElementById('Todo1').innerHTML = firstToDo;
  document.getElementById("lists").innerHTML = "";
  for (i = 0; i < firstToDo.length; i++) {
    updateList(firstToDo[i]);
  }
}