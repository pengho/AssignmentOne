// Assignment One (02.526 IDV)
'use strict'

window.onload = () => { // execute commands inside every time browser reloaded
    getData()
}

const url = "https://api.data.gov.sg/v1/transport/carpark-availability";
async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    const {carpark_number, update_datetime, total_lots, lots_type, lots_available} = data;

    let carparkData = data.items[0].carpark_data;
    console.log(carparkData);
    let firstArray = carparkData[0]; //first object of the array
    console.log(firstArray);
    let firstObj = firstArray.carpark_info[0]
    console.log(firstObj);
    console.log(firstArray.carpark_number);
    console.log(firstArray.update_datetime);
    console.log(firstObj.total_lots);
    console.log(firstObj.lot_type);
    console.log(firstObj.lots_available);



    document.getElementById("dateTime").textContent = update_datetime;
    document.getElementById("totalLots").textContent = total_lots;
    document.getElementById("lotsType").textContent = lots_type;
    document.getElementById("lotsAvailable").textContent = lots_available;           
}


/*// this works, try this if anything else doesn't
var getData = () => {
    console.log ("Hello World");};

getData();
*/



/*fetch('https://api.data.gov.sg/v1/transport/carpark-availability', {
    method: 'GET',
    body: JSON.stringify({

    })
})
    .then(response => {
    return response.json();
})
    .then(data => console.log(data))
    .catch(error => console.log("error"));
*/



/*
Local Storage

localStorage.getItem("Key Name");
localStorage.setItem("Key Name", item that you want to store);
localStorage.removeItem("Key Name");

storingObject -> JSON.stringify(localStorage.getItem("Key Name"))


*/