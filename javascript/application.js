import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)

// // 1. Select elements (button)
// const button = document.querySelector("#click-me");

// // 2. Listen to a click on that button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (innerText, disabled)
//   event.currentTarget.innerText = "☠️";
//   event.currentTarget.disabled = true;
// });