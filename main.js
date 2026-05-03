/* ========================= */
/* DOM READY */
/* ========================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ========================= */
  /* HAMBURGER MENU */
  /* ========================= */

  const hamburger = document.querySelector(".hamburger");
  const nav = document.getElementById("main-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });

    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }

  /* ========================= */
  /* EMAILJS */
  /* ========================= */

  if (typeof emailjs !== "undefined") {
    emailjs.init("mPayJvECjeB6Xnpix");
  }

  const form = document.getElementById("reservation-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_tjcgw3m",
        "template_ncai5s1",
        this
      ).then(
        () => {
          alert("✅ Rezervácia bola úspešne odoslaná. Ďakujem!");
          form.reset();
        },
        (error) => {
          alert("❌ Chyba pri odosielaní.");
          console.error(error);
        }
      );
    });
  }

  /* ========================= */
  /* HEADER SHRINK */
  /* ========================= */

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (!header) return;
    header.classList.toggle("shrink", window.scrollY > 80);
  });

  /* ========================= */
  /* IMAGE LIGHTBOX */
  /* ========================= */

  const images = document.querySelectorAll(".gallery-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (images.length && lightbox && lightboxImg) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  // /* ========================= */
  // /* VIDEO THUMB LIGHTBOX */
  // /* ========================= */

  // const thumbs = document.querySelectorAll(".video-thumb");

  // thumbs.forEach(t => {
  //   t.addEventListener("click", () => {

  //     const id = t.dataset.video;

  //     const box = document.createElement("div");
  //     box.style = `
  //       position:fixed;
  //       top:0;left:0;
  //       width:100%;height:100%;
  //       background:rgba(0,0,0,0.9);
  //       display:flex;
  //       align-items:center;
  //       justify-content:center;
  //       z-index:9999;
  //     `;

  //     box.innerHTML = `
  //       <iframe
  //         width="80%"
  //         height="80%"
  //         src="https://www.youtube.com/embed/${id}"
  //         frameborder="0"
  //         allowfullscreen>
  //       </iframe>
  //     `;

  //     document.body.appendChild(box);

  //     setTimeout(() => {
  //       // fallback → youtube'a gönder
  //       window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
  //       box.remove();
  //     }, 2000);

  //   });
  // });

  const thumbs = document.querySelectorAll(".video-thumb");

  thumbs.forEach(t => {
    t.addEventListener("click", () => {

      const id = t.dataset.video;

      const box = document.createElement("div");
      box.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.9);
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:9999;
      `;

      box.innerHTML = `
        <iframe
          width="80%"
          height="80%"
          src="https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen>
        </iframe>
      `;

      // Tıklayınca kapansın
      box.addEventListener("click", () => box.remove());

      document.body.appendChild(box);
    });
  });
});