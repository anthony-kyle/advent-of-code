import assert from 'assert';
import chalk from 'chalk';
import { SantaApartment } from '../index.js'; // Ensure the main module is loaded
import directions from '../input.js'; // Import the input file

describe('Part 1: Find ending floor for Santa', function() {
  const cases = [
    ['()()', 0],
    ['(())', 0],
    ['(((', 3],
    ['(()(()(', 3],
    ['))(((((', 3],
    ['())', -1],
    ['))(', -1],
    [')))', -3],
    [')())())', -3]
  ];

  cases.forEach(function(testCase) {
    it(`should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const santa = new SantaApartment(testCase[0]);
      assert.strictEqual(santa.currentFloor, testCase[1]);
    });
  })

  console.log(chalk.blue('======================================================='));
  const santa = new SantaApartment(directions);
  console.log('Final floor for Santa:', chalk.green(santa.currentFloor));
  console.log(chalk.blue('======================================================='));
});

describe('Part 2: Find first instruction causing Santa to enter basement', function() {
  const cases = [
   [')', 1],
   ['()())', 5]
  ];

  cases.forEach(function(testCase) {
    it(`should return ${testCase[1]} for input "${testCase[0]}"`, function() {
      const santa = new SantaApartment(testCase[0]);
      assert.strictEqual(santa.firstBasementEntry(), testCase[1]);
    });
  })

  console.log(chalk.blue('======================================================='));
  const santa = new SantaApartment(directions);
  console.log('First Basement Floor Instruction Number:', chalk.green(santa.firstBasementEntry()));
  console.log(chalk.blue('======================================================='));
})
