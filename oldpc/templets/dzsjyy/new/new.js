//顶部微信显示
$('.n_wx').hover(function(){
    $('.n_erweima').show();
},function(){
    $('.n_erweima').hide();
});


//品牌导航效果
$('.n_pipai ul li').hover(function(){
    $(this).children('a').children('span').children('img').show();
	$(this).children('a').children('i').show();
},function(){
    $(this).children('a').children('span').children('img').hide();
	$(this).children('a').children('i').hide();
});

$('.n_menu a').mousemove(function(){
$('.n_menu a').css('color','#8e0371');
$(this).css('color','#666666');

if($('.n_menu a').index(this)==0){
$('.n_pinpaizhongxin').animate({height: '220px', opacity: 'show'}, 'slow',function(){$('.n_pinpaizhongxin').show();});
	}else{
$('.n_pinpaizhongxin').animate({height: '0px', opacity: 'hide'}, 'slow',function(){$('.n_pinpaizhongxin').hide();});
		}
if($('.n_menu a').index(this)==1){
$('.n_keshishezhi').animate({height: '430px', opacity: 'show'}, 'slow',function(){$('.n_keshishezhi').show();});
	}else{
$('.n_keshishezhi').animate({height: '0px', opacity: 'hide'}, 'slow',function(){$('.n_keshishezhi').hide();});
		}
	
	});
	

//科室导航效果
$('.n_keshishezhi_type ul li').mousemove(function(){
$('.n_keshishezhi_type ul li a').css('color','#666666');
$(this).children('a').css('color','#8e0371');
$('.n_keshishezhi_type ul li i').hide();
$(this).children('i').show();
$('.n_keshishezhi_con ul').hide();
$('.n_keshishezhi_con ul').eq($('.n_keshishezhi_type ul li').index(this)).show();

	});
	




	
$(function(){ 
//初始化科室设置
$('.n_keshishezhi_type ul li').eq(0).children('a').css('color','#8e0371');
$('.n_keshishezhi_type ul li').eq(0).children('i').show();
$('.n_keshishezhi_con ul').eq(0).show();







}); 
