import{a as x,u as V,v as y,Y as c,r as i,o as F,g as h,f as n,b as t,w as a,e as o,Z as k,A as B,F as C,_ as I,$ as L,a0 as N,y as R,z as S}from"./vendor-81b3b899.js";import{_ as $}from"./index-e1ec651a.js";const q="/vue3-admin-fast/assets/loginBg-69d3f1d1.mp4",A="/vue3-admin-fast/assets/vue-5532db34.svg",f=r=>(R("data-v-4e196fbc"),r=r(),S(),r),K=f(()=>n("video",{class:"login-video",muted:"",autoplay:"true",loop:"true",src:q},null,-1)),U={class:"login-wrapper"},j=f(()=>n("div",{class:"flex justify-around"},[n("img",{src:A,class:"logo",alt:"logo"}),n("h2",{class:"login-title"},"Vue3-Admin-Fast")],-1)),z=x({__name:"Login",setup(r){const g=V(),d=y(null),s=c({username:"admin",password:"123456"}),v=c({username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),_=p=>{p&&p.validate((e,u)=>{e?(console.log("submit!"),s.username==="admin"&&s.password==="123456"?g.push("/feature/element-plus"):I.warning("请输入正确的用户名密码")):console.log("error submit!",u)})};return(p,e)=>{const u=i("el-input"),m=i("el-form-item"),w=i("el-button"),b=i("el-form");return F(),h(C,null,[K,n("div",U,[j,t(b,{model:o(s),rules:o(v),ref_key:"loginFormRef",ref:d},{default:a(()=>[t(m,{prop:"username"},{default:a(()=>[t(u,{"prefix-icon":o(L),modelValue:o(s).username,"onUpdate:modelValue":e[0]||(e[0]=l=>o(s).username=l),placeholder:"用户名:admin",clearable:""},null,8,["prefix-icon","modelValue"])]),_:1}),t(m,{prop:"password"},{default:a(()=>[t(u,{"prefix-icon":o(N),type:"password",modelValue:o(s).password,"onUpdate:modelValue":e[1]||(e[1]=l=>o(s).password=l),placeholder:"密码:123456",onKeyup:e[2]||(e[2]=k(l=>_(o(d)),["enter"])),clearable:"","show-password":""},null,8,["prefix-icon","modelValue"])]),_:1}),t(m,null,{default:a(()=>[t(w,{class:"w-full",onClick:e[3]||(e[3]=l=>_(o(d)))},{default:a(()=>[B("登录")]),_:1})]),_:1})]),_:1},8,["model","rules"])])],64)}}});const T=$(z,[["__scopeId","data-v-4e196fbc"]]);export{T as default};
