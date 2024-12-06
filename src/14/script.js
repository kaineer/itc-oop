//
const first = (selector) => document.querySelector(selector);
const message = first(".message")
let token
const loginInput = first("input[name='login']");
const passInput = first("input[name='password']");
const button = first("button");
button.addEventListener('click',(e) => {
  e.preventDefault();

    fetch('http://localhost:5000/login', {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        login: String(loginInput.value),
        password: String(passInput.value)
      }, null, 0)
    })
    .then((response) =>{
    console.log(response)
    return response.json()
  })
  .then((e)=>{
    token = e.token
    console.log(token)
  })
  .then(()=>{
    return fetch("http://localhost:5000/secret", {
      headers: {token},
    })
  })
  .then((response) =>{
    return response.json()

  }
  )
  .then((response) =>{
    message.textContent = response.secret
  })

})
fetch("http://localhost:5000/vacancies")
.then((response) =>{
  return response.json()
})
.then((response)=>{
  console.log(response)
})