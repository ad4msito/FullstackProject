fetch('http://localhost:8079/api/peluches/ranking/1', {
    method:"GET",
        mode:'cors',
        headers: new Headers({
                'Access-Control-Allow-Origin': '*',
        })
})
.then(response => response.json())
.then(data => {
    const rankingItems = document.querySelectorAll('.ranking-item');
    data.slice(0, 3).forEach((peluche, index) => {
        if (rankingItems[index]) {
            rankingItems[index].innerText = `tipo: ${peluche.tipo}\ncolor: '${peluche.color}'\naccesorio: '${peluche.accesorios}'\nventas:'${peluche.vendidos}'`;        
        }})
    })
    
