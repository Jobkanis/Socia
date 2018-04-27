$('.loginswap').click(function() {
    $('.formular').removeClass('register');
    $('.formular').addClass('login');
});

$('.registerswap').click(function() {
    $('.formular').removeClass('login');
    $('.formular').addClass('register');
});

$('.registerbutton').click(function() {
    var name = $('.Rname input').val();
    var surname = $('.Rsurname input').val();
    var email = $('.Remail input').val();
    var password = $('.Rpassword input').val();
    var passwordR = $('.RpasswordR input').val();
    if (name != "" && surname != "" && email != "" && password != "" && passwordR != "") {
        if (password == passwordR) {
            var RegisterObject = {
                name,
                surname,
                email,
                password,
                passwordR
            }
            RegisterObject.name = name;
            RegisterObject.surname = surname;
            RegisterObject.email = email;
            RegisterObject.password = password;
            RegisterObject.passwordR = passwordR;
            $.post('register', RegisterObject, function(result) {
                console.log(result);
            })
        } else {
            console.log('Your password is not the same as the repeated password!');
        }
    } else {
        console.log("Please fill in all forms to register!");
    }
})

$('.loginbutton').click(function() {
    var email = $('.Lemail input').val();
    var password = $('.Lpassword input').val();

    if (email != "" && password != "") {
        var loginObject = {
            email,
            password
        }
        loginObject.email = email;
        loginObject.password = password;
        $.post('login', loginObject, function(result) {
            console.log(result);
        })
    } else {
        console.log("Please fill in all forms to log in!");
    }


})