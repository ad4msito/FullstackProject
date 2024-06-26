document.addEventListener('DOMContentLoaded', () => {
    const productsItems = document.querySelectorAll('.products-item');
  
    productsItems.forEach((item) => {
      item.addEventListener('click', () => {
        const productId = item.dataset.productId;
        window.location.href = `setPeluche.html?id=${productId}`;
      });
    });
    document.querySelector('.logout').addEventListener('click', ()=>{
      sessionStorage.removeItem('authToken');
      window.location.href = 'index.html'
    })
  });