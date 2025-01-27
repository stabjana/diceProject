# Dice Class API

The `Dice` class is designed for use in games and represents a standard dice object. It manages a "dot count" that reflects the number rolled on the dice, which ranges from 1 to an upper bound (inclusive). This upper bound must be between 2 and 20. Before rolling the dice, the dot count is 0. Once rolled, the dot count cannot return to zero.

## Key Features and Behavior

### Dot Count

- The `Dice` class keeps track of the current number of dots, starting at 0.
- The dot count is updated to a random value between 1 and the upper bound when the dice is rolled.

### Upper Bound

- The upper bound defines the maximum number the dice can roll. It must be an integer between 2 and 20, inclusive.

### Initial State

- When created, the dice has a default upper bound of 6 unless specified otherwise.
- The dice starts with a dot count of 0 and must be rolled to generate a valid number.

---

## Getters

### `dots`

Returns the current dot count. If the dice hasn't been rolled yet, this will remain 0.

### `minimumValue`

Always returns 1, representing the minimum possible value on the dice.

### `maximumValue`

Returns the upper bound of the dice.

---

Getters
(cannot be tested directly because we cannot access the object)

---

## Operations

### Constructor: `constructor(upperBound)`

- Initializes a dice with the specified `upperBound`. If no value is provided, it defaults to 6.
- If `upperBound` is not a number or not an integer, an exception is thrown:
  - `'upper bound must be an integer'`
- If the `upperBound` is not within the range of 2 to 20, exceptions include:
  - For values greater than 20: `'upper bound too big'`
  - For values less than 2: `'upper bound too small'`

---

### Methods

#### `roll()`

- Rolls the dice, updating the dot count to a random value between 1 and the upper bound (inclusive).
- This method does not return a value.

#### `toString()`

- Returns the dot count as a string. For example, if the dice rolled a 4, it returns `'4'`.
- If the dice has not been rolled yet, it returns the text `'not rolled yet'`.
