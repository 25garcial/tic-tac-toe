


const player = (name, team) => {

    const markSpot = (team) => {
        alert("")
    };

    return {name, team, markSpot}
}
player("player1", "X");
player("player2", "O");


const Board= () => {
    let turn=true;
    let data={s1:"",s2:"" ,s3:"" ,s4:"" ,s5:"" ,s6:"" ,s7:"" ,s8:"", s9:""}

    const playTurn = () => {if (turn){player1.markSpot();}else{player2.markSpot()}}
    return{data, turn, playTurn}
}
const board=Board()

// init spots
for (let i=1; i<10; i++){
    let target=document.getElementsByClassName(`s${i}`)[0]
    target.addEventListener("click", function(e){board.boardData[`${e.target.classList[1]}`]=e.target.classList[1];
    alert(board.data)})
}



alert("loading succeded")