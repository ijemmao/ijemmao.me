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

document.getElementById('experience-nav-button').onclick = (event) => {
  document.getElementById('experience').scrollIntoView({
    behavior: 'smooth'
  })
}

document.getElementById('pulse').nextSibling.nextSibling.onclick = (event) => {
  window.location.href = "./projects/pulse.html"
}

document.getElementById('hamono').nextSibling.nextSibling.onclick = (event) => {
  window.location.href = "./projects/hamono.html"
}

document.getElementById('seabird').nextSibling.nextSibling.onclick = (event) => {
  window.location.href = "./projects/seabird.html"
}

document.getElementById('waddupr').nextSibling.nextSibling.onclick = (event) => {
  window.location.href = "./projects/waddupr.html"
}

document.getElementById('waddupboard').nextSibling.nextSibling.onclick = (event) => {
  window.location.href = "./projects/waddupboard.html"
}

document.getElementById('needone').nextSibling.nextSibling.onclick = (event) => {
  window.location.href = "./projects/needone.html"
}

document.getElementById('purrpl').nextSibling.nextSibling.onclick = (event) => {
  window.location.href = "./projects/purrpl.html"
}
