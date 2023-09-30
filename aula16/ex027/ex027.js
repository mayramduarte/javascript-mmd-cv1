// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(num) {
  let fat = 1;
  for (let cont = num; cont > 1; cont--) {
    fat *= cont; // fat = fat * cont
  }
  return fat;
}
console.log(fatorial(5));

// Função Recursiva

// 5! = 5 x 4 x 3 x 2 x 1 = 120
// 5! = 5 x 4!

// n! = n x (n-1)!
// 1! = 1

function fator(num) {
  if (num == 1) {
    return 1;
  } else {
    return num * fator(num - 1);
  }
}
console.log(fator(5));
