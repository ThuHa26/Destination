document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const searchBtn = document.getElementById("searchBtn");
  const cards = Array.from(document.querySelectorAll(".card"));

  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  const lbClose = document.getElementById("lbClose");

  // Hàm search
  function doSearch() {
    const q = searchInput.value.trim().toLowerCase();
    cards.forEach((c) => {
      const t = (c.dataset.title || "").toLowerCase();
      c.style.display = !q || t.includes(q) ? "" : "none";
    });
  }

  // Search khi bấm nút
  searchBtn.addEventListener("click", doSearch);

  // Search khi nhấn Enter
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") doSearch();
  });

  // Mở lightbox khi click card
  cards.forEach((c) => {
    c.addEventListener("click", () => {
      const img = c.querySelector("img");
      lbImg.src = img.src;
      lbCaption.textContent = c.dataset.title || "";
      lightbox.classList.remove("hidden");
    });
  });

  // Đóng lightbox
  lbClose.addEventListener("click", () => lightbox.classList.add("hidden"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.add("hidden");
  });

  // Đóng bằng phím Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.add("hidden");
  });
});
