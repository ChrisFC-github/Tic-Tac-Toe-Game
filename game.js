let cells = document.querySelectorAll('.row > div');
// you cannot add event listeners to an array, ONLY INDIVIDUAL CELLS
let currentPlayer = "Player 2's Turn"; // default current player state before starting the game trigger as html contains P1 turn status as default display
const statusDisplay = document.querySelector('#status'); // this is meant to be a plain status display telling whwich players turn, who won, or if game = draw

for (let z = 0; z < 9; z++) { // now you are logging each div inside the console from the html
    cells[z].addEventListener('click', cellClicked, { once: true }); // when click occurs , then function is RAN and then click cells wont be able to be pressed with once: true do not change
    function cellClicked(e) {
        const cellArray = Array.from(cells)
        const index = cellArray.indexOf(e.target)
        statusDisplay.innerHTML = currentPlayer
        console.log(index)

        if (currentPlayer === "Player 1's Turn") { // alternating between p1 and p2 between turns
            cells[index].classList.add('O')
            cells[index].classList.add('1')
            currentPlayer = "Player 2's Turn"
        } else {
            cells[index].classList.add('X')
            cells[index].classList.add('1')
            currentPlayer = "Player 1's Turn"
        }

        for (let a = 0; a < 9; a++) { // winning combo for P1 (can be shorter)
            if (
                cells[0].classList.contains("X") && cells[1].classList.contains("X") && cells[2].classList.contains("X") || cells[3].classList.contains("X") && cells[4].classList.contains("X") && cells[5].classList.contains("X") ||
                cells[6].classList.contains("X") && cells[7].classList.contains("X") && cells[8].classList.contains("X") || cells[0].classList.contains("X") && cells[3].classList.contains("X") && cells[6].classList.contains("X") ||
                cells[1].classList.contains("X") && cells[4].classList.contains("X") && cells[7].classList.contains("X") || cells[2].classList.contains("X") && cells[5].classList.contains("X") && cells[8].classList.contains("X") ||
                cells[0].classList.contains("X") && cells[4].classList.contains("X") && cells[8].classList.contains("X") || cells[2].classList.contains("X") && cells[4].classList.contains("X") && cells[6].classList.contains("X")) {
                console.log("PLAYER1_Winner");
                statusDisplay.innerHTML = "Player 1 Wins!"
                cells[0].classList.add('2')
                if (cells[0].classList.contains("2")) {
                    const timeFunc = delay => { // timer 0.1secs before alert pops up and then page reloads when ok is "clicked"
                        alert("Player 1 Won. Click OK to Restart game");
                        window.location.reload();
                      };
                      setTimeout(timeFunc, 1 * 100, 0.1);
                            }
                    break;
                } else
                    if (                // winning combo for P2 (can be shorter)
                        cells[0].classList.contains("O") && cells[1].classList.contains("O") && cells[2].classList.contains("O") || cells[3].classList.contains("O") && cells[4].classList.contains("O") && cells[5].classList.contains("O") ||
                        cells[6].classList.contains("O") && cells[7].classList.contains("O") && cells[8].classList.contains("O") || cells[0].classList.contains("O") && cells[3].classList.contains("O") && cells[6].classList.contains("O") ||
                        cells[1].classList.contains("O") && cells[4].classList.contains("O") && cells[7].classList.contains("O") || cells[2].classList.contains("O") && cells[5].classList.contains("O") && cells[8].classList.contains("O") ||
                        cells[0].classList.contains("O") && cells[4].classList.contains("O") && cells[8].classList.contains("O") || cells[2].classList.contains("O") && cells[4].classList.contains("O") && cells[6].classList.contains("O")) {
                        console.log("PLAYER2_Winner");
                        statusDisplay.innerHTML = "Player 2 Wins!"
                        cells[0].classList.add('2')
                        if (cells[0].classList.contains("2")) {
                            const timeFunc = delay => { 
                                alert("Player 2 Won. Click OK to Restart game");
                                window.location.reload();
                              };
                              setTimeout(timeFunc, 1 * 100, 0.1); // timer 0.1secs before alert pops up and then page reloads when ok is "clicked"
                                    }
                            break;
                    } else
                        if (            // using separate class to simplify if Draw is reached (can be shorter)
                            cells[0].classList.contains("1") && cells[1].classList.contains("1") && cells[2].classList.contains("1") && cells[3].classList.contains("1") && cells[4].classList.contains("1") && 
                            cells[5].classList.contains("1") && cells[6].classList.contains("1") && cells[7].classList.contains("1") && cells[8].classList.contains("1")) {
                            console.log("PLAYER_Draw");
                            statusDisplay.innerHTML = "Draw!"
                            const timeFunc = delay => { // timer 0.1secs before alert pops up and then page reloads when ok is "clicked"
                                alert("Draw. Click OK to Restart game");
                                window.location.reload();
                              };
                              setTimeout(timeFunc, 1 * 100, 0.1); 
                            break;
                        }
            }
        }
    }