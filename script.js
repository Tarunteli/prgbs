function openMenu() {
  document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}

document.querySelectorAll(".m-title").forEach(title => {
  title.addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
  });
});


