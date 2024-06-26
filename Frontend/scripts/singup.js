
const form = document.querySelector('form[class="singup"]')
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const data = {
        email: document.querySelector('.email').value,
        name: document.querySelector('.nombre').value,
        lastname: document.querySelector('.apellido').value,
        roles: "user",
        password: document.querySelector('.password').value,
        peluches:[]
        }
        fetch('http://localhost:8079/api/usuarios/', {
            method:"POST",
            body: JSON.stringify(data),
            mode:'cors',
            headers: new Headers({
                "Content-Type":"application/json",
                'Access-Control-Allow-Origin': '*',
            }),       
        })
        .then(response => response.json())
        .then(data => {
            window.location.href='./loginPage.html'
            console.log(data)
        })
        
})
