import fs from 'fs';

export class DayClass {
  filePath;

  instructions;

  boxes = [];

  cumulativeArea = 0;

  ribbonLength = 0;

  readFile() {
    const fileContents = fs.readFileSync(this.filePath, 'utf8');
    return fileContents.trim().split('\n');
  }

  calculateSideAreas(dimensions) {
    const side = dimensions.height * dimensions.depth;
    const front = dimensions.width * dimensions.height;
    const top = dimensions.width * dimensions.depth;
    const smallestArea = Math.min(side, front, top);
    return 2 * (side + front + top) + smallestArea;
  }

  convertToBox(dimension) {
    const [width, height, depth] = dimension.trim().split('x').map(Number);
    const area = this.calculateSideAreas({ width, height, depth });
    const requiredRibbon = this.calculateRibbonLength([width, height, depth]);
    this.boxes.push({
      width,
      height,
      depth,
      area,
      requiredRibbon,
    });
    this.cumulativeArea += area;
  }

  minPerimeter(dimensions) {
    const sortedDimensions = [...dimensions].sort((a, b) => a - b);
    return 2 * (sortedDimensions[0] + sortedDimensions[1]);
  }


  calculateRibbonLength(dimensions) {
    const ribbon = this.minPerimeter(dimensions);
    const bow = dimensions[0] * dimensions[1] * dimensions[2];
    const ribbonLength = ribbon + bow;
    this.ribbonLength += ribbonLength;
    return ribbonLength;
  }

  processPackages() {
    this.instructions.forEach((dimension) => {
      this.convertToBox(dimension);
    });
  }

  parseInstructions() {
    this.instructions = this.readFile();
  }

  constructor(filePath) {
    this.filePath = filePath;
    this.parseInstructions();
    this.processPackages();
  }
}
