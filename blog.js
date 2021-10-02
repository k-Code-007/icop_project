let articpleElements = `[{
    "image": "img/sample.jpg",
       "heading": "Article 1",
       "text": "Lorem ipsum dolor sit amet. Et nemo dolor et ullam temporibus non saepe asperiores. Qui velit voluptatum sed molestiae ipsa sint expedita vel praesentium dolor non natus cupiditate hic iure reiciendis et provident quia? Et ipsum sunt sit
       illo internos ut possimus expedita ut aperiam iusto ad reiciendis alias! Et quia doloribus rem vero similique rem labore autem. Cum suscipit quibusdam aut voluptas eaque sit cumque iure ea velit galisum et magnam magnam et odio et
       officia enim."
    }
    ,  "image": "img/sample.jpg",
    "heading": "Article 1",
    "text": "Lorem ipsum dolor sit amet. Et nemo dolor et ullam temporibus non saepe asperiores. Qui velit voluptatum sed molestiae ipsa sint expedita vel praesentium dolor non natus cupiditate hic iure reiciendis et provident quia? Et ipsum sunt sit
    illo internos ut possimus expedita ut aperiam iusto ad reiciendis alias! Et quia doloribus rem vero similique rem labore autem. Cum suscipit quibusdam aut voluptas eaque sit cumque iure ea velit galisum et magnam magnam et odio et
    officia enim."
 }
 ,
 "image": "img/sample.jpg",
 "heading": "Article 1",
 "text": "Lorem ipsum dolor sit amet. Et nemo dolor et ullam temporibus non saepe asperiores. Qui velit voluptatum sed molestiae ipsa sint expedita vel praesentium dolor non natus cupiditate hic iure reiciendis et provident quia? Et ipsum sunt sit
 illo internos ut possimus expedita ut aperiam iusto ad reiciendis alias! Et quia doloribus rem vero similique rem labore autem. Cum suscipit quibusdam aut voluptas eaque sit cumque iure ea velit galisum et magnam magnam et odio et
 officia enim."
}]`;

document.addEventListener('DOMContentLoaded', function(event) {
    let articles = JSON.parse(articpleElements);
    let articleContent = '';
    console.log(articles)
    for (article of articles) {
        articleContent += `
    <div class="blog_element">
        <img src="${article.image}" alt="img" class="blog_element_image">
        <h2 class="blog_article">${article.heading}</h2>
        <p class="blog_element_text">${article.text}</p>
    </div>`
    }

    document.querySelector(".container_blog").textContent = blogContent;

});