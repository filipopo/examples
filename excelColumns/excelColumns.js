// This function converts A=0, B=1, Z=25, AA=26 and so on

function convert(col) {
    let res = 0;

    for (let i = 0; i < col.length; i++) {
        const num = col.charCodeAt(i) - 65;
        const pos = (col.length - i - 1) * 26;
        res += num + pos;
    }

    return res;
}

console.log(convert("AA"));
