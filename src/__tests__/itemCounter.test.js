/**
 * @jest-environment jsdom
 */

import Likes from '../js/modules/likes.js';

describe('Items In homepage counter', () => {
  test('Should check the number of movies in homepage', async () => {
    document.body.innerHTML = `<span class="span-movies-number"></span><section class="homepage">
            <div class="movies-grid">
                <ul class="movie-card">
                <img classs="movie-img" src="" alt="Movie Image">
                </ul>
                <div class="movie-subtitles">
                <h3></h3>
                <i class="fa fa-heart" id=""></i>
                <p id="" class="likes"></p>
                </div>
                <div class="movie-detail">
                <i class="fa-solid fa-language">:</i>
                <i class="fa-solid fa-star">:</i>
                </div>
                <div class="movie-genere">
                <i class="fa-solid fa-film">:</i>
                </div>
                <div class="movie-btn">
                <button class="comment-btn" id="">Comments</button>
                <button class="reservation-btn" id="">Stream</button>
                </div>
                </div>
         </section>`;
    const moviesCount = Likes.likesCounter();
    expect(moviesCount).toBe(1);
  });
});