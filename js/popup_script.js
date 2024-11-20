$(function () {


    $(document).on("click", ".user_list_button_add", openForm);
    $(document).on("click", "#popup_form_close", closeForm);
    $(document).on("click", ".btn_edit", openForm)


    function closeForm() {
        $('.notebook_form').removeClass('active');
    }

    function openForm() {
        $('.notebook_form').toggleClass('active');
    }

});

/////// add masks for inputs form
jQuery(function ($) {
    $(".input_phone").mask("+7(999)-999-9999");
});