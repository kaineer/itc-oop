class DataContainer {
  constructor(data = {}) {
    this.data = {...data};
  }

  getUpdater() {
    return (name, value) => {
      this.data[name] = value;
    }
  }

  getData() {
    return this.data;
  }
}

const dc = new DataContainer();

const updater = dc.getUpdater();

updater("name", "value");
dc.getData() // => { name: "value" };
