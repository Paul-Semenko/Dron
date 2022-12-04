; (() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  const mobileOverlayRef = document.querySelector(".mobile-overlay")
  const documentBodyRef= document.querySelector('body')
    menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

    menuBtnRef.classList.toggle("is-open")
    mobileOverlayRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)

      mobileMenuRef.classList.toggle("is-open")
      documentBodyRef.classList.toggle('lock')
  })
})()

// SCROLL on CLICK
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {   
    e.preventDefault();
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect()
        .top + pageYOffset - document.querySelector('header').offsetHeight;
      
      const mobileMenu = document.querySelector('.menu-body') 
      const menuBtnRef = document.querySelector("[data-menu-button]")
      const mobileOverlayRef = document.querySelector('.mobile-overlay')
      const documentBodyRef= document.querySelector('body')
  if (mobileMenu.classList.contains('is-open')) {        
    mobileMenu.classList.remove('is-open');
    menuBtnRef.classList.remove('is-open');
    mobileOverlayRef.classList.remove('.is-open');
    documentBodyRef.classList.remove('lock');
      }
     
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      
    }
    
  }
}

