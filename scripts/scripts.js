// $('.js-tilt').tilt({
//   maxTilt: 8,
// });

$(function() {
  $.ajax({
    type : 'GET',
    url : './portfolio.json',
    async : false,
    beforeSend : function(){/*loading*/},
    dataType : 'json',
    success : function(result) {
      createList(result);
      filterSelection("all");
      $.getScript("scripts/tilt.jquery.min.js");
    }
  });
});


// Toggles what's being displayed in the hero area
function showDetail() {
  $('.hero-content').toggleClass("hide");
  $('.about-me').toggleClass("hide");
}

function createList(listArray) {

  var filteredList = listArray;

  var buffer = "";

  $.each(filteredList, function(index, val){

    buffer += '<a href="';
    buffer += val.link;
    buffer += '" target="_blank" class="portfolio-grid__thumbnail';
    for(var i=0; i < val.tags.length; i++){
      buffer += ' ' + val.tags[i];
    }
    buffer += '" data-tilt data-tilt-maxTilt="35" data-tilt-perspective="2000" data-tilt-glare="true" data-tilt-maxGlare=".5" data-tilt-speed="1200" data-tilt-scale="1.05"><img src="img/';
    buffer += val.thumbnail;
    buffer += '" alt=""></a>';
  });
  // Adds table generated from JSON objects to DOM
  $('.portfolio-grid').html(buffer);
}

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
