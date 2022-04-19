/* Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui: */

/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>) */
const post = [
    {
        id : 1,
        nome: 'Phil Mangione',
        foto: 'https://unsplash.it/300/300?image=',
        data: '05/22/2021',
        testo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eveniet dolore sunt explicabo provident fugit saepe accusamus sit fugiat assumenda! Accusantium ducimus laborum aut architecto soluta quia, temporibus nulla voluptates.',
        immagine: 'https://unsplash.it/300/300?image=',
        likes: 80
    },
    {
        id : 2,
        nome: 'Sofia Perlari',
        foto: 'https://unsplash.it/300/300?image=',
        data: '01/08/2021',
        testo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eveniet dolore sunt explicabo provident fugit saepe accusamus sit fugiat assumenda! Accusantium ducimus laborum aut architecto soluta quia, temporibus nulla voluptates.',
        immagine: 'https://unsplash.it/300/300?image=',
        likes: 120
    }
]

//console.log(post);

/* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
 */

//seleziono un elemento della dom a cui associo l'id del primo object della variabile post




//appendo all'elemento selezionato un div con il markup per visualizzare *immagine di profilo  *nome *testo *immagine *bottone likes *numero likes
let element_likes = []
let i = 0
while (i < post.length) {
    let element = post[i]
    let card = document.getElementById(i);
    element_likes.push(element.likes)
    let markup = 
    `
        <div class="header d-flex row row-cols-2">
            <div class="profile_img col">
                <img class="profile_img"
                src="${element.foto}"
                alt="">
            </div>
            <div class="col">
                <div class="name">${element.nome} </div>
                <div class="data">${element.data}</div>
            </div>            
        </div>
        <div class="main">
            <div class="testo">${element.testo}</div>
            <div class="foto">
                <img class="main_img"
                src="${element.immagine}"
                alt="">
            </div>
        </div>
        <div class="bottoni d-flex row row-cols-2 text-center">
            <div class="likes_${i} col">
            <i class="fa-solid fa-thumbs-up"></i> Mi piace
            </div>
            <div class="numero_likes_${i} col">Piace a ${element.likes} persone</div>
        </div>
        </div>
    `
card.innerHTML = markup
i++
}
console.log(element_likes);
/* Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */

for(let i = 0; i < element_likes.length; i++){
    let likes = document.querySelector(`.likes_${i}`)
    let numero_likes = document.querySelector(`.numero_likes_${i}`)
    
    likes.addEventListener('click', likesFunction)

    function likesFunction() {
        if ((likes.classList.contains('clicked')) === false){
            element_likes[i] += 1
            numero_likes.innerHTML = `Piace a ${element_likes[i]} persone` 
            likes.classList.add('clicked')
        } else {
            element_likes[i] += - 1 
            numero_likes.innerHTML = `Piace a ${element_likes[i]} persone`
            likes.classList.remove('clicked')
        }
    }
}
