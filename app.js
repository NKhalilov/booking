$(".calendar").hide();
$("#reg-form").hide();
    $(document).ready(function(){
      $("form a").click(function (ev) {
          ev.preventDefault();
    //       if ($(this).attr("id") == "signing") {
    //         $("#reg-form").hide();
    //       $(".calendar").show();
    //   }
        if ($(this).attr("id") == "signup") {
            $("#login-form").hide();
            $("#reg-form").show();
        }
        if ($(this).attr("id") == "logining") {
            $("#reg-form").hide();
            $("#login-form").show();
          }
        
    });
});