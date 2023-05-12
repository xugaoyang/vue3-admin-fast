import{d as z,a as P,u as B,r as d,o as f,c as x,w as i,b as n,e as a,h as Z,f as p,t as N,g as I,F as H,i as q,j as W,s as k,k as F,l as R,m as ee,n as te,p as pe,q as he,v as ge,x as $,y as ne,z as se,A as fe,B as U,C as V,D as ve,E as ye,G as Se,H as Ce,I as we,J as xe,K as be,L as ke,M as Ie,N as Pe,O as Ee,P as K,Q as Me,R as Te,S as $e,T as Ve,U as Le,V as Re,W as De,X as Oe,Y as Ae}from"./vendor-8f17f3e0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const Ne="modulepreload",We=function(e){return"/vue3-admin-fast/"+e},oe={},C=function(s,l,c){if(!l||l.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(l.map(o=>{if(o=We(o),o in oe)return;oe[o]=!0;const u=o.endsWith(".css"),S=u?'[rel="stylesheet"]':"";if(!!c)for(let h=t.length-1;h>=0;h--){const r=t[h];if(r.href===o&&(!u||r.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${S}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":Ne,u||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),u)return new Promise((h,r)=>{_.addEventListener("load",h),_.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s())};const D=z("settingStore",{persist:{key:"settingStore",storage:localStorage},state:()=>({layoutHasSide:!0,settingPanelShow:!1,sideWidth:"200px",isMenuCollapse:!1,mainColor:"#6C63FF",naviColor:"#fff",sideColor:"#fff",lastSideColor:"#fff"}),getters:{layoutSideStatus(e){return e.layoutHasSide},settingPanelStatus(e){return e.settingPanelShow},getSideWidth(e){return e.sideWidth},getMenuCollapse(e){return e.isMenuCollapse},getMainColor(e){return e.mainColor},getNaviColor(e){return e.naviColor},getSideColor(e){return e.sideColor},getLastSideColor(e){return e.lastSideColor}},actions:{changeLayoutSideStatus(e){this.layoutHasSide=e,this.sideWidth="200px",this.isMenuCollapse=!1,e?this.sideColor=this.lastSideColor:this.sideColor=this.naviColor},changeSettingPanelStatus(e){this.settingPanelShow=e},changeMenuCollapse(e){this.isMenuCollapse=e},changeSideWidth(e){this.sideWidth=e},changeMainColor(e){this.mainColor=e,document.documentElement.style.setProperty("--el-color-primary",e)},changeNaviColor(e){this.naviColor=e},changeSideColor(e){this.sideColor=e,this.lastSideColor=e}}}),Ue=P({__name:"SidebarItem",props:["model"],setup(e){const s=e,l=B();console.log("属性值",s.model);const c=t=>{console.log(t),l.push(t.path)};return(t,o)=>{const u=d("el-icon"),S=d("SidebarItem",!0),b=d("el-sub-menu"),_=d("el-menu-item");return e.model.children.length?(f(),x(b,{key:0,index:e.model.path},{title:i(()=>[n(u,null,{default:i(()=>[n(a(Z))]),_:1}),p("span",null,N(e.model.meta.title),1)]),default:i(()=>[(f(!0),I(H,null,q(e.model.children,h=>(f(),x(S,{key:h.id,model:h},null,8,["model"]))),128))]),_:1},8,["index"])):(f(),x(_,{key:1,index:e.model.path,onClick:o[0]||(o[0]=h=>c(e.model))},{default:i(()=>[n(u,null,{default:i(()=>[n(a(Z))]),_:1}),p("span",null,N(e.model.meta.title),1)]),_:1},8,["index"]))}}}),Y=z("routeStore",{persist:{key:"routeStore",storage:localStorage},state:()=>({tags:[],currentTag:{},menu:[]}),getters:{getTags(e){return e.tags},getCurrentTag(e){return e.currentTag},getMenu(e){return e.menu}},actions:{addTag(e){this.tags.push(e)},deleteTag(e){this.tags=W(this.tags,["fullPath",e.fullPath])},changeCurrentTag(e){this.currentTag=e},changeMenu(e){this.menu=e}}}),je=P({__name:"SidebarMenu",props:{menuMode:{type:String,default:"vertical"}},setup(e){const s=D(),l=Y(),{isMenuCollapse:c,sideColor:t}=k(s),{currentTag:o}=k(l),u=F();console.log("侧边栏获取isDark",u.value);const S=R(()=>u.value?"":t.value);console.log("侧边菜单背景色",S);const b=B();console.log(b.options),console.log("路由源数据",j);const _=r=>ee(r)?[]:(te(r,m=>{pe(m,"children")||(m.children=[]),delete m.component,m.meta.showInMenu||(r=W(r,g=>g===m),console.log("循环",r)),ee(m.children)||(te(m.children,g=>{g.path=he(g.path,"/")?g.path:`${m.path}/${g.path}`,g.meta.showInMenu||(m.children=W(m.children,v=>v===g))}),_(m.children))}),r),h=_(j);return console.log("数据处理",h),(r,m)=>{const g=d("el-menu");return f(),x(g,{collapse:a(c),"background-color":a(S),"default-active":a(o).path,mode:e.menuMode},{default:i(()=>[(f(!0),I(H,null,q(a(h),v=>(f(),x(Ue,{key:v.id,model:v},null,8,["model"]))),128))]),_:1},8,["collapse","background-color","default-active","mode"])}}});const E=(e,s)=>{const l=e.__vccOpts||e;for(const[c,t]of s)l[c]=t;return l},ae=E(je,[["__scopeId","data-v-199115aa"]]),ze="/vue3-admin-fast/assets/i18n-a9fd0582.svg",le=z("systemStore",{persist:{key:"systemStore",storage:localStorage},state:()=>({user:{},theme:"white",locale:"zhCn"}),getters:{getUser(e){return e.user},getTheme(e){return e.theme},getLocale(e){return e.locale}},actions:{changeUser(e){Object.assign(this.user,e)},changeTheme(e){this.theme=e},changeLocale(e){this.locale=e}}}),Be="/vue3-admin-fast/assets/logo-54357738.png",He={},qe={class:"logo flex justify-center items-center"},Fe=p("img",{class:"h-40px",src:Be,alt:"logo"},null,-1),Ke=p("span",{class:"text-18px font-bold"},"Vue3 admin",-1),Ye=[Fe,Ke];function Ge(e,s){return f(),I("div",qe,Ye)}const Je=E(He,[["render",Ge]]),Qe="/vue3-admin-fast/assets/layoutWithSide-7e051b0b.svg",Xe="/vue3-admin-fast/assets/layoutWithoutSide-8fe51a19.svg",M=e=>(ne("data-v-b232d8cc"),e=e(),se(),e),Ze=M(()=>p("span",{class:"w-100px"},"布局配置：",-1)),et=M(()=>p("img",{src:Qe,alt:"logo",class:"w-40px h-full"},null,-1)),tt=[et],ot=M(()=>p("img",{src:Xe,alt:"logo",class:"w-40px h-full"},null,-1)),nt=[ot],st=M(()=>p("span",{class:"w-100px"},"主题色配置：",-1)),at=M(()=>p("span",{class:"w-100px"},"导航栏配置：",-1)),lt=M(()=>p("span",{class:"w-100px"},"侧边栏配置：",-1)),rt=P({__name:"Setting",setup(e){const s=D(),{mainColor:l,sideColor:c,naviColor:t}=k(s),o=R(()=>s.settingPanelStatus),u=ge("rtl"),S=()=>{s.changeSettingPanelStatus(!1)},b=h=>{s.changeMainColor(h)},_=h=>{s.changeSideColor(h)};return(h,r)=>{const m=d("el-row"),g=d("el-color-picker"),v=d("el-drawer");return f(),x(v,{modelValue:a(o),"onUpdate:modelValue":r[5]||(r[5]=y=>$(o)?o.value=y:null),title:"系统配置",direction:u.value,"before-close":S},{default:i(()=>[n(m,{class:"p-5px flex items-center"},{default:i(()=>[Ze,p("div",{class:"layout-img cursor-pointer",onClick:r[0]||(r[0]=y=>a(s).changeLayoutSideStatus(!0))},tt),p("div",{class:"layout-img cursor-pointer",onClick:r[1]||(r[1]=y=>a(s).changeLayoutSideStatus(!1))},nt)]),_:1}),n(m,{class:"p-5px"},{default:i(()=>[st,n(g,{modelValue:a(l),"onUpdate:modelValue":r[2]||(r[2]=y=>$(l)?l.value=y:null),onChange:b},null,8,["modelValue"])]),_:1}),n(m,{class:"p-5px"},{default:i(()=>[at,n(g,{modelValue:a(t),"onUpdate:modelValue":r[3]||(r[3]=y=>$(t)?t.value=y:null)},null,8,["modelValue"])]),_:1}),n(m,{class:"p-5px"},{default:i(()=>[lt,n(g,{modelValue:a(c),"onUpdate:modelValue":r[4]||(r[4]=y=>$(c)?c.value=y:null),onChange:_},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","direction"])}}});const it=E(rt,[["__scopeId","data-v-b232d8cc"]]),ct="/vue3-admin-fast/assets/avatar-7c7a7c38.svg",re=e=>(ne("data-v-51113da9"),e=e(),se(),e),ut={class:"flex items-center"},dt={key:0,class:"flex items-center"},_t=re(()=>p("a",{href:"/"},"promotion management",-1)),mt={class:"header-action flex justify-around items-center"},pt=re(()=>p("span",null,[p("img",{src:ze,alt:"",style:{height:"26px"}})],-1)),ht={class:"pl-5px flex items-center"},gt=P({__name:"Navbar",setup(e){const s=le(),l=D(),{isMenuCollapse:c,naviColor:t,sideColor:o,layoutHasSide:u}=k(l),S=F({onChanged(T){console.log(T);const w=document.querySelector("html");T?(s.changeTheme("dark"),w==null||w.setAttribute("class","dark")):(s.changeTheme("light"),w==null||w.setAttribute("class","light"))}}),b=fe(S),_=()=>S.value?"":t.value,h=()=>u.value?o.value:_(),r=R(()=>s.theme==="dark"),m=R(()=>l.getSideWidth),g=()=>{l.changeSettingPanelStatus(!0)},v=T=>{s.changeLocale(T)},y=()=>{console.log(c.value),l.changeMenuCollapse(!c.value),l.changeSideWidth(c.value?"64px":"200px")};return(T,w)=>{const J=d("el-icon"),Q=d("el-breadcrumb-item"),ce=d("el-breadcrumb"),ue=d("el-switch"),X=d("el-dropdown-item"),de=d("el-dropdown-menu"),_e=d("el-dropdown"),me=d("el-avatar");return f(),I("div",{class:"flex justify-between items-center",style:U({backgroundColor:_()})},[p("div",ut,[n(Je,{style:U(`width: ${a(m)};backgroundColor:${h()}`)},null,8,["style"]),a(u)?(f(),I("div",dt,[n(J,{class:"cursor-pointer pl-5px pr-5px",onClick:w[0]||(w[0]=A=>y())},{default:i(()=>[a(c)?(f(),x(a(ye),{key:1})):(f(),x(a(ve),{key:0}))]),_:1}),n(ce,{separator:"/",class:"pl-10px"},{default:i(()=>[n(Q,{to:{path:"/"}},{default:i(()=>[V("homepage")]),_:1}),n(Q,null,{default:i(()=>[_t]),_:1})]),_:1})])):(f(),x(ae,{key:1,menuMode:"horizontal"}))]),p("div",mt,[n(ue,{onChange:a(b),modelValue:a(r),"onUpdate:modelValue":w[1]||(w[1]=A=>$(r)?r.value=A:null),"inline-prompt":"","active-icon":a(Se),"inactive-icon":a(Ce)},null,8,["onChange","modelValue","active-icon","inactive-icon"]),n(_e,{onCommand:v},{dropdown:i(()=>[n(de,null,{default:i(()=>[n(X,{command:"zhCn"},{default:i(()=>[V("中文")]),_:1}),n(X,{command:"en"},{default:i(()=>[V("en")]),_:1})]),_:1})]),default:i(()=>[pt]),_:1}),p("span",ht,[n(me,{class:"mr-5px",size:26,src:a(ct)},null,8,["src"]),V(" admin ")]),n(J,{class:"cursor-pointer pl-5px",onClick:w[2]||(w[2]=A=>g())},{default:i(()=>[n(a(we))]),_:1})]),n(it)],4)}}});const ft=E(gt,[["__scopeId","data-v-51113da9"]]),vt={class:"flex items-center justify-between bg-white"},yt={class:"extend-btns"},St=P({__name:"TagView",setup(e){const s=document.querySelector(".layout-content-with-tagview"),{toggle:l}=xe(s),c=B(),t=Y(),{tags:o,currentTag:u}=k(t),S=_=>{c.push(_.fullPath)},b=_=>{t.deleteTag(_)};return(_,h)=>{const r=d("el-tag"),m=d("el-scrollbar"),g=d("el-icon");return f(),I("div",vt,[n(m,null,{default:i(()=>[(f(!0),I(H,null,q(a(o),v=>(f(),x(r,{key:v,class:"mx-1 cursor-pointer",closable:v.showName!=="welcome",type:a(u).fullPath===v.fullPath?"":"info",onClick:y=>S(v),onClose:y=>b(v)},{default:i(()=>[V(N(v.showName),1)]),_:2},1032,["closable","type","onClick","onClose"]))),128))]),_:1}),p("div",yt,[n(g,{class:"cursor-pointer",onClick:a(l)},{default:i(()=>[n(a(be))]),_:1},8,["onClick"]),n(g,{class:"cursor-pointer"},{default:i(()=>[n(a(ke))]),_:1})])])}}});const Ct=E(St,[["__scopeId","data-v-06c0a3ee"]]),wt={class:"tag-wrapper h-30px"},xt={class:"layout-content"},bt={class:"h-full rounded-5px view-shadow"},kt=P({__name:"index",setup(e){const s=D(),{sideWidth:l,layoutHasSide:c,sideColor:t,mainColor:o}=k(s),u=F();console.log("侧边栏获取isDark",u.value);const S=()=>u.value?"":t.value;return(()=>{document.documentElement.style.setProperty("--el-color-primary",o.value),document.documentElement.style.setProperty("--el-menu-item-height","47px")})(),(_,h)=>{const r=d("el-header"),m=d("el-aside"),g=d("router-view"),v=d("el-main"),y=d("el-container");return f(),x(y,{class:"layout"},{default:i(()=>[n(r,{class:"layout-header"},{default:i(()=>[n(ft)]),_:1}),n(y,{class:"layout-has-side"},{default:i(()=>[a(c)?(f(),x(m,{key:0,width:a(l),class:"sidebar-wrapper",style:U({backgroundColor:S()})},{default:i(()=>[n(ae)]),_:1},8,["width","style"])):Ie("",!0),n(v,{class:"layout-content-with-tagview"},{default:i(()=>[p("div",wt,[n(Ct)]),p("div",xt,[p("div",bt,[n(g)])])]),_:1})]),_:1})]),_:1})}}});const L=E(kt,[["__scopeId","data-v-da2aa726"]]),It=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),Pt=[{path:"/403",name:"403",component:()=>C(()=>import("./403-868c5fbf.js"),["assets/403-868c5fbf.js","assets/vendor-8f17f3e0.js"]),meta:{title:"403",showInMenu:!0}},{path:"/404",name:"404",component:()=>C(()=>import("./404-fa1ee97b.js"),["assets/404-fa1ee97b.js","assets/vendor-8f17f3e0.js"]),meta:{title:"404",showInMenu:!0}},{path:"/500",name:"500",component:()=>C(()=>import("./500-c6197d98.js"),["assets/500-c6197d98.js","assets/vendor-8f17f3e0.js"]),meta:{title:"500",showInMenu:!0}}],j=[{path:"/home",name:"home",meta:{title:"首页",showInMenu:!0},component:L,children:[{path:"welcome",name:"welcome",component:()=>C(()=>import("./Welcome-f028ee8d.js"),["assets/Welcome-f028ee8d.js","assets/vendor-8f17f3e0.js"]),meta:{title:"welcome",showInMenu:!0}}]},{path:"/dashboard",name:"dashboard",meta:{title:"dashboard",showInMenu:!0},component:L,children:[{path:"analysis",name:"analysis",component:()=>C(()=>import("./Analysis-6edbbf14.js"),["assets/Analysis-6edbbf14.js","assets/vendor-8f17f3e0.js"]),meta:{title:"分析页",showInMenu:!0}}]},{path:"/layout",name:"layout",component:()=>C(()=>Promise.resolve().then(()=>It),void 0),meta:{title:"布局",showInMenu:!0,icon:""}},{path:"/fullpage",name:"fullpage",component:()=>C(()=>import("./Fullpage-c7b5c6b7.js"),["assets/Fullpage-c7b5c6b7.js","assets/vendor-8f17f3e0.js"]),meta:{title:"全屏界面",showInMenu:!0}},{path:"/login",name:"login",component:()=>C(()=>import("./Login-edf0f499.js"),["assets/Login-edf0f499.js","assets/vendor-8f17f3e0.js","assets/Login-c39ebf7d.css"]),meta:{title:"登录",showInMenu:!1}},{path:"/feature",name:"feature",meta:{title:"功能调试",showInMenu:!0},component:L,children:[{path:"helloworld",component:()=>C(()=>import("./HelloWorld-81c18187.js"),["assets/HelloWorld-81c18187.js","assets/vendor-8f17f3e0.js"]),name:"helloworld",meta:{title:"官网demo",showInMenu:!0}},{path:"element-plus",name:"element-plus",component:()=>C(()=>import("./ElementPlus-5164533c.js"),["assets/ElementPlus-5164533c.js","assets/vendor-8f17f3e0.js"]),meta:{title:"element-plus",showInMenu:!0}},{path:"cssModule",name:"cssModule",component:()=>C(()=>import("./CssModule-2f0b1072.js"),["assets/CssModule-2f0b1072.js","assets/vendor-8f17f3e0.js","assets/CssModule-0d7c7f5c.css"]),meta:{title:"cssModule",showInMenu:!0}},{path:"mock",name:"mock",component:()=>C(()=>import("./Mock-e69deab1.js"),["assets/Mock-e69deab1.js","assets/vendor-8f17f3e0.js"]),meta:{title:"mock",showInMenu:!0}}]},{path:"/error",name:"error",meta:{title:"异常页",showInMenu:!0},component:L,children:[{path:"403",name:"error-403",component:()=>C(()=>import("./403-868c5fbf.js"),["assets/403-868c5fbf.js","assets/vendor-8f17f3e0.js"]),meta:{title:"403",showInMenu:!0}},{path:"404",name:"error-404",component:()=>C(()=>import("./404-fa1ee97b.js"),["assets/404-fa1ee97b.js","assets/vendor-8f17f3e0.js"]),meta:{title:"404",showInMenu:!0}},{path:"500",name:"error-500",component:()=>C(()=>import("./500-c6197d98.js"),["assets/500-c6197d98.js","assets/vendor-8f17f3e0.js"]),meta:{title:"500",showInMenu:!0}}]}],Et=[{path:"/",redirect:"/home/welcome"},...Pt],G=Pe({history:Ee(),routes:[...Et,...j]});K.configure({showSpinner:!1});G.beforeEach(()=>{K.start()});G.afterEach((e,s)=>{K.done(),console.log(e,s);const l=Y();if(console.log(l),Me(["/login","/403","/404","/500"],e.fullPath)||e.meta&&!e.meta.showInMenu)return;const c={fullPath:e.fullPath,meta:e.meta,name:e.name,params:e.params,path:e.path,query:e.query,showName:`${e.meta.title}`||"404"},{tags:t}=k(l);Te(t.value,{showName:c.showName})||l.addTag(c),l.changeCurrentTag(c)});const ie=$e();ie.use(Ve);const Mt=P({__name:"App",setup(e){const s=le(),{locale:l}=k(s);return console.warn({TEST:"1234",VITE_APP_KEY:"222",BASE_URL:"/vue3-admin-fast/",MODE:"production",DEV:!1,PROD:!0}),(c,t)=>{const o=d("router-view");return f(),x(a(Le),{locale:a(l)==="zhCn"?a(Re):a(De)},{default:i(()=>[n(o)]),_:1},8,["locale"])}}}),O=Oe(Mt);O.use(ie);O.use(G);O.use(Ae);O.mount("#app");export{E as _,le as u};
