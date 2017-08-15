<html>
<head>
<title>搜索引擎设置</title>
<meta http-equiv="Content-Type" content="text/html;charset=gb2312">
<link href="/res/base.css" rel="stylesheet" type="text/css">
<script src="/res/base.js" language="javascript"></script>
</head>

<body>
<?php
require "../../core/core.php";
if($_SESSION[$cfgSessionName]["chen"]!="debug")
{
	echo "对不起，您不是本站管理员无法操作当前页！";
	exit();
}
$menu_data = array();
?>
<!-- 头部 begin -->
<div class="headers">
	<div class="headers_title" style="width:50%"><span class="tips">媒体来源(全局，应用于所有医院)</span></div>
	<div class="headers_oprate"></div>
</div>
<!-- 头部 end -->
<div class="space"></div>
<!-- 数据列表 begin -->

<table width="100%" align="center" class="list">
	<!-- 表头定义 begin -->
	<tr>
		<td class="head" align="center" width="8%">选</td>
		<td class="head" align="left" width="60%"><a href='?page=1&page=1&sort=1&sorttype=1' title=''>名称</a></td>
		<td class="head" align="center" width="20%"><a href='?page=1&page=1&sort=3&sorttype=2' title=''>添加时间</a></td>
		<td class="head" align="center" width="12%">操作</td>
	</tr>
	<!-- 表头定义 end -->
	<!-- 主要列表数据 begin -->
    <?php
	if ($tmp_data = $db->query("select * from mtly order by id desc")) {
	foreach ($tmp_data as $tmp_line) {
	?>
    <form id="mainform<?php echo $tmp_line["id"];?>" action="mtly_update.php?op=edit&id=<?php echo $tmp_line["id"];?>" method="post">
	<tr>
		<td align="center" class="item"><input name="delcheck" type="checkbox" value="1" onpropertychange="set_item_color(this)"></td>
		<td align="left" class="item"><input name="t" type="text" value="<?php echo $tmp_line["name"];?>"></td>
		<td align="center" class="item"><?php echo date("Y-m-d H:i",$tmp_line["addtime"]);?></td>
		<td align="center" class="item"><a href='#' class='op' onClick="document.getElementById('mainform<?php echo $tmp_line["id"];?>').submit()">修改</a> <a href='mtly_update.php?op=del&id=<?php echo $tmp_line["id"];?>' class='op' onClick="return isdel();">删除</a></td>
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
        <input type="submit" name="button" id="button" value="增加">
	  </form>
      </td>
	  <td align="center" class="item">&nbsp;</td>
  </tr>
	<!-- 主要列表数据 end -->
</table>

<!-- 数据列表 end -->
<div class="space"></div>
<!-- 分页链接 begin -->

<div class="footer_op">
  <div class="footer_op_left"><button onClick="select_all()" class="button">全选</button>&nbsp;<button onClick="unselect()" class="button">反选</button>&nbsp;</div>
  <div class="footer_op_right"><div class="pagelink">
  <!-- 
  <div class="pagelink_tips">第<span class="pagelink_cur_page">1</span>/<span class="pagelink_all_page">1</span>页&nbsp;共<span class="pagelink_all_rec">2</span>条</div>
  -->
  <button onClick="location='?&page=0'" disabled="true" class="pagelink_button">上页</button>&nbsp;<button onClick="location='?&page=2'"disabled="true" class="pagelink_button">下页</button>&nbsp;<select name="plcombo" onChange="location='?&page='+this.value;" class="pagelink"><option value="1" selected>1 *</option></select></div></div>
</div>
<!-- 分页链接 end -->
</body>
</html>
