"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8228],{8228:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var r=t(8981),s=t(5670),a=t(2930),o=t(6719),u=t(7847),i=t(3151),c=t(5826),n=t(9658);const h=["/","/blog.html","/posts/2024-03-01-blog_example.html","/posts/2024-03-02-blog_example2.html","/protocol/dump_0001.html","/protocol/git.html","/protocol/kconfig.html","/protocol/rtthread_netdev.html","/protocol/vscode.html","/protocol/LTE/lte_physical.html","/protocol/LTE/network.html","/protocol/LTE/oper_name.html","/protocol/LTE/sim.html","/protocol/ZigBee/tcpip.html","/protocol/ZigBee/zigbee-routing.html","/protocol/ZigBee/zigbee-table.html","/protocol/linux/00_mt7866.html","/protocol/linux/01_update_img.html","/protocol/linux/02_uboot.html","/protocol/linux/03_openwrt.html","/404.html","/posts/","/protocol/","/protocol/LTE/","/protocol/ZigBee/","/protocol/linux/","/category/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E5%B7%A5%E5%85%B7/","/tag/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/article/","/star/","/timeline/"];t(2082);const p=(0,s.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),v=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=n.s,y=(0,s.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,u.pM)({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,i.rd)(),h=(0,i.Zv)(),m=(0,r.s5)(n.a),{enabled:g,addQueryHistory:E,queryHistory:H,removeQueryHistory:f}=(()=>{const{queryHistoryCount:e}=n.s,l=e>0;return{enabled:l,queryHistory:p,addQueryHistory:t=>{l&&(p.value.length<e?p.value=Array.from(new Set([t,...p.value])):p.value=Array.from(new Set([t,...p.value.slice(0,e-1)])))},removeQueryHistory:e=>{p.value=[...p.value.slice(0,e),...p.value.slice(e+1)]}}})(),{enabled:k,resultHistory:x,addResultHistory:Q,removeResultHistory:_}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:v(l),display:l.display};"header"in l&&(e.header=l.header),y.value.length<d?y.value=[e,...y.value]:y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),R=g||k,b=(0,o.lW)(e,"query"),{results:w,searching:B}=(e=>{const l=(0,n.u)(),t=(0,i.Zv)(),{search:r,terminate:s}=(0,n.c)(),c=(0,o.KR)(!1),h=(0,o.IJ)([]);return(0,u.sV)((()=>{const o=()=>{h.value=[],c.value=!1},i=(0,a.Q0)((e=>{c.value=!0,e?r({type:"search",query:e,locale:t.value,options:l.value}).then((e=>{h.value=e,c.value=!1})).catch((e=>{console.error(e),o()})):o()}),n.s.searchDelay);(0,u.wB)([e,t],(()=>i(e.value)),{immediate:!0}),(0,u.hi)((()=>{s()}))})),{searching:c,results:h}})(b),C=(0,o.Kh)({isQuery:!0,index:0}),A=(0,o.KR)(0),D=(0,o.KR)(0),T=(0,u.EW)((()=>R&&(H.value.length>0||x.value.length>0))),q=(0,u.EW)((()=>w.value.length>0)),S=(0,u.EW)((()=>w.value[A.value]||null)),L=e=>e.map((e=>(0,r.Kg)(e)?e:(0,u.h)(e[0],e[1]))),M=e=>{if("customField"===e.type){const l=n.b[e.index]||"$content",[t,s=""]=(0,r.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,u.h)("div",L([t,...e,s]))))}return e.display.map((e=>(0,u.h)("div",L(e))))},W=()=>{A.value=0,D.value=0,l("updateQuery",""),l("close")};return(0,s.MLh)("keydown",(r=>{if(e.isFocusing)if(q.value){if("ArrowUp"===r.key)D.value>0?D.value-=1:(A.value=A.value>0?A.value-1:w.value.length-1,D.value=S.value.contents.length-1);else if("ArrowDown"===r.key)D.value<S.value.contents.length-1?D.value+=1:(A.value=A.value<w.value.length-1?A.value+1:0,D.value=0);else if("Enter"===r.key){const l=S.value.contents[D.value];E(e.query),Q(l),t.push(v(l)),W()}}else if(k)if("ArrowUp"===r.key)(()=>{const{isQuery:e,index:l}=C;0===l?(C.isQuery=!e,C.index=e?x.value.length-1:H.value.length-1):C.index=l-1})();else if("ArrowDown"===r.key)(()=>{const{isQuery:e,index:l}=C;l===(e?H.value.length-1:x.value.length-1)?(C.isQuery=!e,C.index=0):C.index=l+1})();else if("Enter"===r.key){const{index:e}=C;C.isQuery?(l("updateQuery",H.value[e]),r.preventDefault()):(t.push(x.value[e].link),W())}})),(0,u.wB)([A,D],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,u.h)("div",{class:["search-pro-result-wrapper",{empty:b.value?!q.value:!T.value}],id:"search-pro-results"},""===b.value?R?T.value?[g?(0,u.h)("ul",{class:"search-pro-result-list"},(0,u.h)("li",{class:"search-pro-result-list-item"},[(0,u.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),H.value.map(((e,t)=>(0,u.h)("div",{class:["search-pro-result-item",{active:C.isQuery&&C.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,u.h)(c.H,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},e),(0,u.h)("button",{class:"search-pro-remove-icon",innerHTML:c.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),f(t)}})])))])):null,k?(0,u.h)("ul",{class:"search-pro-result-list"},(0,u.h)("li",{class:"search-pro-result-list-item"},[(0,u.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),x.value.map(((e,l)=>(0,u.h)(i.Wt,{to:e.link,class:["search-pro-result-item",{active:!C.isQuery&&C.index===l}],onClick:()=>{W()}},(()=>[(0,u.h)(c.H,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},[e.header?(0,u.h)("div",{class:"content-header"},e.header):null,(0,u.h)("div",e.display.map((e=>L(e))).flat())]),(0,u.h)("button",{class:"search-pro-remove-icon",innerHTML:c.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),_(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult:B.value?(0,u.h)(c.S,{hint:m.value.searching}):q.value?(0,u.h)("ul",{class:"search-pro-result-list"},w.value.map((({title:l,contents:t},r)=>{const s=A.value===r;return(0,u.h)("li",{class:["search-pro-result-list-item",{active:s}]},[(0,u.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const r=s&&D.value===t;return(0,u.h)(i.Wt,{to:v(l),class:["search-pro-result-item",{active:r,"aria-selected":r}],onClick:()=>{E(e.query),Q(l),W()}},(()=>["text"===l.type?null:(0,u.h)("title"===l.type?c.T:"heading"===l.type?c.a:c.b,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,u.h)("div",{class:"content-header"},l.header):null,(0,u.h)("div",M(l))])]))}))])}))):m.value.emptyResult)}})}}]);