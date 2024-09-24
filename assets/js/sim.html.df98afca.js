"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4713],{3671:(t,e)=>{e.A=(t,e)=>{const i=t.__vccOpts||t;for(const[t,a]of e)i[t]=a;return i}},2452:(t,e,i)=>{i.r(e),i.d(e,{comp:()=>o,data:()=>r});var a=i(7847);const n=[(0,a.Fv)('<h1 id="🎫sim卡" tabindex="-1"><a class="header-anchor" href="#🎫sim卡"><span>🎫SIM卡</span></a></h1><h2 id="df-name-和-aid" tabindex="-1"><a class="header-anchor" href="#df-name-和-aid"><span>DF name 和 AID</span></a></h2><p>DF name就是AID🆔，可以是1~16个字节，在sim 卡中，每个AID应该是独一无二的。</p><p>下面是一个典型的AID示例，共16bytes。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>A0000000871002FF86FFFF89FFFFFFFF\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>AID在7816-5文档中定义，但是可惜该文档收费😔。我在131110和101220文档中找到了相关结构示例如下：</p><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240327192035.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>所以AID的结构如下：</p><ul><li><code>RID</code> 占5个字节。</li><li><code>PIX</code> 小于11个字节。</li></ul><p>RID的值如下：</p><ul><li>&#39;A000000009&#39; for ETSI</li><li>&#39;<strong>A000000087</strong>&#39; for the 3GPP</li><li>&#39;A000000343&#39; for the 3GPP2</li></ul><p>PIX的结构如下</p><ul><li>Digits 1 to 4 Application code</li><li>Digits 5 to 8 国家码(Country code)，上面的FF86就是中国，中国国家码是86，然后左边两位是补的ff.</li><li>Digits 9 to 14 Application provider code，上面的FFFF89</li><li>Digits 15 up to 22 Application provider field Optional. Up to 8 digits</li></ul><h2 id="apdu到tpdu的映射" tabindex="-1"><a class="header-anchor" href="#apdu到tpdu的映射"><span>APDU到TPDU的映射</span></a></h2><h2 id="command-apdu的最小长度和最大长度" tabindex="-1"><a class="header-anchor" href="#command-apdu的最小长度和最大长度"><span>command APDU的最小长度和最大长度</span></a></h2><ul><li><strong>最小长度为4</strong> 注意，TPDU最小为5个字节</li><li><strong>最大长度为261</strong></li></ul><p>这里的APDU协议指SIM中使用的APDU，按照102221文档内容分析。</p><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/sim_contents_of_command_apdu.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>command APDU分为两个部分，分别是<code>Header</code>和Body，<code>Header</code>是一个command APDU必须具备的，占4个字节，<code>Body</code>则是可选内容。</p><p>从上面的结构看，命令APDU存在如下4种结构：</p><table><thead><tr><th>Case</th><th>Structure</th></tr></thead><tbody><tr><td>1</td><td>CLA INS P1 P2</td></tr><tr><td>2</td><td>CLA INS P1 P2 Le</td></tr><tr><td>3</td><td>CLA INS P1 P2 Lc Data</td></tr><tr><td>4</td><td>CLA INS P1 P2 Lc Data Le</td></tr></tbody></table><p>最短长度出现在case1中，只有<code>Header</code>部分，因此仅有4个字节；注意TPDU最小为5个字节，在case1的情况下，映射时，P3会填充为0。 最长长度出现在case4中，<code>261 = 4(首部) + 1(Lc) + 255(Data) + 1(Le)</code>， Lc只占用1个字节，因此Data最长仅为255 Bytes。</p><ul><li>Lc表示command APDU中data字段的数据size，如果Lc存在，Data的size范围在<code>1~255</code>字节。</li><li>Le表示期待的response APDU的Data字段的最大size，如果Le缺失，表示不期待任何数据，如果Le为「00」，则允许接收256字节的数据，此时SIM卡侧可以返回1到256个字节的数据。</li></ul><blockquote><p>思考：这种特殊约定极易容易引发问题，从协议设定角度和工程实现角度，这种特殊约定越少越好。</p></blockquote><h2 id="response-apdu的最小长度和最大长度" tabindex="-1"><a class="header-anchor" href="#response-apdu的最小长度和最大长度"><span>response APDU的最小长度和最大长度</span></a></h2><ul><li><strong>最小长度为2</strong></li><li><strong>最大长度为258</strong></li></ul><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/sim_contents_of_response_apdu.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="常见command列表" tabindex="-1"><a class="header-anchor" href="#常见command列表"><span>常见command列表</span></a></h2><table><thead><tr><th>Command</th><th>Value(Hex)</th><th>Value(Dec)</th></tr></thead><tbody><tr><td>SELECT</td><td>A4</td><td>164</td></tr><tr><td>STATUS</td><td>F2</td><td>242</td></tr><tr><td>READ BINARY</td><td>B0</td><td>176</td></tr><tr><td>UPDATE BINARY</td><td>D6</td><td>214</td></tr><tr><td>READ RECORD</td><td>B2</td><td>178</td></tr><tr><td>UPDATE RECORD</td><td>DC</td><td>220</td></tr><tr><td>GET RESPONSE</td><td>C0</td><td>192</td></tr></tbody></table><h2 id="常见的sim卡文件" tabindex="-1"><a class="header-anchor" href="#常见的sim卡文件"><span>常见的SIM卡文件</span></a></h2><h3 id="imsi" tabindex="-1"><a class="header-anchor" href="#imsi"><span>IMSI</span></a></h3><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240328151528.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>IMSI是国际移动用户识别码，是用于区分蜂窝网络中不同用户的、在所有蜂窝网络中不重复的识别码。</p><p>🧩<strong>最大长度是多少？</strong></p><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240328151845.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>IMSI遵循E.212文档的规范，最大长度为15位，部分运营商是14位的。</p><p>❔ <strong>都是数字么</strong></p><p>根据规范要求，应该都是0~9的数字。</p><h3 id="iccid" tabindex="-1"><a class="header-anchor" href="#iccid"><span>ICCID</span></a></h3><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240327131357.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ICCID文件ID是2EF2，在11.11文档中描述了它的结构。在该文件中使用BCD编码格式保存，占10个字节（20位）。</p><p>但是实际上ICCID是在E.118文档中定义的，称为primary account number。在该文档中，ICCID中应该是19位的digit串。</p><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240327132214.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因此在实践上，ICCID的长度可能是19位，也可能是20位。当为19位的时候，在EFiccid文件中存储时，会在最后一位补一个F进去，因此也将ICCID从纯数字变成了可能携带字符F的形式。</p><p>结构：</p><ul><li><strong>Major industry identifier</strong> 首先是2位数字行业代码，89表示电信行业。</li><li><strong>Country Code</strong> 2到3位数字的国家码。</li><li><strong>Issuer identifier</strong> 1到4位的数字，一般会是MCC。</li><li><strong>Individual account identification</strong> 自定义的ID，但是一般是Mobile identification number。</li><li>最后一位数字的是校验位，校验算法是Luhn algorithm。</li></ul><p>下面是一个携带F的ICCID的示例：</p><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240327133833.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ICCID按照一个19位或者20位的字符串（0~F）理解。在实际工程中，发现存在非89开头的ICCID，也存在<code>898600E1122115658504</code> 这种中间插入非0~9的ICCID。只要是19位或者20位，且满足BCD编码格式，都可以作为ICCID。</p>',49)],d={},o=(0,i(3671).A)(d,[["render",function(t,e){return(0,a.uX)(),(0,a.CE)("div",null,n)}]]),r=JSON.parse('{"path":"/protocol/LTE/sim.html","title":"🎫SIM卡","lang":"zh-CN","frontmatter":{"article":false,"title":"🎫SIM卡","icon":"sim","date":"2024-03-25T00:00:00.000Z","description":"🎫SIM卡 DF name 和 AID DF name就是AID🆔，可以是1~16个字节，在sim 卡中，每个AID应该是独一无二的。 下面是一个典型的AID示例，共16bytes。 AID在7816-5文档中定义，但是可惜该文档收费😔。我在131110和101220文档中找到了相关结构示例如下： 所以AID的结构如下： RID 占5个字节。 P...","head":[["meta",{"property":"og:url","content":"https://newzone.top/protocol/LTE/sim.html"}],["meta",{"property":"og:site_name","content":"三月的油菜花"}],["meta",{"property":"og:title","content":"🎫SIM卡"}],["meta",{"property":"og:description","content":"🎫SIM卡 DF name 和 AID DF name就是AID🆔，可以是1~16个字节，在sim 卡中，每个AID应该是独一无二的。 下面是一个典型的AID示例，共16bytes。 AID在7816-5文档中定义，但是可惜该文档收费😔。我在131110和101220文档中找到了相关结构示例如下： 所以AID的结构如下： RID 占5个字节。 P..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240327192035.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-09T09:27:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"🎫SIM卡"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:published_time","content":"2024-03-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-09T09:27:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"🎫SIM卡\\",\\"description\\":\\"🎫SIM卡 DF name 和 AID DF name就是AID🆔，可以是1~16个字节，在sim 卡中，每个AID应该是独一无二的。 下面是一个典型的AID示例，共16bytes。 AID在7816-5文档中定义，但是可惜该文档收费😔。我在131110和101220文档中找到了相关结构示例如下： 所以AID的结构如下： RID 占5个字节。 P...\\"}"]]},"headers":[{"level":2,"title":"DF name 和 AID","slug":"df-name-和-aid","link":"#df-name-和-aid","children":[]},{"level":2,"title":"APDU到TPDU的映射","slug":"apdu到tpdu的映射","link":"#apdu到tpdu的映射","children":[]},{"level":2,"title":"command APDU的最小长度和最大长度","slug":"command-apdu的最小长度和最大长度","link":"#command-apdu的最小长度和最大长度","children":[]},{"level":2,"title":"response APDU的最小长度和最大长度","slug":"response-apdu的最小长度和最大长度","link":"#response-apdu的最小长度和最大长度","children":[]},{"level":2,"title":"常见command列表","slug":"常见command列表","link":"#常见command列表","children":[]},{"level":2,"title":"常见的SIM卡文件","slug":"常见的sim卡文件","link":"#常见的sim卡文件","children":[{"level":3,"title":"IMSI","slug":"imsi","link":"#imsi","children":[]},{"level":3,"title":"ICCID","slug":"iccid","link":"#iccid","children":[]}]}],"git":{"createdTime":1711342995000,"updatedTime":1712654820000,"contributors":[{"name":"quectel_lte","email":"Product_ruiwei@163.com","commits":7}]},"readingTime":{"minutes":3.51,"words":1054},"filePathRelative":"protocol/LTE/sim.md","localizedDate":"2024年3月25日","excerpt":"\\n<h2>DF name 和 AID</h2>\\n<p>DF name就是AID🆔，可以是1~16个字节，在sim 卡中，每个AID应该是独一无二的。</p>\\n<p>下面是一个典型的AID示例，共16bytes。</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>A0000000871002FF86FFFF89FFFFFFFF\\n</code></pre></div><p>AID在7816-5文档中定义，但是可惜该文档收费😔。我在131110和101220文档中找到了相关结构示例如下：</p>","autoDesc":true}')}}]);