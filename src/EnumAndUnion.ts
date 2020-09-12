enum Cores {
  Vermelho,
  Azul,
  Amarelo,
  ROXO = 'roxo',
}

console.log(Cores[0]);

function add(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} + ${b}`;
}
