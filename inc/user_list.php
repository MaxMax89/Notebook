<? include "data.php"; ?>

<section class="user_list_block">

	<?include "inc/popaps.php";?>

	<div class="user_list_body">
        <div class="user_list_head">
            <a class="user_list_button_add" href="#">ADD</a>
        </div>
		<table class="user_list_table">
            <tr class="user_list_tr_title">
                <? foreach ($tableTitles as $title): ?>
                <td><?=$title?></td>
                <? endforeach; ?>
                <td></td>
            </tr>
			<? foreach($users as $user): ?>
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








