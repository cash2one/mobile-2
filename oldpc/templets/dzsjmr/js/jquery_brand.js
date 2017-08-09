
$(document).ready(function(e) {

//	for(var i=0;i<$('.events_list li').length;i++){
//		var w=$('.events_list li').eq(i).find('img').width();
//		var w_desc=w-60;
//		$('.events_list li').eq(i).css('width',w);
//		$('.events_list li .e_desc').eq(i).css('width',w_desc);
//	}

	$('#links li').mouseover(function(){
		$(this).removeClass('active');
		
	})
	
	
	$(function(){
		var win_height=$(window).height();
		var fl_height=$('.on_float').height();
		var fl_top=(win_height-fl_height)/2;
		$('.on_float').css('top',fl_top);
	})
	
//导航高度
	var selectorHeight = $('.nav11').height();
	//导航距顶部的高度
	var stickyTop = $('.nav11').offset().top;
	//数组：内容的id 距顶部高度 内容的高度
	var _arr_h = [];
	for (var i = 0; i < $("#links >li").length; i++)
	{
		var _id =$("#links >li").eq(i).attr('class');
//		console.log(' _id =  '+_id);
		var _top = $("#"+_id).offset().top;
		var _height = $("#"+_id).height();
		_arr_h.push({"Id":_id,"Top":_top,"Height":_height});
	};
	
	
	
	//窗口滚动
	$(window).scroll(function() {
		//滚动条高度
		var scrollTop = $(window).scrollTop();
		for (var i = 0; i < _arr_h.length; i++) {
			var _nowId = _arr_h[i].Id;
			var _nowTop = _arr_h[i].Top;
			var _nowHeight = _arr_h[i].Height;
			if(scrollTop>=(_nowTop-selectorHeight)&&scrollTop<=(_nowHeight+_nowTop)) {
				$("#links li").removeClass('active');
				$('#links .'+ _nowId).addClass('active');
			}
		};

		if (scrollTop > stickyTop) {
			//设置导航固定
			$('.brand_center .nav11').css({ 'position': 'fixed', 'top':0,'margin-top':0 });
		}
		else {//取消导航固定
			$('.brand_center .nav11').css({ 'position': '', 'top':'','margin-top':'' });
			$('#links li').removeClass('active');
		}
	})

	//鼠标点击导航
	$('#links li').click(function(e){
		//不要执行与事件关联的默认动作
		e.preventDefault();
		//当前点击的导航的id
		var id = $(this).attr('class');
//		console.log(' selectorHeight:    '+selectorHeight);
		//当前点击导航对应的内容距顶部高度-导航高度
		if($('div#'+ id).parents().hasClass('brand_center')){
//			alert('has class');
			var goTo = $('div#'+ id).offset().top -selectorHeight+1;
		}else{
			var goTo = $('div#'+ id).offset().top+1;
		}
		
		//console.log($(this).next().attr('class'));
		$('#links li').removeClass('active');
		$('#links .'+id).addClass('active');
		//$(this).addClass('active').siblings('#links li').removeClass('active');
		$("html, body").animate({ scrollTop: goTo }, 250);
	})
	
})