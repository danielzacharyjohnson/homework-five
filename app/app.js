//console.log("Hello from app.js!");

function doTasks() {
  //task one: Change the text content of the <h1> element to "DOM Manipulation".
  document.getElementById("title").innerHTML = `DOM Manipulation`;

  //task two: Change the background color of the <div> element with the id "container" to "lightblue".
  document.getElementById("container").style.backgroundColor = "lightblue";

  //task three: Select the <ul> element and add a new <li> element with the text content "Item 7" to the list.
  document.querySelector("ul").innerHTML += `<li>Item 7</li>`;

  //task four: The first item should have crimson text
  let fourthTask = document.querySelector("ul li:first-child");
  fourthTask.style.color = "crimson";

  //document.querySelector("ul li:third-child").style.color = "crimson";

  //task five: The third item should have a pink background
  //let secondTask = document.querySelector("ul > li:third-child");
  let fifthTask = document.querySelector("ul li:nth-child(3)");
  fifthTask.style.backgroundColor = "pink";

  //task six: The fifth item should have a yellow background
  let sixthTask = document.querySelector("ul li:nth-child(5)");
  sixthTask.style.backgroundColor = "yellow";

  //task seven: The seventh item should have a lightGray background with royalBlue text
  let seventhTask = document.querySelector("ul li:nth-child(7)");
  seventhTask.style.backgroundColor = "lightGrey";
  seventhTask.style.color = "royalBlue";

  //task eight: Add an 8th item with the text of your name
  document.querySelector("ul").innerHTML += `<li>Daniel</li>`;

  //task nine: Delete the fourth item
  let ninthTask = document.querySelector("ul li:nth-child(4)");
  ninthTask.remove();

  //task ten: Add a italic element around the button text and make the background rebeccapurple with white text and a white border.
  let tenthTask = document.getElementById("btn");
  tenthTask.style.fontStyle = "italic";
  tenthTask.style.backgroundColor = "rebeccapurple";
  tenthTask.style.color = "white";
  tenthTask.style.border = "1px solid white";

}

doTasks();
