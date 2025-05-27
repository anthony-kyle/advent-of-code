import fs from 'fs';

export class DayClass {
  filePath;

  instructions;

  readFile() {
    const fileContents = fs.readFileSync(this.filePath, 'utf8');
    return fileContents.trim().split('\n');
  }

  parseInstructions() {
    this.instructions = this.readFile();
  }

  constructor(filePath) {
    this.filePath = filePath;
    this.parseInstructions();
  }
}
