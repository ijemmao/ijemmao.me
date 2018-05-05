document.getElementById('home-nav-button').onclick = (event) => {
  document.getElementById('home').scrollIntoView({
    behavior: 'smooth'
  })
}

document.getElementById('about-nav-button').onclick = (event) => {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth'
  })
}

document.getElementById('projects-nav-button').onclick = (event) => {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  })
}

document.getElementById('work-nav-button').onclick = (event) => {
  document.getElementById('work').scrollIntoView({
    behavior: 'smooth'
  })
}
