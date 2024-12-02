$(function () {
    let linkRemove = '.table_notes_btn_remove';
    let btnRemove = '.btn_remove_confirm';
    let btnCansel = '.btn_remove_cancel';
    let btnEdit = '.btn_edit';


    $(document).on('click', linkRemove, openPopupRemove);
    $(document).on('click', btnRemove, removeUser);
    $(document).on('click', btnEdit, editUser);
    $(document).on('click', btnCansel, openPopupRemove);


    //////// FUNCTIONS //////////


    function openPopupRemove() {
        let id = $(this).attr('id');
        $('.btn_remove_confirm').attr('id', id);
        $('.popup_remove_confirm').toggleClass('active');
    }

    function removeUser() {
        let user = $(this).attr('id');
        $('table').find('tr#' + user).remove();
        $.get("ajax/handler.php?cmd=rmuser&user=" + user);
        $('.popup_remove_confirm').toggleClass('active');
    }

    function editUser() {
        let id = $(this).attr('id');
        $('.btn_form').attr('name', "update_user");
        $.get("ajax/handler.php?cmd=edit_user&user=" + id);
        $.ajax({
                url: 'ajax/handler.php',
                success: function (result) {
                    let users = JSON.parse(result);
                    users.some(user => {
                        if (user['id'] === id) {
                            $('input[name = "id"]').val(user['id']);
                            $('input[name = "name"]').val(user['name']);
                            $('input[name = "phone"]').val(user['phone']);
                            $('input[name = "email"]').val(user['email']);
                            $('input[name = "status"]').val(user['status']);
                            $('textarea[name = "note"]').val(user['note']);

                        }
                    })
                }
            }
        )
    }
});