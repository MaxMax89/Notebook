<? $statuses = $db->getData("SELECT * FROM `statuses`"); ?>


<div class="popups_inner">
    <a class="popup_form_close" id="popup_form_close" href="http://crud-project/"></a>
    <div class="popup">
        <form class="popups_form" action="">
            <a class="popups_form_close_icon" id="popup_form_close" href="http://crud-project/">x</a>
            <input type="text" name="name" value="">
            <input type="text" name="phone">
            <input type="text" name="email">
            <input type="text" name="note">
            <select class="" id="select" name="dfd">
				<? foreach ($statuses as $status): ?>
                    <option value="<?= $status['status'] ?>" selected><?= $status['status'] ?></option>
				<? endforeach; ?>
            </select>
            <input class="popups_form_button" type="submit" name="note">
        </form>
    </div>
</div>
