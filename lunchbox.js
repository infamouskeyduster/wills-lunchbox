var Snack = require('./snack');

class LunchBox {
  constructor(lunchBox) {
    this.owner = lunchBox.owner;
    this.madeOf = lunchBox.madeOf;
    this.shape = lunchBox.shape;
    this.color = lunchBox.color;
    this.handle = true;
    this.snacks = [];
    this.healthySnacks = [];
  }

  acquireSnack(snackClassObject) {
    this.snacks.push(snackClassObject);
    snackClassObject.isInLunchBox = true;

    if (snackClassObject.healthy === true) {
      this.healthySnacks.push(snackClassObject);
    }
  }

  findHealthySnacks() {
    return this.healthySnacks;
  }
}

console.log(this.madeOf);
module.exports = LunchBox;
