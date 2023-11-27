const titleMovieInputNode = document.getElementById('movieInput');
const movieAddBtnNode = document.getElementById('movieAddBtn');
const moviesOutputNode = document.getElementById('movies');
const validationMessageNode = document.getElementById('validationMessage');

const TITLE_VALIDATION_MAX = 10;
const STORAGE_LABEL_MOVIES = 'movies';

const minTitleLimitMessage = 'Фильм без названия не найти';
const maxTitleLimitMessage = 'Очень длинное название';

let movies = [];

const saveMoviesStorage = (key, value) => {
	return localStorage.setItem(key, JSON.stringify(value));
}

const getMoviesFromStorage = (key) => {
	return JSON.parse(localStorage.getItem(key));
}

const validation = (movieFromUser) => {
	let result = true;

	if (movieFromUser === '') {
		validationMessageNode.className = 'validationMessage';
		validationMessageNode.innerText = minTitleLimitMessage;
		result = false;
		return result;
	}

	if (movieFromUser > TITLE_VALIDATION_MAX) {
		validationMessageNode.className = 'validationMessage';
		validationMessageNode.innerText = maxTitleLimitMessage;
		result = false;
		return result;
	} 

		validationMessageNode.className = 'validationMessage__hidden';

		return result;
};

// получение названия фильма из инпута
const getMovieFromUser = () => {
	const movieName = titleMovieInputNode.value.trim();

	clearInput();
	
	return movieName;
}

const newPostMovieHandler = () => {
	const movieFromUser = getMovieFromUser();

	if (!validation(movieFromUser)) {
		return;
	}

	const movie = {
		name: movieFromUser,
		checkbox: 'unchecked',
	}

	movies.push(movie);
	
	saveMoviesStorage(STORAGE_LABEL_MOVIES, movies);
	renderMovies(movies);
}

//очистка инпута
const clearInput = () =>{
	titleMovieInputNode.value = '';
};

// отображение фильма
const renderMovies = (movies) => {
	moviesOutputNode.innerHTML = '';

	const movieWrapper = document.createElement('ul');
	movieWrapper.className = 'movies__list';
	
	movies.forEach((movie, index) => {
		const wrapperMovieItem = document.createElement('li');
		wrapperMovieItem.className = 'movies__list__item';
		wrapperMovieItem.setAttribute('id', index);

		const wrapperMovieLabel = document.createElement('label');
		wrapperMovieLabel.className = 'label';

		const wrapperCheckbox = document.createElement('input');
		wrapperCheckbox.className = 'real__checkbox';
		wrapperCheckbox.setAttribute('type', 'checkbox');
		wrapperCheckbox.setAttribute(movie.checkbox, '');

		const wrapperCheckboxClick = document.createElement('div');
		wrapperCheckboxClick.className = 'checkbox__click';

		const wrapperMovieName = document.createElement('span');
		wrapperMovieName.className = 'movie__name';

		wrapperMovieName.innerText = movie.name;

		const wrapperMovieCloseBtn = document.createElement('button');
		wrapperMovieCloseBtn.className = 'movie__close__btn';
		wrapperMovieCloseBtn.setAttribute('id', index);


		wrapperMovieItem.appendChild(wrapperMovieLabel);
		wrapperMovieLabel.appendChild(wrapperCheckbox);
		wrapperMovieLabel.appendChild(wrapperCheckboxClick);
		wrapperMovieLabel.appendChild(wrapperMovieName);
		wrapperMovieLabel.appendChild(wrapperMovieCloseBtn);

		movieWrapper.appendChild(wrapperMovieItem);

		wrapperCheckbox.addEventListener('click', () => {
			if (movie.checkbox === 'unchecked') {
				console.log(movie.checkbox)
				movie.checkbox = 'checked';
			} else {
				movie.checkbox = 'unchecked';
			}
			saveMoviesStorage(STORAGE_LABEL_MOVIES, movies);
		});

		wrapperMovieCloseBtn.addEventListener('click', function() {
			// удаление одного элемента из массива
			movies.splice(index, 1);

			saveMoviesStorage(STORAGE_LABEL_MOVIES, movies);
			renderMovies(movies);
			});
});

moviesOutputNode.appendChild(movieWrapper)
};

const clickToEnter = (e) => {
	if(e.keyCode === 13) {
		e.preventDefault();
		newPostMovieHandler();
	}
}

const init = () => {

	let moviesArray = getMoviesFromStorage(STORAGE_LABEL_MOVIES);

	if (!moviesArray == []) {
		movies = moviesArray;
	} else {
		movies = [];
	}

	renderMovies(movies);
}

init();

titleMovieInputNode.addEventListener('keydown', clickToEnter);
titleMovieInputNode.addEventListener('input', validation);
movieAddBtnNode.addEventListener('click', newPostMovieHandler);

