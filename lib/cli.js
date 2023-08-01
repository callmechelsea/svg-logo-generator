// cli.js contains all message prompts and required items to run the SVG logo maker

const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square, Star } = require("./shapes")
const { writeFile } = require("fs/promises")

// promt user for text, text color, shape color, and shape type
class CLI {
  run() {
    return inquirer
.prompt([
  {
    name: "text",
    type: "input",
    message: "Enter a max of 3 characters you want to display:",
    validate: (text) =>
    text.length <= 3 || "Text must be 3 characters or less"
  },
  {
    name: "textColor",
    type: "input",
    message: "Enter a text color",
  },
   {
    name: "shapeColor",
    type: "input",
    message: "Enter a shape color",
  },
  {
    name: "shapeType",
    type: "list",
    message: "Select a shape using the arrows",
    choices: ["circle", "square", "triangle",],
  },

])
.then(({text, textColor, shapeColor, shapeType}) => {
  let shape;
  switch (shapeType) {
    case "circle":
      shape = new Circle();
      break;

    case "square":
      shape = new Square();
      break;
      
    case "triangle":
      shape = new Triangle();
      break;

    case "star":
      shape = new Star();
      break;
  }

  shape.setColor(shapeColor);

  const svg = new SVG();
  svg.setText(text, textColor);
  svg.setShape(shape);
  return writeFile("logo.svg", svg.render());
})

.then(() => {
  console.log("Successfully generated your logo");
})
.catch((error) => {
  console.log(error);
  console.log("Yike! Something went wrong");
});
  }
}

module.exports = CLI;