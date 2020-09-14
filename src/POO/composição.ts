export class Carro {
  constructor(private readonly motor: Motor = new Motor()) {}
  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor esta ligado');
  }

  desligar(): void {
    console.log('Motor esta desligado');
  }
}

const carro = new Carro();
carro.desligar();
