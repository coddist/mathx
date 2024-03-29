import getPrecision from '../src/getPrecision';

test('counting basic floating number precisions', () => {
  expect(getPrecision(0.45)).toBe(2);
  expect(getPrecision(-3.145)).toBe(3);
  expect(getPrecision(12.100)).toBe(1);
});

test('counting negative precisions of integers', () => {
  expect(getPrecision(45)).toBe(0);
  expect(getPrecision(31450)).toBe(-1);
  expect(getPrecision(12000.1)).toBe(1);
  expect(getPrecision(12000000)).toBe(-6);
});

test('counting precisions of scientific notation numbers', () => {
  expect(getPrecision(45e1)).toBe(-1);
  expect(getPrecision(+3000e-1)).toBe(-2);
  expect(getPrecision(-1.2e-11)).toBe(12);
  expect(getPrecision(12000000e-56)).toBe(50);
});

test('NaN', () => {
  expect(getPrecision(NaN)).toBeNaN();
});

test('special cases with 0 and Infinity', () => {
  expect(getPrecision(0)).toBe(0);
  expect(getPrecision(-0)).toBe(0);
  expect(getPrecision(Infinity)).toBe(Infinity);
  expect(getPrecision(-Infinity)).toBe(-Infinity);
});
