<?php
$z[0]=Array("global","",236,264);
$z[0][4]['name']="cfg_soft_lang";
$z[1]=Array("datalist","\r\n<?php\r\n\$fields['stime'] = GetDateTimeMk(\$fields['senddate']);\r\n\$fields['arcurl'] = GetArcUrl(\$fields['aid'],\$fields['typeid'],\$fields['senddate'],\$fields['title'],\$fields['ismake'],\$fields['arcrank'],\$fields['namerule'],\$fields['typedir'],\$fields['money']);\r\n\$fields['typeurl'] = GetTypeUrl(\$fields['typeid'],MfTypedir(\$fields['typedir']),\$fields['isdefault'],\$fields['defaultname'],\r\n			\$fields['ispart'],\$fields['namerule2'],\$fields['moresite'],\$fields['siteurl'],\$fields['sitepath']);\r\n?>\r\n		<dl>\r\n			<dt><a href=\"{dede:field.arcurl/}\" target=\"_blank\">{dede:field.title/}</a></dt>\r\n			<dd><p>{dede:field.description1/}...</p></dd>\r\n			<dd>\r\n				<span><a href=\"{dede:field.arcurl/}\" target=\"_blank\">{dede:field.arcurl/}</a></span>\r\n				<span>类别: <a href=\"{dede:field.typeurl/}\" target=\"_blank\">{dede:field.typename/}</a></span>\r\n				<span>点击: {dede:field.click/}</span>\r\n				<span>日期: {dede:field.stime/}</span>\r\n			</dd>\r\n		</dl>\r\n",2414,3393);
$z[2]=Array("pagelist","",3430,3459);
$z[2][4]['listsize']="5";

?>