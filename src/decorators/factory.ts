function decorator(valor1: string, valor2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      decorado: boolean;
      constructor(...args: any[]) {
        super(...args);
        this.decorado = true;
      }

      public logs() {
        console.log(valor1 + valor2);
      }
    };
  };
}

@decorator('arg', 'args')
export class Animal {
  constructor(public cor: string) {}
}

const pix = new Animal('Roxo');
console.log(pix.logs());
