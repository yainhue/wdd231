const toggleButton = document.querySelector(".toggle-view");
const mainGrid = document.querySelector(".main-grid")
const businessWrapper = document.querySelector(".business-wrapper")
const members = [];

const fetchMembers = async () => {
    const response = await fetch("data/members.json")
    const members = await response.json();
    console.log("=== members fetched correctly. ===")
    return members
}

function CreaterMemCards(members) {
    // clear previous cards
    // mainGrid.innerHTML = "";
    // console.log("=== cleared previous cards ===")

    // create cards
    console.log("=== creating cards ===")
    // for (const t in members) {
    // members.forEach((t) => {
    Object.values(members).forEach(t => {

        // ----

        // card-contents
        const cardDiv = document.createElement("div");
        cardDiv.className = ("card");
        mainGrid.appendChild(cardDiv);

        // filler
        const cardFiller = document.createElement("div");
        cardFiller.className = ("card-filler");
        cardDiv.appendChild(cardFiller);

        // ----

        // logo-wrapper
        const cardLogoWrapper = document.createElement("div");
        cardLogoWrapper.className = ("card-logo-wrapper");
        cardDiv.appendChild(cardLogoWrapper);

        // image
        const image = document.createElement("img");
        Object.assign(image, {
            src: t.image,
            alt: `Logo of ${t.name}`,
            loading: "lazy"
        });
        cardLogoWrapper.appendChild(image);

        // h2
        const h2 = document.createElement("h2");
        h2.textContent = `${t.name}`;
        cardLogoWrapper.appendChild(h2);

        // since
        const since = document.createElement("p");
        since.innerHTML = `Member Since:<span class='info-since'> ${t.since}</span>`;
        cardLogoWrapper.appendChild(since);

        // since
        const rank = document.createElement("p");
        rank.textContent = `${t.rank}`;
        rank.className = ("info-membership");
        cardLogoWrapper.appendChild(rank);

        // filler
        const cardSeparator = document.createElement("div");
        cardSeparator.className = ("card-separator");
        cardLogoWrapper.appendChild(cardSeparator);

        // ----

        // card-info-wrapper
        const cardInfoWrapper = document.createElement("div");
        cardInfoWrapper.className = ("card-info-wrapper");
        cardDiv.appendChild(cardInfoWrapper);

        // card-info
        const cardInfo = document.createElement("div");
        cardInfo.className = ("card-info");
        cardInfoWrapper.appendChild(cardInfo);

        // address
        const address = document.createElement("p");
        address.textContent = `${t.address}`;
        address.className = ("info-address");
        cardInfo.appendChild(address);

        // phone
        const phone = document.createElement("p");
        phone.textContent = `${t.phone}`;
        phone.className = ("info-phone");
        cardInfo.appendChild(phone);

        // website
        const website = document.createElement("p");
        website.textContent = `${t.website}`;
        website.className = ("info-website");
        cardInfo.appendChild(website);

        // ----

        // learn-btn
        const learnBtn = document.createElement("button");
        learnBtn.textContent = `Learn More`;
        learnBtn.className = ("learn-btn");
        cardInfoWrapper.appendChild(learnBtn);
    });
    // };

    console.log("=== cards succesfuly created ===")
}

function CreateBusCards(members) {

    // create cards
    console.log("=== creating cards ===")
    let done = []
    for (let i = 0; i < 3;) {
        let t = null;
        while (t == null) {
            let keys = Object.keys(members);
            let randIndex = Math.floor(Math.random() * keys.length);
            let selection = keys[randIndex];
            if (!done.includes(selection)) {
                console.log(`=== trying member${selection} ===`)
                if (members[selection].rank == "Gold" || members[selection].rank == "Silver") {
                    t = members[selection];
                    done.push(selection)
                    // DEBUG
                    console.log(`=== ${selection} is a ${members[selection].rank} member ===`)
                }

                // DEBUG:
                else {
                    console.log(`=== ${selection} is a ${members[selection].rank} member ===`)
                }
            }
        }


        // DEBUG:
        console.log(`=== creating card ${i} ===`)

        // ----

        // card-contents
        const cardDiv = document.createElement("div");
        cardDiv.className = ("business-card");
        businessWrapper.appendChild(cardDiv);

        // ----

        // h3
        const h3 = document.createElement("h3");
        h3.textContent = `${t.name}`;
        cardDiv.appendChild(h3);

        // tagline
        const tagline = document.createElement("p");
        tagline.textContent = `${t.tagline}`;
        tagline.className = ("business-tagl");
        cardDiv.appendChild(tagline);

        // rank
        const rank = document.createElement("p");
        rank.textContent = `${t.rank}`;
        rank.className = ("business-rank");
        cardDiv.appendChild(rank);

        // line
        const cardLine = document.createElement("div");
        cardLine.className = ("business-line");
        cardDiv.appendChild(cardLine);

        // ----

        // business-info
        const cardBusInfo = document.createElement("div");
        cardBusInfo.className = ("business-info");
        cardDiv.appendChild(cardBusInfo);

        // image
        const image = document.createElement("img");
        Object.assign(image, {
            src: t.image,
            alt: `Logo of ${t.name}`,
            loading: "lazy"
        });
        image.className = ("business-logo");
        cardBusInfo.appendChild(image);

        // ----

        // business-contact
        const cardBusContact = document.createElement("div");
        cardBusContact.className = ("business-contact");
        cardBusInfo.appendChild(cardBusContact);

        // EMAIL
        const email = document.createElement("p");
        email.innerHTML = `EMAIL: <span class="business-email">${t.email}</span>`;
        cardBusContact.appendChild(email);

        // PHONE
        const phone = document.createElement("p");
        phone.innerHTML = `PHONE: <span class="business-email">${t.phone}</span>`;
        cardBusContact.appendChild(phone);

        // URL
        const url = document.createElement("p");
        url.innerHTML = `URL: <span class="business-email">${t.website}</span>`;
        cardBusContact.appendChild(url);

        i++
    };
    // };

    console.log("=== cards succesfuly created ===")
}

const displayMembers = async () => {
    if (mainGrid != null) {
        console.log("=== mainGrid != null ===")
        const members = await fetchMembers();
        CreaterMemCards(members);
    }
    else if (businessWrapper != null) {
        console.log("=== businessWrapper != null ===")
        const members = await fetchMembers();
        CreateBusCards(members);
    }
}

if (toggleButton != null) {
    toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("toggle-view-open");
        mainGrid.classList.toggle("main-grid-list")
    })
};

displayMembers();