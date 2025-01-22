
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



const text = "Nadima Mokhtari"; 
const titleElement = document.getElementById("title"); 
let index = 0; // Start from the first letter
const typingSpeed = 100; // Speed of typing (in ms)
const deletingSpeed = 50; // Speed of deleting (in ms)
const pauseTime = 1000; // Time to wait before restarting the typing effect

// Function to type the text
function typeWriter() {
    if (index < text.length) {
        titleElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed); // Set the speed of typing
    } else {
        // Once the text is fully typed, delete the text
        setTimeout(deleteWriter, pauseTime);
    }
}

// Function to delete the text
function deleteWriter() {
    if (index > 0) {
        titleElement.innerHTML = titleElement.innerHTML.slice(0, -1); // Remove the last character
        index--;
        setTimeout(deleteWriter, deletingSpeed); // Set the speed of deleting
    } else {
        // After deleting, restart typing
        setTimeout(typeWriter, pauseTime); // Wait a bit before typing starts again
    }
}

typeWriter(); 


