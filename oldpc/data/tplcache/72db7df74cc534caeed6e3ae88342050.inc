<li>
		<div class="link"><img src="{dede:global.cfg_templets_skin/}/imgs/n_accordion_{dede:global.itemindex/}.png"/><span>{dede:field name='typename'/}</span></div>
		<ul class="submenu">
			{dede:channel type='son' noself='yes'}
			<li><a href="[field:typelink/]">[field:typename/]</a><img src="[field:global.cfg_templets_skin/]/imgs/n_side_arrow.png" /></li>
			{/dede:channel}
		</ul>
	</li>