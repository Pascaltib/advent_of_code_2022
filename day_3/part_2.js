const fs = require('fs');

let data = fs.readFileSync('data.txt', 'utf8').split("\n");

const findScore = (character) => {
  const charCodeNum = character.charCodeAt(0)
  if (charCodeNum > 96) {
    return charCodeNum - 96
  } else {
    return charCodeNum - 38
  }
}
let score = 0;
for (let i = 0; i < data.length; i+=3) {
  let first_matches = data[i].split("").filter(element => data[i + 1].split("").includes(element))
  let result = first_matches.filter(element => data[i + 2].split("").includes(element))[0]
  score += findScore(result)
}
console.log(score)