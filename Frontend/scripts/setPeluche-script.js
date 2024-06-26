
document.addEventListener('DOMContentLoaded', function() {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get('id');
    function setPhoto(id){
        const peluches = {
            1: 'perro-verde',
            2: 'oso-rosa',
            3: 'mapache-amarillo',
            4: 'gato-verde',
            5: 'conejo-rosa'
        };
        const divPhoto = document.querySelector('.photo-container');
        if(id in peluches){
        const div = document.createElement('div');
        div.innerHTML = `<img src="../img/${peluches[id]}.png">`;
        divPhoto.appendChild(div);     
    }
}
    setPhoto(id);
});
