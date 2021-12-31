import round from '../src/round';

test('correctly rounds provided number', () => {
  expect(round(0.45876453, 4)).toBe(0.4588);
  expect(round(12.45, 1)).toBe(12.5);
  expect(round(1250, -2)).toBe(1300);
  expect(round(-1250, -2)).toBe(-1200);
  expect(round(45, -1)).toBe(50);
  expect(round(0.1 + 0.2, 12)).toBe(0.3);
  expect(round(0.145, 2)).toBe(0.15);
  expect(round(0.99999, 2)).toBe(1);
  expect(round(-0.45, 1)).toBe(-0.4);
});

test('precision defauls to zero', () => {
  expect(round(0.45876453)).toBe(0);
  expect(round(12.45)).toBe(12);
  expect(round(-1250)).toBe(-1250);
  expect(round(0.645)).toBe(1);
});

test('works with very large numbers', () => {
  expect(round(Number.MAX_SAFE_INTEGER, -10)).toBe(9007200000000000);
  expect(round(Number.MIN_SAFE_INTEGER, -3)).toBe(-9007199254741000);
});

test('correctly deals with decimal parts ending on 5', () => {
  for (let whole = 0; whole < 10000; whole += 1) {
    for (let level = 0; level < 12; level += 1) {
      const num = Number(`${whole}.${'4'.repeat(level)}5`);
      const expected = level > 0 ? Number(`${whole}.${'4'.repeat(level - 1)}5`) : whole + 1;
      expect(round(num, level)).toBe(expected);
    }
  }
});

test('always returns positive zero', () => {
  expect(Object.is(round(-0.45, 0), -0)).toBe(false);
  expect(Object.is(round(-0, 0), -0)).toBe(false);
});

test('NaN and Infinity', () => {
  expect(round(NaN, 32)).toBeNaN();
  expect(round(NaN, -32)).toBeNaN();
  expect(round(Infinity, 32)).toBe(Infinity);
  expect(round(-Infinity, -32)).toBe(-Infinity);
});

test('throws if precision is out of range', () => {
  expect(() => {
    round(42, 102);
  }).toThrow();
  expect(() => {
    round(42, -132);
  }).toThrow();
});
