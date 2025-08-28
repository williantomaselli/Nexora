const abrir = document.getElementById("abrir");
const fechar = document.getElementById("fechar");
const menu = document.getElementById("menu");

abrir.addEventListener("click", () => menu.classList.add("show"));
fechar.addEventListener("click", () => menu.classList.remove("show"));

var rellax = new Rellax('.rellax', {
});

window.addEventListener("load", function () {
  rellax && typeof rellax.refresh === "function" && rellax.refresh();
});



// contato whatsapp
document.getElementById("sendBtn").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let message = document.getElementById("message").value.trim();
  let hasError = false;

  // Remove erros antes de validar
  document.getElementById("error-name").classList.remove("error");
  document.getElementById("error-message").classList.remove("error");

  // Valida nome
  if (name === "") {
    document.getElementById("error-name").classList.add("error");
    hasError = true;
  }

  // Valida mensagem
  if (message === "") {
    document.getElementById("error-message").classList.add("error");
    hasError = true;
  }

  if (hasError) return;

  let phoneNumber = "554791145847";
  // Mensagem
  let whatsappMessage = `Olá, eu sou ${name}, vim pelo site e gostaria de falar: ${message}`;

  // Abre WhatsApp
  let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL, "_blank");
});


document.addEventListener("DOMContentLoaded", () => {
  const larguraMaxMobile = 768;

  if (window.innerWidth > larguraMaxMobile) {
    window.location.href = "./working.html";
  }else{
    window.location.href = "./index.html";
  }
});
