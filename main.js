function onScroll() {
    // quando passo função precisa ser 
    //com aspas simples 
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    }else {
        navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}
// Abaixo eu executo a função
// onScroll()