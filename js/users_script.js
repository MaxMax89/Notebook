$(function () {

    let btnRemove = '.btn_remove';
    let btnEdit = '.btn_edit';



    $(document).on('click', btnRemove, removeUser);
    $(document).on('click', btnEdit, editUser);



    //////// FUNCTIONS //////////




    function removeUser() {
        let user = $(this).attr('id');
        $("tr#" + user).remove();
        $.get("ajax/handler.php?cmd=rmuser&user=" + user);
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
                            if(user['id'] === id){
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