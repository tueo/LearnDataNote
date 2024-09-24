"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3480],{3671:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},1657:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>i,data:()=>c});var e=a(7847);const t=[(0,e.Fv)('<h2 id="编程中常用的ip地址数据接口与接口" tabindex="-1"><a class="header-anchor" href="#编程中常用的ip地址数据接口与接口"><span>编程中常用的IP地址数据接口与接口</span></a></h2><p>数据结构： <code>struct in_addr</code> 和 <code>ip4_addr_t</code>等价</p><p>线程安全型接口：</p><ul><li><strong>inet_pton</strong> 转换字符串到网络字节序地址</li><li><strong>inet_ntop</strong> 将网络字节序地址转换为字符串</li></ul><p>线程不安全接口： <strong>inet_addr</strong> 将点分十进制IP地址（字符串）转换成网络字节序IP地址【返回网络字节序的地址】 <strong>inet_aton</strong> 同上【返回网络字节序的地址】 <strong>inet_ntoa</strong> 将网络字节序IP转化点分十进制IP（字符串）</p><h2 id="inet接口和ip4-addr以及ip6-addr接口的区别" tabindex="-1"><a class="header-anchor" href="#inet接口和ip4-addr以及ip6-addr接口的区别"><span>inet接口和ip4_addr以及ip6_addr接口的区别</span></a></h2><p>ip地址数据接口差异：</p><p>inet接口定义：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token operator">!</span><span class="token function">defined</span><span class="token punctuation">(</span><span class="token class-name">in_addr_t</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">defined</span><span class="token punctuation">(</span>IN_ADDR_T_DEFINED<span class="token punctuation">)</span></span></span>\n<span class="token keyword">typedef</span> <span class="token class-name">u32_t</span> <span class="token class-name">in_addr_t</span><span class="token punctuation">;</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>\n\n<span class="token keyword">struct</span> <span class="token class-name">in_addr</span> <span class="token punctuation">{</span>\n  <span class="token class-name">in_addr_t</span> s_addr<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">struct</span> <span class="token class-name">in6_addr</span> <span class="token punctuation">{</span>\n  <span class="token keyword">union</span> <span class="token punctuation">{</span>\n    <span class="token class-name">u32_t</span> u32_addr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token class-name">u8_t</span>  u8_addr<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> un<span class="token punctuation">;</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">s6_addr</span>  <span class="token expression">un<span class="token punctuation">.</span>u8_addr</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ip4_addr.h</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/** This is the aligned version of ip4_addr_t,\n   used as local variable, on the stack, etc. */</span>\n<span class="token keyword">struct</span> <span class="token class-name">ip4_addr</span> <span class="token punctuation">{</span>\n  <span class="token class-name">u32_t</span> addr<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">/** ip4_addr_t uses a struct for convenience only, so that the same defines can\n * operate both on ip4_addr_t as well as on ip4_addr_p_t. */</span>\n<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ip4_addr</span> <span class="token class-name">ip4_addr_t</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ip6_addr.h</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/** This is the aligned version of ip6_addr_t,\n    used as local variable, on the stack, etc. */</span>\n<span class="token keyword">struct</span> <span class="token class-name">ip6_addr</span> <span class="token punctuation">{</span>\n  <span class="token class-name">u32_t</span> addr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">LWIP_IPV6_SCOPES</span></span>\n  <span class="token class-name">u8_t</span> zone<span class="token punctuation">;</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/* LWIP_IPV6_SCOPES */</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">/** IPv6 address */</span>\n<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ip6_addr</span> <span class="token class-name">ip6_addr_t</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',13)],p={},i=(0,a(3671).A)(p,[["render",function(n,s){return(0,e.uX)(),(0,e.CE)("div",null,t)}]]),c=JSON.parse('{"path":"/protocol/ZigBee/tcpip.html","title":"","lang":"zh-CN","frontmatter":{"description":"编程中常用的IP地址数据接口与接口 数据结构： struct in_addr 和 ip4_addr_t等价 线程安全型接口： inet_pton 转换字符串到网络字节序地址 inet_ntop 将网络字节序地址转换为字符串 线程不安全接口： inet_addr 将点分十进制IP地址（字符串）转换成网络字节序IP地址【返回网络字节序的地址】 inet_a...","head":[["meta",{"property":"og:url","content":"https://newzone.top/protocol/ZigBee/tcpip.html"}],["meta",{"property":"og:site_name","content":"三月的油菜花"}],["meta",{"property":"og:description","content":"编程中常用的IP地址数据接口与接口 数据结构： struct in_addr 和 ip4_addr_t等价 线程安全型接口： inet_pton 转换字符串到网络字节序地址 inet_ntop 将网络字节序地址转换为字符串 线程不安全接口： inet_addr 将点分十进制IP地址（字符串）转换成网络字节序IP地址【返回网络字节序的地址】 inet_a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-13T09:14:03.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-06-13T09:14:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-13T09:14:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LearnData\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"编程中常用的IP地址数据接口与接口","slug":"编程中常用的ip地址数据接口与接口","link":"#编程中常用的ip地址数据接口与接口","children":[]},{"level":2,"title":"inet接口和ip4_addr以及ip6_addr接口的区别","slug":"inet接口和ip4-addr以及ip6-addr接口的区别","link":"#inet接口和ip4-addr以及ip6-addr接口的区别","children":[]}],"git":{"createdTime":1718270043000,"updatedTime":1718270043000,"contributors":[{"name":"quectel_lte","email":"Product_ruiwei@163.com","commits":1}]},"readingTime":{"minutes":0.93,"words":280},"filePathRelative":"protocol/ZigBee/tcpip.md","localizedDate":"2024年6月13日","excerpt":"<h2>编程中常用的IP地址数据接口与接口</h2>\\n<p>数据结构：\\n<code>struct in_addr</code> 和 <code>ip4_addr_t</code>等价</p>\\n<p>线程安全型接口：</p>\\n<ul>\\n<li><strong>inet_pton</strong> 转换字符串到网络字节序地址</li>\\n<li><strong>inet_ntop</strong> 将网络字节序地址转换为字符串</li>\\n</ul>\\n<p>线程不安全接口：\\n<strong>inet_addr</strong> 将点分十进制IP地址（字符串）转换成网络字节序IP地址【返回网络字节序的地址】\\n<strong>inet_aton</strong> 同上【返回网络字节序的地址】\\n<strong>inet_ntoa</strong> 将网络字节序IP转化点分十进制IP（字符串）</p>","autoDesc":true}')}}]);