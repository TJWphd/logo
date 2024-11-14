const inquire = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle, Svg } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter three numbers or letters",
      name: "text",
    },
    {
      type: "input",
      message: "What color do you want the text?",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape do you want the logo?",
      name: "shape",
      choices: ["square", "circle", "triangle"],
    },
    {
      type: "input",
      message: "What color do you want the shape?",
      name: "shapeColor",
    },
  ])
  .then((response) => {
    console.log(
      "Your logo will be ",
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor,
      "!"
    );
    makingLogo(response);
  });

function makingLogo(response) {
  let shape;
  if ((response.shape = circle)) {
    shape = new Circle(response.shapeColor);
  } else if ((response.shape = square)) {
    shape = new Square(response.shapeColor);
  } else if ((response.shape = triangle)) {
    shape = new Triangle(response.shapeColor);
  }
  let svgLogo = new Svg(response.text, repsonse.textColor);
  svgLogo.setShapeRender(shape.render());
  fs.writeFileSync("logo.svg", svgLogo.render(), function (err) {
    if (err) throw err;
  });
  console.log("Logo complete");
}
