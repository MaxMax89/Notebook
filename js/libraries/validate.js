function validateForm(){
$('form').validate({
    rules: {
        phone: {
            required: true,
            maxlength: 50
        },
        name: {
            required: true,
            maxlength: 50
        },
        email: {
            required: true,
            maxlength: 50,
            email: true
        },

        id_status: {
            required: true,
            maxlength: 50
        },
        note: {
            required: true,
            maxlength: 130
        }
    },
    messages: {
        name: {
            required: "Поле обязательно для заполнения",
            maxlength: "Максимум {0} символов"
        },
        email: {
            required: "Поле обязательно для заполнения",
            maxlength: "Максимум {0} символов",
            email: "неверный адрес эллектронной почты"
        },
        phone: {
            required: "Поле обязательно для заполнения",
            maxlength: "Максимум {0} символов",
            checkMask: "Введен не верный номер телефона"
        },
        id_status: {
            required: "Поле обязательно для заполнения",
            maxlength: "Максимум {0} символов"
        },
        note: {
            required: "Поле обязательно для заполнения",
            maxlength: "Максимум {0} символов"
        }
    }

});
}


