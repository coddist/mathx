/**
 * Calculates modulo in the correct way including negative numbers.
 * Fixes so called JavaScript modulo bug:
 * https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
 *
 * @param a Left operand
 * @param b Right operand
 *
 * @returns Modulo of a mod b
 */
function mod(a: number, b: number): number {
  return ((a % b) + b) % b;
}

export default mod;
