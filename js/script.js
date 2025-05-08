$(function () {


    //////////////// LINKS ////////////////////
    let btnRemove           = '.btn_delete_confirm';
    let linkRemove          = '.table_notes_btn_remove';
    let btnCansel           = '#popup_delete_close';
    let linkCloseAddForm    = '#link_add_form_close';
    let linkCloseUpdateForm = '#link_update_form_close';
    let btnAdd              = '.user_list_button_add';
    let btnUpdate           = '.btn_update';
    let ajaxUrl             = 'ajax/handler.php';

    //////////////// FORMS WRAPPERS ////////////////
    let addFormBody         = '.notebook_form_body_add';
    let updateFormBody      = '.notebook_form_body_update';
    let formContainer       = '.notebook_form_container';

    //////////////// FORMS ////////////////
    let formUpdateUser      = '#notebook_form_update';
    let formAddUser         = '#notebook_form_add';


    //////////// USERS CONTROLLER ////////////
    $(document).on('submit', formUpdateUser, updateUser);
    $(document).on('click',  btnRemove, deleteUser);
    $(document).on('submit', formAddUser, addUser);

    //////////// SWITCH ADD FORM ////////////
    $(document).on("click", btnAdd, openAddForm);
    $(document).on("click", linkCloseAddForm, closeAddForm);

    //////////// SWITCH UPDATE FORM ////////////
    $(document).on("click", btnUpdate, openUpdateForm);
    $(document).on('click', linkCloseUpdateForm, closeUpdateForm);

    //////////// SWITCH DELETE CONFIRM POPUP ////////////
    $(document).on('click', linkRemove, openPopupDelete);
    $(document).on('click', btnCansel, closePopupDelete);


    $(document).ready(() => {
        let cmdGetUsersData = APP_AJAX(ajaxUrl, 'cmd=get_data_tpl');
        cmdGetUsersData.done(renderTableNotes)
    });




    ////////////// FUNCTIONS //////////////
    function renderTableNotes(data) {
        let tableNotes = APP_TEMPLATES.getTableTPL(data);
        $('table').remove();
        $('.container').append(tableNotes);
    }


    function APP_AJAX(ajaxUrl, dataToServer) {
        return $.ajax({
            url: ajaxUrl,
            method: 'post',
            dataType: 'json',
            data: dataToServer,
        });
    }

    function addUser() {
        let formData = $(this).serialize();
        let cmd = 'add_user';
        let dataToServer = formData + `&cmd=${cmd}`;
        let cmdAdd = APP_AJAX(ajaxUrl, dataToServer);
        cmdAdd.done(renderTableNotes);
        closeForm(addFormBody, formContainer)
    }

    function deleteUser() {
        let id = $(this).attr('id');
        let cmd = 'delete_user';
        let dataToServer = `cmd=${cmd}&id=${id}`;
        let cmdDelete = APP_AJAX(ajaxUrl, dataToServer);
        cmdDelete.done(renderTableNotes);
        closePopupDelete();
    }

    function updateUser() {
        let formData = $(this).serialize();
        let cmd = 'update_user';
        let dataToServer = formData + `&cmd=${cmd}`;
        let cmdUpdate = APP_AJAX(ajaxUrl, dataToServer);
        cmdUpdate.done(renderTableNotes)
        closeForm(updateFormBody, formContainer);
    }

    function closePopupDelete() {
        $('.popup_delete').remove();
    }

    function openPopupDelete() {
        let popupDelete = APP_TEMPLATES.getPopupDelete;
        let id = $(this).parents('tr').attr('id');
        let popupWrapper = '.popup_delete';
        $('body').prepend('<div class="popup_delete"></div>');
        $(popupWrapper).html(popupDelete);
        setTimeout(() => {
            $('.btn_delete_confirm').attr('id', id);
        }, 100);
    }

    function closeUpdateForm() {
        closeForm(updateFormBody, formContainer);
    }

    function openUpdateForm() {
        let id = $(this).parents('tr').attr('id');
        let cmd = 'open_update_form';
        let dataToServer = `cmd=${cmd}&id=${id}`;
        let cmdOpenUpdateForm = APP_AJAX(ajaxUrl, dataToServer);
        cmdOpenUpdateForm.done((data) => {
            let statuses = data['statuses'];
            let user = data['user'][0];
            let form = APP_TEMPLATES.getFormUpdate(user, statuses);
            openForm(updateFormBody, form);
        });
    }

    function closeAddForm() {
        closeForm(addFormBody, formContainer);
    }

    function openAddForm() {
        let dataToServer = 'cmd=open_add_form';
        let cmdOpenAddForm = APP_AJAX(ajaxUrl, dataToServer);
        cmdOpenAddForm.done((data) => {
            let statuses = data['statuses'];
            let form = APP_TEMPLATES.getFormAdd(statuses);
            openForm(addFormBody, form);
        });


    }

    function openForm(formBody, form) {
        $('.block_form').html(form);
        setTimeout(() => {
            $(formBody).toggleClass('active');
        }, 50);
        $('html').css('overflow-y', 'hidden');
        setTimeout(() => {
            validateForm();
            setMask();
        }, 50);
    }

    function closeForm(formBody, formContainer) {
        $(formBody).toggleClass('active');
        setTimeout(() => {
            $(formContainer).remove();
        }, 100);
        $('html').css('overflow-y', 'visible');
    }

    function setMask() {
        jQuery(function ($) {
            $('[name = "phone"]').mask("+7(999)-999-9999");
        });
    }

});



