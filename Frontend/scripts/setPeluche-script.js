
const peluches = {
    1: { nombre: 'perro', color: 'verde' },
    2: { nombre: 'oso', color: 'rosa' },
    3: { nombre: 'mapache', color: 'amarillo' },
    4: { nombre: 'gato', color: 'verde' },
    5: { nombre: 'conejo', color: 'rosa' }
};
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get('id');
var tipo = peluches[id].nombre;

document.addEventListener('DOMContentLoaded', function() {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get('id');
    function setPhoto(id, array, color){

        const divPhoto = document.querySelector('.photo-container');
        divPhoto.innerHTML = '';
        if(id in array){
        const div = document.createElement('div');
        div.innerHTML = `<img src="../img/${peluches[id].nombre}-${color}.png">`;
        divPhoto.appendChild(div);     
    }
}
    setPhoto(id, peluches, peluches[id].color);

    document.querySelectorAll('.paleta span').forEach(span => {
        span.addEventListener('click', function(){
            document.querySelectorAll('.paleta span').forEach(span => {
                span.setAttribute('data-seleccionado', 'false')
            });
            this.setAttribute('data-seleccionado','true')
            setPhoto(id, peluches, span.getAttribute('data-color'))
        })
    })
    document.querySelectorAll('.accesorios img').forEach(img=>{
        img.addEventListener('click', function(){
            document.querySelectorAll('.accesorios img').forEach(img => {
                img.setAttribute('data-seleccionado', 'false')
            })
            this.setAttribute('data-seleccionado','true')
        })
    })


    const tipoSelected = document.getElementById('tipo');
    const colorSelected = document.getElementById('color');
    const accesoriosSelected = document.getElementById('accesorios');

    const popup = document.getElementById('popup');
    const boton1 = document.querySelector('.create');
    boton1.addEventListener('click', function(){
        try {
        const colorSeleccionado = document.querySelector('.paleta span[data-seleccionado="true"]').getAttribute('data-color');
        const accesorioSeleccionado = document.querySelector('.accesorios img[data-seleccionado="true"]').getAttribute('data-accs');
        const pelucheSeleccionado = {
            tipo:tipo,
            color:colorSeleccionado,
            accesorios:accesorioSeleccionado
        }
        
            popup.style.display = 'block'
            tipoSelected.textContent = pelucheSeleccionado.tipo;
            colorSelected.textContent = pelucheSeleccionado.color;
            accesoriosSelected.textContent = pelucheSeleccionado.accesorios;
        } catch(err) {
            alert('debes elegir al menos una opcion de color y otra de accesorios')
    }
    })
    const botonConfirmar = document.querySelector('.confirmar')
    const token = sessionStorage.getItem('authToken')
    botonConfirmar.addEventListener('click', ()=>{
        const peluche = {
            tipo:tipo,
            color:document.querySelector('.paleta span[data-seleccionado="true"]').getAttribute('data-color'),
            accesorios:document.querySelector('.accesorios img[data-seleccionado="true"]').getAttribute('data-accs')
        }
            fetch(`http://localhost:8079/api/peluches/crear`,{
            method:"PUT",
            body: JSON.stringify(peluche),
            mode:'cors',
            headers: new Headers({
                "Content-Type":"application/json",
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${token}`,

            }),       
        }).then(response => response.json()) .then(data => {
            window.location.href = 'userPeluches.html'
            alert('Felicitaciones. Ha adquirido un nuevo peluche')
        })
    })
    const botonCerrar = document.querySelector('.cerrar')
    botonCerrar.addEventListener('click', ()=>{
        popup.style.display = 'none';
    })

});
