function parseCount(value) {
  let quantity = parseInt(value);
  if (Object.is(quantity, NaN)) {
    throw new Error("Невалидное значение");
  }
  return quantity;
}

function validateCount(value) {
  try {
    let quantity = parseCount(value);
    if (!Object.is(quantity, NaN)) {
      return quantity;
    }
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || c + a < b || c + b < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let triangle = new Object();
    triangle.getArea = function () {return "Ошибка! Треугольник не существует";};
    triangle.getPerimeter = function () {return "Ошибка! Треугольник не существует";};
    return triangle;
  }
}
