let blogElements = `[
    
   {
       "image": "img/sample.jpg",
       "heading": "Article 1",
       "text": "Lorem ipsum dolor sit amet. Et nemo dolor et ullam temporibus non saepe asperiores. Qui velit voluptatum sed molestiae ipsa sint expedita vel praesentium dolor non natus cupiditate hic iure reiciendis et provident quia? Et ipsum sunt sit
       illo internos ut possimus expedita ut aperiam iusto ad reiciendis alias! Et quia doloribus rem vero similique rem labore autem. Cum suscipit quibusdam aut voluptas eaque sit cumque iure ea velit galisum et magnam magnam et odio et
       officia enim."
},
{
    "image": "img/sample.jpg",
    "heading": "Article 2",
    "text": "Lorem ipsum dolor sit amet. Et nemo dolor et ullam temporibus non saepe asperiores. Qui velit voluptatum sed molestiae ipsa sint expedita vel praesentium dolor non natus cupiditate hic iure reiciendis et provident quia? Et ipsum sunt sit
    illo internos ut possimus expedita ut aperiam iusto ad reiciendis alias! Et quia doloribus rem vero similique rem labore autem. Cum suscipit quibusdam aut voluptas eaque sit cumque iure ea velit galisum et magnam magnam et odio et
    officia enim."
},
{
    "image": "img/sample.jpg",
    "heading": "Article 3",
    "text": "Lorem ipsum dolor sit amet. Et nemo dolor et ullam temporibus non saepe asperiores. Qui velit voluptatum sed molestiae ipsa sint expedita vel praesentium dolor non natus cupiditate hic iure reiciendis et provident quia? Et ipsum sunt sit
    illo internos ut possimus expedita ut aperiam iusto ad reiciendis alias! Et quia doloribus rem vero similique rem labore autem. Cum suscipit quibusdam aut voluptas eaque sit cumque iure ea velit galisum et magnam magnam et odio et
    officia enim."
}
]`

document.addEventListener('DOMContentLoaded', function(event) {
            let blog = JSON.parse(blogElements);
            let blog = '';

            for (item of blog) {
                blogContent += `
        <div class="blog_element">
        <img src="${item.image}" alt="img" class="blog_element_image">
<h2 class="blog_article">${item.text}</h2>
        <p class="blog_element_text">${item.text}</p>
    </div>

    document.querySelector(".container_blog").innerHTML = blogContent;

});