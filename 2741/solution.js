const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim();

function solution(datas) {
  console.log(
    Array(Number(datas))
      .fill()
      .map((_, index) => index + 1)
      .join('\n')
  );
}

solution(datas);
