const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movieList = document.getElementById('movie-list');

const movies = []; 

// const titleFilm = document.getElementById('title').value;
// const extraName = document.getElementById('extra-name').value;
// const extraValue = document.getElementById('extra-value').value;

const usrInput = document.querySelector('section').querySelectorAll('input');

// SearchMovie = sto salvando il valore d'input che inserisce l'utente il quale valore viene passato alla funzione renderMovie,  impostiamo il parametro ad un valore falsy, il quale ci tornerà utile quando dobbiamo effettuare l'espressione ternaria e quindi diciamo che se il nostro valore è un valore true(questo significa che è una stringa vuota non perchè è un valore true ma perchè abbiamo usato il bang ! operator modificandone il valore), non fare nulla, mentre se è falsy quindi l'utente sta cercando qualcosa all'interno del input allora il mio array movies viene filtrato per ogni elemento che contiene, posso quindi ricercare all'interno dell'oggetto newMovie, quindi info.titleFilm con includes diciamo che se fa parte di quell'array allora aggiungilo alla lista movieList, perchè includes restituirà un valore true o false, infine dobbiamo passare la nostra const filteredMovie al foreach



const renderMovie = (filter = '') => {
    const movieList = document.getElementById('movie-list');

// check sull'array movies 
    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    }else{
        movieList.classList.add('visible');
    }
movieList.innerHTML = ''; // -> questo ci aiuta a resettare la lista, che sarebbe salvata sempre con l'ultimo film aggiunto, quindi dopo aver aggiunto e sto x aggiungere il secondo, si porta dietra dinuovo il primo, e cosi via, aggiungo il 3 si porta dietro il 1 e il 2

const filteredMovie = !filter ? movies : movies.filter( movie => {
    return movie.info.titleFilm.includes( filter ) 
});


filteredMovie.forEach( movie => {
    const movieEl = document.createElement('li');

    const { info, ...otherProp } = movie;
   
        let {logicObj} = movie;
        // logicObj= logicObj.bind(movie);
        // let text = logicObj.call(movie);
        let text = logicObj.aplly(movie);
    for(const key in info){
    if(key !== 'titleFilm'){
        text = text + ` ${key} : ${info[key]} `
            }
        }
movieEl.textContent = text;
movieList.appendChild(movieEl)
console.log(otherProp); 
    });
}

const clearInput = () => {
    usrInput[0].value = '';
    usrInput[1].value = '';
    usrInput[2].value = '';
}

const addMovieHandler = () => {
    const titleFilm = usrInput[0].value;
    const nameExtra = usrInput[1].value;
    const nameValue = usrInput[2].value;

if(titleFilm.trim() === '' || nameExtra.trim() === '' || nameValue.trim() === ''){
    return console.log('Insert your film')
}
if(nameValue < 1 || nameValue > 5){
    return console.log('insert number beetwen 1 and 5')
    
}

const movie = {
    info:{
        titleFilm,
        [nameExtra]:nameValue,
    },
    id:Math.random(),
    //! Qui abbiamo inserito una logica all'interno dell'ogg.
    logicObj(){
        return this.info.titleFilm.toUpperCase();
    }
}

    movies.push(movie);
    console.log(movies);
    renderMovie();
    clearInput();
}

const searchMovieHandler = () => {
    
    const searchMovie = document.getElementById('filter-title').value;
    renderMovie(searchMovie);
    
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);