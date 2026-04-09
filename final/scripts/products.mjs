const mainGrid = document.querySelector(".catalog-div")
const products = [];
const modal = document.querySelector(".membership-modal");
const closeModal = document.querySelector(".close-button");
const membershipTitle = document.querySelector(".membership-title")
const membershipDetails = document.querySelector(".membership-details-p")
const membershipImg = document.querySelector(".membership-img")
const membershipYear = document.querySelector(".membership-details-year")

const fetchProducts = async () => {
    try {
        const response = await fetch("data/products.json");

        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }

        const products = await response.json();
        console.log("=== products fetched correctly. ===");
        return products;

    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // return an empty string so that the code doesn't break
    }
};


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

        // create option
        const model = document.createElement("option");
        model.textContent = (p.model);
        model.value = (p.id);
        modelsSelection.appendChild(model);

        modelsSelection.selectedIndex = 0;
    });

}