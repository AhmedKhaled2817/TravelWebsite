/*=============== SHOW MENU ===============*/

const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close');


/*Menu Show */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    });
}


if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link');

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((l)=>{
    l.addEventListener('click',linkAction);
})

/*============= == SWIPER HOME ===============*/
let swiperHome = new Swiper(".home__swiper", {
  // Optional parameters
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    slidesPerView: "auto",  

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },

});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader=()=>{
    const header=document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY>=50 ? header.classList.add('bg-header')
    :header.classList.remove('bg-header');
}

window.addEventListener('scroll',bgHeader);

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  // Optional parameters
    loop: true,
    spaceBetween: 48,
    grabCursor: true,
    slidesPerView: "auto",  

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },

});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scrollup class

    this.scrollY>=350? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('.section[id]');

const scrollActive=()=>{

    const scrollDown=window.scrollY;

    sections.forEach((current)=>{
        const sectionHeight=current.offsetHeight,
            sectionTop=current.offsetTop-58,
            sectionId=current.getAttribute('id'),
            sectionClass=document.querySelector('.nav__menu a[href*='+sectionId+']');
            if (scrollDown> sectionTop && scrollDown <=sectionTop +sectionHeight ){
                sectionClass.classList.add('active-link');
            } else{
                sectionClass.classList.remove('active-link');
            }
    })

}

window.addEventListener('scroll',scrollActive);
/*=============== DARK LIGHT THEME ===============*/ 
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "ri-sun-line";

    // Previous selected theme (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // Get current theme
    const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-sun-line" : "ri-moon-line";

    // Apply previously selected theme (if any)
    if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);

    themeButton.classList.remove("ri-moon-line", "ri-sun-line");
    themeButton.classList.add(selectedIcon === "ri-sun-line" ? "ri-sun-line" : "ri-moon-line");

}

    // Toggle theme on button click
    themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);

    if (document.body.classList.contains(darkTheme)) {
        themeButton.classList.remove("ri-moon-line");
        themeButton.classList.add("ri-sun-line");
    } else {
        themeButton.classList.remove("ri-sun-line");
        themeButton.classList.add("ri-moon-line");
    }

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
    });


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true, // animation repaet
});
sr.reveal(`.home__container,.testimonial__container, .footer__container`)
sr.reveal(`.home__title`,{delay:600})
sr.reveal(`.home__description`,{delay:900})
sr.reveal(`.home__data .button`,{delay:1200})
sr.reveal(`.destination__card,.gallery__card`,{interval:100})
// sr.reveal(`.join__data`,{delay:900,origin:'left'})
// sr.reveal(`.join__img`,{delay:1000,origin:'right'})