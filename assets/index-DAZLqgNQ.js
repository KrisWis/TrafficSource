const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainPage-2N-gwCjq.js","assets/react-BFnl5N1q.js","assets/@splinetool-xhpDkOvk.js","assets/lodash.debounce-DeqZdA9b.js","assets/@emotion-9ZPAwRsI.js","assets/react-merge-refs-Bf2qc8Rt.js","assets/react-animated-numbers--ODZrajI.js","assets/react-dom-Bdrrpi00.js","assets/scheduler-CKyTKYc2.js","assets/react-error-boundary-Df1FABq1.js","assets/MainPage-C45rFZmj.css"])))=>i.map(i=>d[i]);
import{r as d,j as r}from"./react-BFnl5N1q.js";import{r as He,c as qe}from"./react-dom-Bdrrpi00.js";import{_ as Ae}from"./@splinetool-xhpDkOvk.js";import{E as Oe}from"./react-error-boundary-Df1FABq1.js";import"./scheduler-CKyTKYc2.js";import"./lodash.debounce-DeqZdA9b.js";import"./@emotion-9ZPAwRsI.js";import"./react-merge-refs-Bf2qc8Rt.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function f(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function h(o){if(o.ep)return;o.ep=!0;const l=f(o);fetch(o.href,l)}})();const ir=d.createContext({scrollPosition:"MainBlock",setScrollPosition:()=>{}}),Pe=d.lazy(()=>Ae(async()=>{const{MainPage:s}=await import("./MainPage-2N-gwCjq.js");return{MainPage:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({MainPage:s})=>({default:s}))),Ne="_Header_7nbn7_2",Le="_Header__caption_7nbn7_28",De="_Header__logo_7nbn7_34",Te="_Header__navList_7nbn7_69",ke="_Header__navList__item_7nbn7_74",Fe="_Header__contact_7nbn7_85",p={Header:Ne,Header__caption:Le,Header__logo:De,"logo-circle-anim":"_logo-circle-anim_7nbn7_1",Header__navList:Te,Header__navList__item:ke,Header__contact:Fe},Re="_Flex_9fjqr_1",We="_justifyStart_9fjqr_5",$e="_justifyCenter_9fjqr_9",ze="_justifyEnd_9fjqr_13",Xe="_justifyBetween_9fjqr_17",Ie="_justifyEvenly_9fjqr_21",Ge="_justifyAround_9fjqr_25",Ve="_alignStart_9fjqr_29",Ze="_alignCenter_9fjqr_33",Ke="_alignEnd_9fjqr_37",Ye="_alignStretch_9fjqr_41",Qe="_directionRow_9fjqr_45",Je="_directionColumn_9fjqr_49",Ue="_gap0_9fjqr_53",et="_gap3_9fjqr_57",tt="_gap5_9fjqr_61",rt="_gap10_9fjqr_65",nt="_gap15_9fjqr_69",at="_gap20_9fjqr_73",it="_gap30_9fjqr_77",ot="_gap40_9fjqr_81",st="_gap50_9fjqr_85",lt="_maxWidth_9fjqr_89",ct="_maxHeight_9fjqr_93",dt="_wrap_9fjqr_97",_t="_width10_9fjqr_101",ut="_width20_9fjqr_105",ht="_width25_9fjqr_109",ft="_width30_9fjqr_113",mt="_width35_9fjqr_117",wt="_width40_9fjqr_121",gt="_width50_9fjqr_125",pt="_width60_9fjqr_129",vt="_width65_9fjqr_133",jt="_width70_9fjqr_137",xt="_width75_9fjqr_141",yt="_width80_9fjqr_145",Ct="_width90_9fjqr_149",bt="_relative_9fjqr_153",n={Flex:Re,justifyStart:We,justifyCenter:$e,justifyEnd:ze,justifyBetween:Xe,justifyEvenly:Ie,justifyAround:Ge,alignStart:Ve,alignCenter:Ze,alignEnd:Ke,alignStretch:Ye,directionRow:Qe,directionColumn:Je,gap0:Ue,gap3:et,gap5:tt,gap10:rt,gap15:nt,gap20:at,gap30:it,gap40:ot,gap50:st,maxWidth:lt,maxHeight:ct,wrap:dt,width10:_t,width20:ut,width25:ht,width30:ft,width35:mt,width40:wt,width50:gt,width60:pt,width65:vt,width70:jt,width75:xt,width80:yt,width90:Ct,relative:bt},St={start:n.justifyStart,center:n.justifyCenter,end:n.justifyEnd,between:n.justifyBetween,evenly:n.justifyEvenly,around:n.justifyAround},Bt={start:n.alignStart,center:n.alignCenter,end:n.alignEnd,stretch:n.alignStretch},Et={row:n.directionRow,column:n.directionColumn},Mt={0:n.gap0,3:n.gap3,5:n.gap5,10:n.gap10,15:n.gap15,20:n.gap20,30:n.gap30,40:n.gap40,50:n.gap50},Ht={10:n.width10,20:n.width20,25:n.width25,30:n.width30,35:n.width35,40:n.width40,50:n.width50,60:n.width60,65:n.width65,70:n.width70,75:n.width75,80:n.width80,90:n.width90},O=s=>{const{className:a,children:f,justify:h="start",align:o="center",direction:l="row",gap:u,maxWidth:b,maxHeight:C,innerRef:j,wrap:w,width:S,relative:k,...B}=s,F=[a,St[h],Bt[o],Et[l],u&&Mt[u],S&&Ht[S],n.Flex,b&&n.maxWidth,C&&n.maxHeight,k&&n.relative,w&&n.wrap];return r.jsx("div",{ref:j,className:F.join(" "),...B,children:f})};O.displayName="Flex";const qt=s=>d.createElement("svg",{width:42,height:51,viewBox:"0 0 42 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},d.createElement("path",{d:"M1 7.54834V30.922C1.54749 37.2813 6.1043 50 19.9516 50C37.2608 50 40.5457 34.7123 40.6721 30.922C40.7731 27.8897 40.7142 14.0761 40.6721 7.54834",stroke:"white",strokeWidth:1.76882}),d.createElement("path",{d:"M17.9296 17.9195C16.4134 16.7403 12.7495 14.5588 10.2226 15.2663C7.06398 16.1507 6.05322 18.5512 6.05322 20.1937M17.9296 17.9195C19.8247 16.277 24.6258 12.3604 29.1742 11.6023C33.7226 10.8442 35.3651 18.6776 35.4914 20.1937C35.5747 21.1932 35.7678 24.4437 35.564 28.027M17.9296 17.9195C12.3704 22.4679 7.6957 21.3308 6.05322 20.1937M6.05322 20.1937C7.02186 22.51 10.172 26.8394 15.0237 25.6265C21.0882 24.1104 24.2468 20.1937 27.279 19.562C30.3113 18.9303 33.236 20.1937 35.564 28.027M6.05322 20.1937C6.05322 21.2284 6.05322 25.9866 6.05322 29.6695M35.564 28.027C35.4586 29.8795 35.2472 31.8209 34.8597 33.5862C34.7865 33.9196 34.6908 34.2572 34.5733 34.5969M6.05322 29.6695C6.05322 30.6638 6.05322 31.5797 6.05322 32.3227C6.93763 36.1973 10.5511 44.0475 17.9296 44.4518C26.559 44.9246 32.8659 39.5355 34.5733 34.5969M6.05322 29.6695C7.06398 31.312 10.0503 34.0916 14.0129 34.0916C17.9296 34.0916 20.9624 33.0431 24.5 29.0001C28.0376 24.9571 33.6553 28.5324 34.5733 34.5969",stroke:"white",strokeWidth:1.01075}),d.createElement("circle",{cx:23.6259,cy:5.93814,r:2.77957,stroke:"white",strokeWidth:.758065}),d.createElement("circle",{cx:18.5729,cy:1.38979,r:1.1371,stroke:"white",strokeWidth:.505376})),At=s=>d.createElement("svg",{width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.7763 17.6514C19.475 18.5041 18.2775 19.2096 17.3225 19.4159C16.6688 19.5547 15.8162 19.6645 12.9437 18.4741C9.71749 17.1375 5.2375 12.3762 5.2375 9.20776C5.2375 7.59478 6.1675 5.71655 7.79375 5.71655C8.57625 5.71655 8.74875 5.73181 9.00625 6.34949C9.3075 7.07721 10.0425 8.87016 10.13 9.05396C10.4913 9.80793 9.76249 10.2493 9.23374 10.9058C9.06499 11.1033 8.87376 11.317 9.08751 11.6846C9.3 12.0447 10.035 13.2426 11.115 14.2041C12.51 15.447 13.6412 15.8438 14.0462 16.0126C14.3475 16.1376 14.7075 16.1085 14.9275 15.8734C15.2063 15.5721 15.5525 15.0721 15.905 14.5795C16.1537 14.2269 16.47 14.1828 16.8013 14.3079C17.025 14.3854 19.8687 15.706 19.9887 15.9174C20.0775 16.0712 20.0775 16.7986 19.7763 17.6514ZM12.5025 0H12.4962C5.60499 0 0 5.60669 0 12.5C0 15.2333 0.881259 17.7692 2.38001 19.826L0.822506 24.4708L5.62626 22.9358C7.60251 24.2437 9.96125 25 12.5025 25C19.3937 25 25 19.3933 25 12.5C25 5.60669 19.3937 0 12.5025 0Z",fill:"white"})),Ot=s=>d.createElement("svg",{width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},d.createElement("path",{d:"M12.5 0C10.0278 0 7.61098 0.733109 5.55537 2.10662C3.49976 3.48014 1.89761 5.43237 0.951515 7.71645C0.00542114 10.0005 -0.242126 12.5139 0.240186 14.9386C0.722499 17.3634 1.91301 19.5906 3.66117 21.3389C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2422 14.9995 24.9945 17.2836 24.0484C19.5677 23.1023 21.5198 21.5003 22.8934 19.4447C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3389 3.66117C18.9947 1.31695 15.8152 0 12.5 0ZM18.6406 8.56249L16.5938 18.2344C16.4375 18.9219 16.0312 19.0781 15.4531 18.7656L12.3281 16.4531L10.7656 17.9062C10.692 18.0023 10.5975 18.0805 10.4892 18.1347C10.3809 18.1887 10.2617 18.2175 10.1406 18.2187L10.3594 15.0937L16.1406 9.85937C16.4062 9.64062 16.1406 9.51562 15.7656 9.73437L8.67188 14.1875L5.54687 13.2187C4.875 13.0156 4.85937 12.5469 5.6875 12.2344L17.7344 7.54687C18.3281 7.37499 18.8281 7.71874 18.6406 8.56249Z",fill:"white"})),Pt="_Button_1xhkx_1",Nt="_Button__bg_1xhkx_14",Lt="_Button__withBG_1xhkx_29",Dt="_Button__withMoreDarkBG_1xhkx_91",Tt="_Button__maxWidth_1xhkx_96",K={Button:Pt,Button__bg:Nt,Button__withBG:Lt,"Button__big-x-padding":"_Button__big-x-padding_1xhkx_88",Button__withMoreDarkBG:Dt,Button__maxWidth:Tt},kt=d.memo(({children:s,themes:a,...f})=>(a!=null&&a.includes("withMoreDarkBG")&&a.push("withBG"),r.jsxs(O,{align:"center",justify:"center",...f,className:`${K.Button} 
        ${a&&a.map(h=>K[`Button__${h}`]).join(" ")}
        ${f.className}`,children:[r.jsx("div",{className:K.Button__bg}),(a==null?void 0:a.includes("withBG"))&&r.jsxs(r.Fragment,{children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]}),s]}))),Ft=d.memo(()=>r.jsxs("header",{className:p.Header,children:[r.jsxs(O,{gap:"15",children:[r.jsx(qt,{className:p.Header__logo}),r.jsxs("h2",{className:p.Header__caption,children:["ИСТОЧНИК",r.jsx("br",{}),"ТРАФФИКА"]})]}),r.jsx("nav",{children:r.jsxs("ul",{className:p.Header__navList,children:[r.jsx("li",{className:p.Header__navList__item,children:"Услуги"}),r.jsx("li",{className:p.Header__navList__item,children:"О нас"}),r.jsx("li",{className:p.Header__navList__item,children:"Контакты"})]})}),r.jsxs(O,{gap:"15",children:[r.jsx("a",{className:p.Header__contact,target:"_blank",href:"tel:+79213299965",children:r.jsx(At,{})}),r.jsx("a",{className:p.Header__contact,target:"_blank",href:"https://t.me/Agent_Traffic23",children:r.jsx(Ot,{})}),r.jsx(kt,{children:r.jsx("a",{target:"_blank",href:"https://t.me/Agent_Traffic23",children:"Бесплатная консультация"})})]})]})),Rt=window.matchMedia("(max-width: 1200px)"),Wt=300,$t=1e3,zt="_PageOpenAnimation_1v8uy_1",Xt="_PageOpenAnimation__bar_1v8uy_7",It="_PageOpenAnimation__show_1v8uy_70",m={PageOpenAnimation:zt,PageOpenAnimation__bar:Xt,PageOpenAnimation__show:It},Gt=s=>{const{children:a,element:f=document.body}=s;return He.createPortal(a,f)},Vt=d.memo(()=>{const[s,a]=d.useState(!0),[f,h]=d.useState(!0),o=d.useRef(),l=d.useRef();return d.useEffect(()=>(o.current=setTimeout(()=>{a(!1),l.current=setTimeout(()=>{h(!1)},$t)},Wt),()=>{clearTimeout(o.current),clearTimeout(l.current)}),[]),Gt({children:r.jsx(r.Fragment,{children:f&&r.jsxs("div",{className:`${m.PageOpenAnimation} ${s&&m.PageOpenAnimation__show}`,children:[r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar}),r.jsx("div",{className:m.PageOpenAnimation__bar})]})})})}),Zt=()=>r.jsx(r.Fragment,{children:Rt.matches?r.jsx(O,{className:"mobile_zaglushka",maxWidth:!0,justify:"center",children:r.jsxs("p",{children:["На данный момент сайт недоступен на мобильных и планшетных устройствах.",r.jsx("br",{}),"Приносим свои извинения."]})}):r.jsxs(d.Suspense,{children:[r.jsx(Ft,{}),r.jsx(Pe,{}),r.jsx(Vt,{})]})}),he=document.getElementById("root");if(!he)throw new Error("Контейнер root не найден. НЕ удалось вмонтировать реакт приложение");const Kt=qe.createRoot(he);Kt.render(r.jsx(Oe,{fallback:r.jsx(r.Fragment,{children:"Что-то пошло не так."}),children:r.jsx(Zt,{})}));(function(){var s={frameRate:1500,animationTime:800,stepSize:90,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},a=s,f=!1,h=!1,o={x:0,y:0},l=!1,u=document.documentElement,b,C,j,w=[],S,k=/^Mac/.test(navigator.platform);function B(){if(!(l||!document.body)){l=!0;var e=document.body,t=document.documentElement,i=window.innerHeight,c=e.scrollHeight;if(u=document.compatMode.indexOf("CSS")>=0?t:e,b=e,top!=self)h=!0;else if(Se&&c>i&&(e.offsetHeight<=i||t.offsetHeight<=i)){var _=document.createElement("div");_.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+u.scrollHeight+"px",document.body.appendChild(_);var g;j=function(){g||(g=setTimeout(function(){_.style.height="0",_.style.height=u.scrollHeight+"px",g=null},500))},setTimeout(j,10),I("resize",j);var q={attributes:!0,childList:!0,characterData:!1};if(C=new xe(j),C.observe(e,q),u.offsetHeight<=i){var N=document.createElement("div");N.style.clear="both",e.appendChild(N)}}!a.fixedBackground&&!f&&(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}function F(){C&&C.disconnect(),E(Z,Y),E("mousedown",mousedown),E("keydown",keydown),E("resize",j),E("load",B)}var x=[],R=!1,W=Date.now();function fe(e,t,i){if(ve(t,i),a.accelerationMax!=1){var c=Date.now(),_=c-W;if(_<a.accelerationDelta){var g=(1+50/_)/2;g>1&&(g=Math.min(g,a.accelerationMax),t*=g,i*=g)}W=Date.now()}if(x.push({x:t,y:i,lastX:t<0?.99:-.99,lastY:i<0?.99:-.99,start:Date.now()}),!R){var q=re(),N=e===q||e===document.body;e.$scrollBehavior==null&&pe(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto");var le=function(Yt){for(var Me=Date.now(),L=0,D=0,A=0;A<x.length;A++){var y=x[A],ce=Me-y.start,de=ce>=a.animationTime,T=de?1:ce/a.animationTime;a.pulseAlgorithm&&(T=ye(T));var _e=y.x*T-y.lastX>>0,ue=y.y*T-y.lastY>>0;L+=_e,D+=ue,y.lastX+=_e,y.lastY+=ue,de&&(x.splice(A,1),A--)}N?window.scrollBy(L,D):(L&&(e.scrollLeft+=L),D&&(e.scrollTop+=D)),!t&&!i&&(x=[]),x.length?te(le,e,1e3/a.frameRate+1):(R=!1,e.$scrollBehavior!=null&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))};te(le,e,0),R=!0}}function Y(e){l||B();var t=e.target;if(e.defaultPrevented||e.ctrlKey||G(b,"embed")||G(t,"embed")&&/\.pdf/i.test(t.src)||G(b,"object")||t.shadowRoot)return!0;var i=-e.wheelDeltaX||e.deltaX||0,c=-e.wheelDeltaY||e.deltaY||0;k&&(e.wheelDeltaX&&M(e.wheelDeltaX,120)&&(i=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&M(e.wheelDeltaY,120)&&(c=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),!i&&!c&&(c=-e.wheelDelta||0),e.deltaMode===1&&(i*=40,c*=40);var _=ge(t);if(!_)return h&&ie?(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e)):!0;if(je(c))return!0;Math.abs(i)>1.2&&(i*=a.stepSize/120),Math.abs(c)>1.2&&(c*=a.stepSize/120),fe(_,i,c),e.preventDefault(),me()}var $=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),z={},Q,P={};function me(){clearTimeout(Q),Q=setInterval(function(){z=P={}},1*1e3)}function X(e,t,i){for(var c=z,_=e.length;_--;)c[$(e[_])]=t;return t}function we(e,t){return z[$(e)]}function ge(e){var t=[],i=document.body,c=u.scrollHeight;do{var _=we(e);if(_)return X(t,_);if(t.push(e),c===e.scrollHeight){var g=U(u)&&U(i),q=g||ee(u);if(h&&J(u)||!h&&q)return X(t,re())}else if(J(e)&&ee(e))return X(t,e)}while(e=e.parentElement)}function J(e){return e.clientHeight+10<e.scrollHeight}function U(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return t!=="hidden"}function ee(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return t==="scroll"||t==="auto"}function pe(e){var t=$(e);if(P[t]==null){var i=getComputedStyle(e,"")["scroll-behavior"];P[t]=i=="smooth"}return P[t]}function I(e,t,i){window.addEventListener(e,t,i||!1)}function E(e,t,i){window.removeEventListener(e,t,!1)}function G(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}function ve(e,t){e=e>0?1:-1,t=t>0?1:-1,(o.x!==e||o.y!==t)&&(o.x=e,o.y=t,x=[],W=0)}if(window.localStorage&&localStorage.SS_deltaBuffer)try{w=localStorage.SS_deltaBuffer.split(",")}catch{}function je(e){if(e){w.length||(w=[e,e,e]),e=Math.abs(e),w.push(e),w.shift(),clearTimeout(S),S=setTimeout(function(){try{localStorage.SS_deltaBuffer=w.join(",")}catch{}},1e3);var t=e>120&&V(e),i=!V(120)&&!V(100)&&!t;return e<50?!0:i}}function M(e,t){return Math.floor(e/t)==e/t}function V(e){return M(w[0],e)&&M(w[1],e)&&M(w[2],e)}var te=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,i){window.setTimeout(e,i||1e3/60)}}(),xe=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,re=function(){var e=document.scrollingElement;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var i=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),document.body.scrollTop!=i?e=document.body:e=document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}();function ne(e){var t,i,c;return e=e*a.pulseScale,e<1?t=e-(1-Math.exp(-e)):(i=Math.exp(-1),e-=1,c=1-Math.exp(-e),t=i+c*(1-i)),t*a.pulseNormalize}function ye(e){return e>=1?1:e<=0?0:(a.pulseNormalize==1&&(a.pulseNormalize/=ne(1)),ne(e))}var v=window.navigator.userAgent,ae=/Edge/.test(v),ie=/chrome/i.test(v)&&!ae,oe=/safari/i.test(v)&&!ae,Ce=/mobile/i.test(v),be=/Windows NT 6.1/i.test(v)&&/rv:11/i.test(v),Se=oe&&(/Version\/8/i.test(v)||/Version\/9/i.test(v)),Be=(ie||oe||be)&&!Ce,se=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){se=!0}}))}catch{}var Ee=se?{passive:!1}:!1,Z="onwheel"in document.createElement("div")?"wheel":"mousewheel";Z&&Be&&(I(Z,Y,Ee),I("load",B));function H(e){for(var t in e)s.hasOwnProperty(t)&&(a[t]=e[t])}H.destroy=F,window.SmoothScrollOptions&&H(window.SmoothScrollOptions),typeof define=="function"&&define.amd?define(function(){return H}):typeof exports=="object"?module.exports=H:window.SmoothScroll=H})();export{kt as B,O as F,ir as M,At as S};
