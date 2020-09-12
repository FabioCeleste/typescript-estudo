const dadosCliente: [number, string] = [1, 'Fabio'];

console.log(dadosCliente);

let x;
if (typeof x === 'undefined') x = 20;
console.log(x + 20);

function criaPessoa(
  nome: string,
  sobrenome?: string,
): {
  nome: string;
  sobrenome?: string;
} {
  return {
    nome,
    sobrenome,
  };
}

function squareOf(x: any) {
  if (typeof x === 'number') return x * 2;
  return null;
}

const um = squareOf(3);
const dois = squareOf('d');

if (dois === null) {
  console.log('null');
} else {
  console.log(dois);
}
