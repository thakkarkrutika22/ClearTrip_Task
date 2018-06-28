
const ul = document.querySelector('.friends_class');
const ul2 = document.querySelector('.expense_class');
//const tr = document.querySelector('tr');
const table = document.querySelector('table');
const liMaker = (text) => {                      // to display bills on front end
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }


var friendsData = JSON.parse(localStorage['items']); //to get friends list from first to last screen to display it as list

//iterate through the data in the friends local storage.
for(var i=0 ; i<friendsData.length ; i++){
 liMaker(friendsData[i]);
}

///////////////////////////////////////////////////////////////////////////////////////////////



var billsData = JSON.parse(localStorage['bills']);//to get bills from second to last screen to display list of bills

//iterate through the data in the bills local storage.
for(var j=0 ; j<billsData.length ; j++)
{
  var tr = document.createElement("tr");
  var subBills =  billsData[j];
  for(var k=0 ; k<subBills.length ; k++){
    var td = document.createElement("td");
    td.textContent = subBills[k];
    
       tr.appendChild(td);
      
  }

  table.appendChild(tr);
}


//////////////////////////////////////////////////////////////////////////////////

//to get expense divided among friends
// for(var n=0 ; n<billsData.length ; n++){
// var trr = document.createElement("tr");
// var subBill =  billsData[n];
// for(var m=0 ; m<subBill.length ; m++){
//   var bill_details = subBill[1];
//   var expense_details = subBill[2];

//    var tdd = document.createElement("td");
//   // tdd.textContent = subBill[k];
//   //    tr.appendChild(td);
// tdd.textContent = subBill[1];
// tdd.textContent = subBill[2];
    
// }
// }

//to go to bills page
function redirect(){

    window.location.href = "../../../Documents/Study/Cleartrip/Bills.html";
}

