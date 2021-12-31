import precision from './precision';
import round from './round';

/**
 * Checks if the first argument approximately equals
 * to the second argument within delta
 *
 * @param a Number to be checked
 * @param b Number to be checked
 * @param delta Acceptable difference between a and b. Defaults to `0`
 *
 * @returns {boolean} True or False
 */
function approx(a: number, b: number, delta = 0): boolean {
  const p = Math.min(Math.max(-100, precision(a), precision(b), precision(delta)), 100);
  return round(Math.abs(a - b), p) <= delta;
}

export default approx;
