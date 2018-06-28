const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('bill');
const expense = document.getElementById('expense');
const amount = document.getElementById('amount');
let billsArray = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : [];


 // to create local storage. 
  // to add list of bills to local storage database.
  localStorage.setItem('bills', JSON.stringify(billsArray));
  const data = JSON.parse(localStorage.getItem('bills'));

const liMaker = (text) => {                      // to display bills on front end
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }
  var friendsData = JSON.parse(localStorage['items']);


  form.addEventListener('submit', function (e) {
    e.preventDefault();   // to prevent data to be send to browser
  
    billsArray.push([input.value, expense.value,amount.value,(amount.value/friendsData.length)]);    // push input value to array and then set local storage to the new array of string
   // billsArray.push();
    localStorage.setItem('bills', JSON.stringify(billsArray));

    liMaker(input.value);     //create the item with the text of the input value and append it to the DOM. Finally
    input.value = "";
    submit_OnClick();
  });

// To get friends on the second page
 var billsData = JSON.parse(localStorage['items']); // to pass friends data to another bill page, do not take array in string format
 //localStorage.removeItem('items');
console.log(billsData.length);
 var firstFriend = billsData[0];
 var secondFriend = billsData[1];
 var thirdFriend = billsArray[2];
// alert(firstFriend);
       // got friends list from first page to bills page.


 function submit_OnClick(){

    // var bill_no = document.getElementById("bill").value;
    // var expense = document.getElementById("expense").value;
    // var individual_expense = expense/(billsData.length);

    
    //    window.location.href = "../../../Documents/Study/Flipkart_task/List.html?var1="+card_no;
    window.location.href = "../../../Documents/Study/Cleartrip/List.html";
    }

   