$(function() {
  $.ajax({
    type : 'GET',
    url : './portfolio.json',
    async : false,
    beforeSend : function(){/*loading*/},
    dataType : 'json',
    success : function(result) {
      createList(result);
      filterSelection("all")
    }
  });
});

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
    buffer += '"><img src="img/';
    buffer += val.thumbnail;
    buffer += '" alt=""></a>';
  });
  // Adds table generated from JSON objects to DOM
  $('.portfolio-grid').html(buffer);
}

function showDetail() {
  $('.hero-content').toggleClass("hide");
  $('.about-me').toggleClass("hide");
}
