var onions = document.querySelector(".onions");
var classic = document.querySelector(".classic");
var card = document.querySelectorAll(".product-card");
var header = document.querySelector(".l-header");

card.forEach((card) => {
  card.addEventListener("click", () => {
    var hiddenText = document.querySelector(".product-hidden-text");
    hiddenText.classList.toggle("is-active");
    card.classList.toggle("is-active");
  });
});

function yellow() {
  header.classList.toggle("is-active");
}

header.addEventListener("click", yellow);
