import{d as B,a as P,u as j,r as d,o as g,c as x,w as i,b as n,e as a,h as te,f,t as A,g as I,F as H,i as q,j as N,s as k,k as F,l as L,m as oe,n as ne,p as pe,q as he,v as K,x as Y,y as ge,z as $,A as fe,B as W,C as V,D as ve,E as ye,G as Se,H as Ce,I as we,J as xe,K as be,L as ke,M as Ie,N as Pe,O as Ee,P as G,Q as Me,R as Te,S as $e,T as Ve,U as Le,V as Re,W as De,X as Oe,Y as Ae}from"./vendor-1999974d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const Ne="modulepreload",We=function(e){return"/vue3-admin-fast/"+e},se={},w=function(s,l,c){if(!l||l.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(l.map(o=>{if(o=We(o),o in se)return;se[o]=!0;const u=o.endsWith(".css"),S=u?'[rel="stylesheet"]':"";if(!!c)for(let p=t.length-1;p>=0;p--){const r=t[p];if(r.href===o&&(!u||r.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${S}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":Ne,u||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),u)return new Promise((p,r)=>{_.addEventListener("load",p),_.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s())};const R=B("settingStore",{persist:{key:"settingStore",storage:localStorage},state:()=>({layoutHasSide:!0,settingPanelShow:!1,sideWidth:"200px",isMenuCollapse:!1,mainColor:"#409EFF",naviColor:"#fff",sideColor:"#fff",lastSideColor:"#fff"}),getters:{layoutSideStatus(e){return e.layoutHasSide},settingPanelStatus(e){return e.settingPanelShow},getSideWidth(e){return e.sideWidth},getMenuCollapse(e){return e.isMenuCollapse},getMainColor(e){return e.mainColor},getNaviColor(e){return e.naviColor},getSideColor(e){return e.sideColor},getLastSideColor(e){return e.lastSideColor}},actions:{changeLayoutSideStatus(e){this.layoutHasSide=e,this.sideWidth="200px",this.isMenuCollapse=!1,e?this.sideColor=this.lastSideColor:this.sideColor=this.naviColor},changeSettingPanelStatus(e){this.settingPanelShow=e},changeMenuCollapse(e){this.isMenuCollapse=e},changeSideWidth(e){this.sideWidth=e},changeMainColor(e){this.mainColor=e,document.documentElement.style.setProperty("--el-color-primary",e)},changeNaviColor(e){this.naviColor=e},changeSideColor(e){this.sideColor=e,this.lastSideColor=e}}}),Ue=P({__name:"SidebarItem",props:["model"],setup(e){const s=e,l=j();console.log("属性值",s.model);const c=t=>{console.log(t),l.push(t.path)};return(t,o)=>{const u=d("el-icon"),S=d("SidebarItem",!0),b=d("el-sub-menu"),_=d("el-menu-item");return e.model.children.length?(g(),x(b,{key:0,index:e.model.path},{title:i(()=>[n(u,null,{default:i(()=>[n(a(te))]),_:1}),f("span",null,A(e.model.meta.title),1)]),default:i(()=>[(g(!0),I(H,null,q(e.model.children,p=>(g(),x(S,{key:p.id,model:p},null,8,["model"]))),128))]),_:1},8,["index"])):(g(),x(_,{key:1,index:e.model.path,onClick:o[0]||(o[0]=p=>c(e.model))},{default:i(()=>[n(u,null,{default:i(()=>[n(a(te))]),_:1}),f("span",null,A(e.model.meta.title),1)]),_:1},8,["index"]))}}}),J=B("routeStore",{persist:{key:"routeStore",storage:localStorage},state:()=>({tags:[],currentTag:{},menu:[]}),getters:{getTags(e){return e.tags},getCurrentTag(e){return e.currentTag},getMenu(e){return e.menu}},actions:{addTag(e){this.tags.push(e)},deleteTag(e){this.tags=N(this.tags,["fullPath",e.fullPath])},changeCurrentTag(e){this.currentTag=e},changeMenu(e){this.menu=e}}}),ze=P({__name:"SidebarMenu",props:{menuMode:{type:String,default:"vertical"}},setup(e){const s=R(),l=J(),{isMenuCollapse:c,sideColor:t}=k(s),{currentTag:o}=k(l),u=F();console.log("侧边栏获取isDark",u.value);const S=L(()=>u.value?"":t.value);console.log("侧边菜单背景色",S);const b=j();console.log(b.options),console.log("路由源数据",z);const _=r=>oe(r)?[]:(ne(r,m=>{pe(m,"children")||(m.children=[]),delete m.component,m.meta.showInMenu||(r=N(r,h=>h===m),console.log("循环",r)),oe(m.children)||(ne(m.children,h=>{h.path=he(h.path,"/")?h.path:`${m.path}/${h.path}`,h.meta.showInMenu||(m.children=N(m.children,v=>v===h))}),_(m.children))}),r),p=_(z);return console.log("数据处理",p),(r,m)=>{const h=d("el-menu");return g(),x(h,{collapse:a(c),"background-color":a(S),"default-active":a(o).path,mode:e.menuMode},{default:i(()=>[(g(!0),I(H,null,q(a(p),v=>(g(),x(Ue,{key:v.id,model:v},null,8,["model"]))),128))]),_:1},8,["collapse","background-color","default-active","mode"])}}});const E=(e,s)=>{const l=e.__vccOpts||e;for(const[c,t]of s)l[c]=t;return l},ae=E(ze,[["__scopeId","data-v-199115aa"]]),Be="/vue3-admin-fast/assets/i18n-a9fd0582.svg",le=B("systemStore",{persist:{key:"systemStore",storage:localStorage},state:()=>({user:{},theme:"white",locale:"zhCn"}),getters:{getUser(e){return e.user},getTheme(e){return e.theme},getLocale(e){return e.locale}},actions:{changeUser(e){Object.assign(this.user,e)},changeTheme(e){this.theme=e},changeLocale(e){this.locale=e}}}),je="/vue3-admin-fast/assets/vue-5532db34.svg";const He={},qe=e=>(K("data-v-a2487be0"),e=e(),Y(),e),Fe={class:"logo-wrapper"},Ke=qe(()=>f("img",{src:je,class:"logo",alt:"logo"},null,-1)),Ye=[Ke];function Ge(e,s){return g(),I("div",Fe,Ye)}const Je=E(He,[["render",Ge],["__scopeId","data-v-a2487be0"]]),Qe="/vue3-admin-fast/assets/layoutWithSide-7e051b0b.svg",Xe="/vue3-admin-fast/assets/layoutWithoutSide-8fe51a19.svg",M=e=>(K("data-v-b232d8cc"),e=e(),Y(),e),Ze=M(()=>f("span",{class:"w-100px"},"布局配置：",-1)),et=M(()=>f("img",{src:Qe,alt:"logo",class:"w-40px h-full"},null,-1)),tt=[et],ot=M(()=>f("img",{src:Xe,alt:"logo",class:"w-40px h-full"},null,-1)),nt=[ot],st=M(()=>f("span",{class:"w-100px"},"主题色配置：",-1)),at=M(()=>f("span",{class:"w-100px"},"导航栏配置：",-1)),lt=M(()=>f("span",{class:"w-100px"},"侧边栏配置：",-1)),rt=P({__name:"Setting",setup(e){const s=R(),{mainColor:l,sideColor:c,naviColor:t}=k(s),o=L(()=>s.settingPanelStatus),u=ge("rtl"),S=()=>{s.changeSettingPanelStatus(!1)},b=p=>{s.changeMainColor(p)},_=p=>{s.changeSideColor(p)};return(p,r)=>{const m=d("el-row"),h=d("el-color-picker"),v=d("el-drawer");return g(),x(v,{modelValue:a(o),"onUpdate:modelValue":r[5]||(r[5]=y=>$(o)?o.value=y:null),title:"系统配置",direction:u.value,"before-close":S},{default:i(()=>[n(m,{class:"p-5px flex items-center"},{default:i(()=>[Ze,f("div",{class:"layout-img cursor-pointer",onClick:r[0]||(r[0]=y=>a(s).changeLayoutSideStatus(!0))},tt),f("div",{class:"layout-img cursor-pointer",onClick:r[1]||(r[1]=y=>a(s).changeLayoutSideStatus(!1))},nt)]),_:1}),n(m,{class:"p-5px"},{default:i(()=>[st,n(h,{modelValue:a(l),"onUpdate:modelValue":r[2]||(r[2]=y=>$(l)?l.value=y:null),onChange:b},null,8,["modelValue"])]),_:1}),n(m,{class:"p-5px"},{default:i(()=>[at,n(h,{modelValue:a(t),"onUpdate:modelValue":r[3]||(r[3]=y=>$(t)?t.value=y:null)},null,8,["modelValue"])]),_:1}),n(m,{class:"p-5px"},{default:i(()=>[lt,n(h,{modelValue:a(c),"onUpdate:modelValue":r[4]||(r[4]=y=>$(c)?c.value=y:null),onChange:_},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","direction"])}}});const it=E(rt,[["__scopeId","data-v-b232d8cc"]]),ct="/vue3-admin-fast/assets/avatar-7c7a7c38.svg",re=e=>(K("data-v-51113da9"),e=e(),Y(),e),ut={class:"flex items-center"},dt={key:0,class:"flex items-center"},_t=re(()=>f("a",{href:"/"},"promotion management",-1)),mt={class:"header-action flex justify-around items-center"},pt=re(()=>f("span",null,[f("img",{src:Be,alt:"",style:{height:"26px"}})],-1)),ht={class:"pl-5px flex items-center"},gt=P({__name:"Navbar",setup(e){const s=le(),l=R(),{isMenuCollapse:c,naviColor:t,sideColor:o,layoutHasSide:u}=k(l),S=F({onChanged(T){console.log(T);const C=document.querySelector("html");T?(s.changeTheme("dark"),C==null||C.setAttribute("class","dark")):(s.changeTheme("light"),C==null||C.setAttribute("class","light"))}}),b=fe(S),_=()=>S.value?"":t.value,p=()=>u.value?o.value:_(),r=L(()=>s.theme==="dark"),m=L(()=>l.getSideWidth),h=()=>{l.changeSettingPanelStatus(!0)},v=T=>{s.changeLocale(T)},y=()=>{console.log(c.value),l.changeMenuCollapse(!c.value),l.changeSideWidth(c.value?"64px":"200px")};return(T,C)=>{const X=d("el-icon"),Z=d("el-breadcrumb-item"),ce=d("el-breadcrumb"),ue=d("el-switch"),ee=d("el-dropdown-item"),de=d("el-dropdown-menu"),_e=d("el-dropdown"),me=d("el-avatar");return g(),I("div",{class:"flex justify-between items-center",style:W({backgroundColor:_()})},[f("div",ut,[n(Je,{style:W(`width: ${a(m)};backgroundColor:${p()}`)},null,8,["style"]),a(u)?(g(),I("div",dt,[n(X,{class:"cursor-pointer pl-5px pr-5px",onClick:C[0]||(C[0]=O=>y())},{default:i(()=>[a(c)?(g(),x(a(ye),{key:1})):(g(),x(a(ve),{key:0}))]),_:1}),n(ce,{separator:"/",class:"pl-10px"},{default:i(()=>[n(Z,{to:{path:"/"}},{default:i(()=>[V("homepage")]),_:1}),n(Z,null,{default:i(()=>[_t]),_:1})]),_:1})])):(g(),x(ae,{key:1,menuMode:"horizontal"}))]),f("div",mt,[n(ue,{onChange:a(b),modelValue:a(r),"onUpdate:modelValue":C[1]||(C[1]=O=>$(r)?r.value=O:null),"inline-prompt":"","active-icon":a(Se),"inactive-icon":a(Ce)},null,8,["onChange","modelValue","active-icon","inactive-icon"]),n(_e,{onCommand:v},{dropdown:i(()=>[n(de,null,{default:i(()=>[n(ee,{command:"zhCn"},{default:i(()=>[V("中文")]),_:1}),n(ee,{command:"en"},{default:i(()=>[V("en")]),_:1})]),_:1})]),default:i(()=>[pt]),_:1}),f("span",ht,[n(me,{class:"mr-5px",size:26,src:a(ct)},null,8,["src"]),V(" admin ")]),n(X,{class:"cursor-pointer pl-5px",onClick:C[2]||(C[2]=O=>h())},{default:i(()=>[n(a(we))]),_:1})]),n(it)],4)}}});const ft=E(gt,[["__scopeId","data-v-51113da9"]]),vt={class:"flex items-center justify-between"},yt={class:"extend-btns"},St=P({__name:"TagView",setup(e){const s=document.querySelector(".layout-content-with-tagview"),{toggle:l}=xe(s),c=j(),t=J(),{tags:o,currentTag:u}=k(t),S=_=>{c.push(_.fullPath)},b=_=>{t.deleteTag(_)};return(_,p)=>{const r=d("el-tag"),m=d("el-scrollbar"),h=d("el-icon");return g(),I("div",vt,[n(m,null,{default:i(()=>[(g(!0),I(H,null,q(a(o),v=>(g(),x(r,{key:v,class:"mx-1 cursor-pointer",closable:"",type:a(u).fullPath===v.fullPath?"":"info",onClick:y=>S(v),onClose:y=>b(v)},{default:i(()=>[V(A(v.showName),1)]),_:2},1032,["type","onClick","onClose"]))),128))]),_:1}),f("div",yt,[n(h,{class:"cursor-pointer",onClick:a(l)},{default:i(()=>[n(a(be))]),_:1},8,["onClick"]),n(h,{class:"cursor-pointer"},{default:i(()=>[n(a(ke))]),_:1})])])}}});const Ct=E(St,[["__scopeId","data-v-62e86abc"]]),wt={class:"h-30px"},xt={class:"layout-content"},bt=P({__name:"index",setup(e){const s=R(),{sideWidth:l,layoutHasSide:c,sideColor:t,mainColor:o}=k(s),u=F();console.log("侧边栏获取isDark",u.value);const S=()=>u.value?"":t.value;return(()=>{document.documentElement.style.setProperty("--el-color-primary",o.value),document.documentElement.style.setProperty("--el-menu-item-height","47px")})(),(_,p)=>{const r=d("el-header"),m=d("el-aside"),h=d("router-view"),v=d("el-main"),y=d("el-container");return g(),x(y,{class:"layout"},{default:i(()=>[n(r,{class:"layout-header"},{default:i(()=>[n(ft)]),_:1}),n(y,{class:"layout-has-side"},{default:i(()=>[a(c)?(g(),x(m,{key:0,width:a(l),class:"sidebar-wrapper",style:W({backgroundColor:S()})},{default:i(()=>[n(ae)]),_:1},8,["width","style"])):Ie("",!0),n(v,{class:"layout-content-with-tagview"},{default:i(()=>[f("div",wt,[n(Ct)]),f("div",xt,[n(h)])]),_:1})]),_:1})]),_:1})}}});const U=E(bt,[["__scopeId","data-v-bdab7d6c"]]),kt=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),It=[{path:"/403",name:"403",component:()=>w(()=>import("./403-dc18f39d.js"),["assets/403-dc18f39d.js","assets/vendor-1999974d.js"]),meta:{title:"403",showInMenu:!0}},{path:"/404",name:"404",component:()=>w(()=>import("./404-0be6049b.js"),["assets/404-0be6049b.js","assets/vendor-1999974d.js"]),meta:{title:"404",showInMenu:!0}},{path:"/500",name:"500",component:()=>w(()=>import("./500-1c6b5ee8.js"),["assets/500-1c6b5ee8.js","assets/vendor-1999974d.js"]),meta:{title:"500",showInMenu:!0}}],z=[{path:"/layout",name:"layout",component:()=>w(()=>Promise.resolve().then(()=>kt),void 0),meta:{title:"布局",showInMenu:!0,icon:""}},{path:"/fullpage",name:"fullpage",component:()=>w(()=>import("./Fullpage-36b0f163.js"),["assets/Fullpage-36b0f163.js","assets/vendor-1999974d.js"]),meta:{title:"全屏界面",showInMenu:!0}},{path:"/login",name:"login",component:()=>w(()=>import("./Login-7f644e52.js"),["assets/Login-7f644e52.js","assets/vendor-1999974d.js","assets/Login-c39ebf7d.css"]),meta:{title:"登录",showInMenu:!1}},{path:"/feature",name:"feature",meta:{title:"功能调试",showInMenu:!0},component:U,children:[{path:"helloworld",component:()=>w(()=>import("./HelloWorld-18278e1d.js"),["assets/HelloWorld-18278e1d.js","assets/vendor-1999974d.js","assets/HelloWorld-d5f45628.css"]),name:"helloworld",meta:{title:"官网demo",showInMenu:!0}},{path:"element-plus",name:"element-plus",component:()=>w(()=>import("./ElementPlus-81bed44f.js"),["assets/ElementPlus-81bed44f.js","assets/vendor-1999974d.js"]),meta:{title:"element-plus",showInMenu:!0}},{path:"cssModule",name:"cssModule",component:()=>w(()=>import("./CssModule-c41e3d78.js"),["assets/CssModule-c41e3d78.js","assets/vendor-1999974d.js","assets/CssModule-0d7c7f5c.css"]),meta:{title:"cssModule",showInMenu:!0}},{path:"mock",name:"mock",component:()=>w(()=>import("./Mock-c9d2a381.js"),["assets/Mock-c9d2a381.js","assets/vendor-1999974d.js"]),meta:{title:"mock",showInMenu:!0}}]},{path:"/error",name:"error",meta:{title:"异常页",showInMenu:!0},component:U,children:[{path:"403",name:"error-403",component:()=>w(()=>import("./403-dc18f39d.js"),["assets/403-dc18f39d.js","assets/vendor-1999974d.js"]),meta:{title:"403",showInMenu:!0}},{path:"404",name:"error-404",component:()=>w(()=>import("./404-0be6049b.js"),["assets/404-0be6049b.js","assets/vendor-1999974d.js"]),meta:{title:"404",showInMenu:!0}},{path:"500",name:"error-500",component:()=>w(()=>import("./500-1c6b5ee8.js"),["assets/500-1c6b5ee8.js","assets/vendor-1999974d.js"]),meta:{title:"500",showInMenu:!0}}]}],Pt=[{path:"/",redirect:"/login"},...It],Q=Pe({history:Ee(),routes:[...Pt,...z]});G.configure({showSpinner:!1});Q.beforeEach(()=>{G.start()});Q.afterEach((e,s)=>{G.done(),console.log(e,s);const l=J();if(console.log(l),Me(["/login","/403","/404","/500"],e.fullPath)||e.meta&&!e.meta.showInMenu)return;const c={fullPath:e.fullPath,meta:e.meta,name:e.name,params:e.params,path:e.path,query:e.query,showName:`${e.meta.title}`||"404"},{tags:t}=k(l);Te(t.value,{showName:c.showName})||l.addTag(c),l.changeCurrentTag(c)});const ie=$e();ie.use(Ve);const Et=P({__name:"App",setup(e){const s=le(),{locale:l}=k(s);return console.warn({TEST:"1234",VITE_APP_KEY:"222",BASE_URL:"/vue3-admin-fast/",MODE:"production",DEV:!1,PROD:!0}),(c,t)=>{const o=d("router-view");return g(),x(a(Le),{locale:a(l)==="zhCn"?a(Re):a(De)},{default:i(()=>[n(o)]),_:1},8,["locale"])}}}),D=Oe(Et);D.use(ie);D.use(Q);D.use(Ae);D.mount("#app");export{je as _,E as a,le as u};