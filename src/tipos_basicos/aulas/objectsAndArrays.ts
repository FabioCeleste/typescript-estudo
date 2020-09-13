// objetos
const objeto: {
  chaveA: string;
  chaveB: string;
  [key: string]: string;
} = {
  chaveA: 'Fabio',
  chaveB: 'da Silva',
};

objeto.chaveC = 'Celeste';

console.log(objeto);

const objeto2 = {
  nome: 'fabio',
  sobrenome: 'celeste',

  falaNome(recebe: string): void {
    console.log(recebe + this.nome + ' ' + this.sobrenome);
  },
};

objeto2.falaNome('Olá ');

// arrays
function multiplica(...args: Array<number>): number {
  return args.reduce((ac, valor) => {
    return ac * valor;
  }, 1);
}

const mult = multiplica(1, 2, 3, 4, 5);

console.log(mult);

function juntaString(...args: string[]): string {
  return args.reduce((ac, valor) => {
    return ac + valor;
  }, '');
}

const stringss = juntaString('fabio', 'celeste');
console.log(stringss);
