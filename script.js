let menuElements = `[
    
    {"label" : "about"},
    {"label" : "technology"},
    {"label" : "blog"},
    {"label" : "contacts"}
]`

document.addEventListener('DOMContentLoaded', function(event) {
    let menu = JSON.parse(menuElements);
    let menuContent = '';

    for (item of menu) {
        menuContent += `
            <li class="menu_element"><a class='refference' href="#${item.label}">${item.label} </a></li>`;
    }

    document.querySelector(".menu_regular").innerHTML = menuContent;

});