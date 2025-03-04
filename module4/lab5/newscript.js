let news = [
  {
    id: 1,
    title: "Election Results",
    content: "Newly elected Minister Narendra Modi steps in",
  },
  {
    id: 2,
    title: "Sporting Success",
    content: "World Cup Winners goes to England and its finally came Home",
  },
  {
    id: 3,
    title: "Tornado Warning",
    content: "Residents should Prepare to stay inside",
  },
  {
    id: 4,
    title: "New Phone Release",
    content: "Samsung Releases new Samsung 25",
  },
];
function addNews(title, content) {
  //cloning template
  const template = document
    .getElementById("news-template")
    .content.cloneNode(true);
  // cloning template with news
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = content;
  // append populated card
  document.getElementById("news-list").appendChild(template);
}
//  DOM full load before the script
document.addEventListener("DOMContentLoaded", function () {
  // loop newsdata array
  news.forEach((newsItem) => addNews(newsItem.title, newsItem.content));

  // Form submit
  document
    .getElementById("news-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Input news
      let title = document.getElementById("news-title").value;
      let content = document.getElementById("news-content").value;

      let newId = news.length + 1;
      news.push({ id: newId, title: title, content: content });

      addNews(title, content);

      document.getElementById("news-title").value = "";
      document.getElementById("news-content").value = "";
    });
});
