fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((json) => {
    json.products.slice(0, 10).forEach((newsItem) => addNews(newsItem.title, newsItem.category, newsItem.price));
});
// .then((json) => console.log(json))

function addNews(title, content, price) {
    console.log(content);
    //cloning template
    const template = document
      .getElementById("news-template")
      .content.cloneNode(true);
    // cloning template with news
    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = content;
    template.querySelector(".card-price").innerText = price;
    // append populated card
    document.getElementById("news-list").appendChild(template);
  }

//   console.log(getGreet(2))
// function getGreeting(name) {
//     return "Hello " + String(name)
// }

  