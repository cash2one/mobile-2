<html>
<head>
<title>������������</title>
<meta http-equiv="Content-Type" content="text/html;charset=gb2312">
<link href="/res/base.css" rel="stylesheet" type="text/css">
<script src="/res/base.js" language="javascript"></script>
</head>

<body>
<?php
require "../../core/core.php";
if($_SESSION[$cfgSessionName]["chen"]!="debug")
{
	echo "�Բ��������Ǳ�վ����Ա�޷�������ǰҳ��";
	exit();
}
$menu_data = array();
?>
<!-- ͷ�� begin -->
<div class="headers">
	<div class="headers_title" style="width:50%"><span class="tips">ý����Դ(ȫ�֣�Ӧ��������ҽԺ)</span></div>
	<div class="headers_oprate"></div>
</div>
<!-- ͷ�� end -->
<div class="space"></div>
<!-- �����б� begin -->

<table width="100%" align="center" class="list">
	<!-- ��ͷ���� begin -->
	<tr>
		<td class="head" align="center" width="8%">ѡ</td>
		<td class="head" align="left" width="60%"><a href='?page=1&page=1&sort=1&sorttype=1' title=''>����</a></td>
		<td class="head" align="center" width="20%"><a href='?page=1&page=1&sort=3&sorttype=2' title=''>���ʱ��</a></td>
		<td class="head" align="center" width="12%">����</td>
	</tr>
	<!-- ��ͷ���� end -->
	<!-- ��Ҫ�б����� begin -->
    <?php
	if ($tmp_data = $db->query("select * from mtly order by id desc")) {
	foreach ($tmp_data as $tmp_line) {
	?>
    <form id="mainform<?php echo $tmp_line["id"];?>" action="mtly_update.php?op=edit&id=<?php echo $tmp_line["id"];?>" method="post">
	<tr>
		<td align="center" class="item"><input name="delcheck" type="checkbox" value="1" onpropertychange="set_item_color(this)"></td>
		<td align="left" class="item"><input name="t" type="text" value="<?php echo $tmp_line["name"];?>"></td>
		<td align="center" class="item"><?php echo date("Y-m-d H:i",$tmp_line["addtime"]);?></td>
		<td align="center" class="item"><a href='#' class='op' onClick="document.getElementById('mainform<?php echo $tmp_line["id"];?>').submit()">�޸�</a> <a href='mtly_update.php?op=del&id=<?php echo $tmp_line["id"];?>' class='op' onClick="return isdel();">ɾ��</a></td>
	</tr>
    </form>
    <?php
	}
	}
	?>
    <tr>
	  <td height="30" align="center" class="item">&nbsp;</td>
	  <td colspan="2" align="center" valign="bottom" class="item">
      <form name="form1" method="post" action="mtly_update.php?op=add">
	    <input type="text" name="t">
        <input type="submit" name="button" id="button" value="����">
	  </form>
      </td>
	  <td align="center" class="item">&nbsp;</td>
  </tr>
	<!-- ��Ҫ�б����� end -->
</table>

<!-- �����б� end -->
<div class="space"></div>
<!-- ��ҳ���� begin -->

<div class="footer_op">
  <div class="footer_op_left"><button onClick="select_all()" class="button">ȫѡ</button>&nbsp;<button onClick="unselect()" class="button">��ѡ</button>&nbsp;</div>
  <div class="footer_op_right"><div class="pagelink">
  <!-- 
  <div class="pagelink_tips">��<span class="pagelink_cur_page">1</span>/<span class="pagelink_all_page">1</span>ҳ&nbsp;��<span class="pagelink_all_rec">2</span>��</div>
  -->
  <button onClick="location='?&page=0'" disabled="true" class="pagelink_button">��ҳ</button>&nbsp;<button onClick="location='?&page=2'"disabled="true" class="pagelink_button">��ҳ</button>&nbsp;<select name="plcombo" onChange="location='?&page='+this.value;" class="pagelink"><option value="1" selected>1 *</option></select></div></div>
</div>
<!-- ��ҳ���� end -->
</body>
</html>
