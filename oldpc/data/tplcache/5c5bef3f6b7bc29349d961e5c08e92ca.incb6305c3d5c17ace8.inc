<?php
$z[0]=Array("field","",4,33);
$z[0][4]['name']="typename";
$z[1]=Array("sql","\r\n\r\n    [field:uid/]-[field:username/]<br />\r\n\r\n",63,237);
$z[1][4]['sql']="SELECT uid,username,email,memberid FROM `phpwind87`.pw_members ORDER BY uid desc";
$z[1][4]['appname']="phpwind";
$z[2]=Array("arclist","\r\n			<li>\r\n				<a  href=\"[field:linkurl/]\">\r\n					<!--  封面  -->\r\n					<img src=\"[field:cover_img/] \" width=\"202px\" height=\"317px\"/>\r\n				</a>\r\n				<div class=\"erwei\">\r\n					<!-- 二维码图片 -->\r\n					<img src=\"[field:erwei_img/] \" width=\"170\" />	\r\n				</div>\r\n				<h2>[field:title /]</h2>\r\n				<a href=\"[field:linkurl/]\" title=\"[field:fulltitle /] \" class=\"btn_video\">点阅</a>\r\n			</li>\r\n		",247,733);
$z[2][4]['addfields']="cover_img,erwei_img,linkurl";
$z[2][4]['channelid']="19";

?>