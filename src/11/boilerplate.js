const root = document.querySelector("#root");
const link0 = document.querySelector("#page0");
const link1 = document.querySelector("#page1");

const msg = document.querySelector("#message");
const dc = new DataContainer;

const wizard = new Wizard();

const pageN = new Page();
pageN.add(new TextInput("email", "foo@bar.com", "email label"));
pageN.add(new TextInput("password", "", "password label"));
wizard.add(pageN);

const pageA = new Page();
pageA.add(new TextInput("name", "Сидор", "Имя"));
pageA.add(new TextInput("last", "Петров", "Фамилия"));
pageA.add(new TextInput("patronymic", "Васильевич", "Отчество"));
pageA.add(new CheckboxInput("no_patronymic", false, "нет отчества"));

wizard.add(pageA);

const saveGetUpdater = dc.getUpdater.bind(dc)

const overriddenGetUpdater = () => {
  return (name, value) => {
    saveGetUpdater()(name, value);
    msg.innerHTML = JSON.stringify(dc.getData(), null, 2);
  }
}

dc.getUpdater = overriddenGetUpdater;

wizard.render(root, dc);

link0.addEventListener('click', () => wizard.set(0));
link1.addEventListener('click', () => wizard.set(1));
