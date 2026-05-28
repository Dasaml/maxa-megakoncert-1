(function() {
  /* ==========================================================================
     1. POMOCNÉ FUNKCE A SCROLLOVÁNÍ
     ========================================================================== */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  const scrollto = (el) => {
    let navbar = select('#navbar')
    let offset = navbar.offsetHeight

    if (!navbar.classList.contains('navbar-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /* Efekt pro scrollující navbar */
  let selectNavbar = select('#navbar')
  if (selectNavbar) {
    const navbarScrolled = () => {
      if (window.scrollY > 100) {
        selectNavbar.classList.add('navbar-scrolled')
      } else {
        selectNavbar.classList.remove('navbar-scrolled')
      }
    }
    window.addEventListener('load', navbarScrolled)
    onscroll(document, navbarScrolled)
  }
})();


/* ==========================================================================
   2. OVLÁDÁNÍ MENU (Hamburger)
   ========================================================================== */
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");

const menuIcon = document.querySelector(".svg-menu");
const closeIcon = document.querySelector(".svg-menu-close");

function toggleMenu() {
    if (!menu || !menuIcon || !closeIcon) return;

    menu.classList.toggle("showMenu");
    
    const isMenuNowOpen = menu.classList.contains("showMenu");
    
    if (isMenuNowOpen) {
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    } else {
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
}

/* Aktivace kliknutí na hamburger */
if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
}

/* Aktivace kliknutí na položky menu */
menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleMenu);
});