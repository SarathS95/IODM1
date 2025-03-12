document.addEventListener("DOMContentLoaded", () => {
    const productDisplay = document.getElementById("productDisplay");
    const template = document.getElementById("templateCard");
    const productCategory = document.getElementById("category");

    fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((products) => {
            products.forEach((product) => {
                addProduct(product);
            });
          })
          function addProduct(product) {
            const template = document.getElementById("templateCard")
    .content.cloneNode(true);
        clone.querySelector(".product-img").src = product.image;
        clone.querySelector(".product-img").alt = product.title;
        clone.querySelector(".card-title").innerText = product.title;
        clone.querySelector(".card-text").innerText = product.description;
        clone.querySelector(".card-price").innerText=product.price;

        document.getElementById("productDisplay").appendChild(template);
          }
})