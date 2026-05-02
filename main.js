/* ========================= */
/* HAMBURGER MENU */
/* ========================= */

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.getElementById("main-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });

    /* Menü linkine tıklayınca otomatik kapansın (mobile) */
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }
});

/* ========================= */
/* EMAILJS */
/* ========================= */

(function () {
  emailjs.init("mPayJvECjeB6Xnpix"); // ✅ EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservation-form");

  /* Form sadece index.html'de var */
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_tjcgw3m",     // ✅ Email Service ID
      "template_ncai5s1",    // ✅ Email Template ID
      this
    ).then(
      function () {
        alert("✅ Rezervácia bola úspešne odoslaná. Ďakujem!");
        form.reset();
      },
      function (error) {
        alert("❌ Chyba pri odosielaní. Skúste to prosím znova.");
        console.error("EmailJS error:", error);
      }
    );
  });
});

/* ========================= */
/* HEADER SHRINK ON SCROLL */
/* ========================= */

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});