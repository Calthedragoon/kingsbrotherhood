var mymessage = "Thank you for submitting! Please continue to enjoy the rest of the site."

/*To Show and Hide Picture Text*/
$(document).ready(function() {
  $('.cardtext').hide();

  $("#pictext1").click(function(){
    $("#cardtext1").toggle();
  });

  $("#pictext2").click(function(){
    $("#cardtext2").toggle();
  });

  $("#pictext3").click(function(){
    $("#cardtext3").toggle();
  });
  
/*Submit Input Alert Message*/
  $('#subbutt').click(function(){
    alert(mymessage);
  });
});
