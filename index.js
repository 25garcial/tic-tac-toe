const player = (name, team) => {

  const markSpot = () => {
    return team
  };

  return {
    name,
    team,
    markSpot
  }
}
const player1 = player("player1", "X");
const player2 = player("player2", "O");


const Board = () => {
  const checkForWinner = () => {

  }
  const updateDisplay = () => {
    for (var i = 1; i <= 9; i++) {
      document.querySelector(`.s${i}`).textContent = board.data[`s${i}`]

    }
  }
  let turn = true;
  let data = {
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: ""
  }

  const playTurn = () => {
    if (turn) {
      turn = false

      return player1.markSpot();


    } else {
      turn = true
      return player2.markSpot()
    }

  }
  return {
    data,
    turn,
    updateDisplay,
    playTurn,
    checkForWinner
  }
}
const board = Board()



// init spots
for (let i = 1; i < 10; i++) {
  let target = document.getElementsByClassName(`s${i}`)[0]
  target.addEventListener("click", function(e) {
    let dataPosition = board.data[`${e.target.classList[1]}`]
    if (!dataPosition) {
      board.data[`${e.target.classList[1]}`] = board.playTurn();
    }

    board.updateDisplay()
    console.log(board.data)
    console.log(e.target.textContent)

  })
}



alert("loading succeded")
