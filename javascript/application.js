// //////////////
// Rehearsal
// //////////////

// // 1. Select the element button
// const button = document.querySelector("#clickme");
// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (add disabled and change the content)
//   const clickedElement = event.currentTarget;
//   clickedElement.disabled = true;
//   clickedElement.innerText = "Loading...";
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

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MovieController from "./controllers/movie_controller.js"
Stimulus.register("movie", MovieController)


// http://www.omdbapi.com/?s=matrix&apikey=adf1f2d7