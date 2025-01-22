
document.getElementById('formContact').addEventListener('submit', function(event) {
    const message = document.getElementById('message').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;


    if (message === '') {
        alert('Le message est obligatoire.');
        event.preventDefault();
        return;
    }

    console.log ('message')

    if (nom === '' || email === '') {
        alert('Le nom et l\'email sont obligatoires.');
        event.preventDefault();
        return;
    }

    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer un email valide.');
        event.preventDefault();
        return;
    }

    
});



