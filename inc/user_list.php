<? include "config/db_config.php"; ?>
<? include "classes/UsersController.php"; ?>
<? include "classes/Validator.php" ?>
<? include "classes/Db.php"; ?>
<? include "debuging.php"; ?>



<? $db = new Db($dbConfig); ?>

<? $validator = new Validator() ?>

<? $usersController = new UsersController($db, $validator); ?>

<? include "popups.php"; ?>

<? $users = $usersController->getAllUsers() ?>


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
	<? foreach ($users as $user): ?>
        <tr id="<?= $user['id'] ?>">
            <td>
                <div class="d-flex align-items-center">
                    <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style="width: 45px; height: 45px"
                            class="rounded-circle"
                    >
                    <div class="ms-3">
                        <p class="fw-bold mb-1"><?= $user['name'] ?></p>
                        <p class="text-muted mb-0"><?= $user['email'] ?></p>
                    </div>
                </div>
            </td>
            <td>
                <p class="fw-normal mb-1"><?= $user['note'] ?></p>
            </td>
            <td>
                <span class="badge badge-success rounded-pill d-inline"><?= $user['status'] ?></span>
            </td>
            <td><?= $user['phone'] ?></td>
            <td>
                <a href="../page_update.php?id=<?= $user['id'] ?>" class="btn btn-link btn-sm btn-rounded btn_edit"
                   id="<?= $user['id'] ?>">
                    Edit
                </a>
                <button type="submit" class="btn btn-link btn-sm btn-rounded btn_remove" id="<?= $user['id'] ?>">
                    Delete
                </button>
            </td>
        </tr>
	<? endforeach; ?>
    </tbody>
</table>
<div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-primary user_list_button_add" type="button" data-mdb-ripple-init>ADD</button>
</div>











