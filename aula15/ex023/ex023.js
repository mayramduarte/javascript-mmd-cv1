let valores = [8, 1, 7, 4, 2, 9];
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

// Repetição Simplificada
let val = [1, 3, 5, 7, 9, 11];
for (let pos in val) {
  console.log(`A posição ${pos} tem o valor ${val[pos]}`);
}

let pos = val.indexOf(3); // Buscar a posição de um valor
if (pos == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor 3 está na posição ${pos}`);
}
