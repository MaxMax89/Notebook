<? include 'config/db_config.php' ?>
<? include 'classes/Validator.php'; ?>
<? include 'classes/Db.php'; ?>
<? include 'classes/UsersController.php'; ?>
<? include 'inc/debuging.php' ?>

<? $db = new Db($dbConfig); ?>

<? $validator = new Validator() ?>

<? $usersController = new UsersController($db, $validator); ?>

<? $user = $usersController->getUserById($_GET['id']) ?>


    <form class="update_form" method="post">
        <div class="mb-3">
            <input type="hidden" name="id" value="<?= $user[0]['id'] ?>" class="form-control" id="exampleInputEmail1"
                   aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Введите имя</label>
            <input type="text" name="name" value="<?= $user[0]['name'] ?>" class="form-control" id="exampleInputEmail1"
                   aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Введите телефон</label>
            <input type="tel" name="phone" value="<?= $user[0]['phone'] ?>" class="form-control input_phone"
                   id="exampleInputEmail1"
                   aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
            <input type="email" name="email" value="<?= $user[0]['email'] ?>" class="form-control"
                   id="exampleInputEmail1"
                   aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">введите заметку</label>
            <textarea type="text" name="note" value="" class="form-control"
                      id="exampleInputPassword1"><?= $user[0]['note'] ?></textarea>
        </div>
        <div class="input-group">
            <select class="form-select" name="id_status" id="inputGroupSelect04"
                    aria-label="Пример элемента выбора с помощью надстройки кнопки">
                <option value="1">Командировка</option>
                <option value="2">Отпуск</option>
                <option value="3">Уволен</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary" name="update_user">Отправить</button>
    </form>


<? if (isset($_POST['update_user'])) {
	$usersController->updateUser($_POST);
	header("location: ../index.php");
} ?>