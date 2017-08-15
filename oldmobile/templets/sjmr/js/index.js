// JavaScript Document
$(function(){
/* 选项卡 */
(function(){
       fnTab($('#rijitab'),$('.rijiwrap'),'click');
	   fnTab($('#sevtab'),$('.tabbox'),'click');
	   fnTab($('#dibunav'),'','click');
	   fnTab($('.nav'),'','click');
      function fnTab( oNav, aCon,sEvent)
	  {
	      var ali=oNav.children();
		  if(aCon != ''){
		     aCon.css("z-index","3");
		     aCon.animate({opacity:"0"}).eq(0).animate({opacity:"1"},0,function(){
			    aCon.eq(0).css("z-index","4");
			 });
			 }
		  ali.each(function(index){
		     $(this).on(sEvent,function(){
	        	ali.removeClass('active');
	            $(this).addClass('active');
				if(aCon != ''){
				  aCon.css("z-index","3");
				  aCon.css({opacity:"0"}).eq( index ).css({opacity:"1"});
				  aCon.eq(index).css("z-index","4");
				}
			 });
		  });
		  
	  }
  })();
  //搜索
 (function(){
 
   $(".searchInput").on("click",function(){
     		var _self = $(this);
			var hasLink = true;
			var obj = $(this).siblings("ul");
			obj.stop().slideToggle(300);
			
			var t=setTimeout(function(){
				obj.stop().slideUp(300);
			},3000);
			
			obj.hover(function(){
			   clearTimeout(t);
			
			},function(){
			
			t=setTimeout(function(){
				obj.stop().slideUp(300);
			},100);
			
			});
			
			
			obj.find("li").each(function(index, element) {
				$(this).click(function(e) {
					if(hasLink){
							_self.attr("data-src", $(this).find("a").attr("data-src"));
						}
					_self.text($(this).text());
					obj.stop().slideUp(300);
				});	
			});	
					
   });
   
	$(".sbtn").on("click", function() {
		//alert(0);
		$(this).attr({
			"href": $(".searchInput").attr("data-src"),
			"target": "_blank"
		});
	});	  
     
 })();
 //日记标题滑动
(function(){

var myScroll = new IScroll('#nwrapper',{preventDefault:false,scrollX: true, scrollY: false});
document.getElementById('nwrapper').addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
})();

//日记内容滑动
(function(){


 

		var gallaryImg;
		function setGallaryImgSlides(){
			$(".swiper").each(function(index) {
			    gallaryImg = new Swiper('.swiper'+index, {pagination : '.pagination'+index,calculateHeight:true,loop:true,autoplay:3000,speed:500})
			});
		}
		setGallaryImgSlides();
		
})();
   
(function(){
    var getMing;
		function Mingxing(){
			$(".mingxing").each(function(index) {
			    getMing = new Swiper('.mingxing'+index, {slidesPerView:2.6,paginationClickable: true})
			});
		}
		Mingxing();
	
	var	zj = new Swiper('.zjList', {slidesPerView:3.6,paginationClickable: true})
		

})();   
//banner
(function(){
 var banner= new Swiper('.caonima', {pagination : '.pag',calculateHeight:true,loop:true,autoplay:3000,speed:500});

})();

  // update文字弹性滑动
  (function(){
 		var oDiv = $('.uplist');
		var oUl = oDiv.find('ul');
		var iH = 0;
		var iNow = 0;
		var timer = null;
		iH=oUl.find('li').height();
		var arrData = oUl.find('li');

		function doMove(num){
		   iNow+=num;
		   if(iNow>0)
		   {
		     iNow = -(arrData.length-1);
		   }
		   if(Math.abs(iNow)>arrData.length-1)
		   {
		     iNow = 0;
		   }		   
		   oUl.stop().animate({ 'top': iH*iNow }, 500);
		  	
		}
		function autoplay(){		
		   timer=setInterval(function(){
		      doMove(-1);
		   },2500);
		}
		oDiv.hover(function(){
		  clearInterval(timer);
		},autoplay);
		autoplay();
			 
  })();   
   
   
});	