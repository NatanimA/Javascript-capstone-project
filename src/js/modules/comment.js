const involvmentApi =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZObsZgI03dvSZJSDJ0x6';
const commentsDetail = document.querySelector('.comments-detail');
const commentsUser = document.querySelector('.comment-user-name');
const commentsContainer = document.querySelector('.comments-list');
const commentContent = document.querySelector('.comments-content');
const commentBtn = document.querySelector('.comment-submit-btn');
const commentFail = document.querySelector('.comment-failure');
const commentSection = document.querySelector('.comments-section');
const commentsCount = document.querySelector('.comments-counter');
const moviesApi = 'https://api.tvmaze.com/shows';
export default class PopUpComment {
  static commentPopUp = async (id) => {
    const response = await fetch(`${moviesApi}/${id}`);
    const movies = await response.json();
    const movieName = movies.name;
    const movieImageUrl = movies.image.medium;
    const movieLanguage = movies.language;
    const movieDownload = movies.officialSite;
    const movieRating = movies.rating.average;
    const movieSummary = movies.summary;
    let moviesGenres = '';
    const genreArray = movies.genres;
    genreArray.forEach((element, index) => {
      if (index < genreArray.length - 1) {
        moviesGenres += `${element}, `;
      } else {
        moviesGenres += element;
      }
    });

    const htmlComments = `
        <button class="close-btn"> X </button>
        <div class="pop-container">
            <div class="image-and-download">
                <img class="movie-image-pop" src="${movieImageUrl}">
                <button class="movie-download-btn" type="button">
                    <a class="download-link" href="${movieDownload}" targer="_blank">Download</a>
                </button>
            </div>
            <div class="movie-info">
                <h2 class ="movie-info-title">${movieName}</h2>
                <div class="movie-genre">
                    <strong> Genre: </strong>${moviesGenres}
                </div>
                <div class="lang-and-rating">
                    <p class="movie-language"><strong>Language: </strong>${movieLanguage}</p>
                    <p class="movie-rating"><strong>Rating: </strong>${movieRating}</p>
                </div>
                <div class="summary-div">
                    <strong>Summary: </strong><br>
                    ${movieSummary}
                </div>
            </div>
        </div>
       `;
    commentsContainer.innerHTML = htmlComments;
  };
}
