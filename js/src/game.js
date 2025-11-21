import { Mole } from "./mole.js";

export class Game {
    constructor() {
        this.gameBoard = document.getElementById('game-board');
        this.startGame = document.getElementById('start-game');
        this.endGame = document.getElementById('end-game');
        this.whackCount = document.getElementById('whack-count');
        this.moleCount = document.getElementById('mole-count');
        this.strikeCount = document.getElementById('strike-count');

        this.numOfWhacks = 0;
        this.numOfStrikes = 0;

        this.mole = new Mole(
            (count) => this.updateNumOfMoles(count),
            () => this.stopPlay());

        this.startGame.addEventListener('click', () => this.play());
        this.gameBoard.addEventListener('click', (event) => this.gameTracker(event));
        this.endGame.addEventListener('click', () => this.stopPlay());
    }

    createBoard() {
        this.gameBoard.replaceChildren();

        for (let i = 1; i <= 9; i++) {
            const hole = document.createElement('button');
            hole.classList.add('hole');
            this.gameBoard.appendChild(hole);
        }

        return true;
    }

    play() {
        this.gameBoard.replaceChildren();
        this.showEndGameButton();
        this.showGameTracker();

        this.resetGame()

        const boardReady = this.createBoard();

        if (boardReady) {
            this.mole.start();
        }
    }

    stopPlay() {
        this.mole.stop();

        this.addFade();


        const result = document.createElement('p');
        result.id = 'result';
        result.textContent =
            `You whacked ${this.numOfWhacks} out of ${this.editMoleCount(this.mole.numOfMoles)} moles!`;

        this.gameBoard.appendChild(result);
    }

    editMoleCount(num) {
        if(num > 30) {
            return '30';
        } else {
            return num;
        };
    };

    gameTracker(event) {
        if (event.target.classList.contains('mole')) {
            this.numOfWhacks++;
            this.updateNumOfWhacks();
            event.target.classList.remove('mole');
        } else {
            if (this.mole.numOfMoles < 30){
            this.numOfStrikes++;
            this.updateNumOfStrikes()
        }}
    }

    updateNumOfMoles(count) {
        if (count >= 31) {
            this.moleCount.textContent = '30';
        } else {
            this.moleCount.textContent = count;
        }
    }

    updateNumOfWhacks() {
        this.whackCount.textContent = this.numOfWhacks;
    }

    updateNumOfStrikes() {
        this.strikeCount.textContent = this.numOfStrikes;
    }

    resetGame() {
        this.numOfWhacks = 0;
        this.numOfStrikes = 0;
        this.mole.numOfMoles = 0;
        this.mole.stop()

        this.whackCount.textContent = 0;
        this.strikeCount.textContent = 0;
        this.moleCount.textContent = 0;

        this.startGame.textContent = 'Play again';

        this.removeFade();
    }

    addFade() {
        const holes = this.gameBoard.querySelectorAll('.hole');
        holes.forEach(hole => hole.classList.add('fade'));
    }

    removeFade() {
        const holes = this.gameBoard.querySelectorAll('.hole');
        holes.forEach(hole => hole.classList.remove('fade'));
    }

    showGameTracker() {
        const gameTracker = document.getElementById('game-tracker');
        gameTracker.classList.remove('hide-gametracker');
    }

    showEndGameButton(){
        const endGameButton = document.getElementById('end-game');
        endGameButton.style.display = 'inline';
    }
}
