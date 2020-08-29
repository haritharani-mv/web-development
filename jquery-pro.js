$(document).ready(function(){
  $(".btn-1").click(function(){
    $("h1").text("this is button 1");
  });
});
$(document).ready(function(){
  $(".btn-2").click(function(){
    $("h1").html("<i>this is button 2<i>");
  });
});
$(document).ready(function(){
  $(".btn-3").click(function(){
    $("input").val("paris");  
  });
});
$(document).ready(function(){
  $(".btn-4").click(function(){
    $("a").attr({
        "href" : "http://www.bing.com",
        "title" : "going to bing site"
    });
  });
});

