<div class="block_form"></div>
<div class="container">
    <div class="d-grid gap-2 col-12 mx-auto user_list_add_wrapper">
        <button class="btn btn-primary user_list_button_add" type="button" data-mdb-ripple-init>ADD +</button>
    </div>
    <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
        <tr>
            <th>Name</th>
            <th>Note</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
		<? foreach ($DATA_TPL as $user): ?>
            <tr id="<?= $user['id'] ?>">
                <td>
                    <div class="d-flex align-items-center">
                        <img
                                src="https://shapka-youtube.ru/wp-content/uploads/2024/08/kartinka-na-avatarki-dlya-geymerov-risunok-krutogo-geymera.jpg"
                                alt=""
                                style="width: 45px; height: 45px"
                                class="rounded-circle"
                        >
                        <div class="ms-3">
                            <p id="name" class="fw-bold mb-1 table_notes_td_name"><?= $user['name'] ?></p>
                            <p id="email" class="text-muted mb-0"><?= $user['email'] ?></p>
                        </div>
                    </div>
                </td>
                <td>
                    <p id="note" class="fw-normal mb-1 table_notes_td_note"><?= $user['note'] ?></p>
                </td>
                <td>
                    <span id="status" class="badge rounded-pill d-inline"><?= $user['status'] ?></span>
                </td>
                <td id="phone" class="table_notes_td_phone"><?= $user['phone'] ?></td>
                <td class="user_list_td_action">
                    <div class="user_list_linc_container">
                        <a class=" btn btn-link btn-sm btn-rounded btn_update" id="<?= $user['id'] ?>">
                            <img src="../img/update_user_icon.svg" alt="img">
                        </a>
                        <a type="submit" class="btn btn-link btn-sm btn-rounded table_notes_btn_remove"
                           id="<?= $user['id'] ?>">
                            <img src="../img/delete_user_icon.svg" class="table_notes_delete_icon" alt="">
                        </a>
                    </div>
                </td>
            </tr>
		<? endforeach; ?>
        </tbody>
    </table>


</div>



