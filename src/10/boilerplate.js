// Этот код не трогаем, он просто проверяет, что все будет работать
//
const root = document.querySelector("#root");

const msg = document.querySelector("#message");
const dc = new DataContainer;
const up = dc.getUpdater();
const get = dc.getGetter();

const fn = (name, value) => {
  up(name, value);
  msg.innerHTML = JSON.stringify(dc.getData(), null, 2);
}


let inputs = [];

const addInputs = () => {
  const name = new TextInput("name", "Сидор", "Имя");
  const lastName = new TextInput("last", "Петров", "Фамилия");
  const patronymic = new TextInput("patronymic", "Васильевич", "Отчество");
  const patrAbs = new CheckboxInput("no_patronymic", false, "нет отчества");

  inputs = [name, lastName, patronymic, patrAbs];

  inputs.forEach((c) => {
    c.render(root);
    c.subscribe(fn, get);
  });

  return inputs;
}

const rmInputs = () => {
  inputs.forEach((input) => input.destroy());
  inputs = [];
}

const rmLastInput = () => {
  inputs.slice(-1).forEach((input) => input.destroy());
  inputs = inputs.slice(0, -1);
}

const btnAdd = document.querySelector("#addInputs");
const btnRm = document.querySelector("#rmInputs");
const btnRmLast = document.querySelector("#rmLast");

btnAdd.addEventListener('click', addInputs);
btnRm.addEventListener('click', rmInputs);
btnRmLast.addEventListener('click', rmLastInput);
