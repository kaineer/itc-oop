// 1. Допишите конструктор, учитывая, что container может быть
//   как элементом, так и селектором
//   Сохраните элемент в свойство container.
//
// 2. Напишите метод create(name, value), который заменит сдержимое элемента container на инпут с именем name и значением value
//
// 3. Напишите метод onInput, который будет принимать функцию и вызывать ее в случае, если в инпут что-то ввели. Функция должна вызываться с текущим значением инпута
//
// 4. Напишите метод off, который будет убирать обработчик с инпута
//
class TextInput {
  constructor(container) {
    this.container = container;
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    }
  }

  create(name, value) {
    this.container.innerHTML = (
      "<input name='" + name + "' value='" + value + "' />"
    );

    this.input = this.container.querySelector('input');
  }

  onInput(fn) {
    this.handler = () => {
      const value = this.input.value;
      fn(value);
    }
    this.input.addEventListener('input', this.handler);
  }

  off() {
    this.input.removeEventListener('input', this.handler);
  }
}
