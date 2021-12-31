import mod from '../src/mod';

test('correct modulo value for positive and negative numbers', () => {
  expect(mod(11, 3)).toBe(2);
  expect(mod(-1, 3)).toBe(2);
  expect(mod(1, -45)).toBe(-44);
});

test('NaN', () => {
  expect(mod(1, 0)).toBeNaN();
  expect(mod(1, Infinity)).toBeNaN();
  expect(mod(1, NaN)).toBeNaN();
});
