const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const button = document.getElementsByClassName('button')[0]

toggleButton.addEventListener('click', () =>{
  navbarLinks.classList.toggle('active')
})