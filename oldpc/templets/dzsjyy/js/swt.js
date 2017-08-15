// JavaScript Document

//引用商务通

document.writeln("<script language=\"javascript\" src=\"http://pdt.zoosnet.net/JS/LsJS.aspx?siteid=PDT21034666&float=1\"></script>");

function swt_hm(obj){

var ins=$(obj).parents("div").attr("id");

var swt="http://pdt.zoosnet.net/LR/Chatpre.aspx?id=PDT21034666&r="+document.referrer+ins+"&p="+window.location.href;

window.open(swt);

}//引用结束(此处应用第三方的聊天工具)







//商务通 CSS 开始



document.writeln("<style type=\"text/css\">");

document.writeln("/* 格式化 */");

document.writeln("img { border: none; }");

document.writeln("#LRdiv0,#LRdiv1,#LRdiv2,#LRfloater0,#divM,#LR_Flash,#BDBridgeWrap{ display: none;}");

document.writeln("#divM,#divL,#divR,#divM_suoxiao{position: fixed;z-index: 214748364;}");

document.writeln("#divL,#divR{top:150px;_position: absolute;_top:expression(offsetParent.scrollTop+200);}");

document.writeln("#divL{ left: 5px;width:140px; height:140px;}");

document.writeln("/* 格式化 */");

document.writeln("/*  swtBg   */");

document.writeln("#swtBg {width: 100%;height: 100%;background-color: #CCCCCC;_position: absolute;_top:expression(offsetParent.scrollTop+0);top: 0;left: 0;opacity: 0.7;filter: alpha(opacity=70) !important;z-index: 3000;}");

document.writeln("/*  swtBg  */");

document.writeln("/*  divR  */");

document.writeln("#divR { left: 5px; width: 50px; height: 274px;background: url(/swt/swtimg/gtswt.png) 0 0 no-repeat;}");

document.writeln("#divR a{ display: block; width: 50px; height: 55px;background: #9d0a3a url(/swt/swtimg/gtswt.png) 0 0 no-repeat; margin-bottom: 1px; position:relative}");

document.writeln("#divR a:hover{background-color:#6f082a}");

document.writeln("#divR a.sendweix img{display:none;position:absolute;left:-150px; top:-45px; padding-left:4px}");

document.writeln("#divR a:hover.sendweix img{display:block;}");

document.writeln("");

document.writeln("#divR .backto_top{ height: 50px; bottom: 0; cursor: pointer; background: none }");

document.writeln("#divR .backto_top:hover{ background:#1d1d1d; opacity:0.5}");

document.writeln("#divRsjs{display:block;width:20px; height:16px;border-radius:45%; background-color:#ff0000; position:absolute;left:4px; top:4px; font-family:arial;font-size:12px; color:#FFF; text-align:center;line-height:16px; font-style:normal}");

document.writeln("/*  divR  */");

document.writeln("/*  divM  */");

document.writeln("#divM {width: 550px;height: 326px;background:url(/templets/dzsjyy/zhuanti/biguanshenghui/tanchuang.png) 0px 0 no-repeat; left: 50%;bottom: 50%;margin-left: -195px;margin-bottom: -115px;_position: absolute;_bottom: expression(offsetParent.scrollTop+242);box-shadow: 0 0 35px #000;-webkit-box-shadow: 0 0 35px #000;-moz-box-shadow: 0 0 35px #000;}");

document.writeln("#divM_suoxiao{width:261px; height:138px;left:-225px;bottom:-154px;_position: absolute;_bottom: expression(offsetParent.scrollTop+242);overflow:hidden;background:url(/swt/swtimg/djzx.png) 0px 0px no-repeat;opacity:0}");

document.writeln("#divM_suoxiao:hover{background:url(/swt/swtimg/djzx.png) -267px 0 no-repeat}");

document.writeln("#divM_suoxiao.divM_suoxiaobg2{background:url(/swt/swtimg/djzx.png) -267px 0 no-repeat}");

document.writeln("#divM_suoxiao a{position:absolute;background:none}");

document.writeln("#divM_suoxiao a:hover{background:none}");

document.writeln("#divM_suoxiao #divM_suoxiao_a{width:261px; height:138px;z-index: 1;}");

document.writeln("#divM_suoxiao #divM_suoxiao_b{width:24px; height:24px;top: 0px;right:10px;z-index: 2;}");

document.writeln("#divM a{position:absolute;display: block; width:95px; height:35px;top:270px;background:url(/swt/swtimg/gtswt.png) -9999px -9999px no-repeat}");

