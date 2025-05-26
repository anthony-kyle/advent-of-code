import fs from 'fs';

export class DayClass {
  filePath;

  instructions;

  currentCoords = { x: 0, y: 0 };

  houseCoords = new Set(['0,0']);

  robotCoords = { x: 0, y: 0 };

  readFile() {
    const fileContents = fs.readFileSync(this.filePath, 'utf8');
    return fileContents.trim().split('');
  }

  parseInstructions() {
    this.instructions = this.readFile();
  }

  deliverPresents(hasRobot) {
    this.instructions.forEach((direction, inx) => {
      if (hasRobot && (inx + 1) % 2 === 0) {
        this.move(direction, true);
        return;
      }
      this.move(direction, false);
    });
  }

  move(direction, isRobot) {
    switch (direction) {
      case '^':
        isRobot ? this.robotCoords.y += 1 : this.currentCoords.y += 1;
        break;
      case 'v':
        isRobot ? this.robotCoords.y -= 1 : this.currentCoords.y -= 1;
        break;
      case '>':
        isRobot ? this.robotCoords.x += 1 : this.currentCoords.x += 1;
        break;
      case '<':
        isRobot ? this.robotCoords.x -= 1 : this.currentCoords.x -= 1;
        break;
      default:
        throw new Error(`Unknown direction: ${direction}`);
    }
    this.updateHouseCoords(isRobot);
  }

  updateHouseCoords(isRobot) {
    const coords = isRobot ? this.robotCoords : this.currentCoords;
    const coordKey = `${coords.x},${coords.y}`;
    this.houseCoords.add(coordKey);
  }

  constructor(filePath, hasRobot = false) {
    this.filePath = filePath;
    this.parseInstructions();
    this.deliverPresents(hasRobot);
  }
}
