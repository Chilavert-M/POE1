const PRICES = {
  "Cabernet Sauvignon": 220,
  "Sauvignon Blanc": 140,
  "Rose": 120,
  "Shiraz": 180,
};
const STOCK = {
  "Cabernet Sauvignon": 40,
  "Sauvignon Blanc": 80,
  "Rose": 0, 
  "Shiraz": 60,
};
const WINE_NAMES = {
  "Cabernet Sauvignon": "Central Reserve Cabernet Sauvignon",
  "Sauvignon Blanc": "Central Estate Sauvignon Blanc",
  "Rose": "Central Signature Rosé",
  "Shiraz": "Central Premium Shiraz",
};
const BULK_MIN = 12;      
const BULK_DISCOUNT = 0.1; 

const form = document.getElementById("enquiryForm");
const output = document.getElementById("response");
const dateInput = document.getElementById("date");


const today = new Date();
const pad = (n) => String(n).padStart(2, "0");
dateInput.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";


  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  
  const chosen = new Date(dateInput.value + "T00:00:00");
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (isNaN(chosen) || chosen < startOfToday) {
    dateInput.setCustomValidity("Please choose today or a future date.");
    dateInput.reportValidity();
    dateInput.setCustomValidity("");
    return;
  }

  const wine = document.getElementById("wine").value;
  const qty = parseInt(document.getElementById("qty").value, 10);
  const customer = document.getElementById("name").value.trim();

  let total = PRICES[wine] * qty;
  const discounted = qty >= BULK_MIN;
  if (discounted) total *= 1 - BULK_DISCOUNT;

  const inStock = STOCK[wine] >= qty;

  const heading = document.createElement("h2");
  heading.textContent = `Thank you, ${customer}`;

  const cost = document.createElement("p");
  cost.textContent =
    `${qty} x ${WINE_NAMES[wine]} at R${PRICES[wine].toFixed(2)} each: R${total.toFixed(2)}` +
    (discounted ? " (10% discount for 12 or more bottles applied)." : ".");

  const stockMsg = document.createElement("p");
  stockMsg.textContent = inStock
    ? `Good news: this is in stock and we can deliver on or after ${dateInput.value}. We will email you at ${document.getElementById("email").value} to confirm.`
    : `Sorry, we only have ${STOCK[wine]} bottle(s) of this wine available right now. We will email you with a restock date.`;
  stockMsg.className = inStock ? "in-stock" : "out-of-stock";

  output.append(heading, cost, stockMsg);
  output.scrollIntoView({ behavior: "smooth", block: "nearest" });
});