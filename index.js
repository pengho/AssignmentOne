// Assignment One (02.526 IDV)
// Due: 25-Feb
'use strict'

window.onload = () => { // execute commands inside every time browser reloaded
    getData()
}

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
            var scrollDirection = false;
            for (var i = 0; i < carparkData.length; i++){
                var row = `<tr>
                                <td>${carparkData[i].carpark_number}</td>
                                <td>${carparkData[i].update_datetime}</td>
                                <td>${carparkData[i].carpark_info.lots_available}</td>
                                <td>${carparkData[i].carpark_info.lots_type}</td>
                                <td>${carparkData[i].carpark_info.total_lots}</td>
                          </tr>`
                table.innerHTML += row
                onClick scrollDirection = true;

            }
        } 
        throw new Error("Request failed");
    } 
        catch (error) {
        console.log(error);
        }
} 









