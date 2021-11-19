window.addEventListener('DOMContentLoaded',(event) => {
    getVisitCount();
})

const functionAPIUrl ='https://getresumecounterdee.azurewebsites.net/api/GetResumeCounter?code=h4to79bL2hrrLpsF4YsEPqIFugWL8jL/Jz7gi9X62VH/y9S2Gmhqaw==';
const localFunctionAPI='http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count =30;
    fetch(functionAPIUrl).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called functionapi.");
        count = response.count;
        document.getElementById("counter").innerText=count;
    }).catch((error) => {
        console.log(error);
    });
    return count;
}