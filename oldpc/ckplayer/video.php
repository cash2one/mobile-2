<?php
require_once(dirname(__FILE__)."/../include/common.inc.php");
if(isset($_GET['url'])){// hd/2取最高画质
	$url=$_GET['url'];
	$reurl = str_replace('http://',"http:##",$url);
	$videourl = base64_encode($reurl);
	$str=G('http://api.flvxz.com/token/'.$cfg_flvtoken.'/url/'.$videourl.'/xmlformat/ckxml/ftype/mp4.flv.f4v/hd/2');
	echo $str;
}
function G($url){$user_agent=$_SERVER['HTTP_USER_AGENT'];$ch=curl_init(); 
	curl_setopt($ch,CURLOPT_URL,$url);curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
	curl_setopt($ch,CURLOPT_REFERER,$url);curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,30);
	curl_setopt($ch,CURLOPT_USERAGENT,$user_agent);curl_setopt($ch,CURLOPT_HEADER,0);
	@ $file=curl_exec($ch);curl_close($ch);return $file;}
?>