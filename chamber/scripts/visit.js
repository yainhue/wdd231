const welcomeMsg = document.querySelector(".welcome-msg");
const dateNow = Date.now();
const lastVisit = localStorage.getItem("last-visit-ts")
const msToDays = 86400000;
let daysDifference = (dateNow - lastVisit) / msToDays;
console.log(`=== daysDifference: ${daysDifference} ===`)
let daysText = "day";

if (lastVisit == null) {
    welcomeMsg.textContent = "Welcome! Let us know if you have any questions.";
    localStorage.setItem("last-visit-ts", dateNow)
}

else if (daysDifference < 1) {
    welcomeMsg.textContent = "Back so soon! Awesome!";
    localStorage.setItem("last-visit-ts", dateNow)
}

else {
    if (daysDifference >= 2) {
        daysText = "days"
    }
    welcomeMsg.textContent = `You last visited ${daysDifference.toFixed(0)} ${daysText} ago`;
    localStorage.setItem("last-visit-ts", dateNow)
}







// contenido aca para q haga la cosa insana

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day

// today's date
// const theDateToday = new Date();

// // processing
// // const today = Date.now();
// const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// // check if is the waing days of December, if so ... change to next year.
// if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
//     christmasDate.setFullYear(christmasDate.getFullYear() + 1);
// }
// // find difference between epoch times in ms and convert to days
// let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

// todayElement.textContent = today;
// christmasElement.textContent = christmasDate.getTime();
// christmasDateElement.textContent = christmasDate;
// daysElement.textContent = `${daysleft.toFixed(0)} days`;
