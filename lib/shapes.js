class Shape {
    // Making the shapes a class
    constructor(color) {
      this.color = color;
      this.textX = 150;
      this.textY = 125;
      this.svgHeight = 200;
      this.svgWidth = 300;
    }
    setColor(color) {
      this.color = color;
    }
    render() {}
  }

// todo: google 'SVG Code Shapes'
// figure out how to edit these to work,
// the measurements need to change

  class Circle extends Shape {
    // modifys the shape class
    constructor(color) {
      super(color);
      }
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" /> `;
    }
  }
    class Square extends Shape {
    // modifies the shape class
        constructor(color) {
          super(color);
          this.textX = ;
          this.textY = ;
              }
        render() {
          return `<square cx="150" cy="100" r="80" fill="${this.color}" /> `;
        }
    }
    class Triangle extends Shape {
    // modifies the shape class
    constructor(color) {
      super(color);
      this.textX = ;
      this.textY =;
      }
    render() {
      return `<triangle cx="150" cy="100" r="80" fill="${this.color}" /> `;
    }
  }
