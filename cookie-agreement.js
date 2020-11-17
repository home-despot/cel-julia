if(localStorage.getItem('cookieSeen') != 'shown'){
  $(".cookie-banner").delay(100).fadeIn();
  localStorage.setItem('cookieSeen','shown')
}

$('.close').click(function(e) {
$('.cookie-banner').fadeOut(); 
});