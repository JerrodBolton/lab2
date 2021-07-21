// I want the ues to input their name and they will get a welcome form th website.

function innames(){
let usernames = prompt("What is your name?");
 document.write(" Hey, welcome " + usernames + " happy for here you here!");

}
 "use strict";
function quiz() {
  // if the x don't put Jerrod Bolton then it's going to put you wrong.

  let name = true;

  while (name) {
    let response = prompt("What is my Jerrod Bolton?");
    if (response === "yes") {
      name = false;
      alert("Your Correct!!!!");
    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let school = true;

  while (school) {
    let response2 = prompt("Did I go to freedom Prep?");
    if (response2 === "yes") {
      school = false;
      alert("Your Correct!!!!");
    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let graduate = true;

  while (graduate) {
    let response3 = prompt("Did I graduate in 2017?");
    if (response3 === "no") {
      graduate = false;
      alert("Your Correct!!!!");
    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let college = true;

  while (college){
    let response5 = prompt(" Was college easy for me?");
    if (response5 === "no") {
      graduate = false;
      alert("Your Correct!!!!");

    } else {
      alert("Your answer is incorrect");
    }
  }

  let golds = true;

  while (golds) {
    let response4 = prompt("Is my gold to be a software engineer?");
    if (response4 === "yes") {
      graduate = false;
      alert("Your Correct!!!!");
    }
     else {
      alert("Your answer is incorrect");
    }
  }
}
