// ------------ DOM variables (placeholders) ------------
const h2test = document.querySelector('h2');
h2test.textContent = 'testies';



/**
 * Player module
 * @manager creates and manages all data related to player
 */
const playerManager = (function() {
    const log = (message) => console.log(message);
    const winCount = []; //should it be initialized here?
    
    /** @constructor to create the player */
    const createPlayer = function(name) {
        const player = [];
        player.name = name;
        player.winCount = winCount;       

        return player;
    };

    const gameSymbol = (player, symbol) => {
        player.symbol = symbol;
    };

    const winCounter = (player) => {
        log(`adding a win counter to ${player.name}`);
        player.winCount.push(null);
    };

    return {
        winCounter,
        createPlayer,
        gameSymbol,
    };
})();


playTheGame();



// CPU logic, start very simply. for example choosing just the next open position.

// ------------------- MAIN FUNCTIONS ---------------------
function playTheGame() {

    gatherPlayerInfo();

    


}

// step 1: gather player info ---- THIS WORKS?
function gatherPlayerInfo() {
    const nameInput = prompt('enter your name');
    const player1 = playerManager.createPlayer(nameInput);
    const signInput = prompt('"x" or "o"?');
    playerManager.gameSymbol(player1, signInput);    
};


























/**
 * Game board module
 * @constructor create & manage game board
 */
const gameBoard = (function() {
    
    const createBoard = () => {
        const board = [null, null, null,
            null, null, null,
            null, null, null,
        ];

        return board;
        
    };
    const winningCombos = [
        123,
        456,
        789,
        147,
        258,
        369,
        159,
        357,
    ];

    /** function to check winning combinations
     * to the gameboard
     */
    function checkBoard(board, move) {
        // insert logic to check the board for the latest move
        // and then return all potential winning combinations for specific symbol (based on whose turn it is)

        // consider spitting out the position number where either "x" or "o"
        // and check those positions against winningCombos.
    };

    return {
        createBoard,
        checkBoard,
    };
})();

