document.getElementById('home-nav-button').onclick = (event) => {
  document.querySelector(event.target.hash).scrollIntoView({
    behavior: 'smooth'
  });
}

document.getElementById('about-nav-button').onclick = (event) => {
  document.querySelector(event.target.hash).scrollIntoView({
    behavior: 'smooth'
  });
}

document.getElementById('projects-nav-button').onclick = (event) => {
  document.querySelector(event.target.hash).scrollIntoView({
    behavior: 'smooth'
  });
}

