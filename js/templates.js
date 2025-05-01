
window.APP = {
    DATA: '',
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
    USER_TR: `<tr id="{{id}}">
                <td><div class="d-flex align-items-center">
                        <img src="" alt="" style="width: 45px; height: 45px" class="rounded-circle">
                    <div class="ms-3"><p id="name" class="fw-bold mb-1 table_notes_td_name">{{name}}</p>
                    <p id="email" class="text-muted mb-0">{{email}}</p>
                    </div>
                </td>
                <td>
                    <p id="note" class="fw-normal mb-1 table_notes_td_note">
                    {{note}}
                    </p>
                </td>
                <td>
                    <span id="status" class="badge rounded-pill d-inline">{{status}}</span>
                </td>
                <td id="phone" class="table_notes_td_phone">{{phone}}</td>
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
    ADD_FORM: `<p></p>`,
    UPDATE_FORM: '',
    POPUP_DELETE: '',
};




