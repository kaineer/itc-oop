# Работа с fetch

```javascript
 * await fetch(url) // GET request
 * await fetch(url, {
     method: 'POST',
     // если хотим, чтобы содержимое восприняли, как json
     headers: { 'content-type': 'application/json' },
     // параметры с данными
     body: JSON.stringify({ key: 'value' }, null, 0),
   })
                    // POST request
```

```javascript
// Получаем список вакансий с сервера
const resp = await fetch("http://localhost:5000/vacancies");
const data = await resp.json();
const { vacancies } = data;

// Логинимся
const resp = await fetch("http://localhost:5000/login", {
  method: "POST",
  // без этого чуда не произойдет
  headers: { "content-type": "application/json" },
  // параметры
  body: { "login": "panda", "password": "kungfu" },
}); // но это еще не все

const json = await resp.json(); // После этого данными можно пользоваться ```
```
