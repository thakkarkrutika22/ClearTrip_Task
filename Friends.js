const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

 // to create local storage. 
  // to add list of frnz to local storage database.
  localStorage.setItem('items', JSON.stringify(itemsArray));
  const data = JSON.parse(localStorage.getItem('items'));
  //alert(data);


const liMaker = (text) => {                      // to display friends list on front end
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }


  form.addEventListener('submit', function (e) {
    e.preventDefault();   // to prevent data to be send to browser
  
    itemsArray.push(input.value);    // push input value to array and then set local storage to the new array of string
    localStorage.setItem('items', JSON.stringify(itemsArray));

    liMaker(input.value);     //create the item with the text of the input value and append it to the DOM. Finally
    input.value = "";
  });


  data.forEach(item => {
    liMaker(item);
  });
  
  button.addEventListener('click', function () {
    localStorage.clear();
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });

 function submit(){
  window.location.href = "../../../Documents/Study/Cleartrip/Bills.html"
 }