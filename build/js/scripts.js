document.addEventListener('DOMContentLoaded', ()=>{
    init();
})

function init(){
    //select elements
    const headerMenu = document.querySelector('.header-menu');
    //menu header event listener
    headerMenu.addEventListener('click', showHeader);
}

function showHeader(e){
    const header = document.querySelector('.header');

    header.classList.toggle('open-header');
}