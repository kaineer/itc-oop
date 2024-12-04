const obj = { a: 25 };
const b = {...obj};

const array = [1, 2, 3];
const l = [...array];

class TextInput {
  subscribe(updater) {
    const handler = () => {
      updater(
        this.name,
        this.input.value
      )
    }

    this.input.addEventListener('input', handler);
  }
}

const updater = (name, value) => {...}
