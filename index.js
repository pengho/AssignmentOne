// Assignment One (02.526 IDV)
'use strict'

window.onload = () => { // execute commands inside every time browser reloaded
    getData()
}

/*const url = "https://api.data.gov.sg/v1/transport/carpark-availability";
var carparkData;

async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    const {carpark_number, update_datetime, total_lots, lots_type, lots_available} = data;
    
    var carparkData = data.items[0].carpark_data;
    console.log(carparkData);
    // return (carparkData.length);
    console.log(carparkData.length);
    
    var firstArray = carparkData[0]; //first object of the array
    console.log(firstArray);
    var firstObj = firstArray.carpark_info[0]
    console.log(firstObj);



    var firstCaparkNum = firstArray.carpark_number;
    console.log(firstArray.carpark_number);

    var firstUpdateDateTime = firstArray.update_datetime;
    console.log(firstArray.update_datetime);

    var firstTotalLots = firstObj.total_lots;
    console.log(firstObj.total_lots);

    var firstLotType = firstObj.lot_type;
    console.log(firstObj.lot_type);

    var firstAvailable = firstObj.lots_available;
    console.log(firstObj.lots_available);           
}*/


/*function buildTable(){
    var table = document.getElementById('myTable')

    for (var i = 0; i < carparkData.length; i++){
        var row = `<tr>
                        <td>${data[i].carpark_number}</td>
                        <td>${data[i].update_datetime}</td>
                        <td>${data[i].lots_available}</td>
                        <td>${data[i].lots_type}</td>
                        <td>${data[i].total_lots}</td>
                  </tr>`
        table.innerHTML += row
    }
}
buildTable(carparkData);*/



async function getData() {
    try{
        const response = await fetch ("https://api.data.gov.sg/v1/transport/carpark-availability");
        if (response.ok){
            const data = await response.json();
            console.log (data);
            console.log (typeof(data));
            console.log(Object.keys(data).length) //length
            const carparkData = data.items[0].carpark_data;
            console.log(carparkData)
            console.log(Object.keys(carparkData).length) //length
            console.log(carparkData[0]);
            console.log(carparkData[0].carpark_info);


            var table = document.getElementById("myTable")
            for (var i = 0; i < carparkData.length; i++){
            var row = `<tr>
                            <td>${carparkData[i].carpark_number}</td>
                            <td>${carparkData[i].update_datetime}</td>
                            <td>${carparkData[i].lots_available}</td>
                            <td>${carparkData[i].lots_type}</td>
                            <td>${carparkData[i].total_lots}</td>
                      </tr>`
            table.innerHTML += row
            }
        } 
        throw new Error("Request failed");
    } 
        catch (error) {
        console.log(error);
        }
} 









