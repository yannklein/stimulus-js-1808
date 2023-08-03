import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['title', 'list']
  static values = {
    api: String
  }
  connect() {
    console.log("movies controller connected")
    console.log(this.apiValue)
  }

  search(event) {
    event.preventDefault()
    // console.log("search!")
    this.fetchOMDB(this.titleTarget.value);
  }

  fetchOMDB(keyword) {
    const url = `${this.apiValue}/?s=${keyword}&apikey=adf1f2d7`
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data.Search)
        const movies = data.Search
        this.displayMovies(movies)
      })
  }

  displayMovies(movies) {
    movies.forEach((movie) => {
      this.listTarget.insertAdjacentHTML(
        "beforeend",
        `<li class="list-group-item border-0">
          <img src="${movie.Poster}" alt="" />
          <p>${movie.Title}</p>
        </li>`)
    });
  }
}