<?php
require "../../core/core.php";

if($_POST or $_GET["op"])
{
	
	//date_default_timezone_set('Asia/Shanghai');
	$mdate=date("Y-m-d H:i:s");
	$mdate=strtotime($mdate);
	$mt=trim($_POST["t"]);
	$id=$_GET["id"];
	$op=trim($_GET["op"]);
	if($op=="edit")
	{
		if($t = $db->query("update mtly set name='$mt' where id='$id'"))
		{
			echo '<script language="javascript">location.href="mtly.php"</script>';
		}
	}
	elseif(trim($op=="del"))
	{
		if($t = $db->query("delete from mtly where id='$id'"))
		{
			echo '<script language="javascript">location.href="mtly.php"</script>';
		}
	}
	elseif(trim($op=="add"))
	{
		if($t = $db->query("insert into mtly(name,addtime)values('$mt','$mdate')"))
		{
			echo '<script language="javascript">location.href="mtly.php"</script>';
		}
	}
}


















?>