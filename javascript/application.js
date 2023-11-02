// 1. Select the button
// const button = document.querySelector("#click-me");
// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the dom (innerText, disabled)
//   const clickedElement = event.currentTarget;
//   clickedElement.innerText = "Loading...";
//   clickedElement.disabled = true;
// });

// //////////////
// Stimulus 101
// //////////////

// define what HTML will use JS => data-controller  C
// addEventListener()           => data-action      A
// querySelector()              => data-xxx-target  T


import { Application } from "stimulus"
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)