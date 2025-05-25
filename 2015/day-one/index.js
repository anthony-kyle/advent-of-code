export class SantaApartment {
  currentFloor = 0
  
  basementEntry = []
  
  instructions
  
  parsedInstructions(){
    return this.instructions.trim().split('')
  }
  
  readInstructions(){
    for (let mv_inx in this.parsedInstructions()) {
       this.move(mv_inx)
    }
  }
  
  firstBasementEntry(){
    return this.basementEntry[0]
  }
  
  move(direction_inx){
    const direction = this.parsedInstructions()[direction_inx]
    const origFloor = this.currentFloor;
    if (direction === '('){
      this.currentFloor += 1
    } else if (direction === ')') {
      this.currentFloor -= 1
    } else {
      console.error(`Invalid instruction: ${direction}`)
    }
    if (origFloor === 0 && this.currentFloor === -1) {
      this.basementEntry.push(parseInt(direction_inx) + 1)
    }
  }
  
  constructor(instructions) {
    this.instructions = instructions
    this.readInstructions()
  }
}
