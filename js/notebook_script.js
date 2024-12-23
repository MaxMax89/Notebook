$(function () {

    //////////////// LINKS ////////////////////
    let btnRemove = '.btn_remove_confirm';
    let linkRemove = '.table_notes_btn_remove';
    let btnCansel = '.btn_remove_cancel';
    let linkCloseAddForm = '#link_add_form_close';
    let linkCloseUpdateForm = '#link_update_form_close';
    let btnAdd = '.user_list_button_add';
    let btnUpdate = '.btn_update';

    //////////////// FORMS WRAPPERS ////////////////
    let addFormBody = '.notebook_form_body_add';
    let updateFormBody = '.notebook_form_body_update';
    let formContainer = '.notebook_form_container';

    //////////////// FORMS ////////////////
    let formUpdateUser = '#notebook_form_update';
    let formAddUser = '#notebook_form_add';



    //////////// USERS CONTROLLER ////////////
    $(document).on('submit', formUpdateUser, updateUser);
    $(document).on('click', btnRemove, removeUser);
    $(document).on('submit', formAddUser, addUser);

    //////////// SWITCH ADD FORM ////////////
    $(document).on("click", btnAdd, openAddForm);
    $(document).on("click", linkCloseAddForm, closeAddForm);

    //////////// SWITCH UPDATE FORM ////////////
    $(document).on("click", btnUpdate, openUpdateForm);
    $(document).on('click', linkCloseUpdateForm, closeUpdateForm);

    //////////// SWITCH DELETE CONFIRM POPUP ////////////
    $(document).on('click', linkRemove, openPopupRemove);
    $(document).on('click', btnCansel, openPopupRemove);


    ////////////// FUNCTIONS //////////////
    function addUser() {
        $.ajax({
            url: 'ajax/handler.php',
            method: 'post',
            dataType: 'json',
            data: $('.notebook_form_add').serialize(),
            success: function (data) {
                let user = data[0];
                let trData = $('tbody').find('tr').html();
                $('table tbody').append('<tr>'+ trData +'</tr>');
                let trUser = $('table tbody tr').last();
                trUser.attr('id', user['id']);
                trUser.find('.btn_update').attr('id', user['id']);
                $.each(user, function (key, value){
                    trUser.find('#' +key).html(value);
                });
                closeForm(addFormBody, formContainer);
            }
        });

    }

    function getTRUser(){

    }

    function removeUser() {
        let id = $(this).attr('id');
        $('table').find('tr#' + id).remove();
        $.post('ajax/handler.php', {cmd: 'delete_user', id: id});
        $('.popup_remove_confirm').toggleClass('active');
    }

    function updateUser() {
        let formData = $(this).serialize();
        $.ajax({
            url: 'ajax/handler.php',
            method: 'post',
            dataType: 'json',
            data: formData,
            success: function (data) {
                let tr = $('table tbody').find('#' + data[0]['id']);
                $.each(data[0], function (key, val){
                    tr.find('#' +key).html(val);
                })
            }
        })
        closeForm(updateFormBody, formContainer);
    }

    function openPopupRemove() {
        let id = $(this).parents('tr').attr('id');
        $('.btn_remove_confirm').attr('id', id);
        $('.popup_remove_confirm').toggleClass('active');
    }

    function closeUpdateForm() {
        closeForm(updateFormBody, formContainer);
    }

    function openUpdateForm() {
        let url = 'templates/forms/notebook_form_update.php';
        let id = $(this).parents('tr').attr('id');
        openForm(updateFormBody, url);
        $.ajax({
                url: 'ajax/handler.php',
                method: 'post',
                dataType: 'json',
                data: {id: id, cmd: 'open_update_form'},
                success: function (result) {
                    console.log(result);
                    let user = result[0];
                    $.each(user, function (key, value) {
                        $(`[name = "${key}"]`).val(value);
                    });
                }
            }
        )
    }

    function closeAddForm() {
        closeForm(addFormBody, formContainer);
    }

    function openAddForm() {
        let url = 'templates/forms/notebook_form_add.php';
        openForm(addFormBody, url);
    }


    function openForm(form, url) {
        $('.block_form').load(url);
        setTimeout(() => {
            $(form).toggleClass('active');
        }, 50);
        $('html').css('overflow-y', 'hidden');
    }

    function closeForm(formBody, formContainer) {
        $(formBody).toggleClass('active');
        setTimeout(() => {
            $(formContainer).remove();
        }, 100);
        $('html').css('overflow-y', 'visible');
    }






});



