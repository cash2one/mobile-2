<dl class="tbox">

	<a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}
			<a href="{dede:field name='typeurl'/}"></a>
	
			{dede:arclist titlelen='60' row='8'}
			<li>
				<span class="date">[field:pubdate function="MyDate('m-d',@me)"/]</span>
				<a href="[field:arcurl /]">[field:title /]</a>
			</li>
			{/dede:arclist}

	<h1>{dede:field name='typename'/}</h1>
		<ul  class="new_erwei1">
		{dede:arclist addfields='jiage' channelid='2'}
			<li>
				<a  href="[field:linkurl/]">
					<!--  封面  -->
					<img src="[field:cover_img/] " width="202px" height="317px"/>	
				</a>
				<div class="erwei">
					<!-- 二维码图片 -->
					<img src="[field:erwei_img/] " width="170" />	
				</div>
				<h2>[field:title /]</h2>
				<a href="[field:arcurl/]" title="[field:fulltitle /] " class="btn_video">点阅</a>
			</li>
		{/dede:arclist}
		</ul>