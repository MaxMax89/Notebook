$(function () {

    let btnFormDeleteConfirm    = '.js_btn_form_delete_confirm';
    let btnFormDeleteCansel     = '.js_btn_form_delete_cancel';
    let btnItemDelete           = '.js_btn_item_delete';
    let btnItemUpdate           = '.js_btn_item_update';
    let btnItemAdd              = '.js_btn_item_add';
    let btnFormUpdateClose      = '.js_btn_form_update_close';
    let btnFormAddClose         = '.js_btn_form_add_close';

    let dataItemDeleteId        = 'data-item-delete-id';
    let dataItemUpdateId        = 'data-item-update-id';

    let formContainer           = '.js_form_container';
    let formWrapper             = '.js_form_wrapper';
    let formDelete              = '.js_form_delete';
    let formUpdate              = '.js_form_update';
    let formAdd                 = '.js_form_add';

    let ajaxUrl                 = 'ajax/handler.php';
    let appContainer            = '.js_app_container'


    $(document).on('submit', formUpdate, updateUser);
    $(document).on('click', btnFormDeleteConfirm, deleteUser);
    $(document).on('submit', formAdd, addUser);

    $(document).on("click", btnItemAdd, openAddForm);
    $(document).on("click", btnFormAddClose, closeForm);

    $(document).on("click", btnItemUpdate, openUpdateForm);
    $(document).on('click', btnFormUpdateClose, closeForm);

    $(document).on('click', btnItemDelete, openFormDelete);
    $(document).on('click', btnFormDeleteCansel, closePopupDelete);

    $(document).ready(() => {
        let cmdGetUsersData = APP_AJAX(ajaxUrl, 'cmd=get_data_tpl');
        cmdGetUsersData.done(renderTableNotes);
    });



    ////////////// FUNCTIONS //////////////

    function renderTableNotes(data) {
        let tableNotes = APP_TEMPLATES.getTplTable(data);
        $('table').remove();
        $(appContainer).append(tableNotes);
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
        closeForm()
    }

    function deleteUser() {
        let id = $(this).attr(dataItemDeleteId);
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
        closeForm();
    }
    
    function closePopupDelete() {
        $(formDelete).remove();
    }

    function openFormDelete() {
        let popupDelete = APP_TEMPLATES.getTplFormDelete;
        let id = $(this).attr(dataItemDeleteId);
        $('.block_form').html(popupDelete);
        console.log(id)
        $(btnFormDeleteConfirm).attr(dataItemDeleteId, id);

    }

    function initForm(){
            validateForm();
            setMask();
    }

    function openUpdateForm() {
        let id = $(this).attr(dataItemUpdateId);
        let cmd = 'open_update_form';
        let dataToServer = `cmd=${cmd}&id=${id}`;
        let cmdOpenUpdateForm = APP_AJAX(ajaxUrl, dataToServer);
        cmdOpenUpdateForm.done((data) => {
            let statuses = data['statuses'];
            let user = data['user'][0];
            let formTpl = APP_TEMPLATES.getTplFormUpdate(user, statuses);
            openForm(formTpl);
            initForm();
        });
    }

    function openAddForm() {
        let dataToServer = 'cmd=open_add_form';
        let cmdOpenAddForm = APP_AJAX(ajaxUrl, dataToServer);
        cmdOpenAddForm.done((data) => {
            let statuses = data['statuses'];
            let formTpl = APP_TEMPLATES.getTplFormAdd(statuses);
            openForm(formTpl);
            initForm();
        });

    }

    function openForm(formTpl) {
        $(formContainer).html(formTpl);
        setTimeout(() => { $(formWrapper).toggleClass('active'); }, 50);
        $('html').css('overflow-y', 'hidden');

    }

    function closeForm() {
        $(formWrapper).toggleClass('active');
        setTimeout(() => {
            $(formContainer).html('');
        }, 200);
        $('html').css('overflow-y', 'visible');
    }

    function setMask() {
        jQuery(function ($) {
            $('[name = "phone"]').mask("+7(999)-999-9999");
        });
    }

});



