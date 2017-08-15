<?php
/**
 * ckplayer配置方案添加 - powered by 织梦技术研究中心！
 *
 * @version        $Id: ckplayercommon_add.php 1 10:59 2013年10月10日Z 土匪 $
 * @package        DedeCMS.ckplayer
 * @copyright      Copyright (c) 2013, Dedejs, Inc.
 * @license        http://bbs.dedejs.com
 * @link           http://www.dedejs.com
 */
require(dirname(__FILE__)."/config.php");
CheckPurview('plus_ckplayer基本参数');
if(empty($dopost)) $dopost="";

if($dopost=="add")
{
    $savetime = time();
	if(empty($volume)) $volume="80";
	if(empty($logotime)) $logotime="3000";
	if(empty($cthidtime)) $cthidtime="3000";
	if(empty($advolume)) $advolume="80";
    $query = "INSERT INTO `#@__ckcommon`(
	stylename,skin,autoplay,dwidth,dheight,cwidth,cheight,volume,showlogo,logotime,showmark,
	endmotion,cthidden,cthidtime,simplebar,adpre,adpreurl,adpretime,advolume,adpreorder,
	adprejp,jpmember,unshow,adpremute,adpreload,adpau,adpauurl,adpaucls,admarstatus,admarcontent,admarurl,
	admarcolor,admarbgc,admarbgt,admarlight,lightcolor,lightc,savetime) VALUES(
	'$stylename','$skin','$autoplay','$dwidth','$dheight','$cwidth','$cheight','$volume',
	'$showlogo','$logotime','$showmark','$endmotion','$cthidden','$cthidtime','$simplebar',
	'$adpre','$adpreurl','$adpretime','$advolume','$adpreorder','$adprejp','$jpmember','$unshow','$adpremute','$adpreload',
	'$adpau','$adpauurl','$adpaucls',
	'$admarstatus','$admarcontent','$admarurl','$admarcolor','$admarbgc','$admarbgt','$admarlight','$lightcolor','$lightc','$savetime'); ";
    $rs = $dsql->ExecuteNoneQuery($query);
    $burl = empty($_COOKIE['ENV_GOBACK_URL']) ? "ckplayercommon_main.php" : $_COOKIE['ENV_GOBACK_URL'];
    if($rs)
    {
        ShowMsg("成功增加一个ckplayer配置方案!",$burl,0,500);
        exit();
    }
    else
    {
        ShowMsg("增加配置方案失败，请加QQ群217479292反馈错误，原因：".$dsql->GetError(),"javascript:;");
        exit();
    }
}
include DedeInclude('templets/ckplayercommon_add.htm');