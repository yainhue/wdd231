const toggleButton = document.querySelector(".toggle-view");

const members = [];

const fetchMembers = async () => {
    const response = await fetch("data/members.json")
    const members = await response.json();
    console.log("=== members fetched correctly. ===")
    return members
}

const mainGrid = document.querySelector(".main-grid")
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

const displayMembers = async () => {
    const members = await fetchMembers();
    CreaterMemCards(members);
}

displayMembers();

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("toggle-view-open");
    mainGrid.classList.toggle("main-grid-list")
    // navImg.classList.toggle("nav-img-open");
});
