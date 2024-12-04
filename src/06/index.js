// 1. Сделайте, чтобы параметры конструктора
//   сохранялись как свойства name и color
//
//   Пример:
//
//     const cat = new Cat('Aaaaa', 'blue');
//     cat.name // => 'Aaaaa'
//     cat.color // => 'blue'
//
// 2. Добавьте в класс функцию likes, которая
//   будет принимать другие объекты класса Cat
//   и возвращать true, если цвет котов совпадает
//
//   Пример:
//
//     const cat1 = new Cat('Aaaaa', 'blue')
//     const cat2 = new Cat('Bbbbb', 'blue')
//     const cat3 = new Cat('Ccccc', 'red')
//
//     cat1.likes(cat2) // => true
//     cat1.likes(cat3) // => false
//
class Cat {
  constructor(name, color) {
    this.name = name, this.color = color;
  }
  likes(cat) {
    return this.color === cat.color;
  }
}

// 3. Сделайте, чтобы параметры конструктора
//   сохранялись как свойства x и y
//
//   Пример:
//
//     const p = new Point2d(3, 4);
//
//     p.x // => 3
//     p.y // => 4
//
// 4. Добавьте метод equals() который принимает
//   другую точку и возвращает true, если точки совпадают
//
//   Пример:
//
//     const p1 = new Point2d(3, 4);
//     const p2 = new Point2d(3, 4);
//     const p3 = new Point2d(3, 7);
//
//     p1.equals(p2) // => true
//     p1.equals(p3) // => false
//
// 5. Добавьте метод distance() который вернет расстояние
//   от точки до другой точки, которую передадут параметром
//
//   Пример:
//
//     const p1 = new Point2d(10, 10);
//     const p2 = new Point2d(13, 14);
//
//     p1.distance(p2) // => 5 (примерно)
//
class Point2d {
  constructor(x, y) {
    this.x = x, this.y = y;
  }

  equals({ x, y }) {
    return x === this.x && y === this.y;
  }

  distance({ x, y }) {
    const dx = x - this.x, dy = y - this.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
}
