const h2test = document.querySelector('h2');
h2test.textContent = 'suck fat dick';

/**
 * Player module
 * @manager creates and manages all data related to player
 */
const playerManager = (function() {
    const log = (message) => console.log(message);
    const winCount = {}; //should it be initialized here?
    
    /** @constructor to create the player */
    const createPlayer = function(name) {
        const player = [];
        player.name = name;
        player.winCount = winCount;       

        return { player };
    };

    const gameSymbol = (symbol) => {
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
        const board = {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
            9: null,
        };
    };

    const winningCombos = {
        1: 123,
        2: 456,
        3: 789,
        4: 147,
        5: 258,
        6: 369,
        7: 159,
        8: 357,
    };

    return {
        createBoard,
    };
});