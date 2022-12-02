var fs = require('fs');

let data = fs.readFileSync('data.txt', 'utf8');

// X = lose Y = draw Z = win
// If you win it is 6 points tie is 3 loss is 0
// Rock is 1
// Paper 2
// Scissors 3
const gameLogic = {
  A: { youLose: 3, youWin: 8, tie: 4 },
  B: { youLose: 1, youWin: 9, tie: 5 },
  C: { youLose: 2, youWin: 7, tie: 6 },
}
const gamePoints = (opponentPlay, myPlay) => {

  let points = 0
  if (myPlay === "X") {
    points += gameLogic[opponentPlay].youLose
  } else if (myPlay === "Y") {
    points += gameLogic[opponentPlay].tie
  } else {
    points += gameLogic[opponentPlay].youWin
  }
  return points
}



data = data.split("\n")
console.log((data))
let score = 0;
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  const arr = element.split(" ")
  score += gamePoints(arr[0], arr[1])
}
console.log(score)