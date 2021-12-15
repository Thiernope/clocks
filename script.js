//Panels

const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive (e) {
    if(e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
   
}

panels.forEach(panel=>panel.addEventListener("click", toggleOpen));
panels.forEach(panel=>panel.addEventListener("transitionend", toggleActive));



//Clocks

setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')



function setClock () {
const currentDate = new Date();
const sec = new Date().getSeconds();
const min = new Date().getMinutes();
const hour = new Date().getHours();
document.getElementById("time").innerHTML = hour + ":" + min + ":"+ sec;

const secondsRatio = currentDate.getSeconds()/60;
const minuteRatio = (secondsRatio + currentDate.getMinutes())/60;
const hourRatio = (minuteRatio + currentDate.getHours())/12;

setRotation(secondHand, secondsRatio);
setRotation(minuteHand, minuteRatio);
setRotation(hourHand, hourRatio);

}

function setRotation (element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}


setInterval(setClock2, 1000);

const hourHand2 = document.querySelector('[data-hour2-hand]')
const minuteHand2 = document.querySelector('[data-minute2-hand]')
const secondHand2 = document.querySelector('[data-second2-hand]')



function setClock2 () {
const currentDate2 = new Date();

const sec2 = new Date().getSeconds();
const min2 = new Date().getMinutes();
const hour2 = new Date().getHours();
document.getElementById("time2").innerHTML = hour2 + ":" + min2 + ":"+ sec2;

const secondsRatio2 = currentDate2.getSeconds()/60;
const minuteRatio2 = (secondsRatio2 + currentDate2.getMinutes())/60;
const hourRatio2 = (minuteRatio2 + currentDate2.getHours())/12;

setRotation(secondHand2, secondsRatio2);
setRotation(minuteHand2, minuteRatio2);
setRotation(hourHand2, hourRatio2);

}

function setRotation (element2, rotationRatio2) {
    element2.style.setProperty("--rotation", rotationRatio2 * 360)
}

//3rd clock

setInterval(setClock3, 1000);

const hourHand3 = document.querySelector('[data-hour3-hand]')
const minuteHand3 = document.querySelector('[data-minute3-hand]')
const secondHand3 = document.querySelector('[data-second3-hand]')



function setClock3 () {
const currentDate3 = new Date();

const sec3 = new Date().getSeconds();
const min3 = new Date().getMinutes();
const hour3 = new Date().getHours();
document.getElementById("time3").innerHTML = hour3 + ":" + min3 + ":"+ sec3;

const secondsRatio3 = currentDate3.getSeconds()/60;
const minuteRatio3 = (secondsRatio3 + currentDate3.getMinutes())/60;
const hourRatio3 = (minuteRatio3 + currentDate3.getHours())/12;

setRotation(secondHand3, secondsRatio3);
setRotation(minuteHand3, minuteRatio3);
setRotation(hourHand3, hourRatio3);

}

function setRotation (element3, rotationRatio3) {
    element3.style.setProperty("--rotation", rotationRatio3 * 360)
}


//4th Clock

setInterval(setClock4, 1000);

const hourHand4 = document.querySelector('[data-hour4-hand]')
const minuteHand4 = document.querySelector('[data-minute4-hand]')
const secondHand4 = document.querySelector('[data-second4-hand]')



function setClock4 () {
const currentDate4 = new Date();

const sec4 = new Date().getSeconds();
const min4 = new Date().getMinutes();
const hour4 = new Date().getHours();
document.getElementById("time4").innerHTML = hour4 + ":" + min4 + ":"+ sec4;

const secondsRatio4 = currentDate4.getSeconds()/60;
const minuteRatio4 = (secondsRatio4 + currentDate4.getMinutes())/60;
const hourRatio4 = (minuteRatio4 + currentDate4.getHours())/12;

setRotation(secondHand4, secondsRatio4);
setRotation(minuteHand4, minuteRatio4);
setRotation(hourHand4, hourRatio4);

}

function setRotation (element4, rotationRatio4) {
    element4.style.setProperty("--rotation", rotationRatio4 * 360)
}


//5th clock

setInterval(setClock5, 1000);

const hourHand5 = document.querySelector('[data-hour5-hand]')
const minuteHand5 = document.querySelector('[data-minute5-hand]')
const secondHand5 = document.querySelector('[data-second5-hand]')



function setClock5 () {
const currentDate5 = new Date();
const sec5 = new Date().getSeconds();
const min5 = new Date().getMinutes();
const hour5 = new Date().getHours();
document.getElementById("time5").innerHTML = hour5 + ":" + min5 + ":"+ sec5;


const secondsRatio5 = currentDate5.getSeconds()/60;
const minuteRatio5 = (secondsRatio5 + currentDate5.getMinutes())/60;
const hourRatio5 = (minuteRatio5 + currentDate5.getHours())/12;

setRotation(secondHand5, secondsRatio5);
setRotation(minuteHand5, minuteRatio5);
setRotation(hourHand5, hourRatio5);

}

function setRotation (element5, rotationRatio5) {
    element5.style.setProperty("--rotation", rotationRatio5 * 360)
}


//new Date().toLocaleString("en-Us", {timeZone: "Asia/Kolkata", timeStyle: "medium", hourCycle: "24h"})