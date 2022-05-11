window.addEventListener('scroll', onScroll);

const header = document.querySelector('header');
const body = document.querySelector('body');
var openedMenu = false;
onScroll();

function onScroll() {  
  headerOnScroll();
  showBackToTopBtn();
  activeMenuAtCurrentSection(inicio);
  activeMenuAtCurrentSection(servicos);
  activeMenuAtCurrentSection(sobre);
  activeMenuAtCurrentSection(contato);
}


function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const startOfSection = section.offsetTop;
  const endOfSection = section.offsetTop + section.offsetHeight;
  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`#nav-desktop a[href*=${sectionId}]`);
  
  menuElement.classList.remove('active');
  if(targetLine <= endOfSection && targetLine >= startOfSection){
    menuElement.classList.add('active');
  }
}

function toggleMenu() {
  body.classList.toggle('openedMenu');
  console.log(scrollY);
  if(!openedMenu){
    openedMenu = true;
    backToTopBtn.classList.remove('show');
  }else if(openedMenu && scrollY>=800){
    openedMenu = false;
    backToTopBtn.classList.add('show');
  }else{
    openedMenu = false;
  }
}


function headerOnScroll(){  
  if(scrollY>0){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }
}

function showBackToTopBtn(){
  if(scrollY>=800){
    backToTopBtn.classList.add('show');
  }else{
    backToTopBtn.classList.remove('show');
  }
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  durantion: 250,
}).reveal(`#inicio,
          #inicio .foto, 
          #stats, 
          #servicos, 
          #servicos h4, 
          #servicos h2,
          #servicos .servico, 
          #sobre, 
          #sobre h4, 
          #sobre p, 
          #sobre img,
          #contato`);