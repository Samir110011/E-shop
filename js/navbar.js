/* upper navbar js */
let width = window.innerWidth;   
if(width< 1100){
  {const nav1 = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () =>{
    if (lastScrollY < window.scrollY) {
      nav1.classList.add("navbar-hide");
    } else {
      nav1.classList.remove("navbar-hide");
    }
    lastScrollY = window.scrollY;
  });
  }
  }

/* lower navbar js */
else{
  {const nav1 = document.querySelector(".lower-nav");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () =>{
    if (lastScrollY < window.scrollY) {
      nav1.classList.add("lower-navbar-hide");
    } else {
      nav1.classList.remove("lower-navbar-hide");
    }
    lastScrollY = window.scrollY;
  });
  }
}

/* mobile navbar js */
 {
  const nav = document.querySelector(".mobile");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    
    if (lastScrollY < window.scrollY) {
      nav.classList.add("mobile-hide");
    } else {
      nav.classList.remove("mobile-hide");
    }

    lastScrollY = window.scrollY;
  });
}