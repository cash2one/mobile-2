<?php
date_default_timezone_set('Asia/Shanghai');
/*
// - ����˵�� : ��վ����ϵͳ �����ļ�
// - �������� : С�� 
// - ����ʱ�� : 2011-12-14
*/
@header("Content-type: text/html; charset=gb2312");

$cfgSessionName = "guahao_system"; //Session������

// վ����Ϣ:
$cfgSiteName = "˫�����ιҺ�ϵͳ"; //վ������
$cfgSiteURL = "javascript:void(0);"; //վ����ַ
$cfgSiteMail = "admin@admin.com"; //վ����ϵ��mail

// ���ݿ����Ӳ���:
$mysql_server = array('localhost', 'root', 'root', 'gh', 'gbk');
//$mysql_server = array('localhost', 'guahao', 'ki99dingdingss', 'guahao', 'gbk');


// ��������:
$cfgShowQuickLinks = 1; //�Ƿ���ʾ��ݼ�(ȫ������)
$cfgDefaultPageSize = 25; //Ĭ�Ϸ�ҳ��(�б�δ��дʱʹ�ô�����)

// ������ı�ͷ:
$aOrderTips = array("" => "���ȡ��������Ŀ����", "asc" => "�������������", "desc" => "�������������");
$aOrderFlag = array("" => "", "asc" => "<img src='/res/img/icon_up.gif' width='12' height='12' alt='' align='absmiddle' border='0'>", "desc" => "<img src='/res/img/icon_down.gif' width='12' height='12' alt='' align='absmiddle' border='0'>");

// ��ɫ����:
$aTitleColor = array("" => "Ĭ��", "fuchsia" => "�Ϻ�ɫ", "red" => "��ɫ", "green" => "��ɫ", "blue" => "��ɫ",
	"orange" => "�Ȼ�ɫ", "darkviolet" => "������ɫ", "silver" => "��ɫ", "maroon" => "��ɫ", "olive" => "���ɫ",
	"navy" => "������", "purple" => "��ɫ", "coral" => "ɺ��ɫ", "crimson" => "���ɫ", "gold" => "��ɫ", "black" => "��ɫ");

$button_split = ' <font color="silver">|</font> ';

// ��������:
$debugs = array("317f1e761f2faa8da781a4762b9dcc2c5cad209a", "a2df8f1969d986f98c75e20b42bd2f490cb187aa");

$status_array = array(0 => '�ȴ�', 1 => '�ѵ�', 2 => 'δ��', 3=> 'ԤԼδ��');
$media_from_array = explode(' ', '�绰 ���� ��ֽ ���� ���� �绰 ����');
$xiaofei_status = array('��', '��');

$oprate_type = array("add"=>"����", "delete"=>"ɾ��", "edit"=>"�޸�", "login"=>"�û���¼", "logout"=>"�û��˳�");//
$line_color = array('', 'red', 'silver');
?>