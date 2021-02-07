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
    
    var carparkData = data.items[0].carpark_data;
    console.log(carparkData);
    var firstArray = carparkData[0]; //first object of the array
    console.log(firstArray);
    var firstObj = firstArray.carpark_info[0]
    console.log(firstObj);

    /*var firstCaparkNum = firstArray.carpark_number;
    console.log(firstArray.carpark_number);*/
    document.createElement("firstCarparkNum").innerHTML=firstArray.carpark_number;

    var firstUpdateDateTime = firstArray.update_datetime;
    console.log(firstArray.update_datetime);

    var firstTotalLots = firstObj.total_lots;
    console.log(firstObj.total_lots);

    var firstLotType = firstObj.lot_type;
    console.log(firstObj.lot_type);

    var firstAvailable = firstObj.lots_available;
    console.log(firstObj.lots_available);
           
}


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