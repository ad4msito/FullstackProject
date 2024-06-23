document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main');
    const token = sessionStorage.getItem('authToken')
    fetch('http://localhost:8079/api/usuarios/peluches', {
        method:'GET',
        mode:'cors',
        headers: new Headers({
            'Authorization':`Bearer ${token}`,
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    }) .then ((response)=> response.json())
    .then(data => {
            const peluches = data.peluches;
            for(let peluche of peluches){
                const div = document.createElement('div');
                div.classList.add('peluche-box');
                div.innerHTML =
                `<div class="photo-item"></div>
                <div class="peluche-item">
                <p>tipo:${peluche.tipo}</p>
                <p>color:${peluche.color}</p>
                <p>${peluche.accesorios}</p>
                </div>
                `;
            
                container.appendChild(div);
            }
        });
});