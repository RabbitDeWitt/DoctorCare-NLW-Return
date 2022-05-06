const header = document.querySelector('header');


function toggleMenu() {
  header.classList.toggle('open');
}

function onScroll() {
  if(scrollY>0){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }
}