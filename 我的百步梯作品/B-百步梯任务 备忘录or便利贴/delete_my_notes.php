<?php
include 'connect_mysql.php';
$id=$_GET['id'];//��ȡidֵ
$query="delete from my_notes where id=".$id;//ָ��id��ɾ����¼
mysql_query($query);
//ҳ����ת����javascript
echo "<script language='javascript' type='text/javascript'>";
echo "window.location.href='view_mynotes.php'";
echo "</script >"
?>