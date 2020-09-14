type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

class Pessoa implements TipoPessoa {
  constructor(protected nome: string, protected sobrenome: string) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}
