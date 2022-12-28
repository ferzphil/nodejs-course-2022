class Circle {
  area = (r) => Math.PI * r * r;

  circumference = (r) => {
    return 2 * Math.PI * r
  }
}

module.exports = Circle;