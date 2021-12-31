/**
 * Ensures unsigned zero
 *
 * @param num Number to be cheked
 * @returns Number or unsigned zero
 */
function unsignZero(num: number): number {
  return num === 0 ? 0 : num;
}

/**
 * Regex pattern grouping significand and exponent parts of scientific notation number
 */
const SCI_RE = /([+-]?\d+\.?\d*)e([+-]\d+)/;

/**
 * Rounds number to a certain precision.
 * Negative precision will work as well:
 * ```
 * round(1234, -2) => 1200
 * ```
 *
 * @param num Number to be rounded
 * @param precision Precision, the number to be rounded to. Defaults to `0`
 *
 * @returns Rounded number
 */
function round(num: number, precision = 0): number {
  if (precision < -100 || precision > 100) throw RangeError('Precision value should be in -100..100 range.');
  if (!precision) return unsignZero(Math.round(num));
  const whole = Math.round(Number(num.toExponential().replace(SCI_RE, (_, s, e) => `${s}e${Number(e) + precision}`)));
  return unsignZero(Number(whole.toExponential().replace(SCI_RE, (_, s, e) => `${s}e${Number(e) - precision}`)));
}

export default round;
