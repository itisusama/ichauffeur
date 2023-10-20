document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      document.getElementById('navbar').classList.toggle('nav-toggle-color');
    });
  });
  
  document.querySelector('.by-the-hour').style.display = 'none';
  function showOneWay() {
    document.querySelector('.one-way').style.display = 'block';
    document.querySelector('.by-the-hour').style.display = 'none';
}

function showByTheHour() {
    document.querySelector('.by-the-hour').style.display = 'block';
    document.querySelector('.one-way').style.display = 'none';
}