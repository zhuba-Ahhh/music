import{Q as V,a2 as z,W as E,r as j,e as F,o as H,aa as K,I as O,a4 as U,S as Q,i as W,k as c,l as s,x as h,q as u,D as n,F as f,C as k,z as v,X as m,t as N,m as S,j as l,K as X,U as Y,V as G}from"./index.c94220ca.js";import{_ as B}from"./Loading.15072aef.js";const J={name:"PlayListDetail",setup(){const{proxy:t}=X(),d=z(),y=E(),o=j({id:"",details:{},isShowDesc:!1,songList:[],collects:[],playlists:[],comments:[],total:0,isLoading:!0}),b=F(()=>y.getters.isLogin),I=async i=>{o.isLoading=!0;const{data:a}=await t.$http.playlistdetail(i);if(a.code!==200)return t.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");if(o.details=a.playlist,b.value){const A=a.playlist.trackIds;g(A)}else o.songList=t.$utils.formatSongs(a.playlist.tracks,a.privileges),o.total=o.songList.length,o.isLoading=!1},g=async i=>{const a=[];let L=[];for(let _=0;_<i.length;_+=500)a.push(i.slice(_,_+500));for(let _=0;_<a.length;_++){const q=[];a[_].map(R=>{q.push(R.id)}),o.isLoading=!0;const{data:T}=await t.$http.songDetail({ids:q.join(","),timestamp:new Date().valueOf()+_});L=L.concat(t.$utils.formatSongs(T.songs,T.privileges))}o.songList=L,o.total=L.length,o.isLoading=!1},p=()=>{o.details.description.length>120&&(o.isShowDesc=!o.isShowDesc)},D=()=>{y.dispatch("loginSuc",!0)},w=async i=>{const{data:a}=await t.$http.playlistSCollect(i);if(a.code!==200)return t.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");o.collects=a.subscribers},e=async i=>{const{data:a}=await t.$http.playlistRelated(i);if(a.code!==200)return t.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");o.playlists=a.playlists},C=async i=>{const{data:a}=await t.$http.playlistComment(i);if(a.code!==200)return t.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");o.comments=a.comments},M=()=>{y.dispatch("playAll",{list:o.songList}),y.commit("SET_PLAYLISTTIPS",!0)},P=async i=>{const{data:a}=await t.$http.subPlayList({id:i.id,t:i.subscribed?2:1});if(a.code!==200)return t.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");o.details.subscribed=!o.details.subscribed};H(()=>{o.id=d.query.id,$(o.id)});const $=i=>{I({id:i,s:8}),w({id:i,limit:8}),e({id:i}),C({id:i,limit:9})};return K(i=>{o.songList=[],o.total=0,o.id=i.query.id,$(o.id)}),{...O(o),playAllSongs:M,subPlayList:P,isLogin:b,loginDialog:D,showAllDesc:p}},components:{Loading:B,SongList:U}},r=t=>(Y("data-v-5c7ef7bb"),t=t(),G(),t),Z={class:"detail"},x={class:"detail-container"},ss={class:"detail-main"},ts={class:"cover"},os={class:"cover-img"},es=r(()=>s("div",{slot:"placeholder",class:"image-slot"},[s("i",{class:"iconfont icon-placeholder"})],-1)),is={class:"cover-info"},as={class:"cover-header"},ls={class:"cover-title"},ns={class:"cover-collect-author"},cs=r(()=>s("div",{slot:"placeholder",class:"image-slot"},[s("i",{class:"iconfont icon-placeholder"})],-1)),ds={class:"cover-author-tags"},rs={key:0,class:"cover-author"},us=r(()=>s("div",{slot:"placeholder",class:"image-slot"},[s("i",{class:"iconfont icon-placeholder"})],-1)),ms={class:"cover-name"},_s={class:"cover-date"},hs={key:1,class:"cover-tags"},ps={class:"cover-digital"},gs={class:"cover-playCount"},vs=r(()=>s("i",{class:"iconfont icon-playnum"},null,-1)),ys={class:"cover-collect"},fs=r(()=>s("i",{class:"iconfont icon-collect"},null,-1)),Ls={class:"cover-comment"},ks=r(()=>s("i",{class:"iconfont icon-comment"},null,-1)),Ss={class:"cover-desc"},bs=r(()=>s("i",{class:"iconfont icon-closed"},null,-1)),Ds=[bs],ws=["innerHTML"],Cs={key:0,class:"cover-desc-all"},Is={class:"song-main"},$s={class:"song-header"},As=r(()=>s("i",{class:"iconfont icon-audio-play"},null,-1)),qs={key:0,class:"showAllSongsTips"},Ts={class:"aside-box"},Ns={key:0,class:"playlist-recom"},Us=r(()=>s("h3",{class:"aside-title"},"\u76F8\u5173\u6B4C\u5355\u63A8\u8350",-1)),Bs={class:"aside-main recom-main"},Ms=r(()=>s("div",{slot:"placeholder",class:"image-slot"},[s("i",{class:"iconfont icon-placeholder"})],-1)),Ps={class:"recom-info"},Rs={class:"recom-name"},Vs={class:"recom-author"},zs={key:1,class:"playlist-comment"},Es=r(()=>s("h3",{class:"aside-title"},"\u6B4C\u5355\u8BC4\u8BBA",-1)),js={class:"aside-main comment-main"},Fs=r(()=>s("div",{slot:"placeholder",class:"image-slot"},[s("i",{class:"iconfont icon-placeholder"})],-1)),Hs={class:"comment-info"},Ks={class:"comment-userInfo"},Os={class:"comment-date"},Qs={class:"comment-desc"};function Ws(t,d,y,o,b,I){const g=Q,p=W("router-link"),D=B,w=U;return l(),c("div",Z,[s("div",x,[s("div",ss,[s("div",ts,[s("div",os,[h(g,{src:t.details.coverImgUrl},{default:u(()=>[es]),_:1},8,["src"])]),s("div",is,[s("div",as,[s("div",ls,n(t.details.name),1),s("div",ns,[(l(!0),c(f,null,k(t.collects,e=>(l(),S(p,{class:"collect-author",to:{path:"/singer",query:{id:e.userId}},key:e.userId},{default:u(()=>[h(g,{src:e.avatarUrl},{default:u(()=>[cs]),_:2},1032,["src"])]),_:2},1032,["to"]))),128))])]),s("div",ds,[t.details.creator?(l(),c("div",rs,[h(g,{src:t.details.creator.avatarUrl,class:"cover-avatar"},{default:u(()=>[us]),_:1},8,["src"]),s("div",ms,n(t.details.creator.nickname),1),s("div",_s,n(t.$utils.formartDate(t.details.createTime,"yyyy-MM-dd")),1)])):v("",!0),t.details.tags?(l(),c("div",hs,[(l(!0),c(f,null,k(t.details.tags,(e,C)=>(l(),S(p,{to:{path:"/playlist",query:{cat:e}},class:"tag",key:C},{default:u(()=>[m("#"+n(e),1)]),_:2},1032,["to"]))),128))])):v("",!0)]),s("div",ps,[s("span",gs,[vs,m(" "+n(t.$utils.formartNum(t.details.playCount))+"\u6B21",1)]),s("span",ys,[fs,m(" "+n(t.$utils.formartNum(t.details.subscribedCount)),1)]),s("span",Ls,[ks,m(" "+n(t.$utils.formartNum(t.details.commentCount)),1)])]),s("div",Ss,[s("h5",null,[m("\u6B4C\u5355\u7B80\u4ECB"),t.isShowDesc?(l(),c("em",{key:0,class:"desc-close",onClick:d[0]||(d[0]=e=>t.isShowDesc=!1)},Ds)):v("",!0)]),s("p",{innerHTML:t.details.description,onClick:d[1]||(d[1]=(...e)=>o.showAllDesc&&o.showAllDesc(...e))},null,8,ws),t.isShowDesc?(l(),c("pre",Cs,"                                "+n(t.details.description)+`
                            `,1)):v("",!0)])])]),s("div",Is,[s("div",$s,[s("h4",null,[m("\u6B4C\u66F2\u5217\u8868 "),s("em",null,n(t.total+"\u9996\u6B4C"),1)]),s("span",{class:"play-all",onClick:d[2]||(d[2]=(...e)=>o.playAllSongs&&o.playAllSongs(...e))},[As,m(" \u64AD\u653E\u5168\u90E8")]),s("span",{class:N(["collect",t.details.subscribed?"active":""]),onClick:d[3]||(d[3]=e=>o.subPlayList(t.details))},[s("i",{class:N(["iconfont","icon-collect"+(t.details.subscribed?"-active":"")])},null,2),m(" "+n(t.details.subscribed?"\u5DF2\u6536\u85CF":"\u6536\u85CF"),1)],2)]),t.isLoading?(l(),S(D,{key:0})):(l(),c(f,{key:1},[h(w,{songList:t.songList,stripe:!0},null,8,["songList"]),o.isLogin?v("",!0):(l(),c("div",qs,[s("span",{onClick:d[4]||(d[4]=(...e)=>o.loginDialog&&o.loginDialog(...e))},"\u767B\u5F55\u540E\u67E5\u770B\u5168\u90E8\u6B4C\u66F2")]))],64))])]),s("div",Ts,[t.playlists.length?(l(),c("div",Ns,[Us,s("div",Bs,[(l(!0),c(f,null,k(t.playlists,e=>(l(),S(p,{class:"recom-item",to:{path:"/playlist/detail",query:{id:e.id}},key:e.id},{default:u(()=>[h(g,{src:e.coverImgUrl},{default:u(()=>[Ms]),_:2},1032,["src"]),s("div",Ps,[s("div",Rs,n(e.name),1),s("div",Vs,[m(" By. "),h(p,{to:{path:"/user",query:{id:e.creator.userId}}},{default:u(()=>[m(n(e.creator.nickname),1)]),_:2},1032,["to"])])])]),_:2},1032,["to"]))),128))])])):v("",!0),t.comments.length?(l(),c("div",zs,[Es,s("div",js,[(l(!0),c(f,null,k(t.comments,e=>(l(),c("div",{class:"comment-item",key:e.commentId},[h(p,{to:{path:"/user",query:{id:e.commentId}}},{default:u(()=>[h(g,{src:e.user.avatarUrl},{default:u(()=>[Fs]),_:2},1032,["src"])]),_:2},1032,["to"]),s("div",Hs,[s("div",Ks,[h(p,{to:{path:"/user",query:{id:e.commentId}},class:"comment-name"},{default:u(()=>[m(n(e.user.nickname),1)]),_:2},1032,["to"]),s("span",Os,n(t.$utils.formatMsgTime(e.time)),1)]),s("div",Qs,n(e.content),1)])]))),128))])])):v("",!0)])])])}var Gs=V(J,[["render",Ws],["__scopeId","data-v-5c7ef7bb"]]);export{Gs as default};
