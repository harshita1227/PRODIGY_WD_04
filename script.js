/*-------------------- toggle icon navbar --------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*-------------------- scroll section active link --------------------*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrolllY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttrinute('id');

        if(top >= offset && top <offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id,']').classList.add('active');

            });
        };
    });

/*-------------------- sticky navbar --------------------*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*-------------------- remove toggle icon and navbar --------------------*/

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*-------------------- scroll reveal --------------------*/

scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content , heading' ,{origin: 'top'  });
ScrollReveal().reveal('.home-img, .education-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});

/*-------------------- typed js --------------------*/

var typed = new typed(".text",{
  strings:["Frontend Developer","Web Designer","Java Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
