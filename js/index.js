const titleMovieInputNode = document.getElementById('movieInput');
const movieAddBtnNode = document.getElementById('movieAddBtn');
const moviesOutputNode = document.getElementById('movies');
const validationMessageNode = document.getElementById('validationMessage');

const TITLE_VALIDATION_MIN = 0;
const TITLE_VALIDATION_MAX = 10;

const minTitleLimitMessage = 'Фильм без названия не найти';
const maxTitleLimitMessage = 'Очень длинное название';

let movies = [];

function validation() {
	const titleLength = titleMovieInputNode.value.length;

	if (!titleLength || titleLength < TITLE_VALIDATION_MIN) {
		validationMessageNode.className = 'validationMessage';
		validationMessageNode.innerText = minTitleLimitMessage;
		movieAddBtnNode.disabled = true;
		return;
	} 

	if (titleLength > TITLE_VALIDATION_MAX) {
		validationMessageNode.className = 'validationMessage';
		validationMessageNode.innerText = maxTitleLimitMessage;
		movieAddBtnNode.disabled = true;
		return;
	} 

		validationMessageNode.className = 'validationMessage__hidden';
		movieAddBtnNode.disabled = false;
};

function newPostMovieHandler() {
	const movieFromUser = getMovieFromUser();

	addMovies(movieFromUser);

	validation();
	
	renderMovies();
	
	clearInput();
}

// получение названия фильма из инпута
function getMovieFromUser() {
		const movieName = titleMovieInputNode.value;

		return movieName;
}

function clearInput() {
	titleMovieInputNode.value = "";
	validation();
};

function addMovies(movie) {
	movies.push(movie);
	clearInput();
}

function getMovies() {
	return movies;
}

// отображение фильма
function renderMovies() {
	moviesOutputNode.innerHTML = '';

	const movieWrapper = document.createElement('ul');
	movieWrapper.className = 'movies__list';
	
	const wrapper = getMovies();

	wrapper.forEach((element, index) => {
		const wrapperMovieItem = document.createElement('li');
		wrapperMovieItem.className = 'movies__list-item';
		wrapperMovieItem.setAttribute('id', index);

		const wrapperMovieLabel = document.createElement('label');
		wrapperMovieLabel.className = 'label';

		const wrapperCheckbox = document.createElement('input');
		wrapperCheckbox.className = 'real__checkbox';
		wrapperCheckbox.setAttribute('type', 'checkbox');

		const wrapperCheckboxClick = document.createElement('div');
		wrapperCheckboxClick.className = 'checkbox__click';
		// wrapperCheckboxClick.checked(movie.checked);

		const wrapperMovieName = document.createElement('span');
		wrapperMovieName.className = 'movie__name';
		wrapperMovieName.innerText = element.name;

		const wrapperMovieCloseBtn = document.createElement('button');
		wrapperMovieCloseBtn.className = 'movie__close-btn';
		wrapperMovieCloseBtn.setAttribute('id', index);


		wrapperMovieItem.appendChild(wrapperMovieLabel);
		wrapperMovieLabel.appendChild(wrapperCheckbox);
		wrapperMovieLabel.appendChild(wrapperCheckboxClick);
		wrapperMovieLabel.appendChild(wrapperMovieName);
		wrapperMovieLabel.appendChild(wrapperMovieCloseBtn);

		movieWrapper.appendChild(wrapperMovieItem);
	
		moviesOutputNode.appendChild(movieWrapper)

});
}


titleMovieInputNode.addEventListener('input', validation);
movieAddBtnNode.addEventListener('click', newPostMovieHandler);

	



function clickToEnter(event) {
	if(event.keyCode === 13) {
		 event.preventDefault();
			addMovies();
	}
}
movieAddBtnNode.addEventListener('keydown', clickToEnter);

// titleMovieInputNode.addEventListener('input', validation);


// document.getElementById("text")
//     .addEventListener("keyup", function(e) {
//         if (e.keyCode === 13) {
//             document.getElementById("submit").click();
//         }
//     });

// document.addEventListener( 'keyup', event => {
//   if( event.code === 'Enter' ) console.log('enter was pressed');
// });

