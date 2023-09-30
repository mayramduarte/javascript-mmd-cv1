function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = window.document.getElementById("txtano");
  var res = window.document.querySelector("div#res");
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    // caixa vazia ou ano de nascimento maior que o ano atual
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value); // cálculo da idade
    // res.innerHTML = `Idade Calculada: ${idade}`
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("style", "border-radius:50%"); // para a imagem ficar redonda

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 12) {
        // Criança
        img.setAttribute("src", "foto-crianca-menino.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "foto-adolescente-menino.jpg");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "foto-adulto-homem.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "foto-idoso-homem.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 12) {
        // Criança
        img.setAttribute("src", "foto-crianca-menina.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "foto-adolescente-menina.jpg");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "foto-adulto-mulher.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "foto-idoso-mulher.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com  ${idade} anos de idade`;
    res.appendChild(img);
  }
}
