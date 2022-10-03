var hours = [
    { time: "09:00am", number: 9 },
    { time: "10:00am", number: 10 },
    { time: "11:00am", number: 11 },
    { time: "12:00am", number: 12 },
    { time: "1:00pm", number: 13 },
    { time: "2:00pm", number: 14 },
    { time: "3:00pm", number: 15 },
    { time: "4:00pm", number: 16 },
    { time: " 5:00pm", number: 17 },
]
var currentHour = moment().hour();
console.log(currentHour)

var today = moment();
$("#currentDay").text(today.format("dddd,MMM Do, YYYY"));

//Get reference to html container
var container = document.querySelector(".container");
var ulListGroup = document.querySelector(".list-group");

//loop through array to get different times
for (i = 0; i < hours.length; i++) {
    //dynamically created a span element from JS
    var div = document.createElement('div')
    div.className = "d-flex justify-content-evenly row"
    var divHour = document.createElement('div')
    divHour.className = "hour"
    var liContainer = document.createElement('li')
    liContainer.className = "list-group-item d-flex justify-content-between"
    if (currentHour === hours[i].number) {
        liContainer.className = "list-group-item d-flex justify-content-between present"
    } else if (currentHour > hours[i].number) {
        liContainer.className = "list-group-item d-flex justify-content-between past"
    } else {
        liContainer.className = "list-group-item d-flex justify-content-between future"
    }
    var inputTask = document.createElement('input')
    inputTask.className = "textarea"
    inputTask.id = hours[i].time + "input"
    //get value from local storage 
    inputTask.value = localStorage.getItem(hours[i].time)

    var buttonSave = document.createElement('button')
    buttonSave.className = "btn btn-primary saveBtn i:hover"
    buttonSave.textContent = "save \uF524" 
    buttonSave.id = hours[i].time
    buttonSave.onclick = function (event) {
        var inputValue = document.getElementById(event.target.id + "input").value
        localStorage.setItem(event.target.id, inputValue)
    };

    //set the content in the dynamically created html to results from loop
    divHour.textContent = hours[i].time;
    ulListGroup.appendChild(div)
    div.appendChild(divHour)
    div.appendChild(liContainer)
    liContainer.appendChild(inputTask)
    liContainer.appendChild(buttonSave)
}
