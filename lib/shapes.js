// shapes.js contains all of the shape information for the 3 shape options (circle, triangle, square)
class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
  return `<rect x="65" y="15" width="170" height="170" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square }