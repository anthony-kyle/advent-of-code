import assert from 'assert';
import chalk from 'chalk';
import { DayClass } from '../index.js'; // Ensure the main module is loaded

describe('Part 1:', function() {
  const cases = [
    ['testOne', 2],
    ['testTwo', 4],
    ['testThree', 2],
  ];

  it('Should have cases defined', function() {
    assert.ok(cases.length > 0, 'Test cases should be defined');
  });

  cases.forEach(function(testCase) {
    it(`Should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const filePath = `./inputs/${testCase[0]}`;
      const dayInstance = new DayClass(filePath);
      assert.strictEqual(dayInstance.houseCoords.size, testCase[1]);
    });
  })

});

describe('Part 2:', function() {
  const cases = [
    ['testOne', 3],
    ['testTwo', 3],
    ['testThree', 11],
  ];

  it('Should have cases defined', function() {
    assert.ok(cases.length > 0, 'Test cases should be defined');
  });

  cases.forEach(function(testCase) {
    it(`Should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const filePath = `./inputs/${testCase[0]}`;
      const dayInstance = new DayClass(filePath, true);
      assert.strictEqual(dayInstance?.houseCoords.size, testCase[1]);
    });
  })
});

describe('Running Final Tests:', () => {
  const finalInstance = new DayClass('./inputs/testInput');
  const part1Result = finalInstance?.houseCoords.size;

  const part2Instance = new DayClass('./inputs/testInput', true);
  const part2Result = part2Instance?.houseCoords.size;
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
