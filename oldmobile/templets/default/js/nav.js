window.onload=function(){



   var aCon = document.getElementById('wrapbox');
   var oBtn = document.getElementById('oBtn');
   var navbg = document.getElementById('navbg');
   var onOff = true;
   //滑动参数

  var ww = document.getElementById('wrap').offsetWidth;
   var iScroll = 0;//默认滚动的距离
   var iStartX = 0;//默认按下的位置
   var iNow = 0;
   var iStarScroll = 0;//存按下时上一次移动后停下的iScroll的值
   
   navbg.addEventListener('touchmove',function(e){
       e.preventDefault();
   
   },false);	
   
  oBtn.addEventListener('click',diji,false);
  function diji(){
      iScroll=ww*0.6;
      if(onOff){
	    aCon.style.transform=aCon.style.WebkitTransform='translateX('+ iScroll +'px)';
		document.getElementsByTagName('body')[0].style.overflow='hidden';
		aCon.addEventListener('touchstart',Touchstart,false);
		aCon.addEventListener('touchmove',Touchmove,false);		   
		aCon.addEventListener('touchend',Touchend,false); 
	  }
	  else
	  {
	    aCon.style.transform=aCon.style.WebkitTransform='translateX(0px)';
		aCon.removeEventListener('touchstart',Touchstart,false);
		aCon.removeEventListener('touchmove',Touchmove,false);		   
		aCon.removeEventListener('touchend',Touchend,false); 
		document.getElementsByTagName('body')[0].style.overflow='';
	  }
	  onOff=!onOff;			   		   	   
  };
  function Touchstart(e){
  		iStartX = e.changedTouches[0].pageX;
		iStarScroll = iScroll;
		
  
  }
  function Touchmove(e){
    
          e.preventDefault();
		  
	   var iDis = e.changedTouches[0].pageX - iStartX;
	   iScroll = iStarScroll + iDis;
	   moveto();
  
  }
  function Touchend(e){
	   var iDis = e.changedTouches[0].pageX - iStartX;
		iScroll = iStarScroll + iDis;

		 //var iNub=Math.round(iDis/window.screen.width);
		//iNow-=iNub;
		if(iDis<0)
		{
			iNow=0;	
		   	aCon.removeEventListener('touchstart',Touchstart,false);
	    	aCon.removeEventListener('touchmove',Touchmove,false);		   
		    aCon.removeEventListener('touchend',Touchend,false); 	
			document.getElementsByTagName('body')[0].style.overflow='';
		   onOff=true;
		}
		if(iDis>0)
		{
			iNow=0.6;
		}
		
		iScroll=iScroll=iNow*ww;
		moveto();
  
  }
  
  function moveto(){
     aCon.style.transform=aCon.style.WebkitTransform='translateX('+ iScroll +'px)';

  }

}