<?php
$z[0]=Array("global","",96,128);
$z[0][4]['name']="cfg_templets_skin";
$z[1]=Array("global","",179,211);
$z[1][4]['name']="cfg_templets_skin";
$z[2]=Array("global","",249,281);
$z[2][4]['name']="cfg_templets_skin";
$z[3]=Array("field","",349,400);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("field","",441,463);
$z[4][4]['name']="keywords";
$z[5]=Array("field","",546,568);
$z[5][4]['name']="seotitle";
$z[6]=Array("include","",603,638);
$z[6][4]['filename']="head.htm";
$z[7]=Array("include","",833,872);
$z[7][4]['filename']="side_nav.htm";
$z[8]=Array("field","",975,1004);
$z[8][4]['name']="position";
$z[9]=Array("arclist","\r\n            <div class=\"n_xwzt_recommend\">\r\n              [field:array runphp='yes']@me = (empty(@me['litpic']) ? \"\" : \"<img src='{@me['litpic']}'/>\"); [/field:array]\r\n              <div class=\"mask\">\r\n                <h3><a href=\"[field:arcurl/]\" target=\"_blank\">[field:title/]</a></h3>\r\n                <span><a href=\"[field:arcurl/]\" target=\"_blank\">[field:info/]</a></span>\r\n              </div>\r\n            </div>\r\n            ",1072,1567);
$z[9][4]['att']="h,p";
$z[9][4]['row']="3";
$z[9][4]['infolen']="20";
$z[10]=Array("list","\r\n            <div class=\"n_xwzt_article_list clearfix\">\r\n              [field:array runphp='yes']@me = (empty(@me['litpic']) ? \"\" : \"<a target='_blank' href='{@me['arcurl']}' class='preview'><img src='{@me['litpic']}'/></a>\"); [/field:array]\r\n              <div>\r\n                <h2><a href=\"[field:arcurl/]\" class=\"title\" target=\"_blank\">[field:title/]</a></h2>\r\n                <p class=\"content\">[field:description/]... </p>\r\n                <p class=\"pubdate\">[field:pubdate function=\"GetDateMK(@me)\"/]</p>\r\n              </div>\r\n            </div>\r\n            ",1644,2249);
$z[10][4]['pagesize']="10";
$z[11]=Array("include","",2315,2352);
$z[11][4]['filename']="footer.htm";

?>