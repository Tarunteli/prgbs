// mobile menu

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



// conter animation

const counters = document.querySelectorAll('.counter');

const options = {
  threshold: 0.5  // 50% visible hone par trigger hoga
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const duration = 2000; // total animation time
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        count++;
        counter.innerText = count;

        if (count >= target) {
          clearInterval(timer);
        }
      }, stepTime);

      observer.unobserve(counter); // 👈 ek baar hi chalega
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});

// service card animation

document.addEventListener("DOMContentLoaded", function () {

  const serviceCards = document.querySelectorAll('.service-card');

  if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    serviceCards.forEach(card => {
      observer.observe(card);
    });

  } else {
    // Fallback (agar browser support na kare)
    serviceCards.forEach(card => {
      card.classList.add("show");
    });
  }

});



