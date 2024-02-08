// //////////////
// Rehearsal
// //////////////

// // 1. Select elements (button)
// const button = document.getElementById("click-me");

// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, .disabled, .innerText
//   event.currentTarget.innerText = "☠️";
//   event.currentTarget.disabled = true;
// });


// //////////////
// Stimulus 101
// //////////////

import { Application } from "stimulus"
window.Stimulus = Application.start()

// define what HTML will use JS => data-controller  C
// addEventListener()           => data-action      A
// querySelector()              => data-xxx-target  T

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)