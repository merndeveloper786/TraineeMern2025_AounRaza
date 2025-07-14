// document.title = "Aoun's title is good";
//       console.log(document.title);
//       console.log(document.body);
//       document.body.style.backgroundColor = "yellow";

// document.body.childNodes[1].lastChild
// document.body.firstChild
// document.body.firstElementChildChild
// document.body.firstElementChild
// document.body.lastElementChild
// document.body.lastChild
// let cont = document.body.childNodes[1]
// cont.lastElementChild
// cont.lastElementChild.style.backgroundColor = "green"
// cont.lastElementChild.parentElement
// cont.firstElementChild.children
// document.body.firstElementChild.children

// document.body.childNodes
// document.body.childNodes[1]
// document.body.childNodes[1].firstele
// document.body.childNodes[1].firstElementChild
// document.body.childNodes[1].firstElementChild.nextElementSibling
// document.body.childNodes[1].firstElementChild.previousElementSibling
// document.body.childNodes[2].firstElementChild.previousElementSibling
// document.body.firstChild.children[3].previousElementsiblings
// document.body.firstChild.children[3]
// document.body.firstElementChild
// document.body.firstElementChild.children[3]
// document.body.firstElementChild.children[3].previousElementSibling
// document.body.firstElementChild.children[3].parentElement
// document.body.children
// document.body.children[1]

// console.log("Aoun");

// let boxes = document.getElementsByClassName("boxes1");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red";

// document.getElementById("id1").style.backgroundColor = "blue";

// //querySelector

// document.querySelector(".boxes1").style.backgroundColor = "yellow"; //querySelector returns the first element that matches the selector

// //if you want to select all elements with the same class, use querySelectorAll
// let allBoxes = document.querySelectorAll(".boxes1");
// console.log(allBoxes);

// //if you want to change the background color of all elements with the class "boxes1"
// allBoxes.forEach((box) => {
//   box.style.backgroundColor = "green";
// });

// document.body.getElementsByTagName("div"); // we will collect all the div elements in the body
// e = document.body.getElementsByTagName("div"); // e is a live HTMLCollection of all div elements in the body
// e[10].matches("#id1"); // matches() checks if the element matches the selector
// e[9].matches("#id1"); // returns false because the element does not match the selector

// e[9].closest(".container1"); // closest() returns the closest ancestor that matches the selector. check itself if yes then goood otherwise checks parent if yes then good otherwise checks parent of parent and so on

// document.querySelector(".container").contains(e[2]);
// document.querySelector(".container1").contains(e[10]); // contains() checks if the element is a descendant of the specified element

// document.querySelector(".container1").contains(document.querySelector("body")); // false because the body is not a descendant of the container1 element
// document.querySelector("body").contains(document.querySelector(".container1")); // true because the body contains the container1 element

//generate random background color and colour to five boxes
let boxes = document.querySelector(".container1").children;
console.log(boxes);

function getrandomcolour() {
  let val1 = math.ceil(0 + math.random() * 255);
  let val2 = math.ceil(0 + math.random() * 255);
  let val3 = math.ceil(0 + math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach((e) => {
  console.log(e);
});
