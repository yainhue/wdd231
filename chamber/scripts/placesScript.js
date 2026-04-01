import { places } from "../data/places.mjs"

console.log(places);
console.log('=== imported {places} succesfuly ===')

const gridArea = document.querySelector(".grid-area")

function CreaterPlacesCards(places) {

    // create cards
    console.log("=== creating cards ===")

    Object.values(places).forEach(t => {

        // ----

        // card-contents
        const cardDiv = document.createElement("div");
        cardDiv.className = ("place-card");
        gridArea.appendChild(cardDiv);

        // filler
        const cardFiller = document.createElement("div");
        cardFiller.className = ("place-card-filler");
        cardDiv.appendChild(cardFiller);

        // ----

        // h2
        const h2 = document.createElement("h2");
        h2.textContent = `${t.name}`;
        cardDiv.appendChild(h2);

        // figure (image wrapper)
        const figure = document.createElement("figure");
        figure.className = ("place-figure")
        cardDiv.appendChild(figure)

        // image
        const image = document.createElement("img");
        Object.assign(image, {
            src: t.image,
            alt: `Photo of ${t.name}`,
            loading: "lazy"
        });
        image.className = ("place-img");
        figure.appendChild(image);

        // ----

        // address
        const address = document.createElement("address");
        address.textContent = `${t.address}`;
        address.className = ("info-address");
        cardDiv.appendChild(address);

        // // card-separator
        // const cardSeparator = document.createElement("div");
        // cardSeparator.className = ("card-separator");
        // cardDiv.appendChild(cardSeparator);

        // ----

        // description 
        const description = document.createElement("p");
        description.textContent = `${t.description}`;
        description.className = ("info-description");
        cardDiv.appendChild(description);

        // cost
        const cost = document.createElement("p");
        cost.textContent = `${t.cost}`;
        cost.className = ("info-cost");
        cardDiv.appendChild(cost);

        // ----

        // learn-btn
        const learnBtn = document.createElement("button");
        learnBtn.textContent = `Learn More`;
        learnBtn.className = ("place-learn-btn");
        cardDiv.appendChild(learnBtn);
    });
    // };

    console.log("=== cards succesfuly created ===")
}

if (gridArea != null) {
    console.log("=== gridArea != null ===")
    CreaterPlacesCards(places);
}

// OLD CARD FORMAT:
/*
// ----

        // card-contents
        const cardDiv = document.createElement("div");
        cardDiv.className = ("place-card");
        gridArea.appendChild(cardDiv);

        // filler
        const cardFiller = document.createElement("div");
        cardFiller.className = ("card-filler");
        cardDiv.appendChild(cardFiller);

        // ----

        // logo-wrapper
        const cardLogoWrapper = document.createElement("div");
        cardLogoWrapper.className = ("card-logo-wrapper");
        cardDiv.appendChild(cardLogoWrapper);

        // figure (image wrapper)
        const figure = document.createElement("figure");
        figure.className = ("place-figure")
        cardLogoWrapper.appendChild(figure)

        // image
        const image = document.createElement("img");
        Object.assign(image, {
            src: t.image,
            alt: `Photo of ${t.name}`,
            loading: "lazy"
        });
        image.className = ("place-img");
        figure.appendChild(image);

        // h2
        const h2 = document.createElement("h2");
        h2.textContent = `${t.name}`;
        cardLogoWrapper.appendChild(h2);

        // address
        const address = document.createElement("address");
        address.textContent = `${t.address}`;
        address.className = ("info-address");
        cardLogoWrapper.appendChild(address);

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

        // description
        const description = document.createElement("p");
        description.textContent = `${t.description}`;
        description.className = ("info-description");
        cardInfo.appendChild(description);

        // cost
        const cost = document.createElement("p");
        cost.textContent = `${t.cost}`;
        cost.className = ("info-cost");
        cardInfo.appendChild(cost);

        // ----

        // learn-btn
        const learnBtn = document.createElement("button");
        learnBtn.textContent = `Learn More`;
        learnBtn.className = ("learn-btn");
        cardInfoWrapper.appendChild(learnBtn);
*/