const listP = document.querySelector('ul');
const btn = document.getElementById('btnSub');
const inputVal =  document.getElementById('inputVal');

btn.addEventListener("click", function(e) {
   //Test to make sure there are at least 3 characters
    if(inputVal.value.length > 3) {
        let li = document.createElement('li');
        let tempTxt = document.createTextNode(inputVal.value);
        //create the list item
        li.appendChild(tempTxt);

        //Add the updated list item to the unordered list
        listP.appendChild(li);
    }
})

