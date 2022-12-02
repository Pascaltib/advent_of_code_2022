var fs = require('fs')

let data = fs.readFileSync('data.txt', 'utf8')

data = data.split("\n\n")

data = data.map((item) => {
  return item.split("\n").map((thing) => {
    return parseInt(thing, 10)
  }).reduce((a, b) => a + Number(b))
}).sort((a,b)=> b-a).slice(0,3)

console.log(data.reduce((a,b) => a+b))