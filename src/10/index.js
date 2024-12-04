// 0. Если в задании 09 всё работало
//   (позовите меня, я скажу, действительно ли все работает)
//   скопируйте сюда все классы из 09/index.js
//
//
// 1. Добавьте в класс DataContainer метод getGetter
//   Этот метод должен возвращать функцию, которая
//   для переданного имени будет возвращать значение в сохраненных
//   данных
//
//   Пример:
//
//   const dc = new DataContainer();
//   const up = dc.getUpdater();
//   const get = dc.getGetter();
//
//   up("key", "value");
//   get("key") // => "value"
//
//
// 2. Измените метод subscribe у классов {Text,Checkbox}Input
//   таким образом, чтобы вторым параметром они принимали getter
//
//   Используя этот параметр добейтесь, чтобы, если в DataContainer
//   уже записано значение какого-то поля, это значение бы
//   выставлялось в инпуте
//
//
// 3. Добавьте/измените метод destroy у классов {Text,Checkbox}Input
//   таким образом, чтобы при его вызове инпут удалялся из контейнера
//
class DataContainer {
  constructor(data = {}) {
    this.data = {...data};
  }

  getUpdater() {
    return (name, value) => {
      this.data[name] = value;
    }
  }

  getGetter() {
    return (name) => this.data[name];
  }

  getData() {
    return this.data;
  }
}

class BaseInput {
  constructor(name, value = '', label = name) {
    this.name = name;
    this.value = value;
    this.label = label;
  }

  destroy() {
    if (this.div) {
      if (this.handler) {
        this.input.removeEventListener('input', this.handler);
      }

      this.div.remove();
      this.div = null;
    }
  }
}

const inputWithLabel = (name, label_, input) => {
  const lblName = "labelled_" + name;

  input.setAttribute('id', lblName);

  const label = document.createElement("label");
  label.setAttribute('for', lblName);
  label.textContent = label_;

  const div = document.createElement('div');
  div.append(label);
  div.appendChild(input);

  return div;
}

class TextInput extends BaseInput {
  render(container) {
    const input = document.createElement('input');
    input.setAttribute('name', this.name);
    input.setAttribute('value', this.value);
    input.setAttribute('type', 'text');
    this.input = input;

    this.div = inputWithLabel(this.name, this.label, input);
    container.appendChild(this.div);
  }

  subscribe(updater, getter) {
    if (this.input) {
      if (typeof getter === 'function') {
        const value = getter(this.name);
        if (typeof value === 'string') {
          this.input.value = value;
        }
      }
      this.handler = () => {
        updater(this.name, this.input.value);
      }
      this.input.addEventListener('input', this.handler);

      this.handler();
    }
  }
}

class CheckboxInput extends BaseInput {
  render(container) {
    const input = document.createElement('input');
    input.setAttribute('name', this.name);
    if (this.value) {
      input.setAttribute('checked', 'checked');
    }
    input.setAttribute('type', 'checkbox');
    this.input = input;

    this.div = inputWithLabel(this.name, this.label, input);
    container.appendChild(this.div);
  }

  subscribe(updater, getter) {
    if (this.input) {
      if (typeof getter === 'function') {
        const value = getter(this.name);
        if (typeof value === 'boolean') {
          this.input.checked = value;
        }
      }
      this.handler = () => {
        updater(this.name, this.input.checked);
      }
      this.input.addEventListener('input', this.handler);

      // Добавить данные
      this.handler();
    }
  }
}
