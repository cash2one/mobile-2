<?php
$z[0]=Array("field","",173,192);
$z[0][4]['name']="title";
$z[1]=Array("global","",193,219);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",260,289);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",329,387);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("global","",438,470);
$z[4][4]['name']="cfg_templets_skin";
$z[5]=Array("global","",512,544);
$z[5][4]['name']="cfg_templets_skin";
$z[6]=Array("include","",802,839);
$z[6][4]['filename']="header.htm";
$z[7]=Array("global","",1202,1231);
$z[7][4]['name']="cfg_medias_dir";
$z[8]=Array("php","\r\n\r\n\$preurl=\"{dede:prenext get='pro' runphp='yes'}preg_match_all('/(.+?)<\\/a.*?>/sim', @me, \$strResult, PREG_PATTERN_ORDER);@me=\$strResult[1][0];\r\n{/dede:prenext}\";\r\n\r\n\$nexturl=\"{dede:prenext get='next' runphp='yes'}\r\npreg_match_all('/(.+?)<\\/a.*?>/sim', @me, \$strResult, PREG_PATTERN_ORDER);\r\n@me=\$strResult[1][0];\r\n{/dede:prenext}\";\r\n\r\n",1281,1640);
$z[9]=Array("prenext","preg_match_all('/<a.*?(?: |\\\\t|\\\\r|\\\\n)?href=[\\'\"]?(.+?)[\\'\"]?(?:(?: |\\\\t|\\\\r|\\\\n)+.*?)?>(.+?)<\\/a.*?>/sim', @me, \$strResult, PREG_PATTERN_ORDER);@me=\$strResult[1][0];",1802,2021);
$z[9][4]['get']="pro";
$z[9][4]['runphp']="yes";
$z[10]=Array("prenext","preg_match_all('/<a.*?(?: |\\\\t|\\\\r|\\\\n)?href=[\\'\"]?(.+?)[\\'\"]?(?:(?: |\\\\t|\\\\r|\\\\n)+.*?)?>(.+?)<\\/a.*?>/sim', @me, \$strResult, PREG_PATTERN_ORDER);@me=\$strResult[1][0];",2084,2304);
$z[10][4]['get']="next";
$z[10][4]['runphp']="yes";
$z[11]=Array("field","",2400,2419);
$z[11][4]['name']="title";
$z[12]=Array("type","[field:typelink /]",2505,2547);
$z[13]=Array("global","",2609,2641);
$z[13][4]['name']="cfg_templets_skin";
$z[14]=Array("prenext","preg_match_all('/<a.*?(?: |\\\\t|\\\\r|\\\\n)?href=[\\'\"]?(.+?)[\\'\"]?(?:(?: |\\\\t|\\\\r|\\\\n)+.*?)?>(.+?)<\\/a.*?>/sim', @me, \$strResult, PREG_PATTERN_ORDER);@me=\$strResult[1][0];",2781,3000);
$z[14][4]['get']="pro";
$z[14][4]['runphp']="yes";
$z[15]=Array("prenext","preg_match_all('/<a.*?(?: |\\\\t|\\\\r|\\\\n)?href=[\\'\"]?(.+?)[\\'\"]?(?:(?: |\\\\t|\\\\r|\\\\n)+.*?)?>(.+?)<\\/a.*?>/sim', @me, \$strResult, PREG_PATTERN_ORDER);@me=\$strResult[1][0];",3063,3283);
$z[15][4]['get']="next";
$z[15][4]['runphp']="yes";
$z[16]=Array("field","",3467,3485);
$z[16][4]['name']="body";
$z[17]=Array("include","",3591,3628);
$z[17][4]['filename']="footer.htm";

?>