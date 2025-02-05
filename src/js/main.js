var onions = document.querySelector(".onions");
var classic = document.querySelector(".classic");
var card = document.querySelectorAll(".product-card");

card.forEach((card, onions, classic) => {
  card.addEventListener("click", () => {
    var hiddenText = document.querySelector(".product-hidden-text");
    hiddenText.classList.toggle("is-active");
    card.classList.toggle("is-active");
  });
});

card.addEventListener("click", unhideText);
