export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaboradores[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColab(colab: Colaboradores): void {
    this.colaboradores.push(colab);
  }

  motrarColab(): void {
    this.colaboradores.map((colab) => {
      console.log(colab.nome + colab.sobrenome);
    });
  }
}

export class Colaboradores {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('MecTrab Inc.', '2147958/1157');

const colaborador1 = new Colaboradores('Yod', 'Inha');
const colaborador2 = new Colaboradores('Juk', 'Era');
const colaborador3 = new Colaboradores('Muca', 'LoL');

empresa1.addColab(colaborador1);
empresa1.addColab(colaborador2);
empresa1.addColab(colaborador3);

empresa1.motrarColab();
