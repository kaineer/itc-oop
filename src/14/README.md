# Работа с fetch

 * await fetch(url) // GET request
 * await fetch(url, { method: 'POST', body: { key: 'value' }})
                    // POST request

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
