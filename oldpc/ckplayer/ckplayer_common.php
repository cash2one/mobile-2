<?php
require_once(dirname(__FILE__)."/../include/common.inc.php");
require_once(DEDEINC.'/memberlogin.class.php');
$cfg_ml = new MemberLogin();
if(empty($id)) $id="1";
$id = preg_replace("#[^0-9]#", "", $id);
$row = $dsql->GetOne("Select * from `#@__ckcommon` where id='$id'");
if(!is_array($row)){
	$id = 1;
}
	$dsql->SetQuery("Select * from `#@__ckcommon` where id='$id'");
	$dsql->Execute();
	$revalue = "";
	if($dbrow=$dsql->GetObject()){
		$usejpbutton = $dbrow->jpmember;
		if($usejpbutton==0 || $cfg_ml->M_Rank >= $usejpbutton){
			$advjp = 0;
		} else {
			$advjp = 1;
		}
		$useshow = $dbrow->unshow;
		if($useshow==0 || $cfg_ml->M_Rank < $useshow){
			$new_adpre = $dbrow->adpre;
			$new_adpreurl = $dbrow->adpreurl;
			$new_adpretime = $dbrow->adpretime;
		} else{
			$new_adpre = '';
			$new_adpreurl = '';
			$new_adpretime = '';
		}
		$revalue.= "/*\r\n";
		$revalue.= "织梦ckplayer播放器插件配置方案调用\r\n";
		$revalue.= "by土匪\r\n";
		$revalue.= "http://www.dedejs.com/\r\n";
		$revalue.= "*/\r\n";
		$revalue.= "var ckdata={\r\n";
		$revalue.= "skin:'".$dbrow->skin."',\r\n";
		$revalue.= "autoplay:'".$dbrow->autoplay."',\r\n";
		$revalue.= "dwidth:'".$dbrow->dwidth."',\r\n";
		$revalue.= "dheight:'".$dbrow->dheight."',\r\n";
		$revalue.= "cwidth:'".$dbrow->cwidth."',\r\n";
		$revalue.= "cheight:'".$dbrow->cheight."',\r\n";
		$revalue.= "volume:'".$dbrow->volume."',\r\n";
		$revalue.= "showlogo:'".$dbrow->showlogo."',\r\n";
		$revalue.= "logotime:'".$dbrow->logotime."',\r\n";
		$revalue.= "showmark:'".$dbrow->showmark."',\r\n";
		$revalue.= "endmotion:'".$dbrow->endmotion."',\r\n";
		$revalue.= "cthidden:'".$dbrow->cthidden."',\r\n";
		$revalue.= "cthidtime:'".$dbrow->cthidtime."',\r\n";
		$revalue.= "simplebar:'".$dbrow->simplebar."',\r\n";
		$revalue.= "adpre:'".$new_adpre."',\r\n";
		$revalue.= "adpreurl:'".$new_adpreurl."',\r\n";
		$revalue.= "adpretime:'".$new_adpretime."',\r\n";
		$revalue.= "advolume:'".$dbrow->advolume."',\r\n";
		$revalue.= "adpreorder:'".$dbrow->adpreorder."',\r\n";
		$revalue.= "adprejp:'".$dbrow->adprejp."',\r\n";
		$revalue.= "adpremute:'".$dbrow->adpremute."',\r\n";
		$revalue.= "adpreload:'".$dbrow->adpreload."',\r\n";
		$revalue.= "adpau:'".$dbrow->adpau."',\r\n";
		$revalue.= "adpauurl:'".$dbrow->adpauurl."',\r\n";
		$revalue.= "adpaucls:'".$dbrow->adpaucls."',\r\n";
		$revalue.= "admarstatus:'".$dbrow->admarstatus."',\r\n";
		$revalue.= "admarcontent:'".$dbrow->admarcontent."',\r\n";
		$revalue.= "admarurl:'".$dbrow->admarurl."',\r\n";
		$revalue.= "admarcolor:'".$dbrow->admarcolor."',\r\n";
		$revalue.= "admarbgc:'".$dbrow->admarbgc."',\r\n";
		$revalue.= "admarbgt:'".$dbrow->admarbgt."',\r\n";
		$revalue.= "admarlight:'".$dbrow->admarlight."',\r\n";
		$revalue.= "lightcolor:'".$dbrow->lightcolor."',\r\n";
		$revalue.= "lightc:'".$dbrow->lightc."',\r\n";
		$revalue.= "adjpstyle:'".$advjp."',\r\n";
		$revalue.= "key:'".$cfg_ckplayer_key."',\r\n";
		$revalue.= "copyright:'".$cfg_ckplayer_name."',\r\n";
		$revalue.= "url:'".$cfg_ckplayer_url."',\r\n";
		$revalue.= "version:'".$cfg_ckplayer_version."'\r\n";
		$revalue.= "}";
	}
	header("Content-type:application/javascript");
	echo  $revalue;
?>