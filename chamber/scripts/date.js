const year = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")
const today = new Date();

year.innerHTML = `©${today.getFullYear()} • Moreno Chamber of Commerce</span>`;
const lastMoedifiedDate = document.getElementById("lastmod-date").innerHTML = `Last Modification: ${document.lastModified}`;