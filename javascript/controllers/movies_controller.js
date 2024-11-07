import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["list", "input"]

  connect() {
    console.log("Hello from movie_controller");
    this.apiKey = "adf1f2d7"
  }

  search(event) {
    console.log("search")
    event.preventDefault();
    const url = `http://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=${this.apiKey}`
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.displayMovies(data.Search)
      })
  }

  displayMovies(movies) {
    this.listTarget.innerHTML = ""
    movies.forEach((movie) => {
      const liElement = `
      <li>
        <img src="${movie.Poster}" alt="" />
        <p>${movie.Title}</p>
      </li>
      `
      this.listTarget.insertAdjacentHTML("beforeend", liElement)
    })
  }
}