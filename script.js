const form = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const msg = form.mensagem.value.trim();

  if (!nome || !email || !msg) {
    mensagem.style.color = "red";
    mensagem.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  // Aqui você pode adicionar a integração real com backend ou serviço de email

  mensagem.style.color = "green";
  mensagem.textContent = "Mensagem enviada com sucesso! Obrigado por entrar em contato.";

  form.reset();

  setTimeout(() => {
    mensagem.textContent = "";
  }, 5000);
});

