
const limitTitle = 0;
const limitErrorMessage = `введите название фильма`;

const moviesInputNode = document.getElementById('moviesInput');
const moviesAddBtnNode = document.getElementById('moviesAddBtn');
const movieErrorNode = document.getElementById('movieError');
const moviesDisplayNode = document.getElementById('moviesDisplay');

const movies = 0;

moviesAddBtnNode.addEventListener('click', function() {

	const movieFromUser = getMovieFromUser();

	addMovie(movieFromUser);

	validation();
})

function validation() {
const titleLength = moviesInputNode.value.length;

if (titleLength === limitTitle) {
	movieErrorNode.className = "movies__error";
	movieErrorNode.innerText = limitErrorMessage;
	return;
}

movieErrorNode.className = 'movies__error__hidden';

}

const getMovieFromUser = () => {
  const movieName = moviesInputNode.value; // получаем название фильма из поля ввода

  if (movieName === "") {
    moviesAddBtnNode.disabled = true;
    return;
  }

	return movieName;
}

const addMovie = (movieName) => {

	movies.push(
		movieName
	)
	return
}
