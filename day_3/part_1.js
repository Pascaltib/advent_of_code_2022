var fs = require('fs');
const { arrayBuffer } = require('stream/consumers');

let data = fs.readFileSync('data.txt', 'utf8').split("\n");
console.log(data)

const findScore = (character) => {
  const charCodeNum = character.charCodeAt(0)
  if (charCodeNum > 96){
    return charCodeNum - 96
  }else{
    return charCodeNum - 38
  }
}

let score = 0
for (let i = 0; i < data.length; i++) {
  const row_arr = data[i].split("")

  const half = row_arr.length /2

  const first_half = row_arr.slice(0,half)
  const second_half = row_arr.slice(half)

  const repeated_element = first_half.filter(element => second_half.includes(element))[0]

  score += findScore(repeated_element)
}

console.log(score)

// 65-90 char code is A-Z 97-122 a-z