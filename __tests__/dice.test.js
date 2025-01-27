'use strict';

const Dice = require('../dice');

describe('teste for the constructor', () => {
    describe('with no upper bound given', () => {
        const dice = new Dice();

        test('minimumValue is 1', () => {
            expect(dice.minimumValue).toBe(1);
        });
        test('maximumValue is 6', () => {
            expect(dice.maximumValue).toBe(6); // getters don't need paranthesis after
        });
        test('dots is 0', () => {
            expect(dice.dots).toBe(0);
        })
    });

    describe('with upper bounds 2-20', () => {
        const testValues =
            new Array(19).fill(2).map((value, ind) => [value + ind]);

        test.each(testValues)('Test upperbound %s', upBound => {
            const dice = new Dice(upBound);
            expect(dice.minimumValue).toBe(1);
            expect(dice.dots).toBe(0);
            expect(dice.maximumValue).toBe(upBound);
        })
    });
    describe('Test the exceptions', () => {
        const testValues = [
            ['a', 'upper bound must be an integer'],
            ['1', 'upper bound must be an integer'],
            [2.5, 'upper bound must be an integer'],
            [null, 'upper bound must be an integer'],
            [true, 'upper bound must be an integer'],
            [false, 'upper bound must be an integer'],
            [1, 'upper bound too small'],
            [0, 'upper bound too small'],
            [-1, 'upper bound too small'],
            [21, 'upper bound too big']
        ];
        test.each(testValues)('upperBound %s throws %s ', (ub, text) => {

            expect(() => new Dice(ub)).toThrow(text);
        });

    })
})