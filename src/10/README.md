# Работа с DOM, 3

## Удаление элемента из родительского контейнера

```javascript
// Если на input было назначено событие,
//   не забываем отписываться
input.removeEventListener('input', handler);

// Как-то так
input.remove();
```

## Изменение значение у существующего инпута
```javascript
// input type=text
// select
input.value = 'value'

// input type=checkbox
input.checked = true; // либо false

// textarea
input.textContent = 'textarea value';
```

## План на сегодня

 * npm update
 * npm run update
 * Открываем 10/index.html в браузере
 * Если в 09 все получилось, копируем код в 10/index.js (не затираем задания)
 * Открываем 10/index.js в редакторе и выполняем задания
 * Тестов сегодня нет

