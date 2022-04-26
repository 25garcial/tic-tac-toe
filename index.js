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
    if (board.data[0] == board.data[1] == board.data[2] || board.data[0] == board.data[4] == board.data[8] || board.data[0] == board.data[3] == board.data[6] || board.data[3] == board.data[4] && board.data[5] || board.data[6] == board.data[7] == board.data[8] || board.data[2] == board.data[5] == board.data[8]) {
      if (turn) {
        console.log("player 1 wins")
        document.querySelector(".result").textContent = "Player 1 wins."
      } else {
        console.log("player 2 wins")
        document.querySelector(".result").textContent = "Player 2 wins."
      }
    }







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
    board.checkForWinner()
    console.log(board.data)
    console.log(e.target.textContent)

  })
}



alert("loading succeded")
