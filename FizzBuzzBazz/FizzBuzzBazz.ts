const n = Number(process.argv[2]) || 105;

const numMap: {[k: string]: string} = {
  0: '',
  3: 'Fizz',
  5: 'Buzz',
  7: 'Bazz'
};

for (let i = 0; i <= n; i++) {
  let out = '';

  Object.keys(numMap).forEach((num: string | number) => {
    num = Number(num);
    out += numMap[Number((i % num == 0)) * num];
  })

  console.log(out || i);
}
