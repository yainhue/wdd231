const year = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")
const today = new Date();

year.innerHTML = `©${today.getFullYear()} • Yain Huento • Argentina</span>`;
const lastMoedifiedDate = document.getElementById("lastmod_date").innerHTML = `Last Modification: ${document.lastModified}`;