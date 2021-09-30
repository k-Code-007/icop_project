let menuElements = `[
    
    {"label" : "ABOUT"},
    {"label" : "PRODUCT"},
    {"label" : "BLOG"},
    {"label" : "CONTACTS"}
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