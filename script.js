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

  // autoplay: {
  //   delay: 3000, // Slider changes every 5 seconds
  //   disableOnInteraction: false, // Autoplay continues even after user interaction
  // },
 
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");

const accordionContents = document.querySelectorAll(".accordion-content");



slider.on('slideChange', function () {
  const activeIndex = slider.realIndex;  // Get the current active slide index
  setActiveAccordion(activeIndex);  // Set corresponding accordion item active
});

// Set active accordion item
accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    // Toggle the active class on accordion headers
    accordionHeaders.forEach((item) => item.classList.remove("active"));
    header.classList.add("active");
    
    // Show the corresponding accordion content
    accordionContents.forEach((content, contentIndex) => {
      content.classList.toggle("show", contentIndex === index);
    });

    // Update Swiper to the corresponding slide when accordion is clicked
    slider.slideTo(index);
  });
});

// Function to set the active accordion based on the Swiper slide
function setActiveAccordion(activeIndex) {
  // Remove "active" class from all accordion headers
  accordionHeaders.forEach(header => header.classList.remove("active"));
  
  // Add "active" class to the corresponding accordion header
  const activeHeader = accordionHeaders[activeIndex];
  activeHeader.classList.add("active");

  // Show the corresponding accordion content
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
                top: target.offsetTop - 50, // 
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


