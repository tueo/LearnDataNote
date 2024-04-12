"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[812],{3671:(t,e)=>{e.A=(t,e)=>{const i=t.__vccOpts||t;for(const[t,n]of e)i[t]=n;return i}},6136:(t,e,i)=>{i.r(e),i.d(e,{comp:()=>r,data:()=>s});var n=i(7847);const l=[(0,n.Fv)('<ul><li><a href="#1-%E8%BF%90%E8%90%A5%E5%95%86%E5%90%8D%E7%A7%B0">1. 运营商名称</a><ul><li><a href="#11-plmn">1.1. PLMN</a></li><li><a href="#12-%E4%BB%8E%E7%BD%91%E7%BB%9C%E4%BE%A7%E8%8E%B7%E5%8F%96%E8%BF%90%E8%90%A5%E5%95%86%E5%90%8D%E7%A7%B0">1.2. 从网络侧获取运营商名称</a></li><li><a href="#13-%E8%AF%BB%E5%8F%96sim%E5%8D%A1%E8%BF%90%E8%90%A5%E5%95%86%E5%90%8D%E7%A7%B0">1.3. 读取SIM卡运营商名称</a></li></ul></li></ul><h1 id="_1-运营商名称" tabindex="-1"><a class="header-anchor" href="#_1-运营商名称"><span>1. 运营商名称</span></a></h1><h2 id="_1-1-plmn" tabindex="-1"><a class="header-anchor" href="#_1-1-plmn"><span>1.1. PLMN</span></a></h2><figure><img src="https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240408151650.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>PLMN由MCC和MNC构成，MCC是3位数字，MNC是2或者3位数字。</p><ol><li>MCC：Mobile Country Code，移动国家代码，3位数字，表示移动国家代码，用于区分移动国家。</li><li>MNC：Mobile Network Code，移动网络代码，2或3位数字，表示移动网络代码，用于区分移动网络。</li></ol><p>2或者3位数字的规定比较反人类，如<code>722 010</code>这种MNC为3位，但是首数字为0的，假如还存在<code>722 10</code>，就特别容易弄混，另外在编码时，需要标记这个PLMN的MNC是2位或者3位。</p><h2 id="_1-2-从网络侧获取运营商名称" tabindex="-1"><a class="header-anchor" href="#_1-2-从网络侧获取运营商名称"><span>1.2. 从网络侧获取运营商名称</span></a></h2><p>在注网成功后，网络侧会通过NITZ下发网络侧运营商名称。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\t\t\t\tNAS Message: NET -&gt; UE\n\t\t\t\tProtocol discriminator  &lt;EPS Mobility management messages&gt;\n\t\t\t\tSecurity header type  &lt;plain NAS message&gt;\n\t\t\t\tMessage Type  &lt;Emm information&gt;\n\t\t\t\tFull Name\n\t\t\t\t\t\tIE Name  &lt;Network Name&gt;\n\t\t\t\t\t\tIE len  &lt;11&gt;\n\t\t\t\t\t\tNumber of sparebits in last octet  &lt;bits 6 to 8(inclusive) are spare and set to 0 in octet n&gt;\n\t\t\t\t\t\tAdd CI  &lt;The MS not add the letters for the Country&#39;s Initials to the text string&gt;\n\t\t\t\t\t\tCoding Scheme  &lt;Cell Broadcast CS... defined in 3GPP TS 23.038 [8b&gt;\n\t\t\t\t\t\text 1  &lt;1&gt;\n\t\t\t\t\t\tText String  &lt;f6 37 39 6c 7e bb cb 20 aa 14 &gt;\n\t\t\t\tShort Name\n\t\t\t\t\t\tIE Name  &lt;Network Name&gt;\n\t\t\t\t\t\tIE len  &lt;8&gt;\n\t\t\t\t\t\tNumber of sparebits in last octet  &lt;this field carries no information about the number of spare bits in octet n&gt;\n\t\t\t\t\t\tAdd CI  &lt;The MS not add the letters for the Country&#39;s Initials to the text string&gt;\n\t\t\t\t\t\tCoding Scheme  &lt;Cell Broadcast CS... defined in 3GPP TS 23.038 [8b&gt;\n\t\t\t\t\t\text 1  &lt;1&gt;\n\t\t\t\t\t\tText String  &lt;f6 37 39 6c 7e bb cb &gt;\n\t\t\t\tLocal Time Zone\n\t\t\t\t\t\tIE Name  &lt;Time Zone&gt;\n\t\t\t\t\t\tTime Zone  &lt;21 &gt;\n\t\t\t\tUniversal Time And Local Time Zone\n\t\t\t\t\t\tIE Name  &lt;Time Zone And Time&gt;\n\t\t\t\t\t\tYear  &lt;50&gt;\n\t\t\t\t\t\tMonth  &lt;17&gt;\n\t\t\t\t\t\tDay  &lt;2&gt;\n\t\t\t\t\t\tHour  &lt;113&gt;\n\t\t\t\t\t\tMinute  &lt;83&gt;\n\t\t\t\t\t\tSecond  &lt;131&gt;\n\t\t\t\t\t\tTime zone  &lt;33&gt;\n\t\t\t\tDaylight Saving Time\n\t\t\t\t\t\tIE Name  &lt;Daylight Saving Time&gt;\n\t\t\t\t\t\tIE len  &lt;1&gt;\n\t\t\t\t\t\tvalue  &lt;No adjustment for Daylight Saving Time&gt;\n\t\t\t\t\t\tSpare  &lt;0&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-读取sim卡运营商名称" tabindex="-1"><a class="header-anchor" href="#_1-3-读取sim卡运营商名称"><span>1.3. 读取SIM卡运营商名称</span></a></h2>',11)],a={},r=(0,i(3671).A)(a,[["render",function(t,e){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),s=JSON.parse('{"path":"/protocol/LTE/oper_name.html","title":"运营商名称","lang":"zh-CN","frontmatter":{"article":false,"title":"运营商名称","date":"2024-04-08T00:00:00.000Z","description":" 1. 运营商名称 1.1. PLMN 1.2. 从网络侧获取运营商名称 1.3. 读取SIM卡运营商名称 1. 运营商名称 1.1. PLMN PLMN由MCC和MNC构成，MCC是3位数字，MNC是2或者3位数字。 MCC：Mobile Country Code，移动国家代码，3位数字，表示移动国家代码，用于区分移动国家。 MNC：Mobile N...","head":[["meta",{"property":"og:url","content":"https://newzone.top/protocol/LTE/oper_name.html"}],["meta",{"property":"og:site_name","content":"三月的油菜花"}],["meta",{"property":"og:title","content":"运营商名称"}],["meta",{"property":"og:description","content":" 1. 运营商名称 1.1. PLMN 1.2. 从网络侧获取运营商名称 1.3. 读取SIM卡运营商名称 1. 运营商名称 1.1. PLMN PLMN由MCC和MNC构成，MCC是3位数字，MNC是2或者3位数字。 MCC：Mobile Country Code，移动国家代码，3位数字，表示移动国家代码，用于区分移动国家。 MNC：Mobile N..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/tueo/cloudimg/main/img/20240408151650.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T06:29:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"运营商名称"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:published_time","content":"2024-04-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T06:29:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"运营商名称\\",\\"description\\":\\" 1. 运营商名称 1.1. PLMN 1.2. 从网络侧获取运营商名称 1.3. 读取SIM卡运营商名称 1. 运营商名称 1.1. PLMN PLMN由MCC和MNC构成，MCC是3位数字，MNC是2或者3位数字。 MCC：Mobile Country Code，移动国家代码，3位数字，表示移动国家代码，用于区分移动国家。 MNC：Mobile N...\\"}"]]},"headers":[{"level":2,"title":"1.1. PLMN","slug":"_1-1-plmn","link":"#_1-1-plmn","children":[]},{"level":2,"title":"1.2. 从网络侧获取运营商名称","slug":"_1-2-从网络侧获取运营商名称","link":"#_1-2-从网络侧获取运营商名称","children":[]},{"level":2,"title":"1.3. 读取SIM卡运营商名称","slug":"_1-3-读取sim卡运营商名称","link":"#_1-3-读取sim卡运营商名称","children":[]}],"git":{"createdTime":1712654820000,"updatedTime":1712903395000,"contributors":[{"name":"quectel_lte","email":"Product_ruiwei@163.com","commits":2}]},"readingTime":{"minutes":1.66,"words":499},"filePathRelative":"protocol/LTE/oper_name.md","localizedDate":"2024年4月8日","excerpt":"<ul>\\n<li><a href=\\"#1-%E8%BF%90%E8%90%A5%E5%95%86%E5%90%8D%E7%A7%B0\\">1. 运营商名称</a>\\n<ul>\\n<li><a href=\\"#11-plmn\\">1.1. PLMN</a></li>\\n<li><a href=\\"#12-%E4%BB%8E%E7%BD%91%E7%BB%9C%E4%BE%A7%E8%8E%B7%E5%8F%96%E8%BF%90%E8%90%A5%E5%95%86%E5%90%8D%E7%A7%B0\\">1.2. 从网络侧获取运营商名称</a></li>\\n<li><a href=\\"#13-%E8%AF%BB%E5%8F%96sim%E5%8D%A1%E8%BF%90%E8%90%A5%E5%95%86%E5%90%8D%E7%A7%B0\\">1.3. 读取SIM卡运营商名称</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}')}}]);