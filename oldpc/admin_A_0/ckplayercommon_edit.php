<?php
/**
 * ckplayer配置方案修改 - powered by 织梦技术研究中心！
 *
 * @version        $Id: ckplayercommon_edit.php 1 10:59 2013年10月10日Z 土匪 $
 * @package        DedeCMS.ckplayer
 * @copyright      Copyright (c) 2013, Dedejs, Inc.
 * @license        http://bbs.dedejs.com
 * @link           http://www.dedejs.com
 */
require_once(dirname(__FILE__)."/config.php");
require_once DEDEINC."/arc.partview.class.php";
CheckPurview('plus_ckplayer基本参数');
if(empty($dopost)) $dopost = "";
$id = preg_replace("#[^0-9]#", "", $id);
if(isset($allid))
{
    $aids = explode(',',$allid);
    if(count($aids)==1)
    {
        $id = $aids[0];
        $dopost = "delete";
    }
}
if($dopost=="delete")
{
	if($id==1){
		ShowMsg("为保证正常使用，默认配置方案不可删除！",$ENV_GOBACK_URL);
		exit();
	}
    $dsql->ExecuteNoneQuery("DELETE FROM `#@__ckcommon` WHERE id='$id'");
    ShowMsg("成功删除一个配置方案！",$ENV_GOBACK_URL);
    exit();
}
else if($dopost=="delall")
{
    $aids = explode(',',$aids);
    if(isset($aids) && is_array($aids))
    {
        foreach($aids as $aid)
        {
            $aid = preg_replace("#[^0-9]#", "", $aid);
            $dsql->ExecuteNoneQuery("DELETE FROM `#@__ckcommon` WHERE id='$aid'");
        }
        ShowMsg("成功删除选定配置方案！",$ENV_GOBACK_URL);
        exit();
    }
    else
    {
        ShowMsg("你没选定任何配置方案！",$ENV_GOBACK_URL);
        exit();
    }
}
else if($dopost=="gettag")
{
    require_once(DEDEINC.'/oxwindow.class.php');
	$showhtml = "<script type=\"text/javascript\">\r\n";
	$showhtml .= "function rongqiCopy(){\r\n";
	$showhtml .= "var e=document.getElementById(\"rongqi\");\r\n";
	$showhtml .= "e.select();\r\n";
	$showhtml .= "document.execCommand(\"Copy\");\r\n";
	$showhtml .= "alert(\"代码复制成功，请粘贴到模板相应位置！\");\r\n";
	$showhtml .= "}\r\n";
	$showhtml .= "</script>\r\n";
    $showhtml .= "<textarea name=\"rongqi\" id=\"rongqi\" style=\"width:50%;height:100px; border:1px solid #cccccc; background:#FFF;\" rows=\"10\">\r\n";
	$showhtml .= "<script src=\"{dede:global.cfg_cmsurl/}/ckplayer/ckplayer_common.php?id=$id\" language=\"javascript\"></script>\r\n";
    $showhtml .= "{dede:include filename=\"plus/ckplayer.htm\"/}";
	$showhtml .= "</textarea><br/><br/>\r\n";
	$showhtml .= "<input type=button value=\"复制代码\" onclick=\"rongqiCopy()\">\r\n";
	$showhtml .= "<input type=button value=\"返回\" onclick=\"history.go(-1)\">\r\n";
    $row = $dsql->GetOne("SELECT stylename from `#@__ckcommon` WHERE id='$id' ");
    $info = "";
    $wintitle = "ckplayer播放器配置方案-获取配置方案调用代码";
    $wecome_info = "<a href='ckplayercommon_main.php'><u>ckplayer配置方案管理</u></a> > 获取配置方案调用代码";
    $win = new OxWindow();
    $win->Init();
    $winform = $win->GetWindow("hand",$info);
    $win->myWinItem = '';
    $win->AddTitle("当前选择方案：{$row['stylename']}，以下为该方案的模板调用代码：请将代码复制到内容页模板需要显示播放器的位置。");
    $winform = $win->GetWindow("hand",$showhtml);
    $win->Display();
    exit();
}
else if($dopost=="saveedit")
{
	require_once DEDEINC.'/request.class.php';
	$request = new Request();
	$request->Init();
    $id = preg_replace("#[^0-9]#", "", $request->Item('id', 0));
	$savetime = time();
	$stylename = $request->Item('stylename', '');
	$skin = $request->Item('skin', '');
	$autoplay = $request->Item('autoplay', '');
	$dwidth = $request->Item('dwidth', '');
	$dheight = $request->Item('dheight', '');
	$cwidth = $request->Item('cwidth', '');
	$cheight = $request->Item('cheight', '');
	$volume = $request->Item('volume', '');
	$showlogo = $request->Item('showlogo', '');
	$logotime = $request->Item('logotime', '');
	$showmark = $request->Item('showmark', '');
	$endmotion = $request->Item('endmotion', '');
	$cthidden = $request->Item('cthidden', '');
	$cthidtime = $request->Item('cthidtime', '');
	$simplebar = $request->Item('simplebar', '');
	
	$adpre = $request->Item('adpre', '');
	$adpreurl = $request->Item('adpreurl', '');
	$adpretime = $request->Item('adpretime', '');
	$advolume = $request->Item('advolume', '');
	$adpreorder = $request->Item('adpreorder', '');
	$adprejp = $request->Item('adprejp', '');
	$jpmember = $request->Item('jpmember', '');
	$unshow = $request->Item('unshow', '');
	$adpremute = $request->Item('adpremute', '');
	$adpreload = $request->Item('adpreload', '');
	
	$adpau = $request->Item('adpau', '');
	$adpauurl = $request->Item('adpauurl', '');
	$adpaucls = $request->Item('adpaucls', '');
	
	$admarstatus = $request->Item('admarstatus', '');
	$admarcontent = $request->Item('admarcontent', '');
	$admarurl = $request->Item('admarurl', '');
	$admarcolor = $request->Item('admarcolor', '');
	$admarbgc = $request->Item('admarbgc', '');
	$admarbgt = $request->Item('admarbgt', '');
	$admarlight = $request->Item('admarlight', '');
	$lightcolor = $request->Item('lightcolor', '');
	$lightc = $request->Item('lightc', '');
	
    $query = "UPDATE `#@__ckcommon` SET 
	stylename='$stylename',skin='$skin',autoplay='$autoplay',dwidth='$dwidth',dheight='$dheight',cwidth='$cwidth',
	cheight='$cheight',volume='$volume',showlogo='$showlogo',logotime='$logotime',showmark='$showmark',
	endmotion='$endmotion',cthidden='$cthidden',cthidtime='$cthidtime',simplebar='$simplebar',
	adpre='$adpre',adpreurl='$adpreurl',adpretime='$adpretime',advolume='$advolume',
	adpreorder='$adpreorder',adprejp='$adprejp',jpmember='$jpmember',unshow='$unshow',adpremute='$adpremute',adpreload='$adpreload',adpau='$adpau',
	adpauurl='$adpauurl',adpaucls='$adpaucls',admarstatus='$admarstatus',admarcontent='$admarcontent',
	admarurl='$admarurl',admarcolor='$admarcolor',admarbgc='$admarbgc',admarbgt='$admarbgt',admarlight='$admarlight',lightcolor='$lightcolor',lightc='$lightc',savetime='$savetime' WHERE id='$id' ";
    $dsql->ExecuteNoneQuery($query);
    ShowMsg("成功更改ckplayer配置方案！",'ckplayercommon_main.php');
    exit();
}
$ckData = $dsql->GetOne("SELECT #@__ckcommon.* FROM #@__ckcommon WHERE #@__ckcommon.id=$id");
include DedeInclude('templets/ckplayercommon_edit.htm');