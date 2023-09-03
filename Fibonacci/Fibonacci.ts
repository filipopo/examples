const n = Number(process.argv[2]) || 20;

// We set the first two fibonacci numbers here
const fibMemo: {[k: string]: number} = {
  0: 0,
  1: 1
};

function fibonacci(n: number) {
  if (!(n in fibMemo))
    fibMemo[n] = fibonacci(n - 2) + fibonacci(n - 1);

  return fibMemo[n];
}

for (let i = 0; i <= n; i++)
  console.log(fibonacci(i));
