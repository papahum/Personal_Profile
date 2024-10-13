let c = 1 ;
let menuUl = document.querySelector(".unilist");
let menubtn = document.querySelector(".menu-btn");
let menui = document.querySelector(".fa-solid");

// ******************************Nav Bar*************************
menubtn.addEventListener('click', () =>{
    if( c === 1){
        menuUl.classList.remove("removeul");
        menuUl.classList.add("addul");
        menui.classList.remove("fa-bars");
        menui.classList.add("fa-xmark");
        c = 2;
    }
    else{
        menuUl.classList.remove("addul");
        menuUl.classList.add("removeul");
        menui.classList.remove("fa-xmark");
        menui.classList.add("fa-bars");
        c = 1;
    }
});

// ***************************Home section********************************
const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

// **************************Work & Education*********************************

let d = 1 ;
let quelieducation = document.querySelector(".queli-education");
let queliwork = document.querySelector(".queli-work");
let education = document.querySelector(".education");
let work = document.querySelector(".work");

education.addEventListener('click', () =>{
      quelieducation.classList.remove("remove-queli");
      queliwork.classList.add("remove-queli");
      work.classList.remove("active");
      education.classList.add("active");
 
});

work.addEventListener('click', () =>{
  queliwork.classList.remove("remove-queli");
  quelieducation.classList.add("remove-queli");
  education.classList.remove("active");
  work.classList.add("active");

});


/**
 * **************************************Projects*********
 */


// all.addEventListener('click', () =>{
//       addapp.classList.remove("webremove");
//       addwebsite.classList.remove("webremove");
//       all.classList.add("filter-active");
//       app.classList.remove("filter-active");
//       website.classList.remove("filter-active");
//       page.classList.remove("filter-active");
//       brand.classList.remove("filter-active");
//       portfolio.classList.remove("section2");
//       portfolio.classList.add("section1");
 
// });

       // Arrow button and dot functionality (add navigation)
       const leftArrow = document.querySelector('.left');
       const rightArrow = document.querySelector('.right');
       const dots = document.querySelectorAll('.dot');
       const portfoliocontent1 = document.querySelector('.portfolio_content1');
       const portfoliocontent2 = document.querySelector('.portfolio_content2');
       
       // Arrow navigation functionality
       leftArrow.addEventListener('click', () => {
         portfoliocontent1.classList.add("hidden");
          portfoliocontent2.classList.remove("hidden");
       });
       
       rightArrow.addEventListener('click', () => {
          portfoliocontent1.classList.remove("hidden");
          portfoliocontent2.classList.add("hidden");
       });
       
       // Dot navigation functionality
       dots.forEach((dot, index) => {
           dot.addEventListener('click', () => {
               dots.forEach(d => d.classList.remove('active'));
               dot.classList.add('active');
              //  alert('Dot ' + (index + 1) + ' clicked');
           });
       });
       


// <!-- <-.................contact us.................................-> -->
