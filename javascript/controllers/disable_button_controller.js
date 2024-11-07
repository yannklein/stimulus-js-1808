import { Controller } from '@hotwired/stimulus'

export default class extends Controller {

  static targets = ["reset", "clickMe"]
  static values = {
    caption: String,
    mason: String
  }
  // runs at page refresh if the controller is present in the HTML
  connect() {
    // console.log("Hello from our first Stimulus controller");
    // console.log(this.resetTarget);
    // console.log(this.captionValue);
    // console.log(this.masonValue);
    // console.log(this.element); // the HTML element that has the data-controller
    
  }

  disable(event) {
    // console.log("clicked!")
    event.currentTarget.innerText = this.captionValue
    event.currentTarget.disabled = true;
    this.resetTarget.classList.remove("d-none");
  }

  enable() {
    // console.log("enable");
    this.clickMeTarget.innerText = "Click me again!"
    this.clickMeTarget.disabled = false;
    this.resetTarget.classList.add("d-none");
  }
}