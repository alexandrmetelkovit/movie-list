const TITLE_VALIDATION_MIN = 0;
const TITLE_VALIDATION_MAX = 2;

const minTitleLimitMessage = 'Фильма без названия не найти';
const maxTitleLimitMessage = `Очень длинное название`;

let movies = [];

const titleMovieInputNode = document.getElementById('movieInput');
const movieAddBtnNode = document.getElementById('movieAddBtn');
const moviesOutputNode = document.getElementById('moviesList');
const validationMessageNode = document.getElementById('validationMessage');
const movieCloseBtnNode = document.getElementById('movieCloseBtn');

movieAddBtnNode.addEventListener('click', function() {
	// получение фмльма от юзера = получаю фильм из инпута
const movieFromUser = getMovieFromUser();

// присваиваем значение которое ввел юзер
addMovies(movieFromUser);

renderMovies();

clearInput();
});

const validation = () => {
	const titleLength = titleMovieInputNode.value.length;

	if (titleLength >= TITLE_VALIDATION_MAX) {
		validationMessageNode.innerText = maxTitleLimitMessage;
		validationMessageNode.classList.remove = 'validationMessage__hidden';
		return;
	} else {
		validationMessageNode.classList.add = 'validationMessage__hidden';
	}
};

const deleteMovie = () => {

}




const getMovieFromUser = () => {
	const title = titleMovieInputNode.value;

 return {
	title
 };
}

// присваивание нового фильма к ФИЛЬМАМ
const addMovies = ({ title }) => {
	movies.push({ 
		title
	});
}

// очистка инпута после нажатия кнопки добавления
const clearInput = () => {
	titleMovieInputNode.value = '';
}

const getMovies = () => {
	return movies;
}

// отображение фильма
const renderMovies = () => {
const movies = getMovies();

let moviesHTML = '';

	movies.forEach(movie => {
		moviesHTML += `
				<div class='movie'>
				<div class='checkbox__container'> 
				<input type='checkbox' class='custom__checkbox'>
				</div>
				<div class='movie__name'>
				<p class='movie__title'>${movie.title}</p>
				</div>
				<button id='movieCloseBtn' class='close__movie'></button>
				</div>
		`
	});

	moviesOutputNode.innerHTML = moviesHTML;
}

titleMovieInputNode.addEventListener('input', validation);






// const getMovieFromUser = () => {
//   const movieName = movieInputNode.value; // получаем название фильма из поля ввода

// 	if (!movieName) {
// 		alert(limitErrorMessage);
// 		return;
// 	}

// 	clearMovieInput();
// }


// const clearMovieInput = () => {
//   movieInputNode.value = "";
// };
// // function deleteMovies() {
// //   movies.length = [];

// //   moviesListNode.innerHTML = "Тут пока пусто...";
// // }



// const getMovies = () => movies;



// // const renderMovies = () => {
// // 	moviesInputNode.innerHTML = '';

// // 	const listMovies = document.createElement('ul');
// // listMovies.className = 'movies__list';

// // const list = getMovies();

// // list.forEach((element, index) => {
// // 	const listEl = document.createElement('li');
// // 	const listElLabel = document.createElement('label');
// // 	const listElCheckbox = document.createElement('input');
// // 	const listElFakeCheckbox = document.createElement('div');
// // 	const listName = document.createElement('span');
// // 	const listElDeleteBtn = document.createElement('button');

// // 	listEl.className = 'movies__list-item';
// // 	listElLabel.className = 'movie';
// // 	listElCheckbox.className = 'movie__checkbox';
// // 	listElFakeCheckbox.className = 'movie__fake__checkbox';
// // 	listName.className = 'movie__title';
// // 	listElDeleteBtn.className = 'movie__deleteBtn';

// // 	listEl.setAttribute('id', index);
// // 	listElCheckbox.setAttribute('type', 'checkbox');
// // 	listElCheckbox.setAttribute(element.check, '');
// // 	listElDeleteBtn.setAttribute('id', index);

// // 	listName.innerText = element.name;

// // 	listEl.appendChild(listElLabel);
// // 	listElLabel.appendChild(listElCheckbox);
// // 	listElLabel.appendChild(listElFakeCheckbox);
// // 	listElLabel.appendChild(listName);
// // 	listElLabel.appendChild(listElDeleteBtn);

// // listMovies.appendChild(listEl);

// // listElCheckbox.addEventListener('click', () => {
// // 	if (element.check === 'unchecked') {
// // 		element.check = 'checked';
// // 	} else {
// // 		element.check = 'unchecked';
// // 	}
// // });

// // listElDeleteBtn.addEventListener('click', () => {
// // 	movies.splice(index, 1);
// // 	renderMovies();
// // })
// // moviesListNode.appendChild(listMovies);
// // });
// // }



