let showingMenu = false;

const toggleShadow = () => {
    const menu = document.getElementById('menu');
    menu.style = !showingMenu ? 'height: 100vh; width: 50%; position: fixed' : null;
    menu.childNodes[1].src = !showingMenu ? './assets/images/icon-menu-close.svg' : './assets/images/icon-menu.svg';
    menu.childNodes[1].style = !showingMenu ? 'margin-top: -10px' : null;
    const menuUl = document.getElementById('menu-ul');
    menuUl.style.display = !showingMenu ? 'initial' : 'none';
    document.getElementById('shadow').style = !showingMenu ? 'height: 100vh ; display: initial; position: fixed' : 'display: none';
    showingMenu = !showingMenu;
}

window.onresize = () => {
    if (window.screen.width > 750 && showingMenu) {
        toggleShadow();
    }
}