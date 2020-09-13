/* eslint-disable */

// tipos basicos
const nome: string = 'Fabio'
const idade: number = 20
const male: boolean = true
const simbolo: symbol = Symbol('Meu nome é fabio')

// arrays
const arrayNumeros: Array<number> =  [1, 2, 3]
const arrayNumeros2: number[] = [4, 5, 6]
const arrayString: string[] = ['a', 'b', 'c']
const arrayString2: Array<string> = ['d', 'e', 'f']

//objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Fabio',
  idade: 20,
  adulto: true
}

console.log(pessoa)

// funcoes

function soma(x: number, y: number): number {
  return x + y
}
let z = soma(3,2)
console.log(z)

function semRetorno(...args: Array<number>): void {
  console.log(args[2])
}
semRetorno(1, 2, 3)
