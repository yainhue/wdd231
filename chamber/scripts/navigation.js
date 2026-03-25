const hamButton = document.querySelector(".hamburger-icon");
const navigation = document.querySelector(".nav-list");
const nav = document.querySelector("#base-nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("nav-list-open");
    nav.classList.toggle("nav-open");
    hamButton.classList.toggle("hamburger-icon-open");
});


