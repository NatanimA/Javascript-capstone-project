import '../style.css';
import imgLogo from '../assets/century-logo.png';
import DisplayMovies from './modules/apiUtility.js';
import FetchandInsertMovies from './modules/display.js';

const logo = document.querySelector('#logo-container');

logo.innerHTML = `<a href="#"><img class="logo-image" src="${imgLogo}" alt="century-cinema"></a>`;

class Homepage {
    static loadMovies = async () => {
      const moviesData = await DisplayMovies.fetchMovies();
      await FetchandInsertMovies.fetchAndDisplay(moviesData);
    }
}

Homepage.loadMovies();