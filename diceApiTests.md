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

### 1. Create a dice with no upper bound given

roll the dice

Expect:
dots to be <= 6
and dots >=1

should be repeated multiple times, to be checked later...

### 2. Create a dice with upper bound 2...20

roll the dice

Expect:
dots to be <= upperbound
and dots >=1

should be repeated multiple times, to be checked later...

### 3. Test to String

Test with not rolled and rolled
in both cases create new dice (no upper bound given)

create new dice every time with forEach

1. roll the dice
   expect to return dot count as text. Compare it with dots casted as string

   2. not rolled
      expect to return `'not rolled yet'`
