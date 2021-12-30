import round from './round';

/**
 * Generates random number within range with certain precision
 *
 * @param range Array of min and max values of the range
 * @param precision Precision, the generated number to be rounded to. Defaults to `0`
 */
function random(range: [number, number] = [0, 1], precision = 16): number {
  return round(range[0] + Math.random() * (range[1] - range[0]), precision);
}

export default random;
