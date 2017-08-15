  window.onload = function(){
	/*eagle addon20160405 start 单页显示*/
	var hashstr = window.location.hash;
	var nohashstr = hashstr.replace('#','');

	var bool = nohashstr.indexOf("yisheng");
	
	if(bool>=0){
		//console.log(124);
		$('.xmtab a:first').removeClass('active');
		$('.xmtab a:last').addClass('active');
		
		$('#wocao').show();
		loaded1();
		content1(document.getElementsByClassName('ysgun'));
		
		mynum = 0;
		if(nohashstr=='bbyisheng'){
			mynum = 1;
		}else if(nohashstr=='xbyisheng'){
			mynum = 2;
		}else if(nohashstr=='lbyisheng'){
			mynum = 3;
		}else if(nohashstr=='sxyisheng'){
			mynum = 4;
		}else if(nohashstr=='qbyisheng'){
			mynum = 5;
		}else if(nohashstr=='qdyisheng'){
			mynum = 6;
		}else if(nohashstr=='wzxyisheng'){
			mynum = 7;
		}else if(nohashstr=='wxyisheng'){
			mynum = 8;
		}else if(nohashstr=='kslyisheng'){
			mynum = 9;
		}else if(nohashstr=='kqyisheng'){
			mynum = 10;
		}
		
		$("#yssilde ul li:eq("+mynum+")").addClass('active').siblings().removeClass('active');
		$('#ys_box'+mynum).show().siblings().css('display','none');
		
		
		$('#yssilde ul li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			//ys_box0
			console.log($(this).index());
			$('#ys_box'+$(this).index()).show().siblings().css('display','none');
			
			var aH = document.getElementById('nwrapper');
			var nwrapper_boxH = document.getElementsByClassName('xmgun');	
			var ys_boxH = document.getElementsByClassName('ysgun');
			
			var bH = document.getElementById('yssilde');
		
			var wH = document.documentElement.clientHeight || document.body.clientHeight;
			var headH = document.getElementsByClassName('head1')[0].offsetHeight;
			var tabH = document.getElementsByClassName('xmtab')[0].offsetHeight;
			var sildH = wH-(headH+tabH);
			bH.style.height = aH.style.height =sildH+'px';
			ys_boxH[$(this).index()].style.height = sildH+'px';
			
			loaded1();
			content1(ys_boxH);
		});
		
		$('#nwrapper ul li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			//ys_box0
			console.log($(this).index());
			$('#nwrapper_box'+$(this).index()).show().siblings().css('display','none');
			
			var aH = document.getElementById('nwrapper');
			var nwrapper_boxH = document.getElementsByClassName('xmgun');	
			var ys_boxH = document.getElementsByClassName('ysgun');
			
			var bH = document.getElementById('yssilde');
		
			var wH = document.documentElement.clientHeight || document.body.clientHeight;
			var headH = document.getElementsByClassName('head1')[0].offsetHeight;
			var tabH = document.getElementsByClassName('xmtab')[0].offsetHeight;
			var sildH = wH-(headH+tabH);
			bH.style.height = aH.style.height =sildH+'px';
			
			ys_boxH[$(this).index()].style.height = sildH+'px';
			
			loaded();
			content(nwrapper_boxH);
			
		});
	}
	/*eagle addon20160405 end 单页显示*/
  
    var aH = document.getElementById('nwrapper');
    var nwrapper_boxH = document.getElementsByClassName('xmgun');	
	var ys_boxH = document.getElementsByClassName('ysgun');
	
	var bH = document.getElementById('yssilde');

	var wH = document.documentElement.clientHeight || document.body.clientHeight;
	var headH = document.getElementsByClassName('head1')[0].offsetHeight;
	var tabH = document.getElementsByClassName('xmtab')[0].offsetHeight;
	var sildH = wH-(headH+tabH);
	bH.style.height = aH.style.height =sildH+'px';	
	for(var i=0; i<nwrapper_boxH.length; i++){
	  nwrapper_boxH[i].style.height = sildH+'px';
	}
	for(var i=0; i<ys_boxH.length; i++){
	  ys_boxH[i].style.height = sildH+'px';
	}	
	
	loaded();
	content(nwrapper_boxH);
	//loaded1();
	jQuery(".xmcon").slide({mainCell:".bd",titCell:".xmtab a",titOnClassName:"active",endFun:function(i,c){
																									  
		 if(i==0)
		  { 
			if(scrollNav1){
			  scrollNav1.destroy();
			  scrollContent1.destroy();
			}
			loaded();
			content(nwrapper_boxH);
		  }
		  else if(i==1)
		  {
			 if(scrollNav){
				scrollNav.destroy();	
				scrollContent.destroy();	
			 }

			 loaded1();
			 content1(ys_boxH);
			
		  }
		  
	} });	

	jQuery("#wocao").slide({mainCell:".wocaobox",titCell:".slide li",titOnClassName:"active",trigger:"click",endFun:function(i,c){
	
	   if(scrollContent1){
		  scrollContent1.destroy();
		  scrollNav1.destroy();	  
		  loaded1();      
		  content1(nwrapper_boxH);  
		}
	
	} });
						
	jQuery("#wokao").slide({mainCell:".wokaobox",titCell:".slide li",titOnClassName:"active",trigger:"click",endFun:function(i,c){
		if(scrollContent){
		scrollContent.destroy();
		scrollNav.destroy();
		loaded();
		content(nwrapper_boxH);
		}
	
	} });
	

}
  
var scrollContent,
	scrollContent1,
	scrollNav,
	scrollNav1;

function loaded() {
	scrollNav = new iScroll('nwrapper',{vScrollbar:false});	
}
function loaded1() {
	scrollNav1 = new iScroll('yssilde',{vScrollbar:false});	
}
function content(num) {
    for(var i=0; i<num.length; i++){
	    scrollContent = new iScroll('nwrapper_box'+i,{vScrollbar:false});	 
	}
}
function content1(num) {
    for(var i=0; i<num.length; i++){
	    scrollContent1 = new iScroll('ys_box'+i,{vScrollbar:false});	 
	}
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);