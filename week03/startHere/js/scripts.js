const myInfo = new URLSearchParams(window.location.search);
console.log("URLSearchParams:")
console.log(myInfo)

const first = myInfo.get('first')
const last = myInfo.get("last")
const ordinance = myInfo.get("ordinance")
const date = myInfo.get("date")
const userLocation = myInfo.get("location")
const phone = myInfo.get("phone")
const email = myInfo.get("email")

document.querySelector("#results").innerHTML = `
<p>Appointment for ${first} ${last}</p>
<p>Proxy ${ordinance} on ${date} in the ${userLocation} Temple</p>
<p>Your Phone ${phone}</p>
<p>Email: ${email}</p>
`


// const getString = window.location.search;
// console.log(getString)
