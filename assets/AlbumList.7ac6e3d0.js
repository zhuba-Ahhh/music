import{Q as h,i as v,j as s,m as r,q as c,l as t,x as a,k as _,C as k,D as i,z as d,F as g,S as f,U as y,V as b}from"./index.c94220ca.js";import{E as x,a as I}from"./el-skeleton-item.4d378480.js";const S={props:{albumList:Array,num:Number,loading:Boolean},setup(){}},B=o=>(y("data-v-351958d8"),o=o(),b(),o),E={class:"item"},C={class:"ske-info"},L={class:"album"},N={class:"faceImg"},V=B(()=>t("div",{slot:"placeholder",class:"image-slot"},[t("i",{class:"iconfont icon-placeholder"})],-1)),w={class:"info"},q={class:"album-type"},A={key:0,class:"album-name"},D={key:1,class:"artist-name"};function F(o,U,l,j,z,Q){const n=x,m=f,u=v("router-link"),p=I;return s(),r(p,{loading:l.loading,animated:"",count:l.num,throttle:500},{template:c(()=>[t("div",E,[a(n,{class:"ske-img",variant:"image"}),t("div",C,[a(n,{variant:"h3",class:"ske-name"}),a(n,{variant:"h3",class:"ske-name",style:{width:"50%"}}),a(n,{variant:"text",class:"ske-txt"})])])]),default:c(()=>[t("div",L,[(s(!0),_(g,null,k(l.albumList,e=>(s(),r(u,{to:{path:"/album",query:{id:e.id}},class:"item",key:e.id},{default:c(()=>[t("div",N,[a(m,{src:e.picUrl+"?param=120y120"},{default:c(()=>[V]),_:2},1032,["src"])]),t("div",w,[t("div",q,i(e.type),1),e.name?(s(),_("div",A,i(e.name),1)):d("",!0),e.artist?(s(),_("div",D,i(e.artist.name),1)):d("",!0)])]),_:2},1032,["to"]))),128))])]),_:1},8,["loading","count"])}var H=h(S,[["render",F],["__scopeId","data-v-351958d8"]]);export{H as _};