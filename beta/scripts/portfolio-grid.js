// Strip "show" class from all thumbnails, add to filtered thumbnails
function filterSelection(filter) {
  var thumbArr = document.getElementsByClassName("portfolio-grid__thumbnail");
  if (filter == "all") filter = "";
  for (var i = 0; i < thumbArr.length; i++) {
    removeClass(thumbArr[i], "show");
    if (thumbArr[i].className.indexOf(filter) > -1) addClass(thumbArr[i], "show");
  }
}

// Show selected thumbnails
function addClass(element, name) {
  var classNameArr = element.className.split(" ");
  var nameArr = name.split(" ");
  for (var i = 0; i < nameArr.length; i++) {
    if (classNameArr.indexOf(nameArr[i]) == -1) {
      element.className += " " + nameArr[i];
    }
  }
}

// Hide unselected thumbnails
function removeClass(element, name) {
  var classNameArr = element.className.split(" ");
  var nameArr = name.split(" ");
  for (var i = 0; i < nameArr.length; i++) {
    while (classNameArr.indexOf(nameArr[i]) > -1) {
      classNameArr.splice(classNameArr.indexOf(nameArr[i], 1));
    }
  }
  element.className = classNameArr.join(" ");
}

// Highlight current filter
var btnFilter = document.getElementById("filter-bar");
var btns = btnFilter.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
  });
}
