const menu = document.querySelector('.fa-bars');
const submenu = document.querySelector('.submenu');

function showMenu() {
    if(submenu.classList[1] !== "active"){
      submenu.classList.add('active');  
    }else{
        submenu.classList.remove('active');
    }
}
menu.addEventListener('click', showMenu);