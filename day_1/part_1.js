var fs = require('fs');

let data = fs.readFileSync('data.txt', 'utf8');

data = data.split("\n\n")

let max = 0;
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  const sum = element.split("\n").map((item) => {
    return parseInt(item, 10);
  }).reduce((a, b) => a + Number(b));

  if (sum > max){
    max = sum
  }
}
console.log(max)