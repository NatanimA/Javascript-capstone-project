export default class FetchandInsertMovies {
    static fetchAndDisplay = (movies) => {
      movies.forEach((element, index) => {
        const homepage = document.querySelector('.homepage');
        if (index < 24) {
          homepage.innerHTML += `
                <div class="movies-grid">
                <ul class="movie-card">
                <img classs="movie-img" src="${element.image.medium}" alt="Movie Image">
                </ul>
                <div class="movie-subtitles">
                <h3>${element.name}</h3>
                <i class="fa fa-heart"></i>
                </div>
                <div class="movie-detail">
                <i class="fa-solid fa-language">: ${element.language}</i>
                <i class="fa-solid fa-star">: ${element.rating.average}</i>
                </div>
                <div class="movie-genere">
                <i class="fa-solid fa-film">: ${element.genres[0]}</i>
                </div>
                <div class="movie-btn">
                <button class="comment-btn" id="${element.id}">Comments</button>
                <button class="reservation-btn" id="${element.id}">Stream</button>
                </div>
                </div>
                `;
        }
      });
    }
}