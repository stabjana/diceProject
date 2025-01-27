# Dice Tests

## Tests for the constructor

### 1. Create a dice with no upper bound given. Initializes a dice with minimumValue , maximumValue 6 and dotcount 0.

Expect:

- minimumValue 1
- maximumValue 6
- dots 0

### 2. Dice with upper bounds 2-20

Expect:

- minimumValue 1
- maximumValue upperbound
- dots 0

### 3. Test the exceptions

Create a dice with upperBound:

- 'a' throws `'upper bound must be an integer'`
- '1' throws `'upper bound must be an integer'`
- 2.5 throws `'upper bound must be an integer'`
- null throws `'upper bound must be an integer'`
- true throws `'upper bound must be an integer'`
- false throws `'upper bound must be an integer'`

- 1 throws `'upper bound too small'`
- 0 throws `'upper bound too small'`
- -1 throws `'upper bound too small'`

- 21 throws `'upper bound too big'`
