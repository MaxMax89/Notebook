
$('.popups_form').validate({
    rules: {
        name:{
            required: true,
            maxlength: 20
        },
        email:{
            required: true,
            maxlength: 20,
            email: true
        },
        phone:{
            required: true,
            maxlength: 20,
        },
        id_status:{
            required: true,
            maxlength: 20
        },
        note:{
            required: true,
            maxlength: 130
        }
    },



});