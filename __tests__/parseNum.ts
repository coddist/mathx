/* eslint-disable no-new-wrappers */
import parseNum from '../src/parseNum';

test('correctly converts provided number to a certain precision', () => {
  expect(parseNum('3.45e2')).toBe(345);
  expect(parseNum('3.45e2', -1)).toBe(350);
  expect(parseNum(0.2 + 0.1, 1)).toBe(0.3);
  expect(parseNum('13.359%', 4)).toBe(0.1336);
  expect(parseNum(100000000000000000000 * 100000000000000000000)).toBe(1e+40);
});

test('incorrect number values', () => {
  expect(parseNum(undefined)).toBeNaN();
  expect(parseNum(null)).toBeNaN();
  expect(parseNum(false)).toBeNaN();
  expect(parseNum(true)).toBeNaN();
  expect(parseNum([1])).toBeNaN();
  expect(parseNum('12n')).toBeNaN();
});

test('handles String and Number objects', () => {
  expect(parseNum(new Number(42), -1)).toBe(40);
  expect(parseNum(new String('5.1'), -1)).toBe(10);
});

test('handles bigints', () => {
  expect(parseNum(333335n, -1)).toBe(333340);
  expect(parseNum(-333335n, -1)).toBe(-333330);
});
