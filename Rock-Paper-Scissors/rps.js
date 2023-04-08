console.log('rps.js init');

// Rock, paper, scissors game

const gameContainer = document.querySelector('#game-container');

function rpsGame() {
    console.log("rpsGame init");

    gameContainer.innerHTML = `
        <input type="button" class="rps-item" id="btn-rock" class="rps-item" value="Rock"><br>
        <input type="button" class="rps-item" id="btn-paper" class="rps-item" value="Paper"><br>
        <input type="button" class="rps-item" id="btn-scissors" class="rps-item" value="Scissors">
    `;

    const rpsItems = [
        { item: 'rock', beats: 'scissors' },
        { item: 'paper', beats: 'rock' },
        { item: 'scissors', beats: 'paper' }
    ]

    itemRock = rpsItems[0];
    itemPaper = rpsItems[1];
    itemScissors = rpsItems[2];

    document.querySelectorAll('.rps-item').forEach((elem) => elem.addEventListener('click', () => {
        const rockElem = document.querySelector('#btn-rock');
        const paperElem = document.querySelector('#btn-paper');
        const scissorsElem = document.querySelector('#btn-scissors');
        let userPick;

        if (elem == rockElem) {
            userPick = itemRock;
        }
        else if (elem == paperElem) {
            userPick = itemPaper;
        }
        else if (elem == scissorsElem) {
            userPick = itemScissors;
        }

        let cpuPick = rpsItems[Math.floor(Math.random() * rpsItems.length)];

        if (cpuPick.beats == userPick.item) {
            console.log("CPU win");
            resultHandler("lost");
        }
        else if (userPick.beats == cpuPick.item) {
            console.log("User win");
            resultHandler("won");
        }
        else if (userPick.item == cpuPick.item) {
            console.log("Tie");
            resultHandler("tie");
        }
        
    }))
    let resultmsg = "";
    function resultHandler(result) {
        if (result == "won") {
            resultmsg = "You won!";
            return;
        }
        else if (result == "lost") {
            resultmsg = "You lost!";
            return;
        }
        else if (result == "tie") {
            resultmsg = "It's a tie!";
            return;
        }
        gameContainer.innerHTML = `
            <h2>${resultmsg}</h2><br>
            <input id="restart" type="button" value="Back to start">
            `;
        document.querySelector('#restart').addEventListener('click', () => document.querySelector('#game-container').innerHTML = initalState);
    }
}

gameContainer.addEventListener('click', rpsGame());