<div class="n_xwzt_sec_list">
			  <img src="{dede:global.cfg_templets_skin/}/imgs/nav_imgs/img{dede:field.typeid /}.jpg"/>
              <h2><a href="{dede:field name='typeurl'/}" target="_blank">{dede:field name='typename'/}</a><a href="{dede:field name='typeurl'/}" class="more" target="_blank">更多>></a></h2>
		       <p><a href="{dede:field name='typeurl'/}" target="_blank">{dede:field.description function='cn_substr(@me,170)'/}...</a></p>
              <p class="cute"></p>
              <ul>
              	{dede:arclist infolen=20 row=3}
                <li><a href="[field:arcurl/]" target="_blank">[field:title/]</a></li>
                {/dede:arclist}
              </ul>
            </div>