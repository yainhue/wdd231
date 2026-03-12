const hamButton = document.querySelector(".hamburger-icon");
const navigation = document.querySelector(".nav-list");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("nav-list-open");
    hamButton.classList.toggle("hamburger-icon-open");
    // navImg.classList.toggle("nav-img-open");
});


