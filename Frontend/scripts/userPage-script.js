document.addEventListener('DOMContentLoaded', () => {
    const productsItems = document.querySelectorAll('.products-item');
  
    productsItems.forEach((item) => {
      item.addEventListener('click', () => {
        const productId = item.dataset.productId;
        window.location.href = `setPeluche.html?id=${productId}`;
      });
    });
  });