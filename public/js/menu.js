//Menu burger pour le version mobile
const burger =document.querySelector('.burger');
const nav = document.querySelector('.navbar ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        alert('Merci pour votre message! Par contre c\'est un site vitrine et je ne peux pas recevoir de messages pour l\'instant. Mes coordonnées sont disponibles dans la section "Contact".'); 
        form.reset();
    });
});