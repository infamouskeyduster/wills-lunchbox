class Snack {
  constructor(snackType) {
    this.deliciousLevel = 'extra';
    this.type = snackType;
    this.amount = 100;
    this.originalAmount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    this.healthy = undefined;

    if (this.type.includes('Fruit')) {
      this.healthy = true;
    } else {
      this.healthy = false;
    }
  }

  getEaten() {
    this.amount -= 10;
    if (this.amount <= (this.originalAmount * 0.2)) {
      this.cuttingItClose = true;
    }
  }
}

module.exports = Snack;
