import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["input", "list"]

  static values = {
    api: String
  }

  connect() {
    console.log(this.apiValue);
  }

  search(event) {
    event.preventDefault()
    console.log("search")
    this.fetchAPI(this.inputTarget.value)
  }

  fetchAPI(keyword) {
    const url = `${this.apiValue}/?s=${keyword}&apikey=adf1f2d7`
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.displayMovies(data.Search)
      })
  }

  displayMovies(movies) {
    this.listTarget.innerHTML = ""
    movies.forEach((movie) => {
      this.listTarget.insertAdjacentHTML(
        "beforeend",
        `<li class="list-group-item">
          <img src=${movie.Poster}>
          <p>${movie.Title}</p>
        </li>`
      );
    });
  }
}