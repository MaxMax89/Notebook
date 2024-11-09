$(function () {

    let btnRemove = '.btn_remove';


    $(document).on('click', btnRemove, removeUser);


    //////// FUNCTIONS //////////


    function removeUser() {
        let user = $(this).attr('id');
        $("tr#" + user).remove();
        $.get("ajax/handler.php?cmd=rmuser&user=" + user);
        console.log(user);

    }
});