document.writeln("#divM #divMagb{ right:4px;top:4px; width:30px; height:30px}");

//document.writeln("#divMz{background: url(/swt/swtimg/swtanniu.png) no-repeat; width:95px; height:35px; display:block; overflow:hidden;position: absolute;top: 270px;left: 170px;}");
//
//document.writeln("#divMx{background: url(/swt/swtimg/swtanniu.png) -104px 0 no-repeat; width:95px; height:35px; display:block; overflow:hidden;position: absolute;top: 270px;left: 285px;}");

document.writeln("#divM #divMa1{left:170px}");

document.writeln("#divM #divMa2{left:285px}");

document.writeln("#divM #divMagb:hover{background:none}");

document.writeln("#divM #divMa1:hover{background-position:-227px -255px}");

document.writeln("#divM #divMa2:hover{background-position:-331px -255px}");


document.writeln("#mybtn{left:285px !important; width:233px !important; height:39px !important; left:158px !important; position:absolute; top:260px !important; background:url(/templets/dzsjyy/zhuanti/biguanshenghui/tanchuangtext.gif) no-repeat !important;}");


document.writeln("/*  divM  */");

document.writeln("</style>");

//商务通 CSS 结束

/************************中间***********************/

/*中间弹出和右下角*/

document.writeln("<div id=\"divM\">");

document.writeln("<div id=\"divMz\">");

document.writeln("</div>");

document.writeln("<div id=\"divMx\">");

document.writeln("</div>");

document.writeln("     <a id=\"divMagb\" href=\"javascript:void(0)\" onclick=\"closeM()\" target=\"_self\" title=\"关闭\"></a>");

//document.writeln("     <a id=\"divMa1\" href=\"javascript:void(0)\" onclick=\"swt_hm(this)\" target=\"_self\" title=\"在线咨询\"></a>");
//
//document.writeln("     <a id=\"divMa2\" href=\"javascript:void(0)\"  onclick=\"swt_hm(this)\" target=\"_self\" title=\"稍后联系\"></a>");


document.writeln("     <a id=\"mybtn\" href=\"javascript:void(0)\"  onclick=\"swt_hm(this)\" target=\"_self\"></a>");

//onclick=\"closeM()\"

document.writeln("</div>");

document.writeln("<div id=\"divM_suoxiao\">");

document.writeln("    	<a id=\"divM_suoxiao_a\" onclick=\"swt_hm(this)\"  href=\"javascript:void(0)\"           target=\"_self\" title=\"点我咨询\"></a>");

document.writeln("    	<a id=\"divM_suoxiao_b\" href=\"javascript:void(0)\" onclick=\"closeMsx()\" target=\"_self\" title=\"关闭\"></a>");

document.writeln("</div>");









//中间弹框第一次弹出时间

setTimeout("openM()",50000);//1000

function openM(){

	$("#divM").fadeIn(1000);

	$("#divM").css("display","block");

}



//执行计划

function openMdivM(){

	$("#divM").fadeIn(1000)

}

function openMdivM_suoxiao1(){

	$("#divM_suoxiao").addClass('divM_suoxiaobg2');

}

function openMdivM_suoxiao2(){

	$("#divM_suoxiao").removeClass('divM_suoxiaobg2');

}



$(document).ready(function(){

//如果用户不点击就自动化

	$("#divMagb,#divMa2").click(function(){

		//setTimeout("openMdivM()",50000);//15秒后再次弹出

		setTimeout("openMdivM_suoxiao1()",3000);//中间点击3秒后加载亮背景class

		setTimeout("openMdivM_suoxiao2()",5000);//中间点击5秒后移除亮背景class

		

		$("#divM").animate({'width':'0','height': '0','left': '0%','bottom': '0%','margin-left':'0px','margin-bottom': '0px'},1000);

		$("#divM").fadeOut(1000).delay(50000).animate({'width':'550px','height': '326px','left': '50%','bottom': '50%','margin-left':'-195px','margin-bottom': '-115px'},1000);

		$("#divM_suoxiao").show().animate({left:0,bottom:0},1000).animate({opacity:1},1000).delay(13000).fadeOut(1000).animate({left:-225,bottom:-154,opacity:0});//animate占用了2秒 所以是 15000-2000=13000

	});					

						

	//如果用户点击

	$("#divM_suoxiao_b").click(function(){

		  $("#divM_suoxiao").hide().removeClass('divM_donghua'); 

	});		  

});

/************************中间结束*******************/





