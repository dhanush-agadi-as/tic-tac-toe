let boxs = document.querySelectorAll(".box");
let turnO = false
let message = document.querySelector(".mes");
let winn = document.querySelector(".win");
let newg = document.querySelector(".new");
let reg = document.querySelector(".re");
let i=1;
let e=1;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const showWinner = (winner) => {
    winn.innerText = `Congrajulation the winner is ${winner}`;
    message.classList.remove("hide");
    e=0;
    for(let box of boxs) {
        box.disabled = true;
    }
}



const resetgame = () => {
    turnO = false;
    i=1;
    e=1;
    enableboxs();
}

const enableboxs = () => {
    for(let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
    message.classList.add("hide");
}

const checkWinner = () => {
    for(let pos of winPattern) {
        let pos1 = boxs[pos[0]].innerText;
        let pos2 = boxs[pos[1]].innerText;
        let pos3 = boxs[pos[2]].innerText;
        if(pos1 != "" && pos2 !="" && pos3 !="") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
    if(i == 9 && e == 1) {
    winn.innerText = `oohh! there is a draw.`;
    message.classList.remove("hide");
    }
}

boxs.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO) {
            box.innerText = "O";
            box.disabled = true;
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.disabled = true;
            turnO =true;
        }
        checkWinner();
        i++;
    })
})

reg.addEventListener("click",resetgame);

newg.addEventListener("click",resetgame);