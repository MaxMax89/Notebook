
window.APP = {
    DATA: [],
};
    APP.TPL = {
    TABLE_NOTES: `<table class="table align-middle mb-0 bg-white">
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
                    </tbody>
                </table> `,
    USER_TR:  ` <tr id="">
                <td><div class="d-flex align-items-center">
                        <img src="https://shapka-youtube.ru/wp-content/uploads/2024/08/kartinka-na-avatarki-dlya-geymerov-risunok-krutogo-geymera.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle">
                    <div class="ms-3"><p id="name" class="fw-bold mb-1 table_notes_td_name"></p>
                    <p id="email" class="text-muted mb-0"></p>
                    </div>
                </td>
                <td>
                    <p id="note" class="fw-normal mb-1 table_notes_td_note">
                   
                    </p>
                </td>
                <td>
                    <span id="status" class="badge rounded-pill d-inline"></span>
                </td>
                <td id="phone" class="table_notes_td_phone"></td>
                <td class="user_list_td_action">
                    <div class="user_list_linc_container">
                        <a class=" btn btn-link btn-sm btn-rounded btn_update" id=""> 
                            <img src="../img/update_user_icon.svg" alt="img">
                        </a>
                        <a type="submit" class="btn btn-link btn-sm btn-rounded table_notes_btn_remove"id="">
                            <img src="../img/delete_user_icon.svg" class="table_notes_delete_icon" alt="">
                         </a>
                    </div>
                </td>
                    </tr>`,
    ADD_FORM: `<div class="notebook_form_container">
                <a class="link_form_close" id="link_add_form_close"></a>
                <div class="notebook_form_body notebook_form_body_add">
                    <div class="notebook_form_header"><a class="notebook_form_close" id="link_add_form_close">
                            <img src="../../img/icon_close.svg" alt="">
                        </a></div>
                    <form method="post" class="notebook_form_add" id="notebook_form_add" onsubmit="return false">
                        <div class="mb-3">
                            <input type="hidden" name="add_form" value="" class="form-control "
                                   aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label input_name">Введите имя</label>
                            <input type="text" name="name" value="" class="form-control"
                                   id="exampleInputName1"
                                   aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPhone1" class="form-label">Введите телефон</label>
                            <input type="tel" name="phone" value="" class="form-control  input_phone"
                                   id="exampleInputPhone1 phone"
                                   aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
                            <input type="email" name="email" value="" class="form-control input_email "
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputNote1" class="form-label">Введите заметку</label>
                            <textarea type="text" name="note" value="" class="form-control"
                                      id="exampleInputPassword1"></textarea>
                        </div>
                        <div class="input-group">
                            <select class="form-select notebook_form_inputs" name="id_status" id="inputGroupSelect04">
                                <option name="status" value=""></option>
                            </select>
                        </div>
                        <div class="notebook_form_links">
                            <button type="submit" class="btn btn-primary btn_form_save" name="add_user">СОХРАНИТЬ</button>
                            <a class="btn btn-primary btn_red" id="link_add_form_close">ЗАКРЫТЬ</a>
                        </div>
                    </form>
                </div>
            </div>`,
    UPDATE_FORM: `<div class="notebook_form_container">
    <a class="link_form_close" id="link_update_form_close"></a>
    <div class="notebook_form_body notebook_form_body_update">
        <div class="notebook_form_header"><a class="notebook_form_close" id="link_update_form_close">
                <img src="../../img/icon_close.svg" alt="">
            </a></div>
        <form method="post" id="notebook_form_update" onsubmit="return false">
            <div class="mb-3">
                <input type="hidden" name="id" value="">
                <input type="hidden" name="update_form" value="">
                <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputName1" class="form-label input_name">Введите имя</label>
                <input type="text" name="name" value="" class="form-control"
                       id="exampleInputName1"
                       aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPhone1" class="form-label">Введите телефон</label>
                <input type="tel" name="phone" value="" class="form-control  input_phone"
                       id="exampleInputPhone1"
                       aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
                <input type="email" name="email" value="" class="form-control input_email "
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputNote1" class="form-label">Введите заметку</label>
                <textarea type="text" name="note" value="" class="form-control"
                          id="exampleInputNote1"></textarea>
            </div>
            <div class="input-group">
                <select class="form-select notebook_form_inputs" name="id_status" id="inputGroupSelect04">
                        <option name="status" value=""></option>
                </select>
            </div>
            <div class="notebook_form_links">
                <button type="submit" class="btn btn-primary btn_form" name="add_user">СОХРАНИТЬ</button>
                <a class="btn btn-primary btn_red" id="link_update_form_close">ЗАКРЫТЬ</a>
            </div>
        </form>
    </div>`,
    POPUP_DELETE: `<div class="popup_delete_confirm">
    <a class="popup_form_close" id="popup_delete_close"></a>
    <div class="popup_delete_body">
        <h4 class="popup_delete_title">удалить заметку?</h4>
        <div class="popup_delete_links">
            <a class="btn btn-primary btn_delete_cancel" id="popup_delete_close">ОТМЕНА</a>
            <a class="btn btn-primary btn_red btn_delete_confirm">УДАЛИТЬ</a>
        </div>
    </div>
</div>`,
};




