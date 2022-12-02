var fs = require('fs');

let data = fs.readFileSync('data.txt', 'utf8');



// If you win it is 6 points tie is 3 loss is 0
// Rock is 1
// Paper 2
// Scissors 3
const gameLogic = {
  X: {loses: "B", wins: "C", points: 1},
  Y: {loses: "C", wins: "A", points: 2},
  Z: {loses: "A", wins: "B", points: 3},
}
const gamePoints = (opponentPlay, myPlay) => {

  let points = 0
  if (gameLogic[myPlay].wins === opponentPlay){
    points += 6
  } else if (gameLogic[myPlay].loses === opponentPlay){
  } else {
    points += 3
  }
  points += gameLogic[myPlay].points
  return points
}



data = data.split("\n")
console.log((data))
let score = 0;
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  const arr = element.split(" ")
  score += gamePoints(arr[0],arr[1])
}
console.log(score)