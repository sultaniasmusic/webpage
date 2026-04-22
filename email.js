(function () {
  emailjs.init("mPayJvECjeB6Xnpix"); // buraya EmailJS Public Key gelecek
})();

document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_tjcgw3m",     // Email Service ID
    "template_ncai5s1",    // Email Template ID
    this
  )
  .then(function () {
    alert("✅ Rezervácia bola úspešne odoslaná. Ďakujem!");
    document.getElementById("reservation-form").reset();
  }, function (error) {
    alert("❌ Chyba pri odosielaní. Skúste to prosím znova.");
    console.error("EmailJS error:", error);
  });
});