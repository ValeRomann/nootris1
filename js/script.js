const menuButton = document.querySelector('.header__show-button');
let menu = document.querySelector('.menu');

menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleMenu();
});
function handleMenu() {
    const display = window.getComputedStyle(menu, null).getPropertyValue("display");
    console.log(display);
    if (display === "flex") menu.style.display = '';
    if (display === 'none') menu.style.display  = 'flex';
}
    
window.addEventListener(`resize`, () => {
        const display = window.getComputedStyle(menu, null).getPropertyValue("display");
    if (window.matchMedia("(max-width: 790px)")) {
        display.style.display = "none";
    } else {
        display.style.display = "flex";
    }
    }, false);
