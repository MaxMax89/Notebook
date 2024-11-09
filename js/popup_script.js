$(function () {


    $(document).on("click", ".user_list_button_add", openForm);
    $(document).on("click", "#popup_form_close", closeForm);


    function closeForm() {
        $('.popups_inner').removeClass('active');
    }

    function openForm() {
        $('.popups_inner').addClass('active');
    }

});

/////// add masks for inputs form
jQuery(function ($) {
    $(".input_phone").mask("+7(999)-999-9999");
});