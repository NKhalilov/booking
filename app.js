$(".calendar").hide();
$(".login").hide();
// $("form").click(".btn-sign", function (e) {
//     e.preventDefault(); //To not refresh the page
//     $("#reg-form").remove(); //Remove the form
//     $(".calendar").show();
// });
// $("a").click(".href", function (ev) {
//     ev.preventDefault();
//     $("#reg-form").remove();
//     $(".login").show();
    
// });


    $(document).ready(function(){
      $("form a").click(function (ev) {
          ev.preventDefault();
          if ($(this).attr("id") == "signing") {
              $("#reg-form").hide();
          $(".calendar").show();
      }
          if ($(this).attr("id") == "logining") {
              $("#reg-form").hide();
          $(".login").show();
          }
          if ($(this).attr("id") == "signup") {
              $("#login-form").remove();
              $("#reg-form").show();
          }
    });
});