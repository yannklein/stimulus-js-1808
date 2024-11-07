// //////////////
// Rehearsal
// //////////////

// // 1. Select elements (button)
// const button = document.querySelector("#clickme");
// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the dom (innerText, disable)
//   // event.currentTarget --> the element we clicked, here it is the button
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.disabled = true;
//   // event.currentTarget === button
// });


// //////////////
// Stimulus 101
// //////////////

// define what HTML will use JS => data-controller  C
// addEventListener()           => data-action      A
// querySelector()              => data-xxx-target  T

// Bonus: data-xxx-valname-value and this.element

import { Application } from "@hotwired/stimulus"
window.Stimulus = Application.start()
// window.mason = "Awesome!";

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import moviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", moviesController)