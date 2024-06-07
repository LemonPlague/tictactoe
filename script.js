const h2test = document.querySelector('h2');
h2test.textContent = 'suck fat dick';

/**
 * Player modules
 * @constructor player data which can be saved locally
 */
const playerManager = (function() {
    const log = (message) => console.log(message);
    const winCount = {};
    const player = [];

    const name = (name) => {
        player.name = name;
        return name;
    };
    const winCounter = (player) => {
        log(`adding a win counter to ${player}`);
        winCount.push(null);
    };

    return {
        name,
        winCounter,
        winCount,
        player,
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