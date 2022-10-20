const involvmentApi =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3CNfK8xiNLfIWKUKw5ck';
export default class Likes {
  static getLikes = async () => {
    const response = await fetch(`${involvmentApi}/likes`);
    const likes = await response.json();
    return likes;
  };
  static addLikes = async (id) => {
    console.log('ID in adding', id);
    const response = await fetch(`${involvmentApi}/likes/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${id}`,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  };
  static updateLikes = async (id, display) => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3CNfK8xiNLfIWKUKw5ck/likes'
    );
    const storedLikes = await response.json();
    storedLikes.forEach((element) => {
      if (element.item_id == id) {
        display.textContent = `(${element.likes})`;
      }
    });
  };
  static likesCounter = () => {
    const homePage = document.querySelector('.homepage');
    const movieChilds = homePage.childElementCount;
    return movieChilds;
  };
  static homePageMoviesCount = () => {
    const homePage = document.querySelector('.homepage');
    const moviesNumberHolder = document.querySelector('.span-movies-number');
    const movieChilds = homePage.childElementCount;
    moviesNumberHolder.textContent = `${this.likesCounter()}`;
    return movieChilds;
  };
}
