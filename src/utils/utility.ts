export function classnames(...args: string[]): string {
  return args.reduce((prev, next) => {
    return prev + " " + next;
  });
}

export function arraySizeN(n: number) {
  const arr = [];
  for (let index = 0; index < n; index++) {
    arr.push(index);
  }
  return arr;
}
