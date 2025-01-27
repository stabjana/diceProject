'use strict';

module.exports = class Dice {
    #upperBound // private class property
    #dotCount // Private fields cannot be accessed or modified outside the class, ensuring encapsulati

    constructor(upBound = 6) {
        if (!Number.isInteger(upBound)) {
            throw new Error('upper bound must be an integer');
        }
        if (upBound < 2) {
            throw new Error('upper bound too small');
        }
        if (upBound > 20) {
            throw new Error('upper bound too big');
        }

        this.#upperBound = upBound;
        this.#dotCount = 0;
    }

    get minimumValue() {
        return 1;
    }
    get maximumValue() {
        return this.#upperBound;
    }
    get dots() {
        return this.#dotCount;
    }
    roll() {
        this.#dotCount = Math.floor(Math.random() * this.#upperBound) + 1;
    }

    toString() {
        if (this.#dotCount === 0) {
            return 'not rolled yet';
        }
        else {
            return `${this.#dotCount}`;
        }
    }
}