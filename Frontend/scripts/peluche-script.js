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
                `<div class="photo-item">
                    <img src="../img/${peluche.tipo}-${peluche.color}.png" >
                </div>
                <div class="peluche-item">
                    <div class="pelu-info">   
                        <p>Accesorio:</p>
                    </div>
                    <img src="../img/${peluche.accesorios}.png">
                </div>
                `;
                container.appendChild(div);
                
            }
        });
});