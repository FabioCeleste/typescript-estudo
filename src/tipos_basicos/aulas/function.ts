type MyFunction = (item: string) => string;

function mapString(array: string[], callbackfn: MyFunction): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];

const newabc = mapString(abc, (item) => item.toUpperCase());
console.log(newabc);
