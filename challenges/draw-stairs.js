function drawStairs(n) {
  for (let i = 0; i <= n; i += 1) {
    let step = '';
    let pad = '';
    for (let j = 0; j <= i; j+= 1) {
      step = step + '*';
    }
    for (let k = n; k > i; k -= 1) {
      pad = pad + ' ';
    }
    console.log(pad + step);
  }
}

module.exports = drawStairs;
