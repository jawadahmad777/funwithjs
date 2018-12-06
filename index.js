//********************************checkbox*****************************
var label = document.getElementById("label");
console.log(label);
var scales = document.querySelector("#scales");
console.log(scales);
scales.addEventListener("change", function(e) {
  if (scales.checked) {
    grid.style.display = "none";
    label.textContent = "show";
  } else {
    grid.style.display = "block";
    label.textContent = "hide";
  }
});
//**************deleting elements from DOM using the good way*****************

var grid = document.querySelector(".grid");
var btns = document.querySelectorAll(".delete");
grid.addEventListener("click", function(e) {
  if (e.target.className == "delete") {
    var li = e.target.parentElement;
    li.parentElement.removeChild(li);
  }
});
//////////Adding element to dom to make it work commt the othe code for hoisting reasons////////////////////
var form = document.forms["form2"];
console.log(form);
var add = document.querySelector(".add");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  var val = form.querySelector('input[type="text"]').value;
  console.log(val);
  var lii = document.createElement("li");
  var span = document.createElement("span");
  var bts = document.createElement("button");
  span.textContent = val;
  bts.textContent = "button";
  bts.classList.add("delete");
  lii.appendChild(span);
  lii.appendChild(bts);
  grid.appendChild(lii);
});
/////////How to auto select from a list of item////////////////////
var form = document.querySelector("#form").querySelector("input");
form.addEventListener("keyup", function(e) {
  var search = e.target.value.toLowerCase();
  var list = grid.getElementsByTagName("li");
  Array.from(list).forEach(function(book) {
    var key = book.firstElementChild.textContent;
    if (key.toLowerCase().indexOf(search) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

// var data = document.getElementsByTagName("form");
// var add = document.querySelector(".add");
// var val = data.querySelector("input[type='text']").value;
// console.log(val);
// console.log(btns);
// //deleting elements from DOM using a way
// btns.forEach(function(but) {
//   but.addEventListener("click", function(e) {
//     let li = e.target.parentElement;
//     li.parentElement.removeChild(li);
//   });
// });
/////////////////////////////////Bubbling /////////////////////////
// var child = document.querySelector(".child");
// var parrent = document.querySelector(".parrent");
// var bubbling = document.querySelector(".bubbling");
// console.log(bubbling);
// console.log(parrent);
// console.log(child);
// child.onclick = function(e) {
//   //e.stopPropagation();
//   console.log("hi");
// };
// parent.onclick = function() {
//   console.log("parent element");
// };
//
// bubbling.onclick = function() {
//   console.log("Events are bubbling!!!!!");
// };
/////////////////////drag and drop////////////////////////
var fill = document.querySelector(".fill");
console.log(fill);
var empty = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", function() {
  setTimeout(function() {
    fill.className = "hide";
  }, 1);
});
fill.addEventListener("dragend", function() {
  fill.className = "fill";
});

empty.forEach(emp => {
  emp.addEventListener("dragover", dragover);
  emp.addEventListener("dragenter", dragenter);
  emp.addEventListener("dragleave", dragleave);
  emp.addEventListener("drop", dragdrop);
});
function dragover(e) {
  e.preventDefault();
  console.log("dragover");
}
function dragenter() {
  console.log("dragenter");
}
function dragleave() {
  console.log("dragleave");
}
function dragdrop() {
  console.log("drop");
  this.append(fill);
}
//Write a function that inserts an element into the body of the currently loaded page.
//That element should have fixed position, z-index of 2147483647, left of 20px,
//top of 100px, font-size of 200px, and contain the text 'AWESOME'.
function addElement() {
  var newDiv = document.createElement("div");
  var textNode = document.createTextNode("AWESOME");
  newDiv.style.marginLeft = "20px";
  newDiv.style.marginTop = "100px";
  newDiv.style.fontSize = "200px";
  newDiv.style.position = "fixed";
  newDiv.style.zIndex = "2147483647";
  newDiv.appendChild(textNode);
  console.log(newDiv);
  document.body.appendChild(newDiv);
}
addElement();
//Write a function that expects a string representing a class name to be passed as a parameter.
// The function should return an array containing all the elements
//in the document that have the class that was passed in.
function clas(first) {
  var classes = document.getElementsByClassName("first");
  console.log(classes);
  var nn = Array.from(classes);
  return nn;
}
console.log(clas(".first"));
//Write a function that expects a string representing a selector to be passed as a parameter.The function
// should find all the elements in the document that match the selector and change their style so
//that the text they contain is italic, underlined, and bold.
var selectors = document.querySelectorAll("div");
console.log(selectors);
function find() {
  var ne = Array.from(selectors);
  for (var i = 0; i < ne.length; i++) {
    ne[i].style.textDecoration = "underlined";
    ne[i].style.fontWeight = "bold";
    ne[i].style.fontStyle = "italic";
  }
}
console.log(find(selectors));
//Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns
//a new array containing only those numbers from the array that was passed in that are less than zero.
var arr = ["1", "2", "-3", "-e", "4", "-1", "2", "3", "e", "4"];
console.log(arr);
function negative() {
  return arr.filter(function(results) {
    return results < 0;
  });
}
console.log(negative(arr));
//Write a function that takes an array as a parameter and returns a new array containing all of the
//items that are in the array that was passed in but in reverse order. Unlike the reverse method that
//all arrays have, this function should leave the original array unchanged.
var myArr = ["1", "2", "3", "e", "4"];
function p() {
  var n = myArr.slice();
  var k = n.reverse();

  return k;
}
console.log(myArr);
console.log(p(myArr));
//Make a static HTML page that has a large <textarea> on it.
// When the user types in it, save the value in localStorage. When the user comes back to the page after navigating away or closing the browser,
//  the stored value should automatically appear in the <textarea>.
var textarea = document.querySelector("#textarea");
console.log(textarea);
textarea.textContent = localStorage.getItem("key");
textarea.addEventListener("input", function(e) {
  var val = textarea.value;
  localStorage.setItem("key", val);
});
//////////////////////////////////////////////////////////////////////////
// Write a function that returns a function that can be called repeatedly and passed a
// number each time. Each time it is called it should return the sum of the number
// that is passed in and all other numbers that were passed in previous calls.
//  That is, it should return the sum of all the numbers that were ever passed to it.
function first(num) {
  var num = 0;
  function second(result) {
    return (num += result);
  }
  return second;
}
var d = first();
console.log(d(2));
console.log(d(5));
console.log(d(8));
//////////////////////////////////////////////////////////////////////
//Write a function that expects a number as a parameter.
// If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the
//string 'ERROR'. If the number that is passed in is greater
// than or equal to 1000000 it should simply return the number. Otherwise it should multiply
// the number by 10 however many times it takes to get a number
// that is greater than or equal to 1000000 and return that.
function check(num) {
  if (Number.isNaN(num) || num <= 0) {
    return console.log("ERROR");
  } else {
    if (num >= 1000000) {
      return console.log(num);
    } else {
      return num * 10;
    }
  }
}
console.log(check(12));
//////////////////////////////////////////////////////////////////
//Write a function that takes any number of numbers as
//parameters and returns the sum of those numbers.
function sumNumOfArg() {
  var sum = 0;
  console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    if (Number.isNaN(arguments[i])) {
      return console.log("enter a number");
    }
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
}
console.log(sumNumOfArg(1, 3, 4, -5));
////////////////////////////////////////////////
//Write a function that takes another function as a parameter. It should wait 1.5
//seconds and then run the function that was passed in.
setTimeout(function() {
  console.log("Hello");
}, 1500);
// Write a function askForNumber that uses prompt to ask the user for a number between one and ten.
// It should check the result and if it is not a number between 1 and 10 it should throw an error
//  with the message "not a valid number". Otherwise, it should return the number the user entered.
//  Then, write a second function translateNumberToGerman that calls askForNumber and returns the
//  German translation of that number as a string. If askForNumber throws an error, it should print
//   the error's message to the console and prompt the user again.
// The process is started by calling translateNumberToGerman. It is translateNumberToGerman that calls askForNumber.
// askForNumber should call prompt and, depending on what prompt returns, either return a number or throw an exception.
// If askForNumber returns a number, translateNumberToGerman should return a string (a German translation of the number).
// If askForNumber throws an exception, translateNumberToGerman should catch that exception and restart
(function() {
  function askForNumber() {
    var num = prompt("enter a number between 1 and 10");
    try {
      if (!isNaN(num) && num >= 1 && num <= 10) {
        return num;
      } else {
        throw "not a valid number";
      }
    } catch (e) {
      alert(e);
      return askForNumber();
    }
  }
  (function translateNumberToGerman() {
    var num = askForNumber();
    console.log(num);

    var oneToTen = [
      "Eins",
      "Zwei",
      "Drei",
      "Vier",
      "Fünf",
      "Sechs",
      "Sieben",
      "Acht",
      "Neun",
      "Zehn"
    ];
    for (var i = 0; i < oneToTen.length; i++) {
      if (num == i + 1) {
        alert("the number in deutsch is " + oneToTen[i]);
        break;
      }
    }
  })();
})();
//  Make a JSON validator website. It should have a <textarea> where users can input their JSON. After
//  clicking a button a message should appear, telling users if the JSON is valid or not.
var textarea = document.querySelector("#textarea");
var btn = document.querySelector("#btn");
console.log(textarea.value);
btn.onclick = function(e) {
  var value = textarea.value;
  try {
    var json = JSON.stringify(value);
    console.log(json);
  } catch (err) {
    console.log(" her et ", err);
  }
};
// Make a page that has on it an element that is 100px by 100px in size,
// has absolute positioning, and has a solid background color. Add an event handler that makes this box center itself
// directly under the user's mouse pointer as it is moved across the screen.
var move = document.getElementsByClassName("boxRandomColor");
var moved = Array.from(move);
moved.forEach(function(mov) {
  document.addEventListener("mousemove", function(e) {
    mov.style.backgroundColor = "blue";
    var x = e.pageX;
    var y = e.pageY;
    mov.style.left = x - 50 + "px";
    mov.style.top = y - 50 + "px";
  });
});
console.log(move);
console.log(moved);

//Make a page that has on it an element that is 200px by 200px in size and has a solid background color
//  Nest within that element another element that is 50px by 50px in size and has a different solid
//  background color. When the user clicks on the outer element its background color should change to a
//  randomly selected color. However, if the user clicks on the inner element, the inner element's
//  background color should change to a randomly selected background color but the outer element's
//   background color should not change at all.
var outer = document.querySelector(".outerBox");
var inner = document.querySelector(".innerBox");
outer.onclick = function a(e) {
  e.stopPropagation();
  var x = e.pageX;
  var y = e.pageY;
  outer.style.backgroundColor = "rgb(" + x + " , " + y + " , 32)";
};
inner.onclick = function a(e) {
  e.stopPropagation();
  var x = e.pageX;
  var y = e.pageY;
  inner.style.backgroundColor = "rgb(" + x + " , " + y + " , 32)";
};

//Make a page that has on it an element that is 100px by 100px in size and has a solid black
//   border. When the user mouses down on this box, its background should change to a randomly
// selected color. When the user mouses up on it,its background should change to another randomly selecte
var box = document.getElementsByClassName("MainBox");
console.log(box);
var color = Array.from(box);
color.forEach(function(col) {
  col.addEventListener("mouseenter", function(e) {
    var x = e.pageX;
    var y = e.pageY;
    col.style.backgroundColor = "rgb(" + x + " , " + y + " , 32)";
  });
});

///How to remove duplicate values from a JavaScript array? We can use array.
//indexOf method to check a value exists or not. See below example to remove duplicate values.
let duplicates = ["delhi", "kanpur", "kanpur", "goa", "delhi", "new york"];
function removeDuplicatesValues(arr) {
  let unique_array = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique_array.indexOf(arr[i]) == -1) {
      unique_array.push(arr[i]);
    }
  }
  return unique_array;
}

console.log(removeDuplicatesValues(duplicates));
