function searchProduct() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const promos = document.querySelectorAll(".promo-card");

  promos.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}