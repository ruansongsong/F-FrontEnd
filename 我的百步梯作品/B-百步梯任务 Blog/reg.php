<?php
if(!isset($_POST['submit'])){
	exit('�Ƿ�����!');
}

//ע����Ϣ�ж�



//�������ݿ������ļ�
$link = mysql_connect ( 'localhost:3306' ,  'root' ,  '' )//�������ݿ�
or die("�������ݿ����");
mysql_select_db("user",$link);//ѡ�����ݿ�
mysql_query("set character 'utf8_general_ci'");
mysql_query("SET NAMES 'utf8_general_ci'");//���ñ��룬�����������
//����û����Ƿ��Ѿ�����

//д������

$sql = "INSERT INTO `user`.`user`(username,password,time)VALUES('$_POST[username]','$_POST[password]',NULL)";
if(mysql_query($sql,$link)){
	exit('�û�ע��ɹ�������˴� <a href="index1.php">��¼</a>');
} else {
	echo '��Ǹ���������ʧ�ܣ�',mysql_error(),'<br />';
	echo '����˴� <a href="javascript:history.back(-1);">����</a> ����';
}
?>
