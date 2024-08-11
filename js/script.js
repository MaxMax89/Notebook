$(function () {
    $(document).on("click", ".user_list_button_add", openForm);
    $(document).on("click", "#popup_form_close", closeForm);



    function closeForm() {
        $('.popups_inner').removeClass('active');
    }

    function openForm(){
        $('.popups_inner').addClass('active');
    }

});