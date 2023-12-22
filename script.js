let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};

var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


AOS.init({
  duration:800,
  delay:400
});


let form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
  document.querySelector("#submit").value = "Submitting...";
  e.preventDefault();
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbye2Tn8_H2gGBBuXzUYAoWw7fywMd27JoKPOoCIR_RtL8Bh455pJ7WKCCYlwUpGk8tiMg/exec',{
    method:"POST",
    body:data
  })
  .then(res => res.text())
  .then(data => {
    alert("Thanks for reaching us.");
    document.querySelector("#submit").value="Submit";
  })
  .catch(error =>{
    alert("please submit your details again");
    console.error("Error submitting the form:", error);
  });

})