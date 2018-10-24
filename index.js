console.log("hi dom");
var button = document.getElementById("button");
var pharagraph = document.getElementById("pharagraph");
button.onclick = function(e) {
  console.log(e);
};
button.onclick = () => {
  if (pharagraph.className == "open") {
    pharagraph.className == "";
  } else {
    pharagraph.className == "open";
  }
};
