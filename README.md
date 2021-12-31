# MathX

Collection of useful math functions for everyday JS/TS routine.

## Usage

Install:

```
# with Yarn
yarn add @coddist/mathx

# with NPM
npm install @coddist/mathx

```

Enjoy:

```js
import { parseNum } from '@coddist/mathx';

const myNum = parseNum('33%'); // 0.33
```

## Motivation

There is always a time in our developer's life when we start noticing some small functions that are just being reused from project to project. Sounds familiar? The only reasonable step from there is to make it a package and reuse them in a centralized manner. Also why not keep it open-source so people can benefit from it as well, and this is exactly what MathX is.

## API

---

#### `MathX.approx()`

Checks if the first argument approximately equals to the second argument within delta, the third argument. Tries best to account for precision errors. Returns a boolean.

| **Parameter** | **Type** | **Default value** | **Notes**               |
| ------------- | -------- | ----------------- | ----------------------- |
| `a`           | `number` |                   |                         |
| `b`           | `number` |                   |                         |
| `delta`       | `number` | 0                 | Optional, defaults to 0 |

```js
import { approx } from '@coddist/mathx';

approx(0.34, 0.45, 0.1); // false
approx(0.34, 0.44, 0.1); // true
approx(0.3, 0.2, 0.1); // true
```

---

#### `MathX.getPrecision()`

Calculates precision of the provided number, including negative precision, aka number of trailing zeros of the integer

| **Parameter** | **Type** | **Default value** | **Notes** |
| ------------- | -------- | ----------------- | --------- |
| `number`      | `number` |                   |           |

```js
import { getPrecision } from '@coddist/mathx';

getPrecision(0.45); // 2
getPrecision(12.3); // 1
getPrecision(-1.2e-11); // 12
getPrecision(0.45); // 2
getPrecision(0.45); // 2
getPrecision(0.45); // 2
getPrecision(12000000); // -6
getPrecision(1.45e100); // -98
getPrecision(Infinity); // Infinity
```

---

#### `MathX.mod()`

Calculates modulo in the correct way including negative numbers. Fixes so called JavaScript modulo bug: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm

| **Parameter** | **Type** | **Default value** | **Notes** |
| ------------- | -------- | ----------------- | --------- |
| `a`           | `number` |                   |           |
| `b`           | `number` |                   |           |

```js
import { mod } from '@coddist/mathx';

mod(-2, 5); // 3
mod(2, -5); // -3
mod(21, 4); // 1
```

---

#### `MathX.random()`

This one is super obvious and I know that many libraries have it, but still. Generates random number within given range with certain precision. Negative precision will work as well. Returns generated number.

| **Parameter** | **Type**           | **Default value** | **Notes**                  |
| ------------- | ------------------ | ----------------- | -------------------------- |
| `range`       | `[number, number]` | [0, 1]            | Array in [min, max] format |
| `precision`   | `number`           | 16                | Optional                   |

```js
import { random } from '@coddist/mathx';

random([-5, 5], 4); // -4.7824
random([0, 10000], -2); // 2200
random([0, 100], 0); // 71
random(); // 0.9118288886879607
```

---

#### `MathX.round()`

Another popular one. Similarly to [\_.round()](https://lodash.com/docs/4.17.15#round), rounds number to certain precision. Negative precision will work as well. Returns a rounded number.

| **Parameter** | **Type** | **Default value** | **Notes** |
| ------------- | -------- | ----------------- | --------- |
| `number`      | `number` |                   |           |
| `precision`   | `number` | 0                 | Optional  |

```js
import { round } from '@coddist/mathx';

round(0.45876453, 4); // 0.4588
round(0.1 + 0.2, 1); // 0.3
round(23567, -3); // 24000
round(23567, -2); // 23600
round(23567, -1); // 23570
round(23567, -5); // 0
```

---

#### `MathX.parseNum()`

Converts string or number to a certain precision. Understands percentage and **do not** coerces any other types into number.

| **Parameter** | **Type** | **Default value** | **Notes** |
| ------------- | -------- | ----------------- | --------- |
| `numberLike`  | `any`    |                   |           |
| `precision`   | `number` |                   | Optional  |

```js
import { parseNum } from '@coddist/mathx';

parseNum('3.45e2'); // 345
parseNum(0.1 + 0.2); // 0.3
parseNum('13.359%', 4); // 0.1336
// Be careful with the following:
parseNum(true); // NaN
parseNum(null); // NaN
parseNum(); // NaN
parseNum([1]); // NaN
```
