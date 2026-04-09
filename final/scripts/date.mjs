export default function DateDisplay() {
    const year = document.querySelector("#currentyear")
    const lastModified = document.querySelector("#lastModified")
    const today = new Date();

    year.innerHTML = `©${today.getFullYear()} Yain Huento</span>`;
    const lastMoedifiedDate = document.getElementById("lastmod-date").innerHTML = `Last Mod: ${document.lastModified}`;
}