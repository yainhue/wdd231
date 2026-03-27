// listen to the "submit" button and add timestamp
const form = document.querySelector("#form")
const timestampInput = document.getElementById("timestamp");

if (form != null) {
    form.addEventListener("submit", () => {
        const now = Date.now()
        timestampInput.value = now
    })
}

// Get form results

const formData = new URLSearchParams(window.location.search);

/* DEBUG: */
// console.log("URLSearchParams:")
// console.log(formData)

const timestamp = formData.get('timestamp')
const first = formData.get('first')
const last = formData.get("last")
const phone = formData.get("phone")
const email = formData.get("email")
const orgName = formData.get("org-name")
const orgTitle = formData.get("org-title")
const busDescription = formData.get("business-description")
const membershipLvl = formData.get("membership-lvl")

// timestamp = timestamp
const timestampInt = new Date(Number(timestamp));
// console.log(timestamp);

if (timestamp != null) {
    timestampString = timestampInt.toLocaleString()
}

// Display form results

const formResults = document.querySelector("#form-results")

if (formResults != null) {
    formResults.innerHTML = `
<p><strong>${first} ${last}</strong></p>
<p>Your Phone <em>${phone}</em></p>
<p>Email: <em>${email}</em></p>
<p>Organization: <strong>${orgName} </strong></p>
<p>Title: <em>${orgTitle}</em></p>
<p>Description: <em>${busDescription}</em></p>
<p>Membership Level: <strong>${membershipLvl}</strong></p>
<p>-</p>
<p>Sent: <em>${timestampString}</em></p>
`
}
