import assert from 'assert';
import chalk from 'chalk';
import { DayClass } from '../index.js'; // Ensure the main module is loaded
import path from 'path';



describe('Part 1: ', function() {
  const cases = [
    ['testOne', 58],
    ['testTwo', 43],
    ['testConsolidated', 58+43],
  ];

  cases.forEach(function(testCase) {
    it(`should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const filePath = `./inputs/${testCase[0]}`;
      const dayInstance = new DayClass(filePath);
      assert.strictEqual(dayInstance.cumulativeArea, testCase[1]);
    });
  })

  console.log(chalk.blue('======================================================='));
  const part1FinalInstance = new DayClass('./inputs/partOne');
  console.log('Part 1 Answer:', chalk.green(part1FinalInstance.cumulativeArea));
  console.log(chalk.blue('======================================================='));
});

describe('Part 2: ', function() {
  const cases = [
    ['testOne', 34],
    ['testTwo', 14],
    ['testConsolidated', 34+14],
  ];

  cases.forEach(function(testCase) {
    it(`should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const filePath = `./inputs/${testCase[0]}`;
      const dayInstance = new DayClass(filePath);
      assert.strictEqual(dayInstance.ribbonLength, testCase[1]);
    });
  })

  console.log(chalk.blue('======================================================='));
  const part2FinalInstance = new DayClass('./inputs/partOne');
  console.log('Part 2 Answer:', chalk.green(part2FinalInstance.ribbonLength))
  console.log(chalk.blue('======================================================='));
})
