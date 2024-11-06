$(function () {

    let btnEdit = '.btn_edit';
    let btnRemove = '.btn_remove';
    let btnAdd = '.popups_form_button';
    let form = '.popups_form';


    $(document).on('click', btnRemove, removeUser);
    //$(document).on('click', btnAdd, formSend)





    //////// FUNCTIONS //////////



    function removeUser() {
        let user = $(this).attr('id');
        $("tr#" + user).remove();
        $.get("ajax/handler.php?cmd=rmuser&user=" + user);
        console.log(user);

    }
});