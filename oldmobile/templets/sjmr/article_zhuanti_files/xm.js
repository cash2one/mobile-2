 	$(function(){
	
			//最新优惠触摸滑块
		/*$(".total2").text("0"+$("#xm_yh").find(".swiper-slide").size());
		news_swiper5 = new Swiper('.swiper5', {
			slidesPerView: "auto",
			loop: true,
			autoplay:300000000000000000000,
			calculateHeight:true,
			centeredSlides:true,
			resizeReInit:true,
			simulateTouch : true,
			autoplayDisableOnInteraction: false,
			onSlideChangeEnd:function(){
				var index5 = news_swiper5.activeLoopIndex;
				var n5 = index5+1;
				$("#xm_yh").find(".num").eq(0).text("0"+n5+" ");
				
			}
		});	*/
		//案例触摸滑块
		case_swiper = new Swiper('.swiper2', {
			pagination : '.pagination2',
			calculateHeight:true,
			loop:true,
			autoplay:3000,
			speed:500
		});
		
		//项目推荐
		$(".total3").text("0"+$("#xm_tj").find(".swiper-slide").size());
		//console.log($("#news").find(".swiper-slide").size());
		news_swiper6 = new Swiper('.swiper6', {
			slidesPerView: "auto",
			loop: true,
			autoplay:3000,
			calculateHeight:true,
			centeredSlides:true,
			resizeReInit:true,
			simulateTouch : true,
			autoplayDisableOnInteraction: false,
			onSlideChangeEnd:function(){
				var index6 = news_swiper6.activeLoopIndex;
				var n6 = index6+1;
				$("#xm_tj").find(".num").eq(0).text("0"+n6+" ");
				
			}
		});		
		
						
			//来院专家
		news_yiqi = new Swiper('.zjly', {
			slidesPerView: "auto",
			loop: true,
			autoplay:300000000000000000000,
			calculateHeight:true,
			centeredSlides:true,
			resizeReInit:true,
			simulateTouch : true,
			autoplayDisableOnInteraction: false,
		});	
		
			//整形日记
		news_yiqi = new Swiper('.zxrj', {
			slidesPerView: "auto",
			loop: true,
			autoplay:300000000000000000000,
			calculateHeight:true,
			centeredSlides:true,
			resizeReInit:true,
			simulateTouch : true,
			autoplayDisableOnInteraction: false,
		});	
			});


	
