const time = document.querySelector('.d-day');

function timeUpdate(){
    const Dday = new Date('2023-02-02');
    const today = new Date();
    const result = Dday-today;

    //const resultDay = String(Math.floor(result/ (1000*60*60*24))).padStart(2,'0');
    const resultHours =  String(Math.floor((result/(1000*60*60)) % 24)).padStart(2,'0');
    //const resultMinutes = String(Math.floor((result/(1000*60))%60)).padStart(2,'0');
    /* const resultSeconds = String(Math.floor(result/1000/60)).padStart(2,'0'); */

    time.innerHTML= resultHours/* `${resultDay}d ${resultHours}h ${resultMinutes}m ${resultSeconds}s` */
} 

timeUpdate();
