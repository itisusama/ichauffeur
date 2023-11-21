const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.style.display = 'none'
  navToggle.addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('nav-toggle-color');
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }});
  
    document.querySelector('.by-the-hour').style.display = 'none';
    function showOneWay() {
      document.querySelector('.one-way').style.display = 'block';
      document.querySelector('.by-the-hour').style.display = 'none';
  }
  
  function showByTheHour() {
      document.querySelector('.by-the-hour').style.display = 'block';
      document.querySelector('.one-way').style.display = 'none';
  }