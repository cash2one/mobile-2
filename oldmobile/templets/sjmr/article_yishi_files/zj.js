 	$(function(){
//ר������banner
ban_swiper8 = new Swiper('.swiper8', {
			pagination : '.pagination8',
			calculateHeight:true,
			loop:true,
			autoplay:3000,
			speed:500
		});	
//ר�����İ���
ban_swiper9 = new Swiper('.swiper9', {
			pagination : '.pagination9',
			calculateHeight:true,
			loop:true,
			autoplay:3000,
			speed:500
		});	
		//��Ŀ�Ƽ�
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
			   
			   
			   
			   });
