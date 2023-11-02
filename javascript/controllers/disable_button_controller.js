import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["reset", "clickme"]

  connect() {
    console.log("Hello from our first Stimulus controller")
    console.log(this.resetTarget)
    console.log(this.clickmeTarget)
    console.log(this.element) // targets the controller
  }

  disable(event) {
    console.log(event)
    const clickedElement = event.currentTarget
    clickedElement.innerText = "Loading..."
    clickedElement.disabled = true
    // display reset button
    // const resetBtn = document.querySelector("???")
    this.resetTarget.classList.remove("d-none")
  }

  enable() {
    this.clickmeTarget.innerText = "Click me again!"
    this.clickmeTarget.disabled = false
    this.resetTarget.classList.add("d-none")
  }
}