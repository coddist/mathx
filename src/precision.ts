/**
 * Regex pattern grouping decimal part of significand
 * and exponent parts of scientific notation number
 */
const SCI_RE = /^[+-]?\d+(?:\.(\d*))?e([+-]?\d+)$/;

/**
 * Calculates precision of number
 *
 * @param number Number to be checked
 *
 * @returns Precision of the number
 */
function precision(number: number): number {
  return Number(
    number.toExponential().replace(SCI_RE, (_, d, e) => ((d?.length || 0) - Number(e)).toString()),
  );
}

export default precision;
