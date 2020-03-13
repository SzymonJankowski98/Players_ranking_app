$(".dropdown-menu a").click(function(){

  $(this).parents(".btn-group").find('.selection').text($(this).text());
  $(this).parents(".btn-group").find('.selection').val($(this).text());

});