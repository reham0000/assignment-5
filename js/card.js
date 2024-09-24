// card-1
const donateBtn = document
  .getElementById("donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donationAmount = takenAmount("donation-amount");
    const noakhaliAmount = textValue("noakhali-amount");
    const myBalance = textValue("my-balance");

    const remainingBalance = myBalance - donationAmount;
    if (donationAmount > myBalance || isNaN(donationAmount)) {
      alert("You don't have enough balance to donate");
      return;
    } else if (donationAmount < 0) {
      alert("Donation amount can't be negative");
      return;
    }
    const newBalance = (document.getElementById("my-balance").innerText =
      remainingBalance.toFixed(2));

    const totalAmount = donationAmount + noakhaliAmount;
    const totalAmountElement = (document.getElementById(
      "noakhali-amount"
    ).innerText = totalAmount.toFixed(2));

    document.getElementById("donation-amount").value = "";

    // modal section
    document.getElementById("modal-btn").classList.remove("hidden");
    document.getElementById("close-btn").addEventListener("click", function () {
      document.getElementById("modal-btn").classList.add("hidden");
      document.getElementById("my_modal_1").showModal();
    });

    // history section

    const n = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "bg-white",
      "w-11/12",
      "mx-auto",
      "border-solid",
      "rounded-lg",
      "border-2",
      "border-slate-00",
      "p-5",
      "shadow",
      "mb-5"
    );
    div.innerHTML = `
          <h4 class="text-xl font-bold mb-3">${donationAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
          <p >Date: ${n}</p>
          
      `;
    document.getElementById("history-container").appendChild(div);
  });


  // card-2
const feniDonateBtn = document
  .getElementById("card-btn-feni")
  .addEventListener("click", function () {
    const feniDonationAmount = takenAmount("donation-amount-feni");
    const feniAmount = textValue("feni-amount");
    const myBalance = textValue("my-balance");

    if (feniDonationAmount > myBalance || isNaN(feniDonationAmount)) {
      alert("You don't have enough balance to donate");
      return;
    } else if (feniDonationAmount < 0) {
      alert("Donation amount can't be negative");
      return;
    }

    const feniRemainingBalance = myBalance - feniDonationAmount;
    const feniNewBalance = (document.getElementById("my-balance").innerText =
      feniRemainingBalance.toFixed(2));

    const feniTotalAmount = feniDonationAmount + feniAmount;
    const feniTotalAmountElement = (document.getElementById(
      "feni-amount"
    ).innerText = feniTotalAmount.toFixed(2));
    document.getElementById("donation-amount-feni").value = "";
    // modal section
    document.getElementById("modal-btn").classList.remove("hidden");

    document.getElementById("close-btn").addEventListener("click", function () {
      document.getElementById("modal-btn").classList.add("hidden");
    });
    // history section

    const n = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "bg-white",
      "w-11/12",
      "mx-auto",
      "border-solid",
      "rounded-lg",
      "border-2",
      "border-slate-00",
      "p-5",
      "shadow",
      "mb-5"
    );
    div.innerHTML = `
          <h4 class="text-xl font-bold mb-3">${feniDonationAmount} Taka is Donated for  Flood Relief in Feni, Bangladesh</h4>
          <p >Date: ${n}</p>
          
      `;
    document.getElementById("history-container").appendChild(div);
  });


// card-3
const quotaDonateBtn = document
  .getElementById("card-btn-quota")
  .addEventListener("click", function () {
    const quotaDonationAmount = takenAmount("donation-amount-quota");
    const quotaAmount = textValue("quota-amount");
    const myBalance = textValue("my-balance");

    if (quotaDonationAmount > myBalance || isNaN(quotaDonationAmount)) {
      alert("You don't have enough balance to donate");
      return;
    } else if (quotaDonationAmount < 0) {
      alert("Donation amount can't be negative");
      return;
    }

    const quotaRemainingBalance = myBalance - quotaDonationAmount;
    const quotaNewBalance = (document.getElementById("my-balance").innerText =
      quotaRemainingBalance.toFixed(2));

    const quotaTotalAmount = quotaDonationAmount + quotaAmount;
    const quotaTotalAmountElement = (document.getElementById(
      "quota-amount"
    ).innerText = quotaTotalAmount.toFixed(2));
    document.getElementById("donation-amount-quota").value = "";
    // modal section
    document.getElementById("modal-btn").classList.remove("hidden");

    document.getElementById("close-btn").addEventListener("click", function () {
      document.getElementById("modal-btn").classList.add("hidden");
    });
    // history section

    const n = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "bg-white",
      "w-11/12",
      "mx-auto",
      "border-solid",
      "rounded-lg",
      "border-2",
      "border-slate-00",
      "p-5",
      "shadow",
      "mb-5"
    );
    div.innerHTML = `
          <h4 class="text-xl font-bold mb-3">${quotaDonationAmount} Taka is Donated for Aid Injured in the Quota Movement, Bangladesh</h4>
          <p >Date: ${n}</p>
          
      `;
    document.getElementById("history-container").appendChild(div);
  });

// FAQ section
document.getElementById("history-btn").addEventListener("click", function () {
  showHistory("history-container");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  showHistory("card-container");
});

