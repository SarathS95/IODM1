document.addEventListener("DOMContentLoaded", () => {
  const productDisplay = document.getElementById("productDisplay");
  const template = document.getElementById("templateCard");
  const productCategory = document.getElementById("category");

  fetch('http://localhost:4000/ecom/products')
      .then((response) => response.json())
      .then((products) => {
        console.log(products)
          showProducts(products);
          getCategories(products);
      })
      .catch(error => console.error("Error fetching products:", error));

  function showProducts(products) {
      productDisplay.innerHTML = "";
      products.forEach(product => {
          const clone = template.content.cloneNode(true); 

          clone.querySelector(".product-img").src = product.image;
          clone.querySelector(".product-img").alt = product.title;
          clone.querySelector(".card-title").innerText = product.title;
          clone.querySelector(".card-text").innerText = product.description;
          clone.querySelector(".card-price").innerText = product.price;

          productDisplay.appendChild(clone); 
      });
  }

  function getCategories(products) {
      let categories = new Set(["all-categories"]); 
      products.forEach(product => categories.add(product.category));

      categories.forEach(category => {
          const option = document.createElement("option");
          option.value = category;
          option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
          productCategory.appendChild(option);
      });

      productCategory.addEventListener("change", () => {
          const selectedCategory = productCategory.value;
          if (selectedCategory === "all-categories") {
              showProducts(products);
          } else {
              const filteredProducts = products.filter(product => product.category === selectedCategory);
              showProducts(filteredProducts);
          }
      });
  }
});
