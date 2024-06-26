

const formElements = document.querySelector('form[class="login"]')

formElements.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
    email: document.querySelector('input[class="email"]').value,
    pass: document.querySelector('input[class="password"]').value
    }
    fetch('http://localhost:8079/api/auth/login',{
        method:"POST",
        body: JSON.stringify(data),
        mode:'cors',
        headers: new Headers({
            "Content-Type":"application/json",
                'Access-Control-Allow-Origin': '*',
        }),       
    })
    .then(response => response.json())
    .then(result => {
        try {
        if(result.accessToken){
            sessionStorage.setItem('authToken',result.accessToken);
            console.log('token guardado satisfactoriamente');
            window.location.href = "./userpage.html";  
        }
        }catch(error){
            alert("datos invalidos", error)
        }
    })


});
function checkAuth(){
    const token = sessionStorage.getItem('authToken');
    if(!token){
        window.location.href = './loginPage.html'
    }
}