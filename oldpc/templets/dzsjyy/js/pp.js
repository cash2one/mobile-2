// JavaScript Document
$(function(){
	$(".so").click(function(){
		$(".so").hide();
		$(".sor").animate({width:"160px"},"slow");
		$(".sot").show().focus();
		$(".so_h5").show();
	});
	$(".sot").blur(function(){
		setTimeout(sorct,1000);
	});
	navc(".nav>li",".navc");
	pp(".pzk span,.ksk span,.zhk span,.dik span");
	 var kuan=document.body.clientWidth;//
	 $(".ck").html($(window).height());;
	 var kbl=$(window).height();
	 if(kbl<636) kbl=636;
	 $(".bana,.banw,.ban,.ban .banw a").animate({height:kbl},1)
	$(".banw").slideshow({
      width      : kuan,
      height     : kbl,
	  delay: 8000,
	  duration: 1200,
      transition : 'bar'
    });
	$(".jquery-slider-selectors").wrap("<div class=banx></div>");
	navb(".fw>.bca",".bcc");
	cdm(".idc",".ine li");
	cdm(".zjc",".zju li");
	mae(".idk",".idl1",".idr1");
	mae(".idk2",".idl2",".idr2");
	mae(".idk3",".idl3",".idr3");
	$(".banp").click(function(){
		$("body").animate({
			"top": "-" + kbl + "px"				  
		});	
		$(window).scrollTop(kbl);
	});
	$(".kst").hide();
	$(".kst").click(function(){
		 $('body,html').animate({scrollTop:0},1000);  					 
	});
	$(window).scroll(function(){
			var scrollTop = $(window).scrollTop()-kbl;
			var sct=$(window).scrollTop()-50;
			if(scrollTop>=0){
				$(".header").stop().css("position","fixed");
				$(".head").addClass("hover");	
			}else{
				$(".header").stop().css("position","absolute");
				$(".head").removeClass("hover");
			}
			if(sct>=0){
				$(".kst").show();
			}else{
				$(".kst").hide();
			}
		});
	ssel(".itse");
	$(".lian span").hover(function(){
		$(".yql").show();
	},function(){
		$(".yql").hide();
	});
	cdm(".dac",".da li");
	$(".#tFocus-btn li").click(function(){
		var index = $(".#tFocus-btn li").index($(this));
		$(".shec").stop(true,false).hide().eq(index).stop(true,false).show();
	});
});



function sorct(){
	$(".sor").animate({width:"18px"},"slow");
	$(".so").show();
	$(".sot").hide();
	$(".so_h5").hide();
}
function pp(str){
	$(str).hover(function(){
		$(str).removeClass("hover");
		$(this).addClass("hover");	
	});
	}
function cdm(daia,xix){
//´óÐ¡
	$(xix).hover(function(){
		var index = $(xix).index($(this));	
		$(xix).removeClass("hover").eq(index).addClass("hover");
		$(daia).stop(true,false).hide().eq(index).stop(true,false).show();
	});
}
function nav(dou,ccc){
	$(dou).hover(function(){
		$(dou).stop(true,false).find(ccc).hide();							 
		$(this).stop(true,false).find(ccc).show();
	},function(){
		$(this).stop(true,false).find(ccc).hide();
	});	
}
function navc(dou,ccc){
	$(dou).hover(function(){
		$(dou).stop(true,false).find(ccc).hide();
		$(this).stop(true,false).find(ccc).slideDown(280);
		$(".navb").stop(true,false).slideDown(240);
		$(".head").addClass("hhd");	
		var nah=$(this).find(ccc).height();
		var abb=$(this).attr("id");
		if(nah>0){
			if(abb==4){
				$(".navb").animate({height:(nah+320)},1);
			}else{
				if(abb==3 || abb==5){
					$(".navb").animate({height:(nah+235)},1);
				}else{
					$(".navb").animate({height:(nah+190)},1);
				}
			}
		}else{
			$(".navb").animate({height:0},1).hide();
		}
	},function(){
		//$(this).stop(true,false).find(ccc).hide();
		$(this).stop(true,false).find(ccc).slideUp(200);
		$(".navb").slideUp(500);
		$(".head").removeClass("hhd");
	});	
}
function navb(dou,ccc){
	$(dou).hover(function(){
		$(dou).removeClass("hover");
		$(this).addClass("hover");			  	
		$(dou).stop(true,false).find(ccc).hide();							 
		//$(this).stop(true,false).find(ccc).show();
		$(this).stop(true,false).find(ccc).slideDown();
	},function(){
		//$(this).stop(true,false).find(ccc).hide();
		$(this).stop(true,false).find(ccc).slideUp(200);
	});	
}
function ssel(dia){
	$(dia).find("input").click(function(){
		var thisinput=$(this);
		var thisul=$(this).parent().find("ul");
		if(thisul.css("display")=="none"){
			thisul.fadeIn("100");
			thisul.hover(function(){},function(){thisul.fadeOut("100");})
			thisul.find("li").click(function(){thisinput.val($(this).text());thisul.fadeOut("100");}).hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});
			}
		else{
			thisul.fadeOut("fast");
			}
		});	
}
function mae(daia,dail,dair){
	//´ó×óÓÒ
	var len = $(daia).length;
	var index = 0;
		$(dail).click(function(){
			index++;
			if(index>len-1) index=0;
			changeImgx(index);
			});
		$(dair).click(function(){
			index--;
			if(index<0) index=len-1;
			changeImgx(index);
			});
		function changeImgx (index)
		{
			$(daia).hide().eq(index).show();
		}
		function changleix()
		{
				index >= len-1 ? index=0 : index++;
				changeImgx(index);
		}
	}
