import{d as q,a as k,u as D,r as m,o as g,c as C,w as c,b as a,e as l,h as Z,f as p,t as z,g as b,F as A,i as N,j,s as I,k as F,l as R,m as ee,n as te,p as ge,q as fe,v as se,x as M,y as J,z as K,A as E,B as ve,C as H,D as ye,E as Se,G as we,H as Ce,I as xe,J as ae,K as be,L as oe,M as Ie,N as ke,O as Pe,P as G,Q as Te,R as Ee,S as Me,T as Ve,U as $e,V as Le,W as Re,X as Oe}from"./vendor-2c0aafac.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&i(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const De="modulepreload",Ae=function(e){return"/vue3-admin-fast/"+e},ne={},w=function(r,s,i){if(!s||s.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=Ae(o),o in ne)return;ne[o]=!0;const _=o.endsWith(".css"),f=_?'[rel="stylesheet"]':"";if(!!i)for(let d=t.length-1;d>=0;d--){const n=t[d];if(n.href===o&&(!_||n.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${f}`))return;const S=document.createElement("link");if(S.rel=_?"stylesheet":De,_||(S.as="script",S.crossOrigin=""),S.href=o,document.head.appendChild(S),_)return new Promise((d,n)=>{S.addEventListener("load",d),S.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r())};const W=q("settingStore",{persist:{key:"settingStore",storage:localStorage},state:()=>({layoutHasSide:!0,settingPanelShow:!1,sideWidth:"200px",isMenuCollapse:!1,mainColor:"#6C63FF",naviColor:"#fff",sideColor:"#fff",lastSideColor:"#fff"}),getters:{layoutSideStatus(e){return e.layoutHasSide},settingPanelStatus(e){return e.settingPanelShow},getSideWidth(e){return e.sideWidth},getMenuCollapse(e){return e.isMenuCollapse},getMainColor(e){return e.mainColor},getNaviColor(e){return e.naviColor},getSideColor(e){return e.sideColor},getLastSideColor(e){return e.lastSideColor}},actions:{changeLayoutSideStatus(e){this.layoutHasSide=e,this.sideWidth="200px",this.isMenuCollapse=!1,e?this.sideColor=this.lastSideColor:this.sideColor=this.naviColor},changeSettingPanelStatus(e){this.settingPanelShow=e},changeMenuCollapse(e){this.isMenuCollapse=e},changeSideWidth(e){this.sideWidth=e},changeMainColor(e){this.mainColor=e,document.documentElement.style.setProperty("--el-color-primary",e)},changeNaviColor(e){this.naviColor=e},changeSideColor(e){this.sideColor=e,this.lastSideColor=e}}}),Ne=k({__name:"SidebarItem",props:["model"],setup(e){const r=e,s=D();console.log("属性值",r.model);const i=t=>{console.log(t),s.push(t.path)};return(t,o)=>{const _=m("el-icon"),f=m("SidebarItem",!0),x=m("el-sub-menu"),S=m("el-menu-item");return e.model.children.length?(g(),C(x,{key:0,index:e.model.path},{title:c(()=>[a(_,null,{default:c(()=>[a(l(Z))]),_:1}),p("span",null,z(e.model.meta.title),1)]),default:c(()=>[(g(!0),b(A,null,N(e.model.children,d=>(g(),C(f,{key:d.id,model:d},null,8,["model"]))),128))]),_:1},8,["index"])):(g(),C(S,{key:1,index:e.model.path,onClick:o[0]||(o[0]=d=>i(e.model))},{default:c(()=>[a(_,null,{default:c(()=>[a(l(Z))]),_:1}),p("span",null,z(e.model.meta.title),1)]),_:1},8,["index"]))}}}),Q=q("routeStore",{persist:{key:"routeStore",storage:localStorage},state:()=>({tags:[],currentTag:{},menu:[]}),getters:{getTags(e){return e.tags},getCurrentTag(e){return e.currentTag},getMenu(e){return e.menu}},actions:{addTag(e){this.tags.push(e)},deleteTag(e){this.tags=j(this.tags,["fullPath",e.fullPath])},deleteAllTag(){this.tags=[]},changeTags(e){this.tags=e},changeCurrentTag(e){this.currentTag=e},changeMenu(e){this.menu=e}}}),We=k({__name:"SidebarMenu",props:{menuMode:{type:String,default:"vertical"}},setup(e){const r=W(),s=Q(),{isMenuCollapse:i,sideColor:t}=I(r),{currentTag:o}=I(s),_=F(),f=R(()=>_.value?"":t.value),x=d=>ee(d)?[]:(te(d,n=>{ge(n,"children")||(n.children=[]),delete n.component,n.meta.showInMenu||(d=j(d,u=>u===n),console.log("循环",d)),ee(n.children)||(te(n.children,u=>{u.path=fe(u.path,"/")?u.path:`${n.path}/${u.path}`,u.meta.showInMenu||(n.children=j(n.children,v=>v===u))}),x(n.children))}),d),S=x(ie);return(d,n)=>{const u=m("el-menu");return g(),C(u,{collapse:l(i),"background-color":l(f),"default-active":l(o).path,mode:e.menuMode},{default:c(()=>[(g(!0),b(A,null,N(l(S),v=>(g(),C(Ne,{key:v.id,model:v},null,8,["model"]))),128))]),_:1},8,["collapse","background-color","default-active","mode"])}}});const V=(e,r)=>{const s=e.__vccOpts||e;for(const[i,t]of r)s[i]=t;return s},le=V(We,[["__scopeId","data-v-7ac6e94f"]]),Ue="/vue3-admin-fast/assets/i18n-a9fd0582.svg",re=q("systemStore",{persist:{key:"systemStore",storage:localStorage},state:()=>({user:{},theme:"white",locale:"zhCn"}),getters:{getUser(e){return e.user},getTheme(e){return e.theme},getLocale(e){return e.locale}},actions:{changeUser(e){Object.assign(this.user,e)},changeTheme(e){this.theme=e},changeLocale(e){this.locale=e}}}),Be="/vue3-admin-fast/assets/logo-54357738.png",ze={},je={class:"logo flex justify-center items-center"},He=p("img",{class:"h-40px",src:Be,alt:"logo"},null,-1),qe=p("span",{class:"text-18px font-bold"},"Vue3 admin",-1),Fe=[He,qe];function Je(e,r){return g(),b("div",je,Fe)}const Ke=V(ze,[["render",Je]]),Ge="/vue3-admin-fast/assets/layoutWithSide-7e051b0b.svg",Qe="/vue3-admin-fast/assets/layoutWithoutSide-8fe51a19.svg",$=e=>(J("data-v-b232d8cc"),e=e(),K(),e),Xe=$(()=>p("span",{class:"w-100px"},"布局配置：",-1)),Ye=$(()=>p("img",{src:Ge,alt:"logo",class:"w-40px h-full"},null,-1)),Ze=[Ye],et=$(()=>p("img",{src:Qe,alt:"logo",class:"w-40px h-full"},null,-1)),tt=[et],ot=$(()=>p("span",{class:"w-100px"},"主题色配置：",-1)),nt=$(()=>p("span",{class:"w-100px"},"导航栏配置：",-1)),st=$(()=>p("span",{class:"w-100px"},"侧边栏配置：",-1)),at=k({__name:"Setting",setup(e){const r=W(),{mainColor:s,sideColor:i,naviColor:t}=I(r),o=R(()=>r.settingPanelStatus),_=se("rtl"),f=()=>{r.changeSettingPanelStatus(!1)},x=d=>{r.changeMainColor(d)},S=d=>{r.changeSideColor(d)};return(d,n)=>{const u=m("el-row"),v=m("el-color-picker"),P=m("el-drawer");return g(),C(P,{modelValue:l(o),"onUpdate:modelValue":n[5]||(n[5]=y=>M(o)?o.value=y:null),title:"系统配置",direction:_.value,"before-close":f},{default:c(()=>[a(u,{class:"p-5px flex items-center"},{default:c(()=>[Xe,p("div",{class:"layout-img cursor-pointer",onClick:n[0]||(n[0]=y=>l(r).changeLayoutSideStatus(!0))},Ze),p("div",{class:"layout-img cursor-pointer",onClick:n[1]||(n[1]=y=>l(r).changeLayoutSideStatus(!1))},tt)]),_:1}),a(u,{class:"p-5px"},{default:c(()=>[ot,a(v,{modelValue:l(s),"onUpdate:modelValue":n[2]||(n[2]=y=>M(s)?s.value=y:null),onChange:x},null,8,["modelValue"])]),_:1}),a(u,{class:"p-5px"},{default:c(()=>[nt,a(v,{modelValue:l(t),"onUpdate:modelValue":n[3]||(n[3]=y=>M(t)?t.value=y:null)},null,8,["modelValue"])]),_:1}),a(u,{class:"p-5px"},{default:c(()=>[st,a(v,{modelValue:l(i),"onUpdate:modelValue":n[4]||(n[4]=y=>M(i)?i.value=y:null),onChange:S},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","direction"])}}});const lt=V(at,[["__scopeId","data-v-b232d8cc"]]),rt=k({__name:"BreadCrumbNav",setup(e){const r=D(),s=R(()=>r.currentRoute.value.matched.filter(i=>i.meta.title));return console.log(s.value),(i,t)=>{const o=m("el-breadcrumb-item"),_=m("el-breadcrumb");return g(),C(_,{separator:"/","pl-10px":""},{default:c(()=>[(g(!0),b(A,null,N(l(s),f=>(g(),C(o,{key:f.path},{default:c(()=>[E(z(f.meta.title),1)]),_:2},1024))),128))]),_:1})}}}),ct="/vue3-admin-fast/assets/avatar-7c7a7c38.svg",ce=e=>(J("data-v-12750374"),e=e(),K(),e),it={class:"flex items-center"},ut={key:0,class:"flex items-center"},dt={class:"header-action flex justify-around items-center"},_t=ce(()=>p("span",null,[p("img",{src:Ue,alt:"",style:{height:"26px"}})],-1)),mt={class:"flex items-center"},pt=ce(()=>p("span",{"mr-10px":""},"admin",-1)),ht=k({__name:"Navbar",setup(e){const r=D(),s=re(),i=W(),{isMenuCollapse:t,naviColor:o,sideColor:_,layoutHasSide:f}=I(i),x=F({onChanged(T){console.log(T);const h=document.querySelector("html");T?(s.changeTheme("dark"),h==null||h.setAttribute("class","dark")):(s.changeTheme("light"),h==null||h.setAttribute("class","light"))}}),S=ve(x),d=()=>x.value?"":o.value,n=()=>f.value?_.value:d(),u=R(()=>s.theme==="dark"),v=R(()=>i.getSideWidth),P=()=>{i.changeSettingPanelStatus(!0)},y=T=>{s.changeLocale(T)},B=()=>{console.log(t.value),i.changeMenuCollapse(!t.value),i.changeSideWidth(t.value?"64px":"200px")};return(T,h)=>{const de=m("el-icon"),_e=m("el-switch"),Y=m("el-dropdown-item"),me=m("el-dropdown-menu"),pe=m("el-dropdown"),he=m("el-avatar");return g(),b("div",{class:"flex justify-between items-center",style:H({backgroundColor:d(),height:"50px"})},[p("div",it,[a(Ke,{style:H(`width: ${l(v)};backgroundColor:${n()}`)},null,8,["style"]),l(f)?(g(),b("div",ut,[a(de,{class:"cursor-pointer pl-5px pr-5px",onClick:h[0]||(h[0]=O=>B())},{default:c(()=>[l(t)?(g(),C(l(Se),{key:1})):(g(),C(l(ye),{key:0}))]),_:1}),a(rt)])):(g(),C(le,{key:1,menuMode:"horizontal"}))]),p("div",dt,[a(_e,{onChange:l(S),modelValue:l(u),"onUpdate:modelValue":h[1]||(h[1]=O=>M(u)?u.value=O:null),"inline-prompt":"","active-icon":l(we),"inactive-icon":l(Ce),"mr-10px":""},null,8,["onChange","modelValue","active-icon","inactive-icon"]),a(pe,{"mr-10px":"",onCommand:y},{dropdown:c(()=>[a(me,null,{default:c(()=>[a(Y,{command:"zhCn"},{default:c(()=>[E("中文")]),_:1}),a(Y,{command:"en"},{default:c(()=>[E("en")]),_:1})]),_:1})]),default:c(()=>[_t]),_:1}),p("span",mt,[p("span",{class:"i-mdi:cog-outline text-24px cursor-pointer mr-10px",onClick:h[2]||(h[2]=O=>P())}),a(he,{class:"mr-5px",size:26,src:l(ct)},null,8,["src"]),pt,p("span",{class:"i-mdi:account-arrow-right text-24px cursor-pointer mr-10px",onClick:h[3]||(h[3]=O=>l(r).push("/login"))})])]),a(lt)],4)}}});const gt=V(ht,[["__scopeId","data-v-12750374"]]),ft=e=>(J("data-v-1b948771"),e=e(),K(),e),vt={class:"tabs-box"},yt={class:"tabs-menu"},St={class:"extend-btns flex items-center"},wt=ft(()=>p("span",{class:"i-mdi:chevron-down text-28px pr-10px cursor-pointer drop-commands"},null,-1)),Ct=k({__name:"TagView",setup(e){const r=document.querySelector(".layout-content-with-tagview"),{toggle:s}=xe(r),i=D(),t=Q(),{tags:o,currentTag:_}=I(t),f=se(_.value.fullPath),x=n=>{i.push(n.props.name)},S=n=>{const u=JSON.parse(JSON.stringify(ae(o.value,["fullPath",n])));t.deleteTag(u)},d=n=>{const u=be(o.value,["fullPath",_.value.fullPath]);console.log(u);let v=null;switch(n){case"left":v=oe(o.value,u,o.value.length),t.changeTags(v);break;case"right":v=oe(o.value,0,u+1),t.changeTags(v);break;case"all":t.changeTags([]);break;case"others":t.changeTags([_.value]);break;default:console.log("nothing delete")}};return(n,u)=>{const v=m("el-tab-pane"),P=m("el-tabs"),y=m("el-dropdown-item"),B=m("el-dropdown-menu"),T=m("el-dropdown");return g(),b("div",vt,[p("div",yt,[a(P,{modelValue:l(f),"onUpdate:modelValue":u[0]||(u[0]=h=>M(f)?f.value=h:null),type:"card",onTabClick:x,onTabRemove:S},{default:c(()=>[(g(!0),b(A,null,N(l(o),h=>(g(),C(v,{key:h.fullPath,label:h.showName,name:h.fullPath,closable:h.showName!=="welcome"},null,8,["label","name","closable"]))),128))]),_:1},8,["modelValue"]),p("div",St,[p("span",{class:"i-mdi:fullscreen text-24px pr-5px cursor-pointer",onClick:u[1]||(u[1]=(...h)=>l(s)&&l(s)(...h))}),a(T,{onCommand:d},{dropdown:c(()=>[a(B,null,{default:c(()=>[a(y,{command:"others"},{default:c(()=>[E("关闭其他")]),_:1}),a(y,{command:"left"},{default:c(()=>[E("关闭左侧 ")]),_:1}),a(y,{command:"right"},{default:c(()=>[E("关闭右侧")]),_:1}),a(y,{command:"all"},{default:c(()=>[E("关闭全部")]),_:1})]),_:1})]),default:c(()=>[wt]),_:1})])])])}}});const xt=V(Ct,[["__scopeId","data-v-1b948771"]]),bt={class:"tag-wrapper"},It={class:"layout-content"},kt={class:"h-full rounded-5px view-shadow overflow-y-auto"},Pt=k({__name:"index",setup(e){const r=W(),{sideWidth:s,layoutHasSide:i,sideColor:t,mainColor:o}=I(r),_=F();console.log("侧边栏获取isDark",_.value);const f=()=>_.value?"":t.value;return(()=>{document.documentElement.style.setProperty("--el-color-primary",o.value),document.documentElement.style.setProperty("--el-menu-item-height","47px")})(),(S,d)=>{const n=m("el-header"),u=m("el-aside"),v=m("router-view"),P=m("el-main"),y=m("el-container");return g(),C(y,{class:"layout"},{default:c(()=>[a(n,{class:"layout-header"},{default:c(()=>[a(gt)]),_:1}),a(y,{class:"layout-has-side"},{default:c(()=>[l(i)?(g(),C(u,{key:0,width:l(s),class:"sidebar-wrapper",style:H({backgroundColor:f()})},{default:c(()=>[a(le)]),_:1},8,["width","style"])):Ie("",!0),a(P,{class:"layout-content-with-tagview"},{default:c(()=>[p("div",bt,[a(xt)]),p("div",It,[p("div",kt,[a(v)])])]),_:1})]),_:1})]),_:1})}}});const L=V(Pt,[["__scopeId","data-v-94da3390"]]),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),Et=[{path:"/403",name:"403",component:()=>w(()=>import("./403-8e6c3ee9.js"),["assets/403-8e6c3ee9.js","assets/vendor-2c0aafac.js"]),meta:{title:"403",showInMenu:!0}},{path:"/404",name:"404",component:()=>w(()=>import("./404-a225b0ef.js"),["assets/404-a225b0ef.js","assets/vendor-2c0aafac.js"]),meta:{title:"404",showInMenu:!0}},{path:"/500",name:"500",component:()=>w(()=>import("./500-bf34fda3.js"),["assets/500-bf34fda3.js","assets/vendor-2c0aafac.js"]),meta:{title:"500",showInMenu:!0}}],ie=[{path:"/home",name:"home",meta:{title:"首页",showInMenu:!0},component:L,children:[{path:"welcome",name:"welcome",component:()=>w(()=>import("./Welcome-6bc5b422.js"),["assets/Welcome-6bc5b422.js","assets/vendor-2c0aafac.js"]),meta:{title:"welcome",showInMenu:!0}}]},{path:"/dashboard",name:"dashboard",meta:{title:"dashboard",showInMenu:!0},component:L,children:[{path:"analysis",name:"analysis",component:()=>w(()=>import("./Analysis-39dee01e.js"),["assets/Analysis-39dee01e.js","assets/vendor-2c0aafac.js"]),meta:{title:"分析页",showInMenu:!0}}]},{path:"/layout",name:"layout",component:()=>w(()=>Promise.resolve().then(()=>Tt),void 0),meta:{title:"布局",showInMenu:!0,icon:""}},{path:"/fullpage",name:"fullpage",component:()=>w(()=>import("./Fullpage-ff82fc77.js"),["assets/Fullpage-ff82fc77.js","assets/vendor-2c0aafac.js"]),meta:{title:"全屏界面",showInMenu:!0}},{path:"/login",name:"login",component:()=>w(()=>import("./Login-613d933c.js"),["assets/Login-613d933c.js","assets/vendor-2c0aafac.js","assets/Login-e059fad8.css"]),meta:{title:"登录",showInMenu:!1}},{path:"/feature",name:"feature",meta:{title:"功能调试",showInMenu:!0},component:L,children:[{path:"helloworld",component:()=>w(()=>import("./HelloWorld-84058609.js"),["assets/HelloWorld-84058609.js","assets/vendor-2c0aafac.js","assets/HelloWorld-e3b0c442.css"]),name:"helloworld",meta:{title:"官网demo",showInMenu:!0}},{path:"element-plus",name:"element-plus",component:()=>w(()=>import("./ElementPlus-a5870707.js"),["assets/ElementPlus-a5870707.js","assets/vendor-2c0aafac.js"]),meta:{title:"element-plus",showInMenu:!0}},{path:"cssModule",name:"cssModule",component:()=>w(()=>import("./CssModule-524da4a7.js"),["assets/CssModule-524da4a7.js","assets/vendor-2c0aafac.js","assets/CssModule-0d7c7f5c.css"]),meta:{title:"cssModule",showInMenu:!0}},{path:"unocss",name:"unocss",component:()=>w(()=>import("./UnoCss-a8cf2eac.js"),["assets/UnoCss-a8cf2eac.js","assets/vendor-2c0aafac.js","assets/UnoCss-fec09068.css"]),meta:{title:"unocss",showInMenu:!0}},{path:"echarts",name:"echarts",component:()=>w(()=>import("./Echarts-bab8c0eb.js"),["assets/Echarts-bab8c0eb.js","assets/vendor-2c0aafac.js"]),meta:{title:"echarts",showInMenu:!0}},{path:"mock",name:"mock",component:()=>w(()=>import("./Mock-42c409f5.js"),["assets/Mock-42c409f5.js","assets/vendor-2c0aafac.js"]),meta:{title:"mock",showInMenu:!0}}]},{path:"/error",name:"error",meta:{title:"异常页",showInMenu:!0},component:L,children:[{path:"403",name:"error-403",component:()=>w(()=>import("./403-8e6c3ee9.js"),["assets/403-8e6c3ee9.js","assets/vendor-2c0aafac.js"]),meta:{title:"403",showInMenu:!0}},{path:"404",name:"error-404",component:()=>w(()=>import("./404-a225b0ef.js"),["assets/404-a225b0ef.js","assets/vendor-2c0aafac.js"]),meta:{title:"404",showInMenu:!0}},{path:"500",name:"error-500",component:()=>w(()=>import("./500-bf34fda3.js"),["assets/500-bf34fda3.js","assets/vendor-2c0aafac.js"]),meta:{title:"500",showInMenu:!0}}]}],Mt=[{path:"/",redirect:"/login"},...Et],X=ke({history:Pe(),routes:[...Mt,...ie]});G.configure({showSpinner:!1});X.beforeEach(()=>{G.start()});X.afterEach((e,r)=>{G.done(),console.log(e,r);const s=Q();if(console.log(s),Te(["/login","/403","/404","/500"],e.fullPath)||e.meta&&!e.meta.showInMenu)return;const i={fullPath:e.fullPath,meta:e.meta,name:e.name,params:e.params,path:e.path,query:e.query,showName:`${e.meta.title}`||"404"},{tags:t}=I(s);ae(t.value,{fullPath:i.fullPath})||s.addTag(i),s.changeCurrentTag(i)});const ue=Ee();ue.use(Me);const Vt=k({__name:"App",setup(e){const r=re(),{locale:s}=I(r);return console.warn({TEST:"1234",VITE_APP_KEY:"222",BASE_URL:"/vue3-admin-fast/",MODE:"production",DEV:!1,PROD:!0}),(i,t)=>{const o=m("router-view");return g(),C(l(Ve),{locale:l(s)==="zhCn"?l($e):l(Le)},{default:c(()=>[a(o)]),_:1},8,["locale"])}}});const U=Re(Vt);U.use(ue);U.use(X);U.use(Oe);U.mount("#app");export{V as _,re as u};
