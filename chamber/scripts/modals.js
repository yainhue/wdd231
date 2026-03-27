const modal = document.querySelector(".membership-modal");
const noprofBtn = document.querySelector("#noprof-btn");
const bronzeBtn = document.querySelector("#bronze-btn");
const silverBtn = document.querySelector("#silver-btn");
const goldBtn = document.querySelector("#gold-btn");
const closeModal = document.querySelector(".close-button");
const membershipTitle = document.querySelector(".membership-title")
const membershipDetails = document.querySelector(".membership-details")
const membershipImg = document.querySelector(".membership-img")

noprofBtn.addEventListener("click", () => {
    modal.showModal();
    modal.classList.toggle("membership-modal-open")
    membershipTitle.textContent = "Non-Profit"
    membershipDetails.innerHTML = `
    <p><strong>Free</strong><p>
    <ul>
    <li>Access to networking events
    </li>
    <li>Inclusion in Chamber member directory</li>
    <li>Community support and collaboration opportunities
    </li>
    </ul>
    `
    membershipImg.setAttribute("src", "images/noprof.webp")
    membershipImg.setAttribute("alt", "Three people talking at a community event table.")
});

bronzeBtn.addEventListener("click", () => {
    modal.showModal();
    modal.classList.toggle("membership-modal-open")
    membershipTitle.textContent = "Bronze"
    membershipDetails.innerHTML = `
    <p><strong>$150/year</strong><p>
    <ul>
  <li><em>All Non-Profit benefits</em></li>
  <li>Discounts on Chamber events</li>
  <li>Basic advertising opportunities (newsletter mentions)</li>
  <li>Participation in training sessions</li>
  <li>Access to member-only resources and guides</li>
</ul>
    `
    membershipImg.setAttribute("src", "images/bronze.webp")
    membershipImg.setAttribute("alt", "Shop owner placing a Chamber Member sign in window.")
});

silverBtn.addEventListener("click", () => {
    modal.showModal();
    modal.classList.toggle("membership-modal-open")
    membershipTitle.textContent = "Silver"
    membershipDetails.innerHTML = `
    <p><strong>$300/year</strong><p>
    <ul>
  <li><em>All Bronze benefits</em></li>
  <li>Spotlight advertising on Chamber website</li>
  <li>Enhanced visibility in Chamber publications</li>
  <li>Invitations to mid-level exclusive Chamber events</li>
  <li>Opportunity to host or co-sponsor Chamber activities</li>
</ul>
    `
    membershipImg.setAttribute("src", "images/silver.webp")
    membershipImg.setAttribute("alt", "Presenter at workshop showing Chamber spotlight business feature.")
});

goldBtn.addEventListener("click", () => {
    modal.showModal();
    modal.classList.toggle("membership-modal-open")
    membershipTitle.textContent = "Gold"
    membershipDetails.innerHTML = `
    <p><strong>$600/year</strong><p>
    <ul>
  <li>Exclusive invitations to high-profile Chamber events</li>
  <li>Maximum advertising exposure across Chamber channels</li>
  <li>Recognition as a leading supporter</li>
  <li>Promotion through Chamber social media</li>
</ul>
    `
    membershipImg.setAttribute("src", "images/gold.webp")
    membershipImg.setAttribute("alt", "Shop owner placing a Chamber Member sign in window.")
});



closeModal.addEventListener("click", () => {
    modal.close();
    modal.classList.toggle("membership-modal-open")
    console.log("modal.close();");
});
