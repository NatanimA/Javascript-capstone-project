const moviesApi = "https://api.tvmaze.com/shows";

export default class DisplayMovies {
    static fetchMovies = async () => {
        const response = await fetch(moviesApi);
        const movies = response.json();
        return movies;
    }

    
}