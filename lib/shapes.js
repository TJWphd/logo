class Shape {
  // makes the shapes a class
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  // modifies the shape class
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  // modifies the shape class
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}
class Triangle extends Shape {
  // modifies the shape class
  constructor(color) {
    super(color);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// assembles classes into logo output
class Svg {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeRender = "";
  }
  setShapeRender(shapeElement) {
    this.shapeRender = shapeElement;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeRender}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}
module.exports = { Circle, Triangle, Square, Svg };
