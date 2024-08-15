<? include "classes/Users.php"; ?>

<? ?>
<? $usersData = Users::getObject(); ?>
<? $tableFields = ['name', 'phone', 'email', 'status', 'note'] ?>
<section class="user_list_block">

	<? include "inc/popups.php"; ?>

    <div class="user_list_body">
        <div class="user_list_head">
            <a class="user_list_button_add" href="#">ADD</a>
        </div>
        <table class="user_list_table">
            <tr class="user_list_tr_title">
				<? foreach ($tableFields as $fields): ?>
                    <td><?= $fields ?></td>
				<? endforeach; ?>
                <td></td>
            </tr>
			<? foreach ($usersData as $user): ?>
                <tr>
					<? foreach ($tableFields as $fields): ?>
                        <td><?= $user->$fields; ?></td>
					<? endforeach; ?>
                    <td class="user_list_td_edit"><a class="user_list_button_edit" id="<?= $user->id; ?>"
                                                     href="#">edit</a>
                        <a class="user_list_button_dell" id="<?= $user->id; ?>" href="#">delete</a>
                    </td>
                </tr>
			<? endforeach; ?>
        </table>
    </div>

	<? echo '<pre>' ?>
	<? var_dump($usersData); ?>
	<? echo '<pre>' ?>


</section>








