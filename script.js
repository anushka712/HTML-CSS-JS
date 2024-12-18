const swiper = new Swiper('.swiper', {
direction: 'horizontal',
 loop:true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3, 
      spaceBetween: 20, 
    },
  } 
});

const slider = new Swiper('.swiper1', {
 
  direction: 'horizontal',
 loop:true,
  slidesPerView: 1,
  spaceBetween: 10,

   grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 1, 
      spaceBetween: 20, 
    },
  },

  autoplay: {
    delay: 4000, 
    disableOnInteraction: false, 
  },
 
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");

const accordionContents = document.querySelectorAll(".accordion-content");



slider.on('slideChange', function () {
  const activeIndex = slider.realIndex;  
  setActiveAccordion(activeIndex);  
});


accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {

    accordionHeaders.forEach((item) => item.classList.remove("active"));
    header.classList.add("active");
    
 
    accordionContents.forEach((content, contentIndex) => {
      content.classList.toggle("show", contentIndex === index);
    });

    slider.slideTo(index);
  });
});

function setActiveAccordion(activeIndex) {
 
  accordionHeaders.forEach(header => header.classList.remove("active"));
  
  const activeHeader = accordionHeaders[activeIndex];
  activeHeader.classList.add("active");

  accordionContents.forEach((content, index) => {
    content.classList.toggle("show", index === activeIndex);
  });
}


const hamburger = document.getElementById('hamburger');
const navListMob = document.getElementById('navList-mob');
const navItemsMob = document.querySelectorAll('.nav-item-mob');
const backArrowMob = document.getElementById('backArrow-mob');
const logo = document.querySelector('.logo h1');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');


hamburger.addEventListener('click', () => {
    const isOpen = navListMob.classList.contains('active'); 
    if (isOpen) {
        navListMob.classList.remove('active'); 
        menuIcon.style.display = 'inline-block'; 
        closeIcon.style.display = 'none'; 
        backArrowMob.style.display = 'none';
    } else {
        navListMob.classList.add('active'); 
        menuIcon.style.display = 'none'; 
        closeIcon.style.display = 'inline-block'; 
    }
});


navItemsMob.forEach(item => {
    item.addEventListener('click', (event) => {
        
        navItemsMob.forEach(navItemsMob => navItemsMob.classList.remove('active'));

        item.classList.add('active');
       
        const linkText = item.innerText;
        logo.innerText = linkText;

        backArrowMob.style.display = 'inline-block';
        
        const target = document.querySelector(item.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, 
                behavior: 'smooth',
            });
        }

        navListMob.classList.remove('active');
        hamburger.classList.remove('open'); 
    });
});


backArrowMob.addEventListener('click', () => {
  
    logo.innerText = "Logo";

    backArrowMob.classList.remove('active');

    navListMob.classList.add('active');
    hamburger.classList.add('open');
});


const cross = document.getElementById('cross');
const announcement = document.getElementById('announcement');

cross.addEventListener('click', () => {
  announcement.style.display = 'none';
});
