

<? $statuses = unserialize($_COOKIE['statuses']) ?>


<div class="notebook_form_container">
    <a class="link_form_close" id="link_add_form_close"></a>
    <div class="notebook_form_body notebook_form_body_add">
        <div class="notebook_form_header"><a class="notebook_form_close" id="link_add_form_close">
                <img src="../../img/icon_close.svg" alt="">
            </a></div>
        <form method="post" class="notebook_form_add" id="notebook_form_add" onsubmit="return false">
            <div class="mb-3">
                <input type="hidden" name="add_form" value="" class="form-control "
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label input_name">Введите имя</label>
                <input type="text" name="name" value="" class="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Введите телефон</label>
                <input type="tel" name="phone" value="" class="form-control  input_phone"
                       id="exampleInputEmail1 phone"
                       aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
                <input type="email" name="email" value="" class="form-control input_email "
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Введите заметку</label>
                <textarea type="text" name="note" value="" class="form-control"
                          id="exampleInputPassword1"></textarea>
            </div>
            <div class="input-group">
                <select class="form-select notebook_form_inputs" name="id_status" id="inputGroupSelect04">
					<? foreach ($statuses as $idStatus =>  $status): ?>
                        <option name="status" value="<?=$idStatus?>"><?=$status?></option>
					<? endforeach; ?>
                </select>
            </div>
            <div class="notebook_form_links">
                <button type="submit" class="btn btn-primary btn_form_save" name="add_user">СОХРАНИТЬ</button>
                <a class="btn btn-primary btn_red" id="link_add_form_close">ЗАКРЫТЬ</a>
            </div>
        </form>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/additional-methods.js"></script>
<script src="../../js/libraries/validate.js"></script>
<script src="../../js/libraries/jquery.maskedinput.min.js"></script>
<script src="../../js/mask.js?<?= time() ?>"></script>


