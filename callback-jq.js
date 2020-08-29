$(document).ready(function(){
  $("h1").click(function(){
    $(".sample").slideToggle(1000,function(){
        alert("animation complete");
    });
  });
});
