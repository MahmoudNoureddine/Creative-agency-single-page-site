const menuIcon = document.getElementById('menu-icon');
const modalNav = document.getElementById('modal-nav');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    modalNav.style.display = 'block'
    menuIcon.style.display = 'none'
    closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
    modalNav.style.display = 'none'
    closeIcon.style.display = 'none'
    menuIcon.style.display = 'block'

})




// modalNav.style.display = 'block';
//     menuIcon.src = '../starter-code/assets/mobile/icon-cross.svg'