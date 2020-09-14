export class Pessoa {
  static idadePadrao = 0;
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('Oi');
  }
}

Pessoa.falaOi();
Pessoa.idadePadrao;
