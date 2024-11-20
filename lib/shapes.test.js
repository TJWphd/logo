const { Circle, Square, Triangle, Svg } = require("./shapes");

describe("circle", () => {
  test("should render a green circle", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="green" />'
    );
  });
});

describe("square", () => {
  test("should render a red square", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="90" y="40" width="120" height="120" fill="red" />'
    );
  });
});

describe("triangle", () => {
  test("should render a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("svg", () => {
  test("should render a scalable vector graphics tag", () => {
    const svgLogo = new Svg("TJW", "yellow");
    const shape = new Circle("blue");
    svgLogo.setShapeRender(shape.render());
    expect(svgLogo.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">TJW</text></svg>`
    );
  });
});
