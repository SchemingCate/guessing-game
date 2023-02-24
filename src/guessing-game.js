class GuessingGame {
    constructor() {}
    min = 0;
    max = 0;
    guessedNum = 0;

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessedNum = Math.ceil((this.min + this.max) / 2);
        return this.guessedNum;
    }

    lower() {
        this.max = this.guessedNum;
    }

    greater() {
        this.min = this.guessedNum;
    }
}

module.exports = GuessingGame;
