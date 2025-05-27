import assert from 'assert';
import chalk from 'chalk';
import { DayClass } from '../index.js'; // Ensure the main module is loaded

describe('Part 1:', function() {
  const cases = [
    ['abcdef', 609043],
    ['pqrstuv', 1048970],
  ];

  it ('Should have cases defined', function() {
    assert.ok(cases.length > 0, 'Test cases should be defined');
  });

  cases.forEach(function(testCase) {
    it(`Should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const dayInstance = new DayClass(testCase[0], 5);
      assert.strictEqual(dayInstance?.targetProp, testCase[1]);
    });
  })

});

describe('Running Final Tests:', () => {
  const finalInstance = new DayClass('yzbqklnj', 5);
  const part1Result = finalInstance?.targetProp;
  const finalInstance2 = new DayClass('yzbqklnj', 6);
  const part2Result = finalInstance2?.targetProp;

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
