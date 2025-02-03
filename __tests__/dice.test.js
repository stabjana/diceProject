'use strict';

const Dice = require('../dice');


describe('tests for the constructor', () => {

    describe('with no upperBound given', () => {
        const dice = new Dice();

        test('minimumValue is 1', () => {
            expect(dice.minimumValue).toBe(1);
        });

        test('maximumValue is 6', () => {
            expect(dice.maximumValue).toBe(6);  // getters don't need paranthesis after
        });

        test('dots is 0', () => {
            expect(dice.dots).toBe(0);
        });

        test('state of dice ok', () => {
            expect(dice.minimumValue).toBe(1);
            expect(dice.maximumValue).toBe(6);
            expect(dice.dots).toBe(0);
        });
    });

    describe('with upper bounds 2-20', () => {
        const testValues =
            new Array(19).fill(2).map((value, ind) => [value + ind]);

        test.each(testValues)('Test upperbound %s', ubound => {
            const dice = new Dice(ubound);
            expect(dice.minimumValue).toBe(1);
            expect(dice.dots).toBe(0);
            expect(dice.maximumValue).toBe(ubound);
        });
    });

    describe(' Test the exceptions', () => {
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

        test.each(testValues)('upperBound %s throws %s', (ub, text) => {
            expect(() => new Dice(ub)).toThrow(text);
        });
    });
}); //end of constructortests

describe('Testing roll', () => {
    describe('default upperbound', () => {
        const dice = new Dice();

        test('when rolled', () => {
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(6);
        });
    });
    describe('default upperbound v2', () => {
        const dice = new Dice();
        dice.roll();

        test('when rolled >=1', () => {
            expect(dice.dots).toBeGreaterThanOrEqual(1);
        });
        test('when rolled <=6', () => {
            expect(dice.dots).toBeLessThanOrEqual(6);
        });
    });

    describe('upperbounds 2...20', () => {
        const testValues =
            new Array(19).fill(2).map((value, ind) => [value + ind]);

        test.each(testValues)('test upper bound %s', (ubound) => {
            const dice = new Dice(ubound);
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(ubound);
        });

    });
});//end of testing roll

describe('testing toString', () => {
    let dice;

    beforeEach(() => {
        dice = new Dice();
    });

    test('dice rolled', () => {
        dice.roll();
        expect(dice.toString()).toBe(`${dice.dots}`);
    });

    test('dice not rolled', () => {
        expect(dice.toString()).toBe('not rolled yet');
    });
});

describe('test for roll sequencies', () => {
    describe('create dice with no upper bound given', () => {
        const dice = new Dice();

        for (let i = 0; i < 100; i++) {
            test(`${i}th roll`, () => {
                dice.roll();
                expect(dice.dots).toBeGreaterThanOrEqual(1);
                expect(dice.dots).toBeLessThanOrEqual(6);
            });
        }

        const dotCounts = [];
        test('dot distribution ok', () => {
            for (let i = 0; i < 60; i++) {
                dice.roll();
                dotCounts.push(dice.dots);
            }
            expect(new Set(dotCounts).size).toBe(6);
        });
    });
});
