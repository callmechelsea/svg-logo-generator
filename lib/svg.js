// type of image produced
class SVG {
  constructor() {
    this.textE = "";
    this.shapeE = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeE}${this.textE}</svg>`;
  }

  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text must be less than 3 characters");
    }
    this.textE = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">${message}</text>`;
  }

  setShape(shape) {
    this.shapeE = shape.render();
  }
}

module.exports = SVG;
