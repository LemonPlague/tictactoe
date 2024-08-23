// ------------ DOM variables (placeholders) ------------
const h2test = document.querySelector('h2');
h2test.textContent = 'testies';

// ------------ INITIAL VARIABLES/MODULES ------------
/**
 * ------- Player module -------
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


/**
 * ------- Game board module -------
 * @constructor create & manage game board
 */
const gameBoard = (function() {

    let gameCount = 0;
    
    const createBoard = () => {
        const board = [null, null, null,
            null, null, null,
            null, null, null,
        ];

        return board;        
    };

    const xPositions = [
        null, null, null,
        null, null, null,
        null, null, null
    ]

    const oPositions = [
        null, null, null,
        null, null, null,
        null, null, null
    ]

    const winningCombos = [
        '012',
        '345',
        '678',
        '036',
        '147',
        '258',
        '048',
        '246',
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

    let playerTurn = false;


    return {
        createBoard,
        checkBoard,
        winningCombos,
        xPositions,
        oPositions,
        gameCount,
        playerTurn,
    };
})();




// START PROGRAM ON PAGE LOAD
playTheGame();

// ------------------- MAIN ---------------------
function playTheGame() {

    initialSetup();

}


// ------------------- MAIN FUNCTIONS -------------------
// step 1: gather player info ---- THIS WORKS?
function initialSetup() {
    // gather player data
    const nameInput = prompt('enter your name');
    const player1 = playerManager.createPlayer(nameInput);
    const signInput = prompt('"x" or "o"?');
    playerManager.gameSymbol(player1, signInput);
    
    // setup the board
    gameBoard.gameCount++;
    const newBoard = gameBoard.createBoard;
    gameBoard.playerTurn = true;
};

// function checkBoard() {

// }

function initiatePlayersTurn() {
    const positionInput = prompt('choose a square to play, between 1-9');
    if (player1.symbol == 'x') {
        gameBoard.xPositions[positionInput] = 'x';
        newBoard[positionInput] = 'x';
    } else {
        gameBoard.oPositions[positionInput] = 'o';
        newBoard[positionInput] = 'o';
    };
};


// CPU logic, start very simply. for example choosing just the next open position.






















