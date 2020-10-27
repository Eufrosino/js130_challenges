class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.total = side1 + side2 + side3;
    this.sides = [side1, side2, side3].sort((a, b) => a - b);
  }

  kind() {
    if ((this.total === 0)||
        (this.side1 < 0 || this.side2 < 0 || this.side3 < 0)||
        ((this.sides[0]+this.sides[1]<this.sides[2]))) {
      throw new Error('Not a valid triangle!');
    } else if (this.side1 === this.side2 && this.side2 === this.side3) {
      return 'equilateral';
    } else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  sides() {
    console.log(this.sides);
  }
}

module.exports = Triangle;

let newTriangle = new Triangle(1, 2, 3)
console.log(newTriangle.sides)
