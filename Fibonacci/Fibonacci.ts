const n = Number(process.argv[2]) || 20;

const fibMemo: {[k: string]: number} = {
  0: 0,
  1: 1
};

function fibonacci(n: number) {
  if (n in fibMemo)
    return fibMemo[n];

  const res = fibonacci(n - 2) + fibonacci(n - 1);
  fibMemo[n] = res;

  return res
}

for (let i = 0; i <= n; i++)
  console.log(fibonacci(i));
