$(document).ready(function (){
  
  $(".fa-search").on("click",function(){
    
    $(".menu").toggleClass("up");
    
  });
  
  
  $(".searchBox").on("keyup", function(e) {
    var code = e.keyCode || e.which;
    var text;
    if (code == 13) {
      
      text = $(this).val();
      var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + text + "&format=json&callback=?";
      
      $.getJSON(api,function(x){
        
        var titles = x[1];
        var link = x[3];
        var descriptions = x[2];
        var html = "";
        
        for(var i = 0; i<titles.length; i++){
          
          html += "<a class='linkTo' href='" + link[i] + "' target='blank'> <div class = 'wikiResults' ><h2>" + titles[i] + "</h2><p>" + descriptions[i] + "</p></div></a>";
          
        }
        
        $("#result").hide().html(html).fadeIn(250);
        
        
      });
      
    }
    else {
       return 1;  
    }
  });
  
  
  
  
  
});