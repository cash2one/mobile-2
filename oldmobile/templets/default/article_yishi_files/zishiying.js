// JavaScript Document
$(function(){
var wW=$(window).width();
//自适应
//文字		   
	function resizeFont(){
		if(wW<640){

		$(".swiper8 .tt1").css({"fontSize":wW*0.06,"lineHeight":wW*0.0035});
		$(".swiper8 .txt1").css({"fontSize":wW*0.035,"lineHeight":wW*0.0037});
		//$(".swiper8 .txt2").css({"fontSize":wW*0.035,"lineHeight":wW*0.0026});	
		
		$(".ep_list .tt2").css({"fontSize":wW*0.043,"lineHeight":wW*0.003});
		$(".ep_list .tt1").css({"fontSize":wW*0.032});	
		//$(".ep_ar_part1 .tt1").height(wW*0.09*1.01);
		$(".ep_ar_part1 .tt1").height(wW*0.07*1.01);
		var th=$(".ep_ar_part1 .tt1").height();
		$(".ep_ar_part1 .tt1").css({"fontSize":wW*0.045,"lineHeight":th+"px"});
		$(".ep_ar_part1 .txt1").height(wW*0.138*1.01);
		$(".ep_ar_part1 .txt1").css({"fontSize":wW*0.03,"lineHeight":wW*0.0035});
		$(".ep_ar_part1 .txt").height($(".ep_ar_part1 .pic").height());
		$(".ep_ar_part2 .tt2").height(wW*0.08*1.03);
		var th1=$(".ep_ar_part2 .tt2").height();
		$(".ep_ar_part2 .tt2").css({"fontSize":wW*0.045,"lineHeight":th1+"px"});
		
		

		


		
		
		
			}
		else{
			wW=640;
		}
		//$("#tCont #contBox li").outerWidth();
		$("#tCont #contBox").width($("#tCont #contBox li").outerWidth()*($("#tCont #contBox li").size()+1));	
		$(".ep_ar_part2 .tt2").height(wW*0.08*1.03);
		var th1=$(".ep_ar_part2 .tt2").height();
		$(".ep_ar_part2 .tt2").css({"fontSize":wW*0.045,"lineHeight":th1+"px"});		
		$(".ep_ar_part2 .tt3").height(wW*0.08*1.03);
		var th1=$(".ep_ar_part2 .tt3").height();
		$(".ep_ar_part2 .tt3").css({"fontSize":wW*0.035,"lineHeight":th1+"px"});
	
		$(".ep_ar_part3 .tt2").height(wW*0.08*1.03);
		var th1=$(".ep_ar_part3 .tt2").height();
		$(".ep_ar_part3 .tt2").css({"fontSize":wW*0.045,"lineHeight":th1+"px"});	
		$(".ep_ar_part3 .tt3").height(wW*0.043*1.02);
		var th1=$(".ep_ar_part3 .tt3").height();
		$(".ep_ar_part3 .tt3").css({"fontSize":wW*0.032,"lineHeight":th1+"px"});	

       //专家预约滑动
        //$(".teyue .smallPic li").width(wW*0.2);
			
		
       //整形日记滑动
        //$(".xm_rj_list .smallPic li").width(wW*0.3);
		//$(".xm_rj_list .smallPic").width($(".xm_rj_list .smallPic li").width()*$(".xm_rj_list .smallPic li").size());	
	
	
		}

	

	resizeFont();	
	$(window).resize(function(){resizeFont();});		
//end 自适应		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   })