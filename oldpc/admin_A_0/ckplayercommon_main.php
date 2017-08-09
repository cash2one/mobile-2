<?php
/**
 * ckplayer配置方案管理 - powered by 织梦技术研究中心！
 *
 * @version        $Id: ckplayercommon_main.php 1 10:59 2013年10月10日Z 土匪 $
 * @package        DedeCMS.ckplayer
 * @copyright      Copyright (c) 2013, Dedejs, Inc.
 * @license        http://bbs.dedejs.com
 * @link           http://www.dedejs.com
 */
require_once(dirname(__FILE__).'/config.php');
require_once(DEDEINC.'/datalistcp.class.php');
setcookie('ENV_GOBACK_URL', $dedeNowurl, time()+3600, '/');

if(empty($keyword)) $keyword = '';

$sql = "SELECT id,stylename,skin,endmotion,dwidth,dheight,cwidth,cheight,savetime FROM `#@__ckcommon` WHERE  CONCAT(`id`,`stylename`,`skin`,`admarcontent`) LIKE '%$keyword%' ORDER BY id desc";

$dlist = new DataListCP();
$dlist->SetParameter('keyword', $keyword);
$dlist->SetTemplet(DEDEADMIN.'/templets/ckplayercommon_main.htm');
$dlist->SetSource($sql);
$dlist->display();

function GetMotion($endmotion)
{
    if($endmotion==1) return '重新播放';
    if($endmotion==2) return '停止播放';
	if($endmotion==5) return '停止播放并显示暂停广告';
    else return '显示推荐视频';
}
function GetSelect($id)
{
    if($id==1) return 'disabled="disabled"';
    else return 'name="aids"';
}