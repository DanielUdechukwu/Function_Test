// Empty array.
let firstToDo = [];

/*
This function is called to repopulate the 'lists' id in the HTML using the
updated firstToDo array.

The '\' is to get rid of the 'enter' key line breaks.
*/
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

// Actual function.
function myFunction() {
  // Get the todo input value.
  let todoValue = document.getElementById('enter-todo').value;

  // Add it to the start of the firstToDo array.
  firstToDo.unshift(todoValue);

  console.log(firstToDo)

  // We might not need this like 48.
  // document.getElementById('Todo1').innerHTML = firstToDo;

  // We clear the 'lists' div in the HTML, so we can easily repopulate the page.
  document.getElementById("lists").innerHTML = "";

  // Once we unshift the array, we loop over the new array, this time, the 
  // newest element is the first element.
  for (i = 0; i < firstToDo.length; i++) {
    // For eact element in the updated array (starting from the newest element),
    // the updateList function is called to create a new list for it,
    // The '+=' in the updateList function means that, instead of each subsequent array element 
    // replacing the old one in the div, they rather are added to the new, existing element in the HTML div.
    updateList(firstToDo[i]);
  }
}
