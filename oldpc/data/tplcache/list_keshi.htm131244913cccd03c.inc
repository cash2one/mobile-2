<?php
$z[0]=Array("field","",254,273);
$z[0][4]['name']="title";
$z[1]=Array("global","",274,300);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("include","",387,425);
$z[2][4]['filename']="header2.htm";
$z[3]=Array("field","\r\n   global \$dsql ;\r\n   \$reid = \$dsql->GetOne(\"SELECT reid FROM dede_arctype where id = @me\");\r\n   @me = \$reid['reid'];\r\nif(@me == 614){\r\n@me = 'weichuang';\r\n}\r\nif(@me == 615){\r\n@me = 'zhushe';\r\n}\r\nif(@me == 616){\r\n@me = 'pifu';\r\n}\r\nif(@me == 617){\r\n@me = 'zhongyi';\r\n}\r\nif(@me == 618){\r\n@me = 'wenxiu';\r\n}\r\n",521,881);
$z[3][4]['name']="typeid";
$z[3][4]['runphp']="yes";
$z[4]=Array("field","",1048,1070);
$z[4][4]['name']="typename";
$z[5]=Array("channel","\r\n<dd><a href='[field:typelink/]'>[field:typename/]</a></dd>\r\n",1116,1231);
$z[5][4]['type']="son";
$z[5][4]['typeid']="609";
$z[6]=Array("arclist","\r\n  <div class=\"tsfw_list\">\r\n    <div class=\"tsfw_list_left\">\r\n      <a href=\"[field:arcurl/]\"><img src=\"[field:picname/]\" width=\"350\" height=\"240\" /></a>\r\n    </div>\r\n    <div class=\"tsfw_list_right\">\r\n      <div class=\"right_tm\">\r\n	    <p><a href=\"[field:arcurl/]\">[field:fulltitle/]</a></p>\r\n	    <p>[field:infos/]</p>\r\n	  </div>\r\n	  <div class=\"right_zx\">\r\n	    <ul>\r\n	      <li><a href=\"[field:arcurl/]\">了解详情</a></li>\r\n	      <li><a href=\"http://pdt.zoosnet.net/LR/Chatpre.aspx?id=PDT21034666&lng=cn\">在线咨询</a></li>\r\n	      <li><a href=\"http://pdt.zoosnet.net/LR/Chatpre.aspx?id=PDT21034666&lng=cn\">预约挂号</a></li>\r\n	    </ul>\r\n	  </div>\r\n    </div>\r\n  </div>\r\n",1338,2054);
$z[7]=Array("include","",2095,2132);
$z[7][4]['filename']="footer.htm";

?>