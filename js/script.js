// document.getElementById('contactForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert('Thank you for your message!');
//   this.reset();
// });


// funcção seta para o topo

document.addEventListener("DOMContentLoaded", function () {

  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  backToTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
});
