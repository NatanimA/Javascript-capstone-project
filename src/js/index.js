import '../style.css';
import imgLogo from '../assets/century-logo.png';
import DisplayMovies from './modules/apiUtility.js';
import FetchandInsertMovies from './modules/display.js';
import PopUpComment from './modules/comment.js';

const logo = document.querySelector('#logo-container');
const commentSection = document.querySelector('.comments-section')
const homepage = document.querySelector('.homepage')
const commentsDetail = document.querySelector('.comments-detail')

logo.innerHTML = `<a href="#"><img class="logo-image" src="${imgLogo}" alt="century-cinema"></a>`;

class Homepage {
    static loadMovies = async () => {
      const moviesData = await DisplayMovies.fetchMovies();
      await FetchandInsertMovies.fetchAndDisplay(moviesData);
    }
}

Homepage.loadMovies();

homepage.addEventListener('click',async(event) => {
  if (event.target.className === 'comment-btn'){
    const commentId = event.target.id;
    commentSection.style.display='block'
    homepage.classList.add('active')
    await PopUpComment.commentPopUp(commentId);
  }
})


commentSection.addEventListener('click', async (event) => {
  if(event.target.className === "close-btn"){
    commentSection.style.display='none'
  }
})
