import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'input', 'list']

  connect() {
    console.log('Hello from movie_controller.js')
    // console.log(this.testTarget)
  }

  search(event) {
    event.preventDefault()
    console.log("search")
    const keyword = this.inputTarget.value
    this.fetchAPI(keyword)
  }

  fetchAPI(keyword) {
    const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
    fetch(url)
      .then(response =>response.json())
      .then((data) => {
        this.displayMovies(data.Search)
      })
  }

  displayMovies(movies) {
    console.log(movies)
    this.listTarget.innerHTML = ""
    movies.forEach((movie) => {
      const movieCard = `
      <li class="list-inline">
        <img src="${movie.Poster}" alt="movie" />
        <p>${movie.Title}</p>
      </li>
      `
      this.listTarget.insertAdjacentHTML("beforeend", movieCard)
    })
  }
}