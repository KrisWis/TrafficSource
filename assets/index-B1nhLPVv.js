const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainPage-C_8zI_Y-.js","assets/react-BFnl5N1q.js","assets/@splinetool-xhpDkOvk.js","assets/lodash.debounce-DeqZdA9b.js","assets/@emotion-9ZPAwRsI.js","assets/react-merge-refs-Bf2qc8Rt.js","assets/react-animated-numbers--ODZrajI.js","assets/react-dom-Bdrrpi00.js","assets/scheduler-CKyTKYc2.js","assets/react-error-boundary-Df1FABq1.js","assets/MainPage-Cks7jWWQ.css"])))=>i.map(i=>d[i]);
import{r as i,j as t}from"./react-BFnl5N1q.js";import{r as ke,c as Ae}from"./react-dom-Bdrrpi00.js";import{_ as He}from"./@splinetool-xhpDkOvk.js";import{E as Oe}from"./react-error-boundary-Df1FABq1.js";import"./scheduler-CKyTKYc2.js";import"./lodash.debounce-DeqZdA9b.js";import"./@emotion-9ZPAwRsI.js";import"./react-merge-refs-Bf2qc8Rt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))f(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&f(h)}).observe(document,{childList:!0,subtree:!0});function m(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerPolicy&&(l.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?l.credentials="include":c.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function f(c){if(c.ep)return;c.ep=!0;const l=m(c);fetch(c.href,l)}})();const pr=i.createContext({scrollPosition:"MainBlock",setScrollPosition:()=>{}}),Le=i.lazy(()=>He(async()=>{const{MainPage:s}=await import("./MainPage-C_8zI_Y-.js");return{MainPage:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({MainPage:s})=>({default:s}))),Pe="_Header_1mv8q_2",De="_Header__caption_1mv8q_28",Te="_Header__navList_1mv8q_34",We="_Header__navList__item_1mv8q_39",ze="_Header__contact_1mv8q_50",x={Header:Pe,Header__caption:De,Header__navList:Te,Header__navList__item:We,Header__contact:ze},$e="_Flex_9fjqr_1",Re="_justifyStart_9fjqr_5",Xe="_justifyCenter_9fjqr_9",Ie="_justifyEnd_9fjqr_13",Ge="_justifyBetween_9fjqr_17",Ve="_justifyEvenly_9fjqr_21",Ze="_justifyAround_9fjqr_25",Ke="_alignStart_9fjqr_29",Ye="_alignCenter_9fjqr_33",Qe="_alignEnd_9fjqr_37",Je="_alignStretch_9fjqr_41",Ue="_directionRow_9fjqr_45",et="_directionColumn_9fjqr_49",tt="_gap0_9fjqr_53",rt="_gap3_9fjqr_57",nt="_gap5_9fjqr_61",ot="_gap10_9fjqr_65",at="_gap15_9fjqr_69",it="_gap20_9fjqr_73",st="_gap30_9fjqr_77",ct="_gap40_9fjqr_81",lt="_gap50_9fjqr_85",_t="_maxWidth_9fjqr_89",dt="_maxHeight_9fjqr_93",ut="_wrap_9fjqr_97",ht="_width10_9fjqr_101",ft="_width20_9fjqr_105",mt="_width25_9fjqr_109",gt="_width30_9fjqr_113",wt="_width35_9fjqr_117",pt="_width40_9fjqr_121",vt="_width50_9fjqr_125",jt="_width60_9fjqr_129",xt="_width65_9fjqr_133",Ct="_width70_9fjqr_137",yt="_width75_9fjqr_141",bt="_width80_9fjqr_145",St="_width90_9fjqr_149",Bt="_relative_9fjqr_153",n={Flex:$e,justifyStart:Re,justifyCenter:Xe,justifyEnd:Ie,justifyBetween:Ge,justifyEvenly:Ve,justifyAround:Ze,alignStart:Ke,alignCenter:Ye,alignEnd:Qe,alignStretch:Je,directionRow:Ue,directionColumn:et,gap0:tt,gap3:rt,gap5:nt,gap10:ot,gap15:at,gap20:it,gap30:st,gap40:ct,gap50:lt,maxWidth:_t,maxHeight:dt,wrap:ut,width10:ht,width20:ft,width25:mt,width30:gt,width35:wt,width40:pt,width50:vt,width60:jt,width65:xt,width70:Ct,width75:yt,width80:bt,width90:St,relative:Bt},Et={start:n.justifyStart,center:n.justifyCenter,end:n.justifyEnd,between:n.justifyBetween,evenly:n.justifyEvenly,around:n.justifyAround},Mt={start:n.alignStart,center:n.alignCenter,end:n.alignEnd,stretch:n.alignStretch},qt={row:n.directionRow,column:n.directionColumn},Ft={0:n.gap0,3:n.gap3,5:n.gap5,10:n.gap10,15:n.gap15,20:n.gap20,30:n.gap30,40:n.gap40,50:n.gap50},Nt={10:n.width10,20:n.width20,25:n.width25,30:n.width30,35:n.width35,40:n.width40,50:n.width50,60:n.width60,65:n.width65,70:n.width70,75:n.width75,80:n.width80,90:n.width90},u=s=>{const{className:o,children:m,justify:f="start",align:c="center",direction:l="row",gap:h,maxWidth:B,maxHeight:S,innerRef:C,wrap:p,width:E,relative:T,...M}=s,W=[o,Et[f],Mt[c],qt[l],h&&Ft[h],E&&Nt[E],n.Flex,B&&n.maxWidth,S&&n.maxHeight,T&&n.relative,p&&n.wrap];return t.jsx("div",{ref:C,className:W.join(" "),...M,children:m})};u.displayName="Flex";const fe=s=>i.createElement("svg",{width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.7763 17.6514C19.475 18.5041 18.2775 19.2096 17.3225 19.4159C16.6688 19.5547 15.8162 19.6645 12.9437 18.4741C9.71749 17.1375 5.2375 12.3762 5.2375 9.20776C5.2375 7.59478 6.1675 5.71655 7.79375 5.71655C8.57625 5.71655 8.74875 5.73181 9.00625 6.34949C9.3075 7.07721 10.0425 8.87016 10.13 9.05396C10.4913 9.80793 9.76249 10.2493 9.23374 10.9058C9.06499 11.1033 8.87376 11.317 9.08751 11.6846C9.3 12.0447 10.035 13.2426 11.115 14.2041C12.51 15.447 13.6412 15.8438 14.0462 16.0126C14.3475 16.1376 14.7075 16.1085 14.9275 15.8734C15.2063 15.5721 15.5525 15.0721 15.905 14.5795C16.1537 14.2269 16.47 14.1828 16.8013 14.3079C17.025 14.3854 19.8687 15.706 19.9887 15.9174C20.0775 16.0712 20.0775 16.7986 19.7763 17.6514ZM12.5025 0H12.4962C5.60499 0 0 5.60669 0 12.5C0 15.2333 0.881259 17.7692 2.38001 19.826L0.822506 24.4708L5.62626 22.9358C7.60251 24.2437 9.96125 25 12.5025 25C19.3937 25 25 19.3933 25 12.5C25 5.60669 19.3937 0 12.5025 0Z",fill:"white"})),me=s=>i.createElement("svg",{width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},i.createElement("path",{d:"M12.5 0C10.0278 0 7.61098 0.733109 5.55537 2.10662C3.49976 3.48014 1.89761 5.43237 0.951515 7.71645C0.00542114 10.0005 -0.242126 12.5139 0.240186 14.9386C0.722499 17.3634 1.91301 19.5906 3.66117 21.3389C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2422 14.9995 24.9945 17.2836 24.0484C19.5677 23.1023 21.5198 21.5003 22.8934 19.4447C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3389 3.66117C18.9947 1.31695 15.8152 0 12.5 0ZM18.6406 8.56249L16.5938 18.2344C16.4375 18.9219 16.0312 19.0781 15.4531 18.7656L12.3281 16.4531L10.7656 17.9062C10.692 18.0023 10.5975 18.0805 10.4892 18.1347C10.3809 18.1887 10.2617 18.2175 10.1406 18.2187L10.3594 15.0937L16.1406 9.85937C16.4062 9.64062 16.1406 9.51562 15.7656 9.73437L8.67188 14.1875L5.54687 13.2187C4.875 13.0156 4.85937 12.5469 5.6875 12.2344L17.7344 7.54687C18.3281 7.37499 18.8281 7.71874 18.6406 8.56249Z",fill:"white"})),kt="_Button_1xhkx_1",At="_Button__bg_1xhkx_14",Ht="_Button__withBG_1xhkx_29",Ot="_Button__withMoreDarkBG_1xhkx_91",Lt="_Button__maxWidth_1xhkx_96",Y={Button:kt,Button__bg:At,Button__withBG:Ht,"Button__big-x-padding":"_Button__big-x-padding_1xhkx_88",Button__withMoreDarkBG:Ot,Button__maxWidth:Lt},Pt=i.memo(({children:s,themes:o,...m})=>(o!=null&&o.includes("withMoreDarkBG")&&o.push("withBG"),t.jsxs(u,{align:"center",justify:"center",...m,className:`${Y.Button} 
        ${o&&o.map(f=>Y[`Button__${f}`]).join(" ")}
        ${m.className}`,children:[t.jsx("div",{className:Y.Button__bg}),(o==null?void 0:o.includes("withBG"))&&t.jsxs(t.Fragment,{children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),s]}))),Dt="_Logo_o1uiw_1",Tt={Logo:Dt,"logo-circle-anim":"_logo-circle-anim_o1uiw_1"},Wt=s=>i.createElement("svg",{width:42,height:51,viewBox:"0 0 42 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},i.createElement("path",{d:"M1 7.54834V30.922C1.54749 37.2813 6.1043 50 19.9516 50C37.2608 50 40.5457 34.7123 40.6721 30.922C40.7731 27.8897 40.7142 14.0761 40.6721 7.54834",stroke:"white",strokeWidth:1.76882}),i.createElement("path",{d:"M17.9296 17.9195C16.4134 16.7403 12.7495 14.5588 10.2226 15.2663C7.06398 16.1507 6.05322 18.5512 6.05322 20.1937M17.9296 17.9195C19.8247 16.277 24.6258 12.3604 29.1742 11.6023C33.7226 10.8442 35.3651 18.6776 35.4914 20.1937C35.5747 21.1932 35.7678 24.4437 35.564 28.027M17.9296 17.9195C12.3704 22.4679 7.6957 21.3308 6.05322 20.1937M6.05322 20.1937C7.02186 22.51 10.172 26.8394 15.0237 25.6265C21.0882 24.1104 24.2468 20.1937 27.279 19.562C30.3113 18.9303 33.236 20.1937 35.564 28.027M6.05322 20.1937C6.05322 21.2284 6.05322 25.9866 6.05322 29.6695M35.564 28.027C35.4586 29.8795 35.2472 31.8209 34.8597 33.5862C34.7865 33.9196 34.6908 34.2572 34.5733 34.5969M6.05322 29.6695C6.05322 30.6638 6.05322 31.5797 6.05322 32.3227C6.93763 36.1973 10.5511 44.0475 17.9296 44.4518C26.559 44.9246 32.8659 39.5355 34.5733 34.5969M6.05322 29.6695C7.06398 31.312 10.0503 34.0916 14.0129 34.0916C17.9296 34.0916 20.9624 33.0431 24.5 29.0001C28.0376 24.9571 33.6553 28.5324 34.5733 34.5969",stroke:"white",strokeWidth:1.01075}),i.createElement("circle",{cx:23.6259,cy:5.93814,r:2.77957,stroke:"white",strokeWidth:.758065}),i.createElement("circle",{cx:18.5729,cy:1.38979,r:1.1371,stroke:"white",strokeWidth:.505376})),zt=i.memo(()=>t.jsx(Wt,{className:Tt.Logo})),$t=i.memo(()=>t.jsxs("header",{className:x.Header,children:[t.jsxs(u,{gap:"15",children:[t.jsx(zt,{}),t.jsxs("h2",{className:x.Header__caption,children:["ИСТОЧНИК",t.jsx("br",{}),"ТРАФФИКА"]})]}),t.jsx("nav",{children:t.jsxs("ul",{className:x.Header__navList,children:[t.jsx("li",{className:x.Header__navList__item,children:"Услуги"}),t.jsx("li",{className:x.Header__navList__item,children:"О нас"}),t.jsx("li",{className:x.Header__navList__item,children:"Контакты"})]})}),t.jsxs(u,{gap:"15",children:[t.jsx("a",{className:x.Header__contact,target:"_blank",href:"tel:+79213299965",children:t.jsx(fe,{})}),t.jsx("a",{className:x.Header__contact,target:"_blank",href:"https://t.me/Agent_Traffic23",children:t.jsx(me,{})}),t.jsx(Pt,{children:t.jsx("a",{target:"_blank",href:"https://t.me/Agent_Traffic23",children:"Бесплатная консультация"})})]})]})),Rt=window.matchMedia("(max-width: 1200px)"),Xt=300,It=1e3,Gt="_PageOpenAnimation_1v8uy_1",Vt="_PageOpenAnimation__bar_1v8uy_7",Zt="_PageOpenAnimation__show_1v8uy_70",g={PageOpenAnimation:Gt,PageOpenAnimation__bar:Vt,PageOpenAnimation__show:Zt},Kt=s=>{const{children:o,element:m=document.body}=s;return ke.createPortal(o,m)},Yt=i.memo(()=>{const[s,o]=i.useState(!0),[m,f]=i.useState(!0),c=i.useRef(),l=i.useRef();return i.useEffect(()=>(c.current=setTimeout(()=>{o(!1),l.current=setTimeout(()=>{f(!1)},It)},Xt),()=>{clearTimeout(c.current),clearTimeout(l.current)}),[]),Kt({children:t.jsx(t.Fragment,{children:m&&t.jsxs("div",{className:`${g.PageOpenAnimation} ${s&&g.PageOpenAnimation__show}`,children:[t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar}),t.jsx("div",{className:g.PageOpenAnimation__bar})]})})})}),Qt="_Footer_1qz8a_2",Jt="_Footer__caption_1qz8a_23",Ut="_Footer__subcaption_1qz8a_28",er="_Footer__link_1qz8a_33",tr="_Footer__contact_1qz8a_44",rr="_Footer__rights_1qz8a_55",nr="_Footer__legal_1qz8a_61",w={Footer:Qt,Footer__caption:Jt,Footer__subcaption:Ut,Footer__link:er,Footer__contact:tr,Footer__rights:rr,Footer__legal:nr},or=s=>i.createElement("svg",{width:78,height:95,viewBox:"0 0 78 95",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},i.createElement("path",{d:"M2 14.0266V57.4574C3.0173 69.2737 11.4843 92.9063 37.2142 92.9063C69.3764 92.9063 75.4802 64.5002 75.715 57.4574C75.9028 51.8231 75.7932 26.1559 75.715 14.0266",stroke:"white",strokeWidth:3.28665}),i.createElement("path",{d:"M33.456 33.2964C30.6388 31.1053 23.8308 27.0518 19.1355 28.3665C13.2665 30.0098 11.3884 34.4702 11.3884 37.5221M33.456 33.2964C36.9774 30.2446 45.8983 22.967 54.3497 21.5584C62.8011 20.1498 65.853 34.705 66.0877 37.5221C66.2425 39.3792 66.6013 45.4191 66.2226 52.0773M33.456 33.2964C23.1265 41.7479 14.4403 39.635 11.3884 37.5221M11.3884 37.5221C13.1883 41.8261 19.0416 49.8706 28.0565 47.6169C39.325 44.7997 45.194 37.5221 50.8283 36.3483C56.4625 35.1745 61.897 37.5221 66.2226 52.0773M11.3884 37.5221C11.3884 39.4446 11.3884 48.286 11.3884 55.1292M66.2226 52.0773C66.0268 55.5194 65.634 59.1267 64.9139 62.4068C64.7779 63.0263 64.6001 63.6536 64.3819 64.2849M11.3884 55.1292C11.3884 56.9767 11.3884 58.6785 11.3884 60.0592C13.0318 67.2585 19.7459 81.845 33.456 82.5963C49.4905 83.4749 61.2092 73.4613 64.3819 64.2849M11.3884 55.1292C13.2665 58.1811 18.8154 63.3459 26.1784 63.3459C33.456 63.3459 39.0912 61.3978 45.6645 53.8854C52.2378 46.3731 62.676 53.0164 64.3819 64.2849",stroke:"white",strokeWidth:1.87809}),i.createElement("circle",{cx:44.0404,cy:11.0333,r:5.16474,stroke:"white",strokeWidth:1.40857}),i.createElement("circle",{cx:34.6532,cy:2.58237,r:2.11285,stroke:"white",strokeWidth:.939044})),ar=s=>i.createElement("svg",{width:36,height:35,viewBox:"0 0 36 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},i.createElement("circle",{cx:18.269,cy:17.5,r:17.5,fill:"white"}),i.createElement("path",{d:"M18 28C20.6715 28 23.1825 26.96 25.0715 25.071L23.657 23.657C22.146 25.168 20.137 26 18 26C13.589 26 10 22.411 10 18C10 13.589 13.589 10 18 10C22.411 10 26 13.589 26 18C26 19.103 25.103 20 24 20C22.897 20 22 19.103 22 18V14H20V14.5395C19.411 14.1985 18.7295 14 18 14C15.791 14 14 15.791 14 18C14 20.209 15.791 22 18 22C19.197 22 20.268 21.4715 21.0015 20.6385C21.735 21.471 22.8055 22 24 22C26.2055 22 28 20.2055 28 18C28 12.486 23.514 8 18 8C12.486 8 8 12.486 8 18C8 23.514 12.486 28 18 28ZM18 20C16.897 20 16 19.103 16 18C16 16.897 16.897 16 18 16C19.103 16 20 16.897 20 18C20 19.103 19.103 20 18 20Z",fill:"black"})),ir=i.memo(()=>t.jsxs("footer",{id:"Footer",className:w.Footer,children:[t.jsxs(u,{align:"start",maxHeight:!0,justify:"between",direction:"column",children:[t.jsxs(u,{gap:"20",children:[t.jsx(or,{}),t.jsxs("h2",{className:w.Footer__caption,children:["ИСТОЧНИК",t.jsx("br",{}),"ТРАФФИКА"]})]}),t.jsxs(u,{gap:"50",children:[t.jsxs(u,{align:"start",gap:"15",direction:"column",children:[t.jsx("h6",{className:w.Footer__subcaption,children:"Контакты"}),t.jsxs(u,{align:"start",gap:"10",direction:"column",children:[t.jsx("a",{className:w.Footer__link,href:"mailto: traffic_krd23@mail.ru",target:"_blank",children:"traffic_krd23@mail.ru"}),t.jsx("a",{className:w.Footer__link,href:"tel: +79213299965",target:"_blank",children:"+7 921 329 99-65"})]})]}),t.jsxs(u,{align:"start",gap:"15",direction:"column",children:[t.jsx("h6",{className:w.Footer__subcaption,children:"Социальные сети"}),t.jsxs(u,{gap:"20",children:[t.jsx("a",{className:w.Footer__contact,target:"_blank",href:"https://t.me/Agent_Traffic23",children:t.jsx(me,{})}),t.jsx("a",{className:w.Footer__contact,target:"_blank",href:"tel:+79213299965",children:t.jsx(fe,{})}),t.jsx("a",{className:w.Footer__contact,target:"_blank",href:"mailto: traffic_krd23@mail.ru",children:t.jsx(ar,{})})]})]})]})]}),t.jsxs(u,{direction:"column",maxHeight:!0,align:"end",gap:"20",children:[t.jsxs(u,{align:"end",className:w.Footer__rights,direction:"column",children:[t.jsx("span",{children:"© 2022-2024 «ИСТОЧНИК ТРАФФИКА»."}),t.jsx("span",{children:"Все права защищены."})]}),t.jsx("span",{className:w.Footer__legal,children:"Юридическая информация"}),t.jsxs(u,{align:"end",className:w.Footer__legal,direction:"column",children:[t.jsx("span",{children:"ИП Гусейнов Я. А."}),t.jsx("span",{children:"ИНН: 471511779391"}),t.jsx("span",{children:"ОГРН: 324237500466545"})]})]})]})),sr=()=>t.jsx(t.Fragment,{children:Rt.matches?t.jsx(u,{className:"zaglushka",maxWidth:!0,justify:"center",children:t.jsxs("p",{children:["На данный момент сайт недоступен на мобильных и планшетных устройствах.",t.jsx("br",{}),"Приносим свои извинения."]})}):t.jsxs(i.Suspense,{children:[t.jsx($t,{}),t.jsx(Le,{}),t.jsx(ir,{}),t.jsx(Yt,{})]})}),ge=document.getElementById("root");if(!ge)throw new Error("Контейнер root не найден. НЕ удалось вмонтировать реакт приложение");const cr=Ae.createRoot(ge);cr.render(t.jsx(Oe,{fallback:t.jsx(u,{className:"zaglushka",maxWidth:!0,justify:"center",children:t.jsxs("p",{children:["На сайте возникла непредвиденная техническая ошибка.",t.jsx("br",{}),"Приносим свои извинения."]})}),children:t.jsx(sr,{})}));(function(){var s={frameRate:1500,animationTime:800,stepSize:90,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},o=s,m=!1,f=!1,c={x:0,y:0},l=!1,h=document.documentElement,B,S,C,p=[],E,T=/^Mac/.test(navigator.platform);function M(){if(!(l||!document.body)){l=!0;var e=document.body,r=document.documentElement,a=window.innerHeight,_=e.scrollHeight;if(h=document.compatMode.indexOf("CSS")>=0?r:e,B=e,top!=self)f=!0;else if(Me&&_>a&&(e.offsetHeight<=a||r.offsetHeight<=a)){var d=document.createElement("div");d.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+h.scrollHeight+"px",document.body.appendChild(d);var v;C=function(){v||(v=setTimeout(function(){d.style.height="0",d.style.height=h.scrollHeight+"px",v=null},500))},setTimeout(C,10),G("resize",C);var k={attributes:!0,childList:!0,characterData:!1};if(S=new be(C),S.observe(e,k),h.offsetHeight<=a){var O=document.createElement("div");O.style.clear="both",e.appendChild(O)}}!o.fixedBackground&&!m&&(e.style.backgroundAttachment="scroll",r.style.backgroundAttachment="scroll")}}function W(){S&&S.disconnect(),q(K,Q),q("mousedown",mousedown),q("keydown",keydown),q("resize",C),q("load",M)}var y=[],z=!1,$=Date.now();function we(e,r,a){if(Ce(r,a),o.accelerationMax!=1){var _=Date.now(),d=_-$;if(d<o.accelerationDelta){var v=(1+50/d)/2;v>1&&(v=Math.min(v,o.accelerationMax),r*=v,a*=v)}$=Date.now()}if(y.push({x:r,y:a,lastX:r<0?.99:-.99,lastY:a<0?.99:-.99,start:Date.now()}),!z){var k=ne(),O=e===k||e===document.body;e.$scrollBehavior==null&&xe(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto");var le=function(lr){for(var Ne=Date.now(),L=0,P=0,A=0;A<y.length;A++){var b=y[A],_e=Ne-b.start,de=_e>=o.animationTime,D=de?1:_e/o.animationTime;o.pulseAlgorithm&&(D=Se(D));var ue=b.x*D-b.lastX>>0,he=b.y*D-b.lastY>>0;L+=ue,P+=he,b.lastX+=ue,b.lastY+=he,de&&(y.splice(A,1),A--)}O?window.scrollBy(L,P):(L&&(e.scrollLeft+=L),P&&(e.scrollTop+=P)),!r&&!a&&(y=[]),y.length?re(le,e,1e3/o.frameRate+1):(z=!1,e.$scrollBehavior!=null&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))};re(le,e,0),z=!0}}function Q(e){l||M();var r=e.target;if(e.defaultPrevented||e.ctrlKey||V(B,"embed")||V(r,"embed")&&/\.pdf/i.test(r.src)||V(B,"object")||r.shadowRoot)return!0;var a=-e.wheelDeltaX||e.deltaX||0,_=-e.wheelDeltaY||e.deltaY||0;T&&(e.wheelDeltaX&&F(e.wheelDeltaX,120)&&(a=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&F(e.wheelDeltaY,120)&&(_=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),!a&&!_&&(_=-e.wheelDelta||0),e.deltaMode===1&&(a*=40,_*=40);var d=je(r);if(!d)return f&&ie?(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e)):!0;if(ye(_))return!0;Math.abs(a)>1.2&&(a*=o.stepSize/120),Math.abs(_)>1.2&&(_*=o.stepSize/120),we(d,a,_),e.preventDefault(),pe()}var R=function(){var e=0;return function(r){return r.uniqueID||(r.uniqueID=e++)}}(),X={},J,H={};function pe(){clearTimeout(J),J=setInterval(function(){X=H={}},1*1e3)}function I(e,r,a){for(var _=X,d=e.length;d--;)_[R(e[d])]=r;return r}function ve(e,r){return X[R(e)]}function je(e){var r=[],a=document.body,_=h.scrollHeight;do{var d=ve(e);if(d)return I(r,d);if(r.push(e),_===e.scrollHeight){var v=ee(h)&&ee(a),k=v||te(h);if(f&&U(h)||!f&&k)return I(r,ne())}else if(U(e)&&te(e))return I(r,e)}while(e=e.parentElement)}function U(e){return e.clientHeight+10<e.scrollHeight}function ee(e){var r=getComputedStyle(e,"").getPropertyValue("overflow-y");return r!=="hidden"}function te(e){var r=getComputedStyle(e,"").getPropertyValue("overflow-y");return r==="scroll"||r==="auto"}function xe(e){var r=R(e);if(H[r]==null){var a=getComputedStyle(e,"")["scroll-behavior"];H[r]=a=="smooth"}return H[r]}function G(e,r,a){window.addEventListener(e,r,a||!1)}function q(e,r,a){window.removeEventListener(e,r,!1)}function V(e,r){return e&&(e.nodeName||"").toLowerCase()===r.toLowerCase()}function Ce(e,r){e=e>0?1:-1,r=r>0?1:-1,(c.x!==e||c.y!==r)&&(c.x=e,c.y=r,y=[],$=0)}if(window.localStorage&&localStorage.SS_deltaBuffer)try{p=localStorage.SS_deltaBuffer.split(",")}catch{}function ye(e){if(e){p.length||(p=[e,e,e]),e=Math.abs(e),p.push(e),p.shift(),clearTimeout(E),E=setTimeout(function(){try{localStorage.SS_deltaBuffer=p.join(",")}catch{}},1e3);var r=e>120&&Z(e),a=!Z(120)&&!Z(100)&&!r;return e<50?!0:a}}function F(e,r){return Math.floor(e/r)==e/r}function Z(e){return F(p[0],e)&&F(p[1],e)&&F(p[2],e)}var re=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,r,a){window.setTimeout(e,a||1e3/60)}}(),be=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,ne=function(){var e=document.scrollingElement;return function(){if(!e){var r=document.createElement("div");r.style.cssText="height:10000px;width:1px;",document.body.appendChild(r);var a=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),document.body.scrollTop!=a?e=document.body:e=document.documentElement,window.scrollBy(0,-3),document.body.removeChild(r)}return e}}();function oe(e){var r,a,_;return e=e*o.pulseScale,e<1?r=e-(1-Math.exp(-e)):(a=Math.exp(-1),e-=1,_=1-Math.exp(-e),r=a+_*(1-a)),r*o.pulseNormalize}function Se(e){return e>=1?1:e<=0?0:(o.pulseNormalize==1&&(o.pulseNormalize/=oe(1)),oe(e))}var j=window.navigator.userAgent,ae=/Edge/.test(j),ie=/chrome/i.test(j)&&!ae,se=/safari/i.test(j)&&!ae,Be=/mobile/i.test(j),Ee=/Windows NT 6.1/i.test(j)&&/rv:11/i.test(j),Me=se&&(/Version\/8/i.test(j)||/Version\/9/i.test(j)),qe=(ie||se||Ee)&&!Be,ce=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ce=!0}}))}catch{}var Fe=ce?{passive:!1}:!1,K="onwheel"in document.createElement("div")?"wheel":"mousewheel";K&&qe&&(G(K,Q,Fe),G("load",M));function N(e){for(var r in e)s.hasOwnProperty(r)&&(o[r]=e[r])}N.destroy=W,window.SmoothScrollOptions&&N(window.SmoothScrollOptions),typeof define=="function"&&define.amd?define(function(){return N}):typeof exports=="object"?module.exports=N:window.SmoothScroll=N})();export{Pt as B,u as F,pr as M,fe as S};