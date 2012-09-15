//_gaq.push(['_setAccount', 'UA-27112300-1']);

$(document).ready(function() {
  
  $("input[name='radio']").change(function(){
    if ($("input[name='radio']:checked").val() == 'generate') {
      $('#imgurl').css("display", "none");      
    }
    else{
      $('#imgurl').css("display", "block");      
    }
    update_share_link();
  });

  $('#title, #url, #desc').keyup(function(){
    update_share_link();
  });
});

function update_share_link(){
  var share_url = "http://www.facebook.com/sharer.php?",
      title = $("#title").val(),
      link_url = $("#url").val(),
      desc = $("#desc").val(),
      img_url, url;
  if ($('#imgurl').is(':visible')) {
    img_url = $("#imgurl").val();
  }
  else {
    img_url = encodeURIComponent("immediatenet.com/t/l?Size=1024x768&URL=" + link_url);
  }
  var url = share_url + "s= 100&amp;p[title]=" + title + "&amp;p[url]=" + link_url + "&amp;p[images][0]=" + img_url + "&amp;p[summary]=" + desc;  
  $('#process-button').html('<a href="' + url + '" target="_blank" id="fblink">Share Link on Facebook</a>');
}