import fs from 'fs';

export class DayClass {
  filePath;

  instructions;

  niceStringCount = 0;

  naughtyStringCount = 0;

  hasThreeVowels(str) {
    const vowels = str.match(/[aeiou]/g);
    return vowels && vowels.length >= 3;
  }

  hasDoubleLetter(str) {
    return /([a-z])\1/.test(str);
  }

  hasNoForbiddenStrings(str) {
    const forbidden = ['ab', 'cd', 'pq', 'xy'];
    return !forbidden.some(sub => str.includes(sub));
  }

  readFile() {
    const fileContents = fs.readFileSync(this.filePath, 'utf8');
    return fileContents.trim().split('\n');
  }

  hasStringPairWithNoOverlap(str) {
    for (let i = 0; i < str.length - 1; i++) {
      const pair = str.slice(i, i + 2);
      const nextIndex = str.indexOf(pair, i + 1);
      if (nextIndex === i + 1) {
        return false;
      } else if (nextIndex > 0) {
        return true;
      }
    }
    return false;
  }

  hasRepeatingLetterWithOneBetween(str) {
    for (let i = 0; i < str.length - 2; i++) {
      if (str[i] === str[i + 2]) {
        return true;
      }
    }
    return false;
  }

  parseInstructions() {
    this.instructions = this.readFile();
  }

  countNiceStrings(newNiceStringRules) {
    this.instructions.forEach(s => {
      const str = s.trim();
      if (newNiceStringRules) {
        if (this.hasStringPairWithNoOverlap(str) && this.hasRepeatingLetterWithOneBetween(str)) {
          this.niceStringCount++;
        } else {
          this.naughtyStringCount++;
        }
      } else {
        if (this.hasThreeVowels(str) && this.hasDoubleLetter(str) && this.hasNoForbiddenStrings(str)) {
          this.niceStringCount++;
        } else {
          this.naughtyStringCount++;
        }
      }
    });
  }

  constructor(filePath, newNiceStringRules = false) {
    this.filePath = filePath;
    this.parseInstructions();
    this.countNiceStrings(newNiceStringRules);
  }
}
