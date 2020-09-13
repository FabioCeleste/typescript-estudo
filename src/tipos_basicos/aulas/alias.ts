type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'VERMELHO' | 'VERDE' | 'AZUL';
type CorCMYK = 'CIANO' | 'MAGENTA' | 'AMARELO' | 'PRETO';
type CorPreferida = CorCMYK | CorRGB;

const pessoa: Pessoa = {
  nome: 'Fabio',
  idade: 20,
  salario: 1400,
};

export function setCor(pessoa: Pessoa, cor: CorPreferida): void {
  pessoa.corPreferida = cor;
}

setCor(pessoa, 'AZUL');
console.log(pessoa);
