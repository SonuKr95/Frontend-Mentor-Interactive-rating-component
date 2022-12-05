"use strict";

/*
Created Variables for different elements

*/

const clickedButton = document.querySelector(".btn");

const thankYou = document.querySelector(".thank-you");

const textBox = document.querySelector(".text-box");

const star = document.querySelector("#rate");

// created variable for user ratings 1-5 (node list)

const rating = document.querySelectorAll(".ratings > span ");

// Toggle the class when user clich the submit button

clickedButton.addEventListener("click", function () {
  textBox.classList.toggle("hide");
  thankYou.classList.toggle("hide");
});

/*added for each array method on the rating (Node list) and created a variable customer rate which store the value of customer rating, also assign the text content of star === user rating
 */

rating.forEach((item) => {
  item.addEventListener("click", () => {
    let customerRate;
    return (star.textContent = item.innerHTML);
  });
});
