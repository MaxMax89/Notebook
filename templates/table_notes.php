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
                            <p class="fw-bold mb-1 table_notes_td_name"><?= $user['name'] ?></p>
                            <p class="text-muted mb-0"><?= $user['email'] ?></p>
                        </div>
                    </div>
                </td>
                <td>
                    <p class="fw-normal mb-1 table_notes_td_note"><?= $user['note'] ?></p>
                </td>
                <td>
                    <span class="badge rounded-pill d-inline"><?= $user['status'] ?></span>
                </td>
                <td class="table_notes_td_phone"><?= $user['phone'] ?></td>
                <td class="user_list_td_action">
                    <div class="user_list_linc_container">
                        <a class=" btn btn-link btn-sm btn-rounded btn_edit" id="<?= $user['id'] ?>">
                            <svg fill="#3B71CAFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                 class="icon table_notes_delete_icon" stroke="#3B71CAFF">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path>
                                </g>
                            </svg>
                        </a>
                        <a type="submit" class="btn btn-link btn-sm btn-rounded btn_remove" id="<?= $user['id'] ?>">
                            <svg class="table_notes_delete_icon" xmlns="http://www.w3.org/2000/svg" fill="#CC1013FF"
                                 width="64px" height="64px" viewBox="0 0 24 24">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                </g>
                            </svg>

                        </a>
                    </div>
                </td>
            </tr>
		<? endforeach; ?>
        </tbody>
    </table>
</div>