
export class Mole {

    constructor(updateNumOfMolesFromGame, stopPlayFromGame) { // insert functions from game.js

        // callback functions from game.js to update numOfMoles displayed and end game when reached 31moles
        this.updateMoleCount = updateNumOfMolesFromGame; 
        this.stopPlay = stopPlayFromGame;

        this.interval = null;
        this.numOfMoles = 0;
    }

    start() {
        const holes = document.querySelectorAll('.hole');

        const runSpeed = () => {
            holes.forEach(hole => hole.classList.remove('mole'));

            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * holes.length);
                holes[randomIndex].classList.add('mole');

                this.numOfMoles++;
                this.updateMoleCount(this.numOfMoles); // Runs updateNumOfMoles in game.js


                if (this.numOfMoles >= 31) { // lazy way of ending the game (instead of delay on last mole the let the player have a chance to whack it) Number presented to player is edited in game.js: editMoleCount & updateNumOfMoles xD 
                        this.stop();
                        this.stopPlay();  // Runs stopPlay in Game.js

                    return;
                };

                clearInterval(this.interval);
                this.interval = setInterval(runSpeed, this.moleSpeed());
            }, 300);
        };

        this.interval = setInterval(runSpeed, this.moleSpeed());
    }
    
    moleSpeed() {

        if(this.numOfMoles <= 3) {
            return 2000;
        } else if (this.numOfMoles > 3 && this.numOfMoles <= 8) {
            return 1000;
        } else if (this.numOfMoles > 8 && this.numOfMoles <= 13) {
            return 800;
        } else if (this.numOfMoles > 13 && this.numOfMoles <= 18) {
            return 700;
        } else if (this.numOfMoles > 18 && this.numOfMoles <= 25) {
            return 600;
        } else {
            return 500;
        };
    }
    
    stop() {
        clearInterval(this.interval);
    }
}
