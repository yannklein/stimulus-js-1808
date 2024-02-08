import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['reset', 'clickMe']

  // executed automatically at page refresh
  connect() {
    console.log("Hello from our first Stimulus controller")
    console.log(this.resetTarget)
  }

  disable(event) {
    event.currentTarget.innerText = "☠️"
    event.currentTarget.disabled = true
    this.resetTarget.classList.remove("d-none")
  }

  enable() {
    this.resetTarget.classList.add("d-none")
    this.clickMeTarget.innerText = "Click me again!"
    this.clickMeTarget.disabled = false
  }
}