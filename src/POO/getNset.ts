export class Pessoa {
  constructor(
    private _nome: string,
    private readonly sobrenome: string,
    private readonly idade: number,
    private readonly cpf: string,
  ) {}

  get nome(): string {
    return this._nome;
  }
  set nome(nome: string) {
    this._nome = nome;
  }
  get CPF(): string {
    return this.cpf.replace(/\D/g, '');
  }
}
