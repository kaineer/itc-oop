# Возврат управления после асинхронных операций

## Колбэки

```javascript
// Добрый ламповый пример из интернетов
getUser(function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0].id, function(orderDetails) {
      showOrderDetails(orderDetails);
    });
  });
});
```

Еще не очень страшно, наверное.

```javascript
// Как это могло выглядеть на самом деле
//   (так это больше похоже на callback hell)
getUser(function(error, user) {
  if (!error) {
    getOrders(user.id, function(error, orders) {
      if (!error) {
        getOrderDetails(orders[0].id, function(error, orderDetails) {
          if (!error) {
            showOrderDetails(orderDetails);
          }
        });
      }
    });
  }
});
```

## Промисы (2015)

```javascript
// Запросы на сервер, идущие подряд
getUser()
  .then(function (user) { return getOrders(user.id) })
  .then(function (orders) { return getOrderDetails(orders[0]) })
  .then(function (orderDetails) { showOrderDetails(orderDetails); });
```

А где проверка на ошибки?

```javascript
// Окей, надо что-то делать с ошибкой
getUser()
  .then(function (user) { return getOrders(user.id) })
  .then(function (orders) { return getOrderDetails(orders[0]) })
  .then(function (orderDetails) { showOrderDetails(orderDetails); })
  .catch(function (error) { console.log(error); });
```

С появлением стрелочных функций стало вообще красиво

```javascript
// Больше, больше стрелок!!!
getUser()
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0]))
  .then(orderDetails => showOrderDetails(orderDetails))
  .catch(error => console.log(error));
```

## async/await (2017)

Но хотелось бы излагать свои мысли ЕЩЁ проще и **понятней**

```javascript
// Как-то так.
const someImportantBusiness = async () => {
  const user = await getUser();
  const orders = await getOrders(user.id);
  const orderDetails = await getOrderDetails(orders[0]);

  return showOrderDetails(orderDetails);
}
```

А ошибки?

```javascript
// Почти так же, но уже не так красиво
const someImportantBusiness = async () => {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const orderDetails = await getOrderDetails(orders[0]);

    return showOrderDetails(orderDetails);
  } catch (error) {
    return error;
  }
}
```

## Как написать собственную функцию, возвращающую промис

```javascript
// Функция, которая просто возвращает промис со значением
const asyncValue = async (value) => Promise.resolve(value);

// Конкретный пример с возвращением управление после задержки
const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms)
}

delay(300).then(() => console.log("Прошло 300мс"));

await delay(300);
console.log('....');

[](2024-11-29_.md)
// Функция, которая вызывает функцию, принимающую колбэк
const runFunctionReturnPromise = async (fn) => {
  return new Promise((resolve, reject) => {
    fn((error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
}



// Функция, которая принимает функцию с колбэком
//   и возвращает функцию, которая возвращает промис
const promisifyCallback = (fn) => async () => {
  return new Promise((resolve, reject) => {
    fn((error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
}
```
