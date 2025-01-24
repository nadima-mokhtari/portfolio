
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






// Charger les projets dynamiquement depuis un fichier JSON
async function loadProjects() {
    try {
        const response = await fetch('../index.json'); // Charger le fichier JSON
        const projects = await response.json(); // Parse le JSON
        console.log(projects.projects);
        const container = document.getElementById('projects-container');
        
        let card = ' <div class= "flex flex-wrap w-full mb:flex-col lg:flex-row lg:justify-between lg:w-4/5   mx-auto">';
        // Générer les cartes projets
        projects.projects.forEach(project => {
            card += `<div class= " lg:w-1/2 mt-10 lg:p-2  ">
                <div class="mb-3 bg-gray-600 hover:bg-gray-900 w-full rounded-2xl p-10 ">
                    <h4 class="text-center mb-5">${project.title}</h4>
                    <img src="${project.image}" alt="${project.title}" class="ml-2  w-96  h-48  justify-self-center object-cover rounded shadow-2xl shadow-blue-900 transform transition-transform hover:scale-125 hover:rotate-6 ease-in-out duration-700 ">
                    <p class="mt-5">${project.description}</p>
                    <div class="flex justify-between mt-4">
                        <a href="${project.demoLink}" class="text-teal-500 transition-transform transform hover:scale-150 animate-bounce">Demo</a>
                        <a href="${project.githubLink}" class="text-teal-500 transition-transform transform hover:scale-150 animate-bounce">GitHub</a>
                    </div>
                </div></div>`;
            
        });
        card += ' </div>';
        container.innerHTML = card; // Ajouter la carte au container
    } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
    }
}

// Charger les projets au chargement de la page
document.addEventListener('DOMContentLoaded', loadProjects);






// card += `<div class= " lg:w-1/2 mt-10 lg:p-2  ">
// <div class="mb-3 bg-gray-600 hover:bg-gray-900  rounded-2xl p-10 ">
//     <h4 class="text-center mb-5">${project.title}</h4>
//     <img src="${project.image}" alt="${project.title}" class="ml-2 h-48  justify-self-center object-cover rounded shadow-2xl shadow-blue-900 transform transition-transform hover:scale-125 hover:rotate-6 ease-in-out duration-700 ">
//     <p class="mt-5">${project.description}</p>
//     <div class="flex justify-between mt-4">
//         <a href="${project.demoLink}" class="text-teal-500 transition-transform transform hover:scale-150 animate-bounce">Demo</a>
//         <a href="${project.githubLink}" class="text-teal-500 transition-transform transform hover:scale-150 animate-bounce">GitHub</a>
//     </div>
// </div></div>`;




// // Charger les projets dynamiquement depuis un fichier JSON
// async function loadProjects() {
//     try {
//         const response = await fetch('../index.json'); // Charger le fichier JSON
//         const projects = await response.json(); // Parse le JSON
//         console.log(projects.projects);
//         const container = document.getElementById('projects-container');
        
//         // Vérifier si le container existe
//         if (!container) {
//             console.error('Container not found!');
//             return;
//         }

//         // Générer les cartes projets
//         projects.forEach(project => {
//             const card = `
//                 <div class="bg-gray-600 mb-5 sm:w-full hover:bg-gray-900 p-8 rounded-2xl lg:w-full">
//                     <h4 class="text-center mb-5">${project.title}</h4>
//                     <img src="${project.image}" alt="${project.title}" class="ml-2 h-48 justify-self-center object-cover rounded shadow-2xl shadow-blue-900 transform transition-transform duration-300 hover:scale-125 hover:rotate-6 ease-in-out duration-700">
//                     <p class="mt-5">${project.description}</p>
//                     <div class="flex justify-between mt-4">
//                         <a href="${project.demoLink}" class="text-teal-500 transition-transform transform hover:scale-150 animate-bounce">Demo</a>
//                         <a href="${project.githubLink}" class="text-teal-500 transition-transform transform hover:scale-150 animate-bounce">GitHub</a>
//                     </div>
//                 </div>
//             `;
//             container.innerHTML += card; // Ajouter la carte au container
//         });

//     } catch (error) {
//         console.error('Erreur lors du chargement des projets:', error);
//     }
// }

// // Charger les projets au chargement de la page
// document.addEventListener('DOMContentLoaded', loadProjects);



