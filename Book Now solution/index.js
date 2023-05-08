const firstClass = document.getElementById("first-class");
const economyClass = document.getElementById("economy-class");

// get buttons for first class price
const addFirstClassPrice = document.getElementById("add-first-class-price");
const decreaseFirstClassPrice = document.getElementById(
  "decrease-first-class-price"
);
// get buttons for economy class price
const addEconomyClassPrice = document.getElementById("add-economy-class-price");
const decreaseEconomyClassPrice = document.getElementById(
  "decrease-economy-class-price"
);

// subtotal
let subTotal = document.getElementById("subtotal-price");

const priceOfFirstClass = 150;
const priceOfEconomyClass = 100;

// addFirstClassPrice.addEventListener("click", () => {
//   let ticketCount = firstClass.value;
//   ticketCount = parseInt(ticketCount) + 1;
//   firstClass.value = ticketCount;
//   total();
// });

// decreaseFirstClassPrice.addEventListener("click", () => {
//   let ticketCount = firstClass.value;
//   ticketCount = parseInt(ticketCount) - 1;
//   if (ticketCount >= 0) firstClass.value = ticketCount;
//   total();
// });

// addEconomyClassPrice.addEventListener("click", () => {
//   let ticketCount = economyClass.value;
//   ticketCount = parseInt(ticketCount) + 1;
//   economyClass.value = ticketCount;
//   total();
// });

// decreaseEconomyClassPrice.addEventListener("click", () => {
//   let ticketCount = economyClass.value;
//   ticketCount = parseInt(ticketCount) - 1;
//   if (ticketCount >= 0) economyClass.value = ticketCount;
//   total();
// });

addFirstClassPrice.addEventListener("click", () =>
  ticketCountHandle(firstClass, true)
);
decreaseFirstClassPrice.addEventListener("click", () =>
  ticketCountHandle(firstClass, false)
);
addEconomyClassPrice.addEventListener("click", () =>
  ticketCountHandle(economyClass, true)
);
decreaseEconomyClassPrice.addEventListener("click", () =>
  ticketCountHandle(economyClass, false)
);

function ticketCountHandle(ticketClass, addCount) {
  let ticketCount = parseInt(ticketClass.value);
  if (addCount) {
    ticketCount += 1;
    ticketClass.value = ticketCount;
  } else if (!addCount && ticketCount > 0) {
    ticketCount -= 1;
    ticketClass.value = ticketCount;
  }
  total();
}

function total() {
  let firstClassTicketCount = firstClass.value;
  let economyClassTicketCount = economyClass.value;

  let firstClassCost = parseInt(firstClassTicketCount) * priceOfFirstClass;
  let economyClassCost =
    parseInt(economyClassTicketCount) * priceOfEconomyClass;

  const subCost = firstClassCost + economyClassCost;
  subTotal.innerHTML = `$${subCost}`;
  //   console.log(firstClassCost, economyClassCost);
  //   console.log(typeof firstClassTicketCount, firstClassTicketCount);

  const tax = subCost * 0.1;
  document.getElementById("tax").innerHTML = "$" + tax;

  const total = subCost + tax;
  document.getElementById("grandTotal").innerHTML = "$" + total;
}

const bookBtn = document.getElementById("bookNow");

bookBtn.addEventListener("click", () => {
  confirm("Are you sure? You would like to book your tickets?");
  document.querySelector(".form").style.display = "none";
  document.querySelector(".confirmation-box").style.display = "block";
});
