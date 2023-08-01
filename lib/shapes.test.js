// tests the code

const { Circle, Triangle, Square, } = require("./shapes");

// circle test 

describe("Circle", () => {
  test("should create circle element", () => {
    const correctSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(correctSvg);
  });

  test("should accept shape color", () => {
    const correctSvg = '<circle cx="150" cy="100" r="80" fill="red" />';
    const circle = new Circle();
    circle.setColor("red");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(correctSvg);
  });
});  

// triangle test

describe("Triangle", () => {
  test("should create triangle element", () => {
    const correctSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="orange" />';
    const triangle = new Triangle();
    triangle.setColor("orange");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(correctSvg);
  });
  test("should accept shape color", () => {
    const correctSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />';
    const triangle = new Triangle();
    triangle.setColor("yellow");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(correctSvg);
  });
});


// square test

describe("Square", () => {
  test("should create square element", () => {
    const correctSvg =
      '<rect x="65" y="15" width="170" height="170" fill="black" />';
    const square = new Square();
    square.setColor("black");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(correctSvg);
  });
  test("should accept shape color", () => {
    const correctSvg =
      '<rect x="65" y="15" width="170" height="170" fill="pink" />';
    const square = new Square();
    square.setColor("pink");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(correctSvg);
  });
});


