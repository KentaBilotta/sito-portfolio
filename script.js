// PROJECTS

let projects = [
    {
        name: "Deliveboo (ispirato a Deliveroo)",
        image: "img/deliveboo.png",
    },
    {
        name: "Boolzapp (ispirato a Whatsapp)",
        image: "img/boolzapp.png",
    },
    {
        name: "Discord",
        image: "img/discord.png",
    },
    {
        name: "Dropbox",
        image: "img/dropbox.png",
    },
    {
        name: "Playstation",
        image: "img/playstation.png",
    },
    {
        name: "Spotify",
        image: "img/spotify.png",
    },
];

console.log('BELLA RAGAAAAA');

const leftBtn = document.getElementById('slide-left');
const rightBtn = document.getElementById('slide-right');

const projectName = document.getElementById('project-name');
const ProjectImg = document.querySelector('.project-img');

let n = 0;
projectName.innerHTML = projects[n].name;
ProjectImg.src = projects[n].image;

function slideRight() {
    if(n >= 5) {
        n = 0;
    } else {
        n++;
    }
    projectName.innerHTML = projects[n].name;
    ProjectImg.src = projects[n].image;
}

function slideLeft() {
    if(n <= 0) {
        n = 5
    } else {
        n--;
    }
    projectName.innerHTML = projects[n].name;
    ProjectImg.src = projects[n].image;
}

// EDUCATION

const edCont = document.getElementById('education-list');

let edInfos = [
    {
        title: "Diploma Liceo Scientifico",
        imageUrl: "diploma.jpeg",
        description: "Diploma di scuola superiore, in particolare Liceo Scientifico (Indirizzo Informatico), ovvero con lo svolgimento di lezioni di informatica al posto di quelle di latino",
    },
    {
        title: "Boolean",
        imageUrl: "boolean-logo.png",
        description: "Corso di programmazione intensivo Full-Time della durata di 6 mesi (700 ore). Il corso permette di acquisire le competenze necessarie per lo sviluppo di un sito web completo partendo da zero.",
    },
];

for(i = 0; i < edInfos.length; i++) {

    edCont.innerHTML += `
    <div class="row border border-white border-4 rounded-4 p-3 m-3 align-items-center">
        <div class="col-3">
            <img src="img/` + edInfos[i].imageUrl + `" alt="" style="width: 120px; height: 120px; object-fit: cover;">
        </div>
        <div class="col-9">
            <h4 class="py-2">` + edInfos[i].title + `</h4>
            <p>` + edInfos[i].description + `</p>
        </div>
    </div>
    `;
}

// TECHNOLOGIES

const techCont = document.getElementById('tech-cont');

let technologies = [
    {
        name: "HTML",
        description: "Linguaggio di Markup nato per la formattazione e impaginazione di documenti ipertestuali disponibili nel web. Oggi è utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/260px-HTML5_logo_and_wordmark.svg.png"
    },
    {
        name: "CSS",
        description: "Linguaggio usato per definire la formattazione o il layout di una pagina web permettendo una programmazione più chiara e facile da utilizzare, sia per gli autori delle pagine stesse sia per gli utenti.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/100px-CSS3_logo_and_wordmark.svg.png"
    },
    {
        name: "Bootstrap",
        description: "Bootstrap è un framework front-end open-source utilizzato per lo sviluppo web. Fornisce una collezione di strumenti, modelli e componenti predefiniti che consentono di creare rapidamente e facilmente un'interfaccia utente responsive e moderna.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
    },
    {
        name: "JavaScript",
        description: "JavaScript è un linguaggio di programmazione ad alto livello, interpretato e orientato agli oggetti, ampiamente utilizzato per lo sviluppo web. È principalmente utilizzato per aggiungere interattività e dinamicità agli elementi delle pagine web.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/180px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
        name: "Vue",
        description: "Vue è un framework JavaScript open-source per lo sviluppo di interfacce utente reactive e single-page applications. Basato sul concetto di 'vue' (vista), Vue consente di creare componenti riutilizzabili e gestire lo stato dell'applicazione in modo efficiente.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
    },
    {
        name: "MySQL",
        description: "MySQL (Structured Query Language) è un sistema di gestione di database relazionali open-source, ampiamente utilizzato per archiviare e gestire grandi quantità di dati in modo efficiente.",
        imgUrl: "https://professor-falken.com/wp-content/uploads/2017/06/Como-ver-las-consultas-que-se-estan-ejecutando-en-MySQL-professor-falken.com_.jpg"
    },
    {
        name: "PHP",
        description: "PHP è un linguaggio di scripting lato server utilizzato principalmente per lo sviluppo web. Compatibile con una vasta gamma di database e offre numerosi framework e librerie per semplificare lo sviluppo di applicazioni web complesse.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png"
    },
    {
        name: "Laravel",
        description: "Laravel è un framework PHP open-source e molto popolare per lo sviluppo di applicazioni web. Offre una vasta gamma di funzionalità e componenti predefiniti per semplificare lo sviluppo di applicazioni web.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
    },
];

for(i = 0; i < technologies.length; i++) {

    techCont.innerHTML += `
    <div class="border border-white border-4 rounded-4 me-4 mb-4" style="width: 18rem; height: 20rem;">
        <div class="fs-3 d-flex align-items-center p-2 mt-2">` + technologies[i].name + ` 
            <span>
                <img class="" src="` + technologies[i].imgUrl + `" alt="" style="width: 50px;
                height: 50px; object-fit: contain; margin-left: 1rem;">
            </span>
        </div>
        <p class="p-2">` + technologies[i].description + `</p>
    </div>
    `;
}