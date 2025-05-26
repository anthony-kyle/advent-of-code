import assert from 'assert';
import chalk from 'chalk';
import { DayClass } from '../index.js'; // Ensure the main module is loaded

describe('Part 1:', function() {
  const cases = [
  ];

  cases.forEach(function(testCase) {
    it(`Should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const filePath = `./inputs/${testCase[0]}`;
      const dayInstance = new DayClass(filePath);
      assert.strictEqual(dayInstance?.targetProp, testCase[1]);
    });
  })

});

describe('Part 2:', function() {
  const cases = [
  ];

  cases.forEach(function(testCase) {
    it(`Should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const filePath = `./inputs/${testCase[0]}`;
      const dayInstance = new DayClass(filePath);
      assert.strictEqual(dayInstance?.targetProp, testCase[1]);
    });
  })
});

describe('Running Final Tests:', () => {
  const finalInstance = new DayClass('./inputs/testInput');
  const part1Result = finalInstance?.targetProp;
  const part2Result = finalInstance?.targetProp;
  console.log(chalk.blue('======================================================='));
  if (part1Result) {
    console.log('Part 1 Answer:', chalk.green(part1Result));
    console.log(chalk.blue('-------------------------------------------------------'));
  }
  if (part2Result) {
    console.log('Part 2 Answer:', chalk.green(part2Result));
  }
  console.log(chalk.blue('======================================================='));

  it ('Should have valid results for both parts', function() {
    assert.ok(part1Result, 'Part 1 result should not be undefined');
    assert.ok(part2Result, 'Part 2 result should not be undefined');
  });
});
