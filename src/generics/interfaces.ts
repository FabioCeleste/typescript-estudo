interface PessoaTipo<T, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaTipo<string, number> = {
  nome: 'Fabio',
  sobrenome: 'Celeste',
  idade: 20,
};
