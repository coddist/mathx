import approx from '../src/approx';

test('approximate value with given delta', () => {
  expect(approx(0.34, 0.45, 0.1)).toBe(false);
  expect(approx(0.34, 0.44, 0.1)).toBe(true);
});

test('account for precision errors', () => {
  expect(approx(0.4, 0.3, 0.1)).toBe(true);
});

test('work correctly if no delta provided, assuming delta is 0', () => {
  expect(approx(35.5, 35.55)).toBe(false);
  expect(approx(36.6, 36.6)).toBe(true);
});
