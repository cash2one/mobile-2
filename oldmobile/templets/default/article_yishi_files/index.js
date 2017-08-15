<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>404 error page</title>
<style>
	.main{text-align:center; margin:75px 0 0 0; font:normal normal 14px/1.8em normal;}
	.error_img{margin:0 0 20px 0;}
</style>
<script>
	var cnt = 0;
	function lod(){
		if(cnt < 0){
			window.location.href = "/";
		}else{
			document.getElementById("showTime").innerHTML = "页面将在<font color=red>" + cnt + "</font>秒后跳转到首页";
			cnt--;
		}
		setTimeout("lod()",1000);
	}
</script>
</head>
<body onLoad="lod()">

<div class="main">
	<div class="error_img"><img src="/404/404.png" /></div>
	<p id="showTime">123</p>
	出错啦！请尝试访问<a href="/">首页</a>
</div>

</body>
</html>