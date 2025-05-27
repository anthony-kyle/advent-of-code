import crypto from 'crypto';

export class DayClass {
  secret;

  targetLeadingString = '';

  targetProp;

  getHash(i) {
    const salt = this.secret + i.toString();
    return crypto.createHash('md5').update(salt).digest('hex');
  }

  findHash() {
    let i = 0;
    while (!this.targetProp) {
      const hash = this.getHash(i);
      if (hash.startsWith(this.targetLeadingString)) {
        this.targetProp = i;
      }

      i++;
    }
  }

  constructor(secret, numLeadingZeros = 5) {
    this.secret = secret;
    for (let i = 0; i < numLeadingZeros; i++) {
      this.targetLeadingString += '0';
    }
    this.findHash();
  }
}
