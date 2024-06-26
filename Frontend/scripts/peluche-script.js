document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main');
    const popup = document.getElementById('popup');
    const borrarButton = document.getElementById('borrar');
    const cerrarButton = document.getElementById('cerrar');
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
                if(peluche){
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

                div.addEventListener('click', ()=>{
                    popup.style.display = 'block';

                    borrarButton.addEventListener('click', ()=>{
                        const pelucheId = peluche._id; 
                        fetch(`http://localhost:8079/api/usuarios/peluches/${pelucheId}`, {
                            method: 'DELETE',
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                            },
                        })
                        .then(response => {
                        console.log(response)
                            if (response.ok) {
                                console.log('Peluche eliminado correctamente');
                                div.remove(); 
                                popup.style.display = 'none'; 
                            } else {
                                throw new Error('Error al eliminar el peluche');
                            }
                        })
                        .catch(error => {
                            console.error('Error al eliminar el peluche:', error);
                        });
                    })
                    })

                    cerrarButton.addEventListener('click', ()=>{
                        popup.style.display = 'none'
                    })
                }
            }
        });
});