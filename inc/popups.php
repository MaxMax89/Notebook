


<div class="popups_inner">
    <a class="popup_form_close" id="popup_form_close" href="/"></a>
    <div class="popup">
        <form class="popups_form" action="../index.php" method="post">
            <a class="popups_form_close_icon" id="popup_form_close" href="/">x</a>
            <input type="text" name="name" placeholder="name" required="Поле не должно быть пустым">
            <input class="input_phone" type="tel" name="phone" placeholder="phone">
            <input type="email" name="email" placeholder="email">
            <textarea type="text" name="note" placeholder="note" "></textarea>
            <select class="" id="select" name="id_status">
				<? foreach ($statuses as $status): ?>
                    <option value="<?= $status['id_status'] ?>" selected><?= $status['status'] ?></option>
				<? endforeach; ?>
            </select>
            <input class="popups_form_button" type="submit" name="get_user" value="Отправить">
        </form>
    </div>
</div>


<? if (isset($_POST['get_user'])) {
	$usersController->addUser($_POST);
	header("location: index.php");
} ?>


