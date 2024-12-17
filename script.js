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
