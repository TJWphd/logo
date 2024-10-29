const inquire = require("inquirer");
const fs = require("fs");
const {
    circle, square, triangle
} = require("./lib/shapes")

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
    if (response.shape = circle){
    shape = new circle (response.shapeColor)
    } 
    else if (response.shape = square){
    shape = new square (response.shapeColor)
    } 
    else if (response.shape = triangle){
    shape = new triangle (response.shapeColor)}

const SVG {
    
}




};
