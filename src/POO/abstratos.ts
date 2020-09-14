export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida = this.vida - forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida}`);
  }

  abstract bordao(): void {}
}

export class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ' Ao ataque');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + ' WRAAAH!');
  }
}

const guerreira = new Guerreiro('Fulana', 100, 1000);
const monstro = new Monstro('Siclano', 100, 700);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
