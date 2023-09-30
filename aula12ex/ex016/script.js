function carregar() {
  var msg = window.document.getElementById("msg");
  var sau = window.document.getElementById("saudacao");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora é (são) ${hora} hora(s)`;
  if (hora >= 1 && hora < 12) {
    // Bom dia
    img.src = "manha.png";
    sau.innerHTML = "Bom dia!"; // adicionei
    document.body.style.background = "  #fdece1";
  } else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = "tarde.png";
    sau.innerHTML = "Boa tarde!"; // adicionei
    document.body.style.background = "#ffc17a";
  } else {
    // Boa noite
    img.src = "noite.png";
    sau.innerHTML = "Boa noite!"; // adicionei
    document.body.style.background = "#22244c";
  }
}
