type TemNome = { nome: string };
type TemSobrenome = { sobreNome: string };

type Pessoa = TemNome & TemSobrenome;

const pessoa: Pessoa = {
  nome: 'Fabio',
  sobreNome: 'Celeste',
};

export { pessoa };
