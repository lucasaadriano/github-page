const button = document.querySelector('#menu');
const links = document.querySelector('#links');
if (button && links) {
  button.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => links.classList.remove('open')));
}
