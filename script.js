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

document.getElementsByClassName('project-cover')[0].onclick = (event) => {
  window.location.href = "./projects/pulse.html"
}

document.getElementsByClassName('project-cover')[1].onclick = (event) => {
  window.location.href = "./projects/hamono.html"
}

document.getElementsByClassName('project-cover')[2].onclick = (event) => {
  window.location.href = "./projects/seabird.html"
}

document.getElementsByClassName('project-cover')[3].onclick = (event) => {
  window.location.href = "./projects/waddupr.html"
}

document.getElementsByClassName('project-cover')[4].onclick = (event) => {
  window.location.href = "./projects/waddupboard.html"
}

document.getElementsByClassName('project-cover')[5].onclick = (event) => {
  window.location.href = "./projects/needone.html"
}

document.getElementsByClassName('project-cover')[6].onclick = (event) => {
  window.location.href = "./projects/purrpl.html"
}
