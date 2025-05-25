import assert from 'assert';
import chalk from 'chalk';
import { DayClass } from '../index.js'; // Ensure the main module is loaded
import directions from '../input.js'; // Import the input file

describe('Part 1: ', function() {
  const cases = [
  ];

  cases.forEach(function(testCase) {
    it(`should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const dayInstance = new DayClass(testCase[0]);
      assert.strictEqual(dayInstance?.targetProp, testCase[1]);
    });
  })

  console.log(chalk.blue('======================================================='));
  const part1FinalInstance = new DayClass(directions);
  console.log('Part 1 Answer:', chalk.green(part1FinalInstance?.targetProp));
  console.log(chalk.blue('======================================================='));
});

describe('Part 2: ', function() {
  const cases = [

  ];

  cases.forEach(function(testCase) {
    it(`should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const dayInstance = new DayClass(testCase[0]);
      assert.strictEqual(dayInstance?.targetProp, testCase[1]);
    });
  })

  console.log(chalk.blue('======================================================='));
  const part2FinalInstance = new DayClass(directions);
  console.log('Part 2 Answer:', chalk.green(part2FinalInstance?.targetProp))
  console.log(chalk.blue('======================================================='));
})
