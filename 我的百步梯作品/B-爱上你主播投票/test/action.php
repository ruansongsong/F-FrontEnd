<?php
$success = false;
if (isset($_POST['player']) && $_POST['player'] == '6') {
   $success = true;
}
echo json_encode(array('success' => $success));
?>