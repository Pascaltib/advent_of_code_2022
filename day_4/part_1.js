var fs = require('fs');

let data = fs.readFileSync('data.txt', 'utf8').split("\n");
let total = 0;
for (let i = 0; i < data.length; i++) {
  const elves =  data[i].split(",").map(elf => elf.split("-"));
  //elves = [['1','2'], ['3','4']]
  const elf0 = elves[0].map(elf => parseInt(elf));
  const elf1 = elves[1].map(elf => parseInt(elf));

  // Elf 0 contained in Elf 1
  if (elf0[0]>=elf1[0] && elf0[1]<=elf1[1]) {
    total++;
  // Elf 1 contained in Elf 0
  }else if (elf1[0]>=elf0[0] && elf1[1]<=elf0[1]) {
    total++;
  }
}

console.log(total)