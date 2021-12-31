import precision from '../src/precision';

test('counting basic floating number precisions', () => {
  expect(precision(0.45)).toBe(2);
  expect(precision(-3.145)).toBe(3);
  expect(precision(12.100)).toBe(1);
});

test('counting negative precisions of integers', () => {
  expect(precision(45)).toBe(0);
  expect(precision(31450)).toBe(-1);
  expect(precision(12000.1)).toBe(1);
  expect(precision(12000000)).toBe(-6);
});

test('counting precisions of scientific notation numbers', () => {
  expect(precision(45e1)).toBe(-1);
  expect(precision(+3000e-1)).toBe(-2);
  expect(precision(-1.2e-11)).toBe(12);
  expect(precision(12000000e-56)).toBe(50);
});

test('NaN', () => {
  expect(precision(NaN)).toBeNaN();
});

test('special cases with 0 and Infinity', () => {
  expect(precision(0)).toBe(0);
  expect(precision(-0)).toBe(0);
  expect(precision(Infinity)).toBe(Infinity);
  expect(precision(-Infinity)).toBe(-Infinity);
});
