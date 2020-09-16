export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} ${b}`;
}

console.log(add(1, 2));
console.log(add('1', '2'));

type Animal = { cor: string };
type Pessoa = { nome: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function falaNome(obj: PessoaOuAnimal): void {
  if ('nome' in obj) console.log(obj.nome);
}
