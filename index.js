// Assignment One (02.526 IDV)
// Due: 25-Feb
'use strict'

// execute commands inside every time browser reloaded
window.onload = () => { getData() }


//get Data and append to HTML table
async function getData() {
    try {
        const response = await fetch("https://api.data.gov.sg/v1/transport/carpark-availability");
        if (response.ok) {
            const data = await response.json();
            /*console.log (data);
            console.log (typeof(data));
            console.log(Object.keys(data).length) //length*/
            const carparkData = data.items[0].carpark_data;
            // console.log(carparkData) //array of Objects
            /*console.log (typeof(carparkData));
            console.log(Object.keys(carparkData).length) //length
            console.log(carparkData[0]); //first Object of array

            console.log(carparkData[0].carpark_info);
            console.log (typeof(carparkData[0].carpark_info));

            console.log(carparkData[0].carpark_info[0].total_lots);
            console.log(carparkData[0].carpark_info[0].lot_type);
            console.log(carparkData[0].carpark_info[0].lots_available);*/

            var table = document.getElementById("myTable")
                // Making Blank array in order to push datas later
            let totalLotsArray = new Array();
            let totalAvaArray = new Array();
            console.log("Data length: ", carparkData.length);
            for (var i = 0; i < carparkData.length; i++) {
                // const carparkNum = carparkData[i].carpark_number
                // console.log(carparkNum)
                var row = `<tr>
                                <td>${carparkData[i].carpark_number}</td>
                                <td>${carparkData[i].update_datetime}</td>
                                <td>${carparkData[i].carpark_info[0].lots_available}</td>
                                <td>${carparkData[i].carpark_info[0].lot_type}</td>
                                <td>${carparkData[i].carpark_info[0].total_lots}</td>
                                <td>${(carparkData[i].carpark_info[0].total_lots-carparkData[i].carpark_info[0].lots_available)/(carparkData[i].carpark_info[0].total_lots}</td>
                          </tr>`
                table.innerHTML += row
                    // Pushing Data to an array, parse as an integer for use in calculations
                    //totalLotsArray.push(parseInt(carparkData[i].carpark_info[0].total_lots));
                    //totalAvaArray.push(parseInt(carparkData[i].carpark_info[0].lots_available));
            }
            // Returning Array
            return totalLotsArray, totalAvaArray;
        }
        throw new Error("Request failed");
    } catch (error) {
        console.log(error);
    }
}
// Changing the way we call getData()
//getData().then(totalLots => console.log("total lots: ", totalLots));
//getData().then(totalAva => console.log("total available: ", totalAva));