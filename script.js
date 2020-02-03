$(function() {
  var hre = $('.contact').offset().top;

  $('.contact-btn').click(
    function() {
      if($(this).closest(".submit-button").length){
        return;
      }else{
      $("html,body").animate({scrollTop:hre-40},700);
    }}
  );

    $('.nav-item').click( 
      function() {
        var hc = $(this).attr('href');
        console.log(hc);
        $("html,body").animate({scrollTop:$(hc).offset().top-80},700);
      }
    )

});