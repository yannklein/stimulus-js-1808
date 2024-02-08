import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'cards']

  static values = {
    test: String
  }

  connect() {
    console.log("movies controller connected")
    console.log(this.testValue);
  }

  displayMovies(movies) {
    this.cardsTarget.innerHTML = ""
    movies.forEach((movie) => {
      this.cardsTarget.insertAdjacentHTML(
        "beforeend", 
        `<li class="list-inline">
          <img src="${movie.Poster}" alt="" />
          <p>${movie.Title}</p>
        </li>`)
    })
  }

  fetchOmdbAPI(keyword) {
    const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.displayMovies(data.Search)
      })
  }

  findMovies(event) {
    event.preventDefault()
    console.log("clicked")
    this.fetchOmdbAPI(this.inputTarget.value)
  }
}