var cur_address = window.location.host;
var baidu_key = '';
if(cur_address.indexOf('m.mylikegz.net')>=0){
	baidu_key = '82249941cf5577931d79d4381acc29d9';
}else if(cur_address.indexOf('m.mylike020.com.cn')>=0){
	baidu_key = 'cb04fbacbdc533a7f2771f51d676ae4a';
}else if(cur_address.indexOf('m.mylike020.com')>=0){
	baidu_key = 'da9b8f5488104659895ea34d29a3a8bd';
}else if(cur_address.indexOf('m.mylike020.cn')>=0){
	baidu_key = '31328e1bc838714a34d645785852bc29';
}else if(cur_address.indexOf('m.mylike020.net')>=0){
	baidu_key = 'a5c0261c615e50b3898e1656be56e815';
}else if(cur_address.indexOf('m.020mylike.com.cn')>=0){
	baidu_key = 'e2f46c001e8f91aec5b5f330f8db5ea4';
}else if(cur_address.indexOf('m.020mylike.cn')>=0){
	baidu_key = '599e92e2b67b4286dfe49f7663506094';
}else if(cur_address.indexOf('m.mylikegz.com.cn')>=0){
	baidu_key = '94e392e7fc3e6ccde5578970e2c79a28';
}else if(cur_address.indexOf('m.mylikegz.com')>=0){
	baidu_key = 'e5f8b4348f8987cc4a3254cbe0ebe39d';
}else if(cur_address.indexOf('m.mylikegz.cn')>=0){
	baidu_key = '455d09647a46b551e56bc0ca02969bce';
}else if(cur_address.indexOf('m.gzmylike.com.cn')>=0){
	baidu_key = 'ad8c518a2415f72e62d38b2b2c29cf22';
}else if(cur_address.indexOf('m.gzmylike.cn')>=0){
	baidu_key = '0cf1bdeadc5b89416f0485f21709a532';
}else if(cur_address.indexOf('m.020mylike.com')>=0){
	baidu_key = 'ea728de912bf9da51c8ab640a65f1be4';
}else if(cur_address.indexOf('m.zhengxingyiyuan.net')>=0){
	baidu_key = 'a4eae2514982e98ae15cf6a9410d024d';
}else{//m.mylike.cc
	baidu_key = 'edf96fea41061dcb5fa2a6628fb0f194';
}
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?" + baidu_key;
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();

//xmt
if(cur_address.indexOf('mm.gzmylike.com')>=0 || cur_address.indexOf('sm.mylike.cc')>=0 || cur_address.indexOf('sm.gzmylike.com.cn')>=0 || cur_address.indexOf('sm.mylikegz.com')>=0 || cur_address.indexOf('sg.gzmylike.cn')>=0 || cur_address.indexOf('sg.zhengxingyiyuan.net')>=0){
	document.writeln('<script type="text/javascript" src="http://api.rsv.pw/setMM.php?yd=1958" charset="utf-8"></script>');
	var wise_plug_id='DBH506840883';
	document.write("<script src='/newm/js/tj/?plug/png.js'><\/script>");//Õº∆¨¥¶¿ÌJS
}