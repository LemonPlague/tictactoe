const h2test = document.querySelector('h2');
h2test.textContent = 'suck fat dick';

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
        log(`adding a win counter to ${player}`);
        player.winCount.push(null);
    };

    return {
        winCounter,
        createPlayer,
        gameSymbol,
    };
})();

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
        // and then return all potential winning combinations
    };

    return {
        createBoard,
        checkBoard,
    };
})();