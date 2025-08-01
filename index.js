// Effet machine à écrire
const text = "Nadima Mokhtari"; 
const titleElement = document.getElementById("title"); 
let index = 0;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1000;

function typeWriter() {
    if (index < text.length) {
        titleElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(deleteWriter, pauseTime);
    }
}

function deleteWriter() {
    if (index > 0) {
        titleElement.innerHTML = titleElement.innerHTML.slice(0, -1);
        index--;
        setTimeout(deleteWriter, deletingSpeed);
    } else {
        setTimeout(typeWriter, pauseTime);
    }
}

typeWriter();

// Charger les projets dynamiquement depuis un fichier JSON
async function loadProjects() {
    try {
        const response = await fetch('./index.json');
        const projects = await response.json();
        const container = document.getElementById('projects-container');
        
        let card = '<div class="flex flex-wrap w-full mb:flex-col lg:flex-row lg:justify-between lg:w-4/5 mx-auto">';
        
        projects.projects.forEach(project => {
            card += `
                <div class="w-full lg:w-1/2 mt-10 lg:p-2">
                    <div class="mb-3 bg-gray-600 hover:bg-gray-900 rounded-2xl p-10">
                        <h4 class="text-center mb-5">${project.title}</h4>
                        <img src="${project.image}" alt="${project.title}" class="ml-2 w-96 h-48 justify-self-center object-cover rounded shadow-2xl shadow-blue-900 transform transition-transform hover:scale-125 hover:rotate-6 ease-in-out duration-700">
                        <p class="mt-5">${project.description}</p>
                        <div class="flex justify-between mt-4">
                            <a href="${project.demoLink}" target="blank" class="text-teal-500 transition-transform transform hover:scale-150 animate-bounce">Demo</a>
                            <a href="${project.githubLink}" target="blank" class="text-teal-500 transition-transform transform hover:scale-150 animate-bounce">GitHub</a>
                        </div>
                    </div>
                </div>`;
        });

        card += '</div>';
        container.innerHTML = card;

    } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
