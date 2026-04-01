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