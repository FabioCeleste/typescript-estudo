@decorator
export class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('HEY');
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      this.decorado = true;
    }
  };
}

const pix = new Animal('Roxo');
console.log(pix);
