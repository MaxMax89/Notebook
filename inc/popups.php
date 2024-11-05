

<? $statuses = $usersController->getStatuses(); ?>


<div class="popups_inner">
    <a class="popup_form_close" id="popup_form_close" href="/"></a>
    <div class="popup">
        <form class="popups_form" action="../index.php" method="post">
            <a class="popups_form_close_icon" id="popup_form_close" href="/">x</a>
            <input type="text" name="name" placeholder="name" required="Поле не должно быть пустым" max="20">
            <input type="text" name="phone" placeholder="phone" required="Поле не должно быть пустым" max="20">
            <input type="email" name="email" placeholder="email" required="Поле не должно быть пустым" max="20">
            <textarea type="text" name="note" placeholder="note" required="Поле не должно быть пустым" max="130"></textarea>
            <select class="" id="select" name="id_status">
				<? foreach ($statuses as $status): ?>
                    <option value="<?= $status['id_status'] ?>" selected><?= $status['status'] ?></option>
				<? endforeach; ?>
            </select>
            <input class="popups_form_button" type="submit" name="get_user" value="Отправить">
        </form>
    </div>
</div>



<? if(isset($_POST['get_user'])){
	$usersController->addUser($_POST);
}?>


