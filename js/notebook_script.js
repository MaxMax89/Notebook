$(function () {

    let linkImg = 'https://shapka-youtube.ru/wp-content/uploads/2024/08/kartinka-na-avatarki-dlya-geymerov-risunok-krutogo-geymera.jpg';

    //////////////// LINKS ////////////////////
    let btnRemove = '.btn_delete_confirm';
    let linkRemove = '.table_notes_btn_remove';
    let btnCansel = '#popup_delete_close';
    let linkCloseAddForm = '#link_add_form_close';
    let linkCloseUpdateForm = '#link_update_form_close';
    let btnAdd = '.user_list_button_add';
    let btnUpdate = '.btn_update';
    let ajaxUrl = 'ajax/handler.php';

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
    $(document).on('click', linkRemove, openPopupDelete);
    $(document).on('click', btnCansel, closePopupDelete);


    ////////////// FUNCTIONS //////////////

    function renderUsersTrs(data) {
        let trHtml = '';

        data.forEach((item) => {
            trHtml += `<tr id="${item.id}">
        <td>
            <div class="d-flex align-items-center">
                <img src="${linkImg}" alt="" style="width: 45px; height: 45px" class="rounded-circle">
                    <div class="ms-3">
                        <p id="name" class="fw-bold mb-1 table_notes_td_name">${item.name}</p>
                        <p id="email" class="text-muted mb-0">${item.email}</p>
                    </div>
            </div>
        </td>
        <td>
            <p id="note" class="fw-normal mb-1 table_notes_td_note">${item.note}</p>
        </td>
        <td>
            <span id="status" class="badge rounded-pill d-inline">${item.status}</span>
        </td>
        <td id="phone" class="table_notes_td_phone">
            ${item.phone}
        </td>
        <td class="user_list_td_action">
            <div class="user_list_linc_container">
                <a class=" btn btn-link btn-sm btn-rounded btn_update" id="${item.id}">
                    <img src="../img/update_user_icon.svg" alt="img">
                </a>
                <a type="submit" class="btn btn-link btn-sm btn-rounded table_notes_btn_remove"
                   id="<${item.email}">
                    <img src="../img/delete_user_icon.svg" class="table_notes_delete_icon" alt="">
                </a>
            </div>
        </td>
    </tr>`;
        });
        $('tbody').html(trHtml);
        trHtml = '';
    }


    function addUser() {
        let formData = $(this).serialize();
        $.ajax({
            url: ajaxUrl,
            method: 'post',
            dataType: 'json',
            data: formData,
            success: function (data) {
                renderUsersTrs(data);
            }
        });
        closeForm(addFormBody, formContainer)

    }

    function removeUser() {
        let id = $(this).attr('id');
        $.post(ajaxUrl, {cmd: 'delete_user', id: id}, function (data) {
            let result = JSON.parse(data);
            renderUsersTrs(result);
        });
        closePopupDelete();
    }

    function updateUser() {
        let formData = $(this).serialize();
        $.ajax({
            url: ajaxUrl,
            method: 'post',
            dataType: 'json',
            data: formData,
            success: function (data) {
                renderUsersTrs(data, 'tbody');
            }
        });
        closeForm(updateFormBody, formContainer);
    }

    function closePopupDelete() {
        $('.popup_delete').remove();
    }

    function openPopupDelete() {
        let id = $(this).parents('tr').attr('id');
        $('body').prepend('<div class="popup_delete"></div>');
        $('.popup_delete').load('templates/popup_delete.php');
        setTimeout(() => {
            $('.btn_delete_confirm').attr('id', id);
        }, 100);

    }

    function closeUpdateForm() {
        closeForm(updateFormBody, formContainer);
    }

    function openUpdateForm() {
        let id = $(this).parents('tr').attr('id');

        $.post(ajaxUrl, {id: id, cmd: 'open_update_form'}, function (data) {
            let result = JSON.parse(data);
            let user = result['user'][0];
            let form = result['form'];
            let statuses = result['statuses'];

            openForm(updateFormBody, form);

            setFormValue(statuses, user);

            setTimeout(() => {

                validateForm();
                setMask();
            }, 50);
        });
    }


    function closeAddForm() {
        closeForm(addFormBody, formContainer);
    }

    function openAddForm() {
        $.post(ajaxUrl, {cmd: 'open_add_form'}, function (data) {

            let result = JSON.parse(data);
            let statuses = result['statuses'];
            let form = result['form'];

            openForm(addFormBody, form);
            setFormValue(statuses);
        });

        setTimeout(() => {
            validateForm();
            setMask();
        }, 50);
    }


    function openForm(formBody, form) {
        $('.block_form').html(form);
        setTimeout(() => {
            $(formBody).toggleClass('active');
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

    function setFormValue(statuses, user) {
        let options = "<option selected='true' disabled='disabled'>выберете статус</option>";
        if (user !== undefined) {
            $.each(user, function (key, value) {
                $(`[name = "${key}"]`).val(value);
            });
            setTimeout(() => {
                $(`select option[value=${user['id_status']}]`).prop('selected', true);
            }, 100);
        }
        $.each(statuses, function (idStatus, status) {
            options += `<option value="${idStatus}">${status}</option>`;
            $('form').find('select').html(options);
        });
    }


    function setMask() {
        jQuery(function ($) {
            $('[name = "phone"]').mask("+7(999)-999-9999");
        });
    }


})
;



