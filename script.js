document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("mensagem").textContent = "Mensagem enviada com sucesso!";
  });
  