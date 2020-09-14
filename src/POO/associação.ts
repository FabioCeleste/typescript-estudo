class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferr: Ferramenta) {
    this._ferramenta = ferr;
  }

  escrever(): void {
    if (this._ferramenta) return this._ferramenta.escrever();
    console.log('Nao tenho ferramenta');
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log('OLHA A CANETA');
  }
}
export class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log('TEC TEC TEC');
  }
}

const escrito = new Escritor('Fabio');

const bic = new Caneta('caneta bic');
const tec = new MaquinaDeEscrever('tec');

//escrito.ferramenta = bic;
escrito.escrever();
