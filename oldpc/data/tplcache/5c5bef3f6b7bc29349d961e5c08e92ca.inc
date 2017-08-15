<h1>{dede:field name='typename'/}</h1>
		<ul  class="new_erwei{dede:sql sql='SELECT uid,username,email,memberid FROM `phpwind87`.pw_members ORDER BY uid desc' appname='phpwind'}

    [field:uid/]-[field:username/]<br />

{/dede:sql}

">
		{dede:arclist   addfields='cover_img,erwei_img,linkurl' channelid='19'}
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
				<a href="[field:linkurl/]" title="[field:fulltitle /] " class="btn_video">点阅</a>
			</li>
		{/dede:arclist}
		</ul>