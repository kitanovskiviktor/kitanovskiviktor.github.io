
let hamMenu = document.querySelector('.ham-menu');
let navList = document.querySelectorAll('.nav-list-items ul li');
let navMobileList = document.querySelectorAll('.nav-mobile-items ul');
let navMobile = document.getElementsByClassName('nav-mobile')[0];
let header = document.getElementsByClassName('header')[0];


    navMobileList.forEach((element) => {
        hamMenu.addEventListener('click', () => {

           if(navMobile.style.display === 'block') {
                navMobile.style.display = 'none';
                header.style.backgroundColor  = 'transparent';
                
           }
           else{
                navMobile.style.display = 'block';
                header.style.backgroundColor  = '#F5F6F9';
              
           }
        })
    });



    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      // Do something else, like open/close menu
    });