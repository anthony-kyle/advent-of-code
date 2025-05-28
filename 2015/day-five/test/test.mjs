import assert from 'assert';
import chalk from 'chalk';
import { DayClass } from '../index.js'; // Ensure the main module is loaded

describe('Part 1:', function() {
  const cases = [
    ['test1', 1],
    ['test2', 1],
    ['test3', 0],
    ['test4', 0],
    ['test5', 0],
    ['testConsolidation', 2]
  ];

  it ('Should have cases defined', function() {
    assert.ok(cases.length > 0, 'Test cases should be defined');
  });

  cases.forEach(function(testCase) {
    it(`Should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const filePath = `./inputs/${testCase[0]}`;
      const dayInstance = new DayClass(filePath);
      assert.strictEqual(dayInstance?.niceStringCount, testCase[1]);
    });
  })

});

describe('Part 2:', function() {
  const cases = [
    ['test6', 1],
    ['test7', 1],
    ['test8', 0],
    ['test9', 0],
    ['testConsolidation2', 2],
    ['customTest1', 0],
    ['customTest2', 2],
  ];

  it ('Should have cases defined', function() {
    assert.ok(cases.length > 0, 'Test cases should be defined');
  });

  cases.forEach(function(testCase) {
    it(`Should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const filePath = `./inputs/${testCase[0]}`;
      const dayInstance = new DayClass(filePath, true); // True indicates new rules for part 2
      assert.strictEqual(dayInstance?.niceStringCount, testCase[1]);
    });
  })
});

describe('Running Final Tests:', () => {
  const finalInstance = new DayClass('./inputs/testInput');
  const part1Result = finalInstance?.niceStringCount;
  
  const finalInstance2 = new DayClass('./inputs/testInput', true); // True indicates new rules for part 2
  const part2Result = finalInstance2?.niceStringCount;

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
