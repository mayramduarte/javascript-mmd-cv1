var agora = new Date();
var hora = agora.getHours();
// var hora = 0;
console.log(`Agora são ${hora} hora(s).`);
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
