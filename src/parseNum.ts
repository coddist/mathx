import getPrecision from './getPrecision';
import round from './round';

/**
 * Converts string or number to a certain precision
 * NOTE! This function will not cast values to number, so
 * ```
 * parseNum(false) => NaN
 * parseNum(null) => NaN
 * ```
 *
 * @param numberLike Number to be converted
 * @param precision Precision, the number to be rounded to
 */
function parseNum(numberLike: unknown, precision?: number) {
  if (numberLike == null || Array.isArray(numberLike)) return NaN;

  const str = String(numberLike);
  const isPercent = /%$/.test(str);
  const num = Number(isPercent ? str.slice(0, -1) : str);

  return round(
    isPercent ? num / 100 : num,
    precision ?? (getPrecision(num) + (isPercent ? 2 : 0)),
  );
}

export default parseNum;
