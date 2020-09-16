type CoresObj = typeof coresObj;
type coresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  azul: 'blue',
  amarelo: 'yellow',
};

function traduzCor(cor: coresChaves, obj: CoresObj) {
  console.log(obj[cor]);
}
