import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'reset', 'clickMe' ]

  static values = {
    example: String
  }

  connect() {
    // console.log('Hello from disable_button_controller.js')
    // console.log(this.resetTarget)
    // console.log(this.exampleValue)
    // console.log(this.element) // targets the data-controller
  }

  disable(event) {
    // console.log(event);
    event.currentTarget.disabled = true;
    event.currentTarget.innerText = "☠️";
    this.resetTarget.classList.remove("d-none");
  }

  enable() {
    // console.log("enable");
    this.resetTarget.classList.add("d-none");
    this.clickMeTarget.innerText = "Click me again!"
    this.clickMeTarget.disabled = false;
  }
}