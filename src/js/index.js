import '../style.css';
import imgLogo from '../assets/century-logo.png';
import DisplayMovies from './modules/apiUtility.js';
import FetchandInsertMovies from './modules/display.js';
import PopUpComment from './modules/comment.js';

const logo = document.querySelector('#logo-container');
const commentSection = document.querySelector('.comments-section')
const homepage = document.querySelector('.homepage')
const commentsDetail = document.querySelector('.comments-detail')
const commentBtn = document.querySelector('.comment-submit-btn');
const commentsUser = document.querySelector('.comment-user-name');
const commentContent = document.querySelector('.comments-content');
const commentFail = document.querySelector('.comment-failure');
var selectedComment = null;

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
    selectedComment=commentId;
    commentSection.style.display='block'
    homepage.classList.add('active')
    await PopUpComment.commentPopUp(commentId);
    await PopUpComment.getComments(commentId);
    await PopUpComment.commentsCounter(commentId);
  }
})


commentSection.addEventListener('click', async (event) => {
  if(event.target.className === "close-btn"){
    commentSection.style.display='none'
  }
})

commentBtn.addEventListener('click', async(event)=> {
  console.log(commentsUser.value)
  console.log(commentContent.value)
  console.log("event.target First", selectedComment)
  const allComments = event.target.parentElement.parentElement.previousElementSibling;
  console.log("all comments",allComments)
  const singleComment = allComments.querySelector('.comment-single')
  console.log("single commernt",singleComment)
  if(commentsUser.value !== '' && commentContent.value !== ''){
    var idMovie=null;
    if(singleComment === null){
      idMovie= selectedComment;
    }
    else{
      idMovie = singleComment.id;
    }
    await PopUpComment.addComments(idMovie);
    await PopUpComment.getComments(idMovie);
    await PopUpComment.commentsCounter(idMovie);
    commentsUser.value='';
    commentContent.value='';
  }
  else{
    commentFail.innerHTML= 'Failed,Please try again';
  }
});
