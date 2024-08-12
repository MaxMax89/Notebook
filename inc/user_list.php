<? include "ajax/handler.php"; ?>


<?$users = new Users();
$usersData = $users->getUserData();
;?>

<section class="user_list_block">

	<?include "inc/popups.php";?>

	<div class="user_list_body">
        <div class="user_list_head">
            <a class="user_list_button_add" href="#">ADD</a>
        </div>
		<table class="user_list_table">
            <tr class="user_list_tr_title">
                <? foreach ($usersData as  $user): ?>
                <? foreach ($user as $title => $item): ?>
                <td><?=$title?></td>
                <? endforeach;?>
                <?break?>
                <? endforeach; ?>
                <td></td>
            </tr>
			<? foreach($usersData as $user): ?>
            <tr>
				<? foreach($user as $item): ?>
                <td><?=$item?></td>
				<? endforeach;?>
                <td class="user_list_td_edit"><a class="user_list_button_edit" id="<?=$user['id']?>" href="#">edit</a>
                    <a class="user_list_button_dell" id="<?=$user['id']?>" href="#">delete</a>
                </td>
            </tr>
			<? endforeach;?>
        </table>
	</div>



</section>








