if(localStorage.getItem('popState') != 'shown'){
    $("#popup").delay(2000).fadeIn();
    localStorage.setItem('popState','shown')
}

$('#close').click(function(){
    $('#popup').fadeOut();
  });