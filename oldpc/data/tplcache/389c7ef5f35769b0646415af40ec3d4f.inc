<h1>{dede:field name='typename'/}</h1>
		<ul  class="new_erwei1">
		{dede:list}
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
		{/dede:list}
		</ul>