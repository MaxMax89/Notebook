<div class="notebook_form_container">
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
</div>




