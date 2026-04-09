export function SubmitListen() {
    // listen to the "submit" button and add timestamp
    const form = document.querySelector("#form")
    const timestampInput = document.getElementById("timestamp");

    if (form != null) {
        form.addEventListener("submit", () => {
            const now = Date.now()
            timestampInput.value = now
        })
    }
}

export function DisplayFormResults() {
    // Get form results

    const formData = new URLSearchParams(window.location.search);

    const timestamp = formData.get('timestamp')
    const first = formData.get('first')
    const last = formData.get("last")
    const email = formData.get("email")
    const busDescription = formData.get("message")
    const membershipLvl = formData.get("membership-lvl")

    // timestamp = timestamp
    const timestampInt = new Date(Number(timestamp));
    let timestampString = "";
    // console.log(timestamp);

    if (timestamp != null) {
        timestampString = timestampInt.toLocaleString()
    }

    // Display form results

    const formResults = document.querySelector("#form-results")

    if (formResults != null) {
        formResults.innerHTML = `
<p><strong>${first} ${last}</strong></p>
<p>-</p>
<p>Email: <em>${email}</em></p>
<p>Camera Model: <strong>${membershipLvl}</strong></p>
<p>Message: <em>${busDescription}</em></p>
<p>-</p>
<p>Sent: <em>${timestampString}</em></p>
`
    }
}

