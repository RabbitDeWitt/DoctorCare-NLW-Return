const header = document.querySelector('header');
const body = document.querySelector('body');

onScroll();

function toggleMenu() {
  body.classList.toggle('openedMenu');
}

function onScroll() {  
  if(scrollY>0){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }
}