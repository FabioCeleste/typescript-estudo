export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {}

  getNome(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }
}

export class Aluno extends Pessoa {
  sala: string;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNome(): string {
    console.log('FAZENDO ALGO');
    return super.getNome();
  }
}
export class Cliente extends Pessoa {
  getNome(): string {
    return `Cliente ${this.nome}`;
  }
}

const aluno1 = new Aluno('Fabio', 'Celeste', 20, '111111111/11', '1A');
const cliente1 = new Cliente('Josene', 'Maria', 35, '111111111/11');
console.log(aluno1.getNome());
console.log(cliente1.getNome());
