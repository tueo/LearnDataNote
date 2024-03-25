"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[713],{3671:(t,e)=>{e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[t,o]of e)n[t]=o;return n}},9251:(t,e,n)=>{n.r(e),n.d(e,{comp:()=>d,data:()=>m});var o=n(7847);const a=[(0,o.Fv)('<h1 id="sim" tabindex="-1"><a class="header-anchor" href="#sim"><span>SIM</span></a></h1><h2 id="command-apdu的最小长度和最大长度" tabindex="-1"><a class="header-anchor" href="#command-apdu的最小长度和最大长度"><span>command APDU的最小长度和最大长度</span></a></h2><ul><li><strong>最小长度为4</strong></li><li><strong>最大长度为261</strong></li></ul><p>这里的APDU协议指SIM中使用的APDU，按照102221文档内容分析。</p><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/sim_contents_of_command_apdu.png" alt="sim_contents_of_command_apdu.png" tabindex="0" loading="lazy"><figcaption>sim_contents_of_command_apdu.png</figcaption></figure><p>command APDU分为两个部分，分别是<code>Header</code>和Body，<code>Header</code>是一个command APDU必须具备的，占4个字节，<code>Body</code>则是可选内容。</p><p>从上面的结构看，命令APDU存在如下4种结构：</p><table><thead><tr><th>Case</th><th>Structure</th></tr></thead><tbody><tr><td>1</td><td>CLA INS P1 P2</td></tr><tr><td>2</td><td>CLA INS P1 P2 Le</td></tr><tr><td>3</td><td>CLA INS P1 P2 Lc Data</td></tr><tr><td>4</td><td>CLA INS P1 P2 Lc Data Le</td></tr></tbody></table><p>最短长度出现在case1中，只有<code>Header</code>部分，因此仅有4个字节。 最长长度出现在case4中，<code>261 = 4(首部) + 1(Lc) + 255(Data) + 1(Le)</code>， Lc只占用1个字节，因此Data最长仅为255 Bytes。</p><h2 id="response-apdu的最小长度和最大长度" tabindex="-1"><a class="header-anchor" href="#response-apdu的最小长度和最大长度"><span>response APDU的最小长度和最大长度</span></a></h2><ul><li><strong>最小长度为2</strong></li><li><strong>最大长度为258</strong></li></ul><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/sim_contents_of_response_apdu.png" alt="sim_contents_of_response_apdu.png" tabindex="0" loading="lazy"><figcaption>sim_contents_of_response_apdu.png</figcaption></figure>',12)],c={},d=(0,n(3671).A)(c,[["render",function(t,e){return(0,o.uX)(),(0,o.CE)("div",null,a)}]]),m=JSON.parse('{"path":"/protocol/LTE/sim.html","title":"SIM","lang":"zh-CN","frontmatter":{"article":false,"title":"SIM","icon":"sim","description":"SIM command APDU的最小长度和最大长度 最小长度为4 最大长度为261 这里的APDU协议指SIM中使用的APDU，按照102221文档内容分析。 sim_contents_of_command_apdu.pngsim_contents_of_command_apdu.png command APDU分为两个部分，分别是Header和Bo...","head":[["meta",{"property":"og:url","content":"https://newzone.top/protocol/LTE/sim.html"}],["meta",{"property":"og:site_name","content":"三月的油菜花"}],["meta",{"property":"og:title","content":"SIM"}],["meta",{"property":"og:description","content":"SIM command APDU的最小长度和最大长度 最小长度为4 最大长度为261 这里的APDU协议指SIM中使用的APDU，按照102221文档内容分析。 sim_contents_of_command_apdu.pngsim_contents_of_command_apdu.png command APDU分为两个部分，分别是Header和Bo..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/tueo/cloudimg/main/img/sim_contents_of_command_apdu.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T09:26:29.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SIM"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-03-25T09:26:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"SIM\\",\\"description\\":\\"SIM command APDU的最小长度和最大长度 最小长度为4 最大长度为261 这里的APDU协议指SIM中使用的APDU，按照102221文档内容分析。 sim_contents_of_command_apdu.pngsim_contents_of_command_apdu.png command APDU分为两个部分，分别是Header和Bo...\\"}"]]},"headers":[{"level":2,"title":"command APDU的最小长度和最大长度","slug":"command-apdu的最小长度和最大长度","link":"#command-apdu的最小长度和最大长度","children":[]},{"level":2,"title":"response APDU的最小长度和最大长度","slug":"response-apdu的最小长度和最大长度","link":"#response-apdu的最小长度和最大长度","children":[]}],"git":{"createdTime":1711342995000,"updatedTime":1711358789000,"contributors":[{"name":"quectel_lte","email":"Product_ruiwei@163.com","commits":2}]},"readingTime":{"minutes":0.75,"words":224},"filePathRelative":"protocol/LTE/sim.md","localizedDate":"2024年3月25日","excerpt":"\\n<h2>command APDU的最小长度和最大长度</h2>\\n<ul>\\n<li><strong>最小长度为4</strong></li>\\n<li><strong>最大长度为261</strong></li>\\n</ul>\\n<p>这里的APDU协议指SIM中使用的APDU，按照102221文档内容分析。</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/tueo/cloudimg/main/img/sim_contents_of_command_apdu.png\\" alt=\\"sim_contents_of_command_apdu.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>sim_contents_of_command_apdu.png</figcaption></figure>","autoDesc":true}')}}]);