$(function () {
    "use strict";
    var username;
    var password;
    var code;
    var error_on_name;
    var error_on_code;


    $("#btnLogin").click(function (event) {
        event.preventDefault();
        username = $('#loginUsername').val();
        password = $('#loginPassword').val();
        const xhl = new XMLHttpRequest();
        xhl.open('POST', '/signin');
        xhl.onload = () =>{
            const data = JSON.parse(xhl.responseText);
            if (data.bool==1) {
                window.location.href='/manager';
            } else {
                $('#loginModal').modal('hide');
                $('#loginUsername').val("");
                $('#loginPassword').val("");
                setTimeout(function () {
                    $('.loginFailAlert').css("display", "block");
                }, 500);
                setTimeout(function () {
                    $('.loginFailAlert').css("display", "none");
                }, 3500);
            };
        }

        const data = new FormData();
        data.append('username',username);
        data.append('password',password);
        xhl.send(data);

    });

    $("body").on('click','#btnSignUp',function (event) {
      event.preventDefault();
      username = $('#signUpUsername').val();
      password = $('#signUpPassword').val();
      code = $('#signUpCode').val();
      const xhl3 = new XMLHttpRequest();
      xhl3.open('POST', '/signup');

      xhl3.onload = () =>{
        const data = JSON.parse(xhl3.responseText);
        error_on_name = data.name_bool;
        error_on_code = data.code_bool;
        // todo chack th code first
        // todo chack the name then
        // if both error_on_code and error_on_name == false that means successfully signup

        $('#signUpUsername').val("");
        $('#signUpEmail').val("");
        $('#signUpPassword').val("");
        $('#signUpModal').modal('hide');

        if (error_on_code == False && error_on_name== False){
                setTimeout(function () {
                    $('.signUpSuccessAlert').css("display", "block");
                }, 500);
                setTimeout(function () {
                    $('.signUpSuccessAlert').css("display", "none");
                }, 3500);
            }
          // if (error_on_code == False && error_on_name== False)  


      };

      const data = new FormData();
      data.append('username',username);
      data.append('password',password);
      data.append('code',code);
      xhl3.send(data);



        $('#signUpUsername').val("");
        $('#signUpEmail').val("");
        $('#signUpPassword').val("");
        $('#signUpModal').modal('hide');

        setTimeout(function () {
            $('.signUpSuccessAlert').css("display", "block");
        }, 500);
        setTimeout(function () {
            $('.signUpSuccessAlert').css("display", "none");
        }, 3500);
    });



    // $(document).ready(function () {
    // $('#loggedIn').load('manager.html .managerMainWrapper');
    // $('#main-wrapper').hide();
    // $('#loginModal').modal("hide");
    // window.location.href='manager.html';
    // });
});
