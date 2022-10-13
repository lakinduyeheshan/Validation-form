$(function(){
    $("form[name='registration']").validate({
        rules: {
            name:"required",

            email: {
                required : true,
                email: true
            },

            password:{
                required : true,
                minlength : 5,
            },

            confirmpassword :{
                required: true,
                minlength :5,
                equalTo : "#password"
            }
        },

        messages:{

            name : "please enter your name",
            email : {
                required:"plese enter your email",
                email:" please enter a valid email address"
            },

            password : {
                required:"plese enter your password",
                email:" your password is not strong"
            },

            confirmpassword: {
                required:"plese reenter your password",
                email:"recheck and enter your password"
            }



        }



    });










});