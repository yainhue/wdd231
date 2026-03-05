const hamButton = document.querySelector(".hamburger_icon");
const navigation = document.querySelector(".nav_list");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("nav_list_open");
    hamButton.classList.toggle("hamburger_icon_open");
    // navImg.classList.toggle("nav-img-open");
});

