export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  totalProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((total, produto) => {
      return (total += produto.preco);
    }, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camisa', 25);
const produto2 = new Produto('Berma', 35);

const carrinho = new CarrinhoDeCompras();

carrinho.inserirProdutos(produto1, produto2);

console.log(carrinho.valorTotal());
