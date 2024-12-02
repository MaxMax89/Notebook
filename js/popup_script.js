$(function () {

    let linkCloseForm = '#popup_form_close';
    let btnAdd = '.user_list_button_add';
    let btnEdit = '.btn_edit';


    $(document).on("click", btnAdd, openForm);
    $(document).on("click", linkCloseForm, closeForm);
    $(document).on("click", btnEdit , openForm)


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