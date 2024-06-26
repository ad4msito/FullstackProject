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
            rankingItems[index].innerHTML = `<img src="../img/${peluche.tipo}-${peluche.color}.png">`        
        }})
    })
    
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementsByClassName("login")[0].addEventListener("click", () => {
            window.location.href = "./loginpage.html";  
        });
        document.getElementsByClassName('register')[0].addEventListener('click',() => {
            window.location.href = './singup.html'
        })
    });
    
