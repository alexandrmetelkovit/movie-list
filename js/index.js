const titleMovieInputNode = document.getElementById('movieInput');
const movieAddBtnNode = document.getElementById('movieAddBtn');
const moviesOutputNode = document.getElementById('movies');
const validationMessageNode = document.getElementById('validationMessage');

const TITLE_VALIDATION_MAX = 10;

const minTitleLimitMessage = 'Фильм без названия не найти';
const maxTitleLimitMessage = 'Очень длинное название';

let movies = [];

// const saveMoviesToLocalStorage = () => {
// 	localStorage.setItem('movies', JSON.stringify(movies));
// }

function validation(movieFromUser) {

	let result = true;

	if (movieFromUser === '') {
		validationMessageNode.className = 'validationMessage';
		validationMessageNode.innerText = minTitleLimitMessage;
		movieAddBtnNode.disabled = true;
		result = false;
		return result;
	}

	if (movieFromUser > TITLE_VALIDATION_MAX) {
		validationMessageNode.className = 'validationMessage';
		validationMessageNode.innerText = maxTitleLimitMessage;
		movieAddBtnNode.disabled = true;
		result = false;
		return result;
	} 

		validationMessageNode.className = 'validationMessage__hidden';
		movieAddBtnNode.disabled = false;

		return result;
};

function newPostMovieHandler() {
	const movieFromUser = getMovieFromUser();

	if (!validation(movieFromUser)) {
		return;
	}

	movies.push(movieFromUser);

	renderMovies(movies);
}

// получение названия фильма из инпута
function getMovieFromUser() {
		const movieName = titleMovieInputNode.value.trim();

		clearInput();

		return movieName;
}

//очистка инпута
function clearInput() {
	titleMovieInputNode.value = "";
};


// отображение фильма
function renderMovies(movies) {
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

		const wrapperCheckboxClick = document.createElement('div');
		wrapperCheckboxClick.className = 'checkbox__click';

		const wrapperMovieName = document.createElement('span');
		wrapperMovieName.className = 'movie__name';
		wrapperMovieName.innerText = movie;

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
			if (movie.check === 'unchecked') {
				movie.check = 'checked';
			} else {
				movie.check;
			}
		});

		wrapperMovieCloseBtn.addEventListener('click', function() {
			// удаление одного элемента из массива
			movies.splice(index, 1);
			renderMovies(movies)
			});

});

moviesOutputNode.appendChild(movieWrapper)
};

function clickToEnter(e) {
	if(e.keyCode === 13) {
		e.preventDefault();
		newPostMovieHandler();
	}
}

titleMovieInputNode.addEventListener('keydown', clickToEnter);
titleMovieInputNode.addEventListener('input', validation);
movieAddBtnNode.addEventListener('click', newPostMovieHandler);

