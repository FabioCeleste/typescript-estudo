type Callbackfn<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: Callbackfn<T>): T[] {
  const novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}
