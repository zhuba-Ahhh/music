import{Y as E,ag as L,d as T,u as N,ah as g,r as S,e as w,w as R,o as k,a8 as z,ai as A,aj as b,_ as B,j as r,k as d,l as i,A as H,t as h,B as C,L as V,Q as O,a3 as P,I as D,s as Y,x as M,m as j,z as q,q as F,K,F as y,C as x,D as I,U as Q,V as U}from"./index.c94220ca.js";import{E as W}from"./el-infinite-scroll.43d4b37a.js";import{_ as G}from"./Loading.15072aef.js";import{_ as J}from"./MvList.3a8c06b6.js";import"./throttle.2c770a80.js";import"./el-skeleton-item.4d378480.js";const X=E({zIndex:{type:L([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),Z={scroll:({scrollTop:e,fixed:o})=>typeof e=="number"&&typeof o=="boolean",change:e=>typeof e=="boolean"},ee=T({name:"ElAffix",props:X,emits:Z,setup(e,{emit:o}){const u=N("affix"),a=g(),l=g(),n=g(),t=S({fixed:!1,height:0,width:0,scrollTop:0,clientHeight:0,transform:0}),p=w(()=>({height:t.fixed?`${t.height}px`:"",width:t.fixed?`${t.width}px`:""})),v=w(()=>{if(!t.fixed)return;const s=e.offset?`${e.offset}px`:0,c=t.transform?`translateY(${t.transform}px)`:"";return{height:`${t.height}px`,width:`${t.width}px`,top:e.position==="top"?s:"",bottom:e.position==="bottom"?s:"",transform:c,zIndex:e.zIndex}}),m=()=>{if(!l.value||!a.value||!n.value)return;const s=l.value.getBoundingClientRect(),c=a.value.getBoundingClientRect();if(t.height=s.height,t.width=s.width,t.scrollTop=n.value instanceof Window?document.documentElement.scrollTop:n.value.scrollTop||0,t.clientHeight=document.documentElement.clientHeight,e.position==="top")if(e.target){const _=c.bottom-e.offset-t.height;t.fixed=e.offset>s.top&&c.bottom>0,t.transform=_<0?_:0}else t.fixed=e.offset>s.top;else if(e.target){const _=t.clientHeight-c.top-e.offset-t.height;t.fixed=t.clientHeight-e.offset<s.bottom&&t.clientHeight>c.top,t.transform=_<0?-_:0}else t.fixed=t.clientHeight-e.offset<s.bottom},f=()=>{m(),o("scroll",{scrollTop:t.scrollTop,fixed:t.fixed})};return R(()=>t.fixed,()=>{o("change",t.fixed)}),k(()=>{var s;if(e.target){if(a.value=(s=document.querySelector(e.target))!=null?s:void 0,!a.value)throw new Error(`Target is not existed: ${e.target}`)}else a.value=document.documentElement;n.value=z(l.value,!0)}),A(n,"scroll",f),b(l,()=>m()),b(a,()=>m()),{ns:u,root:l,state:t,rootStyle:p,affixStyle:v,update:m}}});function te(e,o,u,a,l,n){return r(),d("div",{ref:"root",class:h(e.ns.b()),style:C(e.rootStyle)},[i("div",{class:h({[e.ns.m("fixed")]:e.state.fixed}),style:C(e.affixStyle)},[H(e.$slots,"default")],6)],6)}var oe=B(ee,[["render",te]]);const se=V(oe);const ae={name:"Mvlist",setup(){const{proxy:e}=K(),o=S({area:e.$COMMON.MV_AREA,type:e.$COMMON.MV_TYPE,order:["\u4E0A\u5347\u6700\u5FEB","\u6700\u65B0"],areaIndex:0,typeIndex:0,orderIndex:0,params:{area:"",type:"",order:"",limit:30,offset:0},list:[],mv_count:20,mv_loading:!0,isLoading:!0,isLoadMv:!0}),u=async n=>{const{data:t}=await e.$http.mv(n);if(t.code!==200)return e.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");o.list=o.params.offset!==0?[...o.list,...t.data]:t.data,o.isLoadMv=!t.hasMore,o.isLoading=t.hasMore,o.mv_loading=!1},a=(n,t)=>{o[n+"Index"]=t,o.list=[],o.params.offset=0,o.params[n]=o[n][t],o.mv_loading=!0},l=()=>{o.isLoadMv=!0,o.params.offset=o.list.length};return k(()=>{o.params.area=o.area[o.areaIndex],o.params.type=o.type[o.typeIndex],o.params.order=o.order[o.orderIndex]}),P(()=>{u(o.params)}),{...D(o),selectType:a,loadMv:l}}},$=e=>(Q("data-v-b9396668"),e=e(),U(),e),ne={class:"mv"},ie={class:"mv-container"},re={class:"mv-main"},le={class:"wrapper infinite-list","infinite-scroll-disabled":"isLoadMv","infinite-scroll-distance":"50"},ce={class:"aside-box"},de={class:"aside-menu"},fe=$(()=>i("h3",{class:"aside-title"},"\u6392\u5E8F",-1)),me={class:"filter-main"},ue=["onClick"],_e=$(()=>i("h3",{class:"aside-title"},"\u533A\u57DF",-1)),he={class:"filter-main"},pe=["onClick"],ve=$(()=>i("h3",{class:"aside-title"},"\u7C7B\u578B",-1)),ge={class:"filter-main"},ye=["onClick"];function xe(e,o,u,a,l,n){const t=J,p=G,v=se,m=W;return r(),d("div",ne,[i("div",ie,[i("div",re,[Y((r(),d("div",le,[M(t,{mvList:e.list,loading:e.mv_loading,num:e.mv_count},null,8,["mvList","loading","num"]),e.isLoading?(r(),j(p,{key:0})):q("",!0)])),[[m,a.loadMv]])]),i("div",ce,[M(v,{offset:140},{default:F(()=>[i("div",de,[fe,i("div",me,[(r(!0),d(y,null,x(e.order,(f,s)=>(r(),d("em",{class:h(s===e.orderIndex?"active":""),key:s,onClick:c=>a.selectType("order",s)},I(f),11,ue))),128))]),_e,i("div",he,[(r(!0),d(y,null,x(e.area,(f,s)=>(r(),d("em",{class:h(s===e.areaIndex?"active":""),key:s,onClick:c=>a.selectType("area",s)},I(f),11,pe))),128))]),ve,i("div",ge,[(r(!0),d(y,null,x(e.type,(f,s)=>(r(),d("em",{class:h(s===e.typeIndex?"active":""),key:s,onClick:c=>a.selectType("type",s)},I(f),11,ye))),128))])])]),_:1})])])])}var Se=O(ae,[["render",xe],["__scopeId","data-v-b9396668"]]);export{Se as default};
