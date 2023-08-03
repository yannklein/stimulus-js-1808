import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'reset', 'clickme' ]

  connect() {
    // console.log('Hello from disable_button_controller.js')
    // console.log(this.resetTarget)
    // console.log(this.clickmeTarget)
  }

  disable(event) {
    // console.log("clicked")
    event.currentTarget.innerText = "☠️"
    event.currentTarget.disabled = true
    this.resetTarget.classList.remove("d-none")
  }

  enable() {
    // console.log("enable!")
    this.resetTarget.classList.add("d-none")
    this.clickmeTarget.innerText = "Click me again!"
    this.clickmeTarget.disabled = false
  }
}