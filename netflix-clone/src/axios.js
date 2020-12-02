import axios from 'axios';

/* base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// instance.get('/foo-bar'); <-- Use Case Example
// what you get back from 
// this^ is: https://api.themoviedb.org/3/foo-bar

export default instance;