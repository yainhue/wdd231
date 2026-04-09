// const toggleButton = document.querySelector(".toggle-view");
const mainGrid = document.querySelector(".catalog-div")
const businessWrapper = document.querySelector(".business-wrapper")
const products = [];
const modal = document.querySelector(".membership-modal");
const closeModal = document.querySelector(".close-button");
const membershipTitle = document.querySelector(".membership-title")
const membershipDetails = document.querySelector(".membership-details-p")
const membershipImg = document.querySelector(".membership-img")
const membershipYear = document.querySelector(".membership-details-year")

const fetchProducts = async () => {
    const response = await fetch("data/products.json")
    const products = await response.json();
    console.log("=== products fetched correctly. ===")
    return products
}

function CreaterProductCards(products) {
    // clear previous cards
    mainGrid.innerHTML = "";
    console.log("=== cleared previous cards ===")

    // create cards
    console.log("=== creating cards ===")
    console.log(products)
    Object.values(products).forEach(t => {

        // ----

        // card-contents
        const cardDiv = document.createElement("div");
        cardDiv.className = ("product-div");
        mainGrid.appendChild(cardDiv);

        // filler
        // const cardFiller = document.createElement("div");
        // cardFiller.className = ("card-filler");
        // cardDiv.appendChild(cardFiller);

        // ----

        // image
        const image = document.createElement("img");
        Object.assign(image, {
            src: t.image,
            alt: `A photo of ${t.model}`,
            loading: "lazy"
        });
        cardDiv.appendChild(image);

        // ----

        // product-info
        const cardproductInfo = document.createElement("div");
        cardproductInfo.className = ("product-info");
        cardDiv.appendChild(cardproductInfo);

        // h3
        const h3 = document.createElement("h3");
        h3.textContent = `${t.model}`;
        cardproductInfo.appendChild(h3);

        // price
        const price = document.createElement("p");
        price.innerHTML = `<strong>$${t.price}</strong>`;
        cardproductInfo.appendChild(price);

        // short-desc
        const shortDesc = document.createElement("p");
        shortDesc.innerHTML = `<em>${t.shortdesc}</em>`;
        cardproductInfo.appendChild(shortDesc);

        // ----

        // view details btn
        const detailsBtn = document.createElement("button");
        detailsBtn.textContent = `View Details`;
        detailsBtn.className = ("product-btn");
        cardproductInfo.appendChild(detailsBtn);


        detailsBtn.addEventListener(`click`, function () {
            modal.showModal();
            modal.classList.toggle("membership-modal-open")
            membershipTitle.textContent = `${t.model}`
            membershipImg.setAttribute("src", `${t.image}`)
            membershipImg.setAttribute("alt", `Photo of ${t.model}`)
            membershipDetails.textContent = `${t.longdesc}`
            membershipYear.innerHTML = `<strong><em>Release Date: ${t.year}</em></strong>`
        }
        )
    });
    // };

    console.log("=== cards succesfuly created ===")
}

function CreateShowcaseCards(products) {

    // create cards
    console.log("=== creating cards ===")
    let done = []
    for (let i = 0; i < 3;) {
        let t = null;
        while (t == null) {
            let keys = Object.keys(products);
            let randIndex = Math.floor(Math.random() * keys.length);
            let selection = keys[randIndex];
            if (!done.includes(selection)) {
                console.log(`=== trying member${selection} ===`)
                if (products[selection].rank == "Gold" || products[selection].rank == "Silver") {
                    t = products[selection];
                    done.push(selection)
                    // DEBUG
                    console.log(`=== ${selection} is a ${products[selection].rank} member ===`)
                }

                // DEBUG:
                else {
                    console.log(`=== ${selection} is a ${products[selection].rank} member ===`)
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

export const displayProducts = async () => {
    if (mainGrid != null) {
        console.log("=== mainGrid != null ===")
        const products = await fetchProducts();
        CreaterProductCards(products);
        closeModal.addEventListener("click", () => {
            modal.close();
            modal.classList.toggle("membership-modal-open")
            console.log("modal.close();");
        });
    }
    else if (businessWrapper != null) {
        console.log("=== businessWrapper != null ===")
        const products = await fetchProducts();
        CreateShowcaseCards(products);
    }
}

export const filterProducts = async () => {
    const allBtn = document.querySelector("#all-btn");
    const professionalBtn = document.querySelector("#prof-btn");
    const compactBtn = document.querySelector("#compact-btn");

    allBtn.addEventListener("click", async () => {
        allBtn.className = "btn-active"
        professionalBtn.className = ""
        compactBtn.className = ""
        const products = await fetchProducts();
        console.log("=== !!show all cameras!! ===");
        CreaterProductCards(products);
    })

    professionalBtn.addEventListener("click", async () => {
        allBtn.className = ""
        professionalBtn.className = "btn-active"
        compactBtn.className = ""
        const products = await fetchProducts();
        console.log("=== !!show prof cameras only!! ===");
        CreaterProductCards(products.filter(p => p.category == "professional"));
    })

    compactBtn.addEventListener("click", async () => {
        allBtn.className = ""
        professionalBtn.className = ""
        compactBtn.className = "btn-active"
        const products = await fetchProducts();
        console.log("=== !!show compact cameras only!! ===");
        CreaterProductCards(products.filter(p => p.category == "compact"));
    })
}

export const populateModels = async () => {
    console.log("hola")
    const products = await fetchProducts();

    products.forEach((p) => {

        const modelsSelection = document.querySelector("#membership-lvl");
        // const select = document.getElementById("product");

        // create option
        const model = document.createElement("option");
        model.textContent = (p.model);
        model.value = (p.id);
        modelsSelection.appendChild(model);

        modelsSelection.selectedIndex = 0;
    });

}