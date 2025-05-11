let APP_TEMPLATES = (function () {


    let getTplBtnPagination = function (data, countItemsPage) {

        let countPages = Math.ceil(data.length / 10);

        let itemHTML = `<nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link js_btn_pagination_prev" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>`

        for (let i = 1; i <= countPages; i++)  {
            itemHTML += `<li class="page-item "><a class="page-link js_pagination_page" data-pagination-page="${i}" href="#">${i}</a></li>`
        }

        itemHTML += `<li>
                        <a class="page-link js_btn_pagination_next" href="#">Next</a>
                    </li>
                </ul>
            </nav>`;
        return itemHTML;

    }

    let getFormOptions = function (statuses, currentStatus = false) {
        let itemHTML = `<option selected='true' disabled='disabled'>Выберете статус</option>`;
        $.each(statuses, (id, status) => {
            itemHTML += `<option name="status" value="${id}">${status}</option>`
        });

        if (currentStatus !== false) {
            setTimeout(() => {
                $(`select option[value=${currentStatus}]`).prop('selected', true);
            }, 100);
        }
        return itemHTML;
    }

    let getTplFormUpdate = function (user, statuses) {
        let formOptions = getFormOptions(statuses, user['id_status']);

        return `<div class="form_container">
                                    <a class="overlow_form js_btn_form_update_close"></a>
                                    <div class="form_body  js_form_wrapper">
                                        <div class="form_header"><a class="notebook_form_close js_btn_form_update_close">
                                                <img src="../../img/icon_close.svg" alt="">
                                            </a></div>
                                        <form method="post" class="js_form_update" onsubmit="return false">
                                            <div class="mb-3">
                                                <input type="hidden" name="id" value="${user.id}">
                                                <input type="hidden" name="update_form" value="">
                                                <div id="emailHelp" class="form-text"></div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputName1" class="form-label input_name">Введите имя</label>
                                                <input type="text" name="name" value="${user.name}" class="form-control"
                                                       id="exampleInputName1"
                                                       aria-describedby="emailHelp">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPhone1" class="form-label">Введите телефон</label>
                                                <input type="tel" name="phone" value="${user.phone}" class="form-control  input_phone"
                                                       id="exampleInputPhone1"
                                                       aria-describedby="emailHelp">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
                                                <input type="email" name="email" value="${user.email}" class="form-control input_email "
                                                       id="exampleInputEmail1"
                                                       aria-describedby="emailHelp">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputNote1" class="form-label">Введите заметку</label>
                                                <textarea type="text" name="note" value="" class="form-control"
                                                          id="exampleInputNote1">${user.note}</textarea>
                                            </div>
                                            <div class="input-group">
                                                <select class="form-select notebook_form_inputs" name="id_status" id="inputGroupSelect04">
                                                       ${formOptions} 
                                                </select>
                                            </div>
                                            <div class="notebook_form_links">
                                                <button type="submit" class="btn btn-primary btn_form" name="add_user">СОХРАНИТЬ</button>
                                                <a class="btn btn-primary btn_red js_btn_form_update_close">ЗАКРЫТЬ</a>
                                            </div>
                                        </form>
                                    </div>`;

    }

    let getTplFormAdd = function (statuses) {

        let formOptions = getFormOptions(statuses);

        return `<div class="form_container">
                                    <a class="overlow_form js_btn_form_add_close" ></a>
                                    <div class="form_body  js_form_wrapper">
                                        <div class="form_header"><a class="notebook_form_close js_btn_form_add_close" >
                                                <img src="../../img/icon_close.svg" alt="">
                                            </a></div>
                                        <form method="post" class="notebook_form_add js_form_add"  onsubmit="return false">
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
                                                    ${formOptions}
                                                </select>
                                            </div>
                                            <div class="notebook_form_links">
                                                <button type="submit" class="btn btn-primary btn_form_save" name="add_user">СОХРАНИТЬ</button>
                                                <a class="btn btn-primary btn_red js_btn_form_add_close">ЗАКРЫТЬ</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>`;
    }


    let getTplFormDelete = `<div class="form_delete js_form_delete">
                                        <a class="overlow_form_delete js_btn_form_delete_cancel"></a>
                                        <div class="form_delete_body">
                                            <h4 class="form_delete_title">удалить заметку?</h4>
                                            <div class="form_delete_buttons">
                                                <a class="btn btn-primary btn_delete_cancel js_btn_form_delete_cancel" >ОТМЕНА</a>
                                                <a class="btn btn-primary btn_red btn_delete_confirm js_btn_form_delete_confirm" data-item-delete-id="">УДАЛИТЬ</a>
                                            </div>
                                        </div>
                                    </div>`;

    let getTplTable = function (data) {
        let itemHTML = `<table class="table align-middle mb-0 bg-white">
                    <thead class="bg-light">
                        <tr>
                             <th>name</th>
                             <th>Note</th>
                             <th>Status</th>
                             <th>Phone</th>
                             <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>`;
        data.forEach((item) => {
            itemHTML += `<tr id="${item.id}">
                <td><div class="d-flex align-items-center">
                        <img src="https://shapka-youtube.ru/wp-content/uploads/2024/08/kartinka-na-avatarki-dlya-geymerov-risunok-krutogo-geymera.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle">
                    <div class="ms-3"><p id="name" class="fw-bold mb-1 table_notes_td_name">${item.name}</p>
                    <p id="email" class="text-muted mb-0">${item.email}</p>
                    </div>
                </td>
                <td>
                    <p id="note" class="fw-normal mb-1 table_notes_td_note">
                    ${item.note}
                    </p>
                </td>
                <td>
                    <span id="status" class="badge rounded-pill d-inline">${item.status}</span>
                </td>
                <td id="phone" class="table_notes_td_phone">${item.phone}</td>
                <td class="user_list_td_action">
                    <div class="user_list_linc_container">
                        <a class=" btn btn-link btn-sm btn-rounded btn_update js_btn_item_update" data-item-update-id="${item.id}"> 
                            <img src="../img/update_user_icon.svg" alt="img">
                        </a>
                        <a type="submit" class="btn btn-link btn-sm btn-rounded table_notes_btn_remove js_btn_item_delete" data-item-delete-id="${item.id}">
                            <img src="../img/delete_user_icon.svg" class="table_notes_delete_icon" alt="">
                         </a>
                    </div>
                </td>
                    </tr>`
        });

        itemHTML += `</tbody></table>`;
        return itemHTML;
    };
    return {
        getTplBtnPagination: getTplBtnPagination,
        getTplTable: getTplTable,
        getTplFormAdd: getTplFormAdd,
        getTplFormUpdate: getTplFormUpdate,
        getTplFormDelete: getTplFormDelete
    };

})();

