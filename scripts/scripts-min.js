function createList(t){var o=t,a="";$.each(o,(function(t,o){a+='<a href="',a+=o.link,a+='" target="_blank" class="portfolio-grid__thumbnail';for(var e=0;e<o.tags.length;e++)a+=" "+o.tags[e];a+='"><img src="img/',a+=o.thumbnail,a+='" alt=""></a>'})),$(".portfolio-grid").html(a)}function showDetail(){$(".hero-content").toggleClass("hide"),$(".about-me").toggleClass("hide")}$((function(){$.ajax({type:"GET",url:"./portfolio.json",async:!1,beforeSend:function(){},dataType:"json",success:function(t){createList(t),filterSelection("all")}})}));