//Menu burger pour le version mobile
const burger =document.querySelector('.burger');
const nav = document.querySelector('.navbar ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
