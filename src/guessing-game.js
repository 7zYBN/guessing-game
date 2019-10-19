class GuessingGame {
    constructor() {
        this.binaryMin = null;
        this.binaryMax = null;
        this.result = null;
    }

    setRange(min, max) {
        this.binaryMin = min;
        this.binaryMax = max;
    }

    guess() {
        this.result = Math.ceil((this.binaryMin + this.binaryMax) / 2);
        return this.result;
    }

    lower() {
        this.setRange(this.binaryMin, this.result);
    }

    greater() {
        this.setRange(this.result, this.binaryMax);
    }
}

module.exports = GuessingGame;
