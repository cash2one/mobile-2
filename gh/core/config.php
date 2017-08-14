<?php
date_default_timezone_set('Asia/Shanghai');
/*
// - 功能说明 : 网站管理系统 配置文件
// - 创建作者 : 小陈 
// - 创建时间 : 2011-12-14
*/
@header("Content-type: text/html; charset=gb2312");

$cfgSessionName = "guahao_system"; //Session变量名

// 站点信息:
$cfgSiteName = "双均整形挂号系统"; //站点名称
$cfgSiteURL = "javascript:void(0);"; //站点网址
$cfgSiteMail = "admin@admin.com"; //站点联系人mail

// 数据库连接参数:
$mysql_server = array('localhost', 'gh_dzsjmr', 'Y2w8T6E8', 'gh_dzsjmr', 'gbk');
//$mysql_server = array('localhost', 'guahao', 'ki99dingdingss', 'guahao', 'gbk');


// 参数设置:
$cfgShowQuickLinks = 1; //是否显示快捷键(全局设置)
$cfgDefaultPageSize = 25; //默认分页数(列表未填写时使用此数据)

// 排序表格的表头:
$aOrderTips = array("" => "点击取消按此栏目排序", "asc" => "点击按升序排序", "desc" => "点击按降序排序");
$aOrderFlag = array("" => "", "asc" => "<img src='/res/img/icon_up.gif' width='12' height='12' alt='' align='absmiddle' border='0'>", "desc" => "<img src='/res/img/icon_down.gif' width='12' height='12' alt='' align='absmiddle' border='0'>");

// 颜色数组:
$aTitleColor = array("" => "默认", "fuchsia" => "紫红色", "red" => "红色", "green" => "绿色", "blue" => "蓝色",
	"orange" => "橙黄色", "darkviolet" => "紫罗兰色", "silver" => "银色", "maroon" => "栗色", "olive" => "橄榄色",
	"navy" => "海军蓝", "purple" => "紫色", "coral" => "珊瑚色", "crimson" => "深红色", "gold" => "金色", "black" => "黑色");

$button_split = ' <font color="silver">|</font> ';

// 调试数据:
$debugs = array("317f1e761f2faa8da781a4762b9dcc2c5cad209a", "a2df8f1969d986f98c75e20b42bd2f490cb187aa");

$status_array = array(0 => '等待', 1 => '已到', 2 => '未到', 3=> '预约未定');
$media_from_array = explode(' ', '电话 网络 报纸 户外 车身 电话 其他');
$xiaofei_status = array('×', '√');

$oprate_type = array("add"=>"新增", "delete"=>"删除", "edit"=>"修改", "login"=>"用户登录", "logout"=>"用户退出");//
$line_color = array('', 'red', 'silver');
?>