(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dab67cb"],{"09a4":function(t,s,i){"use strict";var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"comments"},[s("div",{staticClass:"comment_hd"},[s("h2",[t._v("评论"),s("em",[t._v("共"+t._s(t.total)+"条评论")])]),t.userInfo?s("div",{staticClass:"userInfo"},[s("span",[t._v(t._s(t.userInfo.nickname))]),s("el-image",{staticClass:"avatar",attrs:{src:t.userInfo.avatarUrl}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1):t._e()]),s("el-form",{staticClass:"comment_box"},[s("div",{staticClass:"comment_textarea"},[s("div",{staticClass:"pre"},[t._v(t._s(t.msg))]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"J_inpBox inp-paragraph",attrs:{name:"leave_msg",id:"leave_msg",placeholder:"期待你的神评论……"},domProps:{value:t.msg},on:{input:function(s){s.target.composing||(t.msg=s.target.value)}}})]),s("div",{staticClass:"comment_box_footer"},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.subComment}},[t._v("评论")]),s("span",{staticClass:"comment_limit"},[s("em",{staticClass:"num"},[t._v(t._s(t.msg.length))]),t._v("/"+t._s(t.maxLen))])],1)]),s("div",{staticClass:"comment_area"},[t.comments.length?[t._l(t.comments,(function(i,e){return s("div",{key:i.commentId+e+"",staticClass:"comment_item"},[s("router-link",{staticClass:"comment_avatar",attrs:{to:{path:"/user",query:{id:i.user.userId}}}},[s("el-image",{attrs:{src:i.user.avatarUrl+"?param=120y120"}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1),s("div",{staticClass:"comment_info"},[s("router-link",{attrs:{to:{path:"/user",query:{id:i.user.userId}}}},[t._v(t._s(i.user.nickname))]),s("div",{staticClass:"comment_content"},[t._v(" "+t._s(i.content)+" ")]),t._l(i.beReplied,(function(i){return s("div",{key:i.beRepliedCommentId,staticClass:"comment_reply"},[s("router-link",{attrs:{to:{path:"/user",query:{id:i.user.userId}}}},[t._v(t._s(i.user.nickname))]),t._v(": "+t._s(i.content)+" ")],1)})),s("div",{staticClass:"comment_footer"},[s("div",{staticClass:"comment_time"},[t._v(t._s(t.$utils.formatMsgTime(i.time)))]),s("div",{staticClass:"comment_oper"},[t.userInfo&&t.userInfo.userId===i.user.userId?s("em",{staticClass:"comment_del",on:{click:function(s){return t.delComment(i)}}},[s("i",{staticClass:"iconfont icon-del"})]):t._e(),s("span",{class:[i.liked?"active":""],on:{click:function(s){return t.likeComment(i)}}},[s("i",{staticClass:"iconfont icon-praise"}),t._v("("+t._s(i.likedCount)+")")]),s("span",{staticClass:"replyComment",on:{click:function(s){return t.replyComment(i,e)}}},[s("i",{staticClass:"iconfont icon-comment"})])])]),i.isHot?s("div",{staticClass:"isHot"},[s("i",{staticClass:"iconfont icon-choicest"})]):t._e(),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isShowReply(i,e)?s("replyComment",{attrs:{params:i},on:{replyMsg:t.replyMsg}}):t._e()],1)],2)],1)})),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:this.total},on:{"current-change":t.currentChange}})],1)]:s("div",{staticClass:"comments_status"},[t.isEmpty?s("div",{staticClass:"empty"},[t._m(0),s("p",[t._v("暂无留言")])]):s("div",{staticClass:"loading"},[t._v("评论加载中...")])])],2)],1)},a=[function(){var t=this,s=t._self._c;return s("p",[s("i",{staticClass:"iconfont icon-empty-main"})])}],n=i("2f62"),o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"reply-comment"},[s("h3",[t._v("我回复@"+t._s(t.params.user.nickname)+":")]),s("div",{staticClass:"comment_textarea"},[s("div",{staticClass:"pre"},[t._v(t._s(t.msg))]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"J_inpBox inp-paragraph",attrs:{name:"leave_msg",id:"leave_msg",placeholder:"期待你的神评论……"},domProps:{value:t.msg},on:{input:function(s){s.target.composing||(t.msg=s.target.value)}}})]),s("div",{staticClass:"comment_box_footer"},[s("span",{staticClass:"comment_limit"},[s("em",{staticClass:"num"},[t._v(t._s(t.msg.length))]),t._v("/"+t._s(t.maxLen))]),s("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.subReplyComment}},[t._v("评论")])],1)])},m=[],l={name:"replyComment",components:{},props:["params"],data(){return{msg:"",maxLen:140}},computed:{},methods:{subReplyComment(){this.$emit("replyMsg",this.msg)}},watch:{msg(){this.msg=this.maxLen>=this.msg?this.msg:this.msg.substring(0,this.maxLen)}}},c=l,r=(i("5d8d"),i("2877")),d=Object(r["a"])(c,o,m,!1,null,"6a6b203a",null),u=d.exports,h={name:"Comments",components:{replyComment:u},props:{type:{type:Number,default:0},id:{type:String,default:"0"}},data(){return{msg:"",maxLen:140,curId:this.id,limit:20,offset:0,before:0,hotComments:[],comments:[],total:0,currentPage:0,isEmpty:!1,replyCommentId:0,replyIndex:-1}},computed:{...Object(n["c"])(["isLogin","userInfo"]),isShowReply(){return function(t,s){return t.commentId===this.replyCommentId&&this.replyIndex===s}}},mounted(){this.getComment()},methods:{...Object(n["d"])(["setLoginDialog"]),getComment(){switch(this.type){case 0:this.getSongComment();break;case 1:this.getMvComment();break;case 3:this.getAlbumComment();break;case 5:this.getVideoComment();break}},async getSongComment(){const{data:t}=await this.$http.commentSong({id:this.curId,limit:this.limit,offset:this.offset,before:this.before});this.msgHandler(t)},async getMvComment(){const{data:t}=await this.$http.commentMv({id:this.curId,limit:this.limit,offset:this.offset,before:this.before});this.msgHandler(t)},async getAlbumComment(){const{data:t}=await this.$http.albumComment({id:this.curId,limit:this.limit,offset:this.offset,before:this.before});this.msgHandler(t)},async getVideoComment(){const{data:t}=await this.$http.commentVideo({id:this.curId,limit:this.limit,offset:this.offset,before:this.before});this.msgHandler(t)},msgHandler(t){if(200!==t.code)return this.$msg.error("数据请求失败");this.total=t.total,this.hotComments=t.hotComments||[],this.hotComments.map(t=>(t.isHot=!0,t)),this.comments=[...this.hotComments,...t.comments],this.isEmpty=0===this.before&&!this.comments.length},async commentHandler(t,s,i){const e={t:t,type:this.type,id:this.curId,content:s,commentId:i},{data:a}=await this.$http.comment(e);if(200!==a.code)return this.$msg.error("数据请求失败");this.msg="",this.getComment(),0===t?this.$msg.success("删除评论成功！"):1===t?this.$msg.success("评论成功！"):2===t&&(this.$msg.success("回复评论成功！"),this.replyCommentId=0,this.replyIndex=-1)},subComment(){this.isLogin?this.commentHandler(1,this.msg):this.setLoginDialog(!0)},delComment(t){this.$msgBox.confirm("确定删除评论？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then(()=>{this.commentHandler(0,"",t.commentId)}).catch(()=>{})},replyComment(t,s){this.isLogin?(this.replyCommentId=this.replyCommentId===t.commentId&&this.replyIndex===s?0:t.commentId,this.replyIndex=s):this.setLoginDialog(!0)},replyMsg(t){this.isLogin?this.commentHandler(2,t,this.replyCommentId):this.setLoginDialog(!0)},async likeComment(t){if(!this.isLogin)return void this.setLoginDialog(!0);const{data:s}=await this.$http.commentLike({id:this.curId,cid:t.commentId,t:Number(!t.liked),type:this.type});if(200!==s.code)return this.$msg.error("数据请求失败");this.getComment()},currentChange(t){this.offset=(t-1)*this.limit,this.getComment()}},watch:{id(t,s){this.curId=t,this.offset=0,this.getComment()},msg(){this.msg=this.maxLen>=this.msg?this.msg:this.msg.substring(0,this.maxLen)}}},p=h,g=(i("a3e9"),Object(r["a"])(p,e,a,!1,null,"bf18895a",null));s["a"]=g.exports},"211e":function(t,s,i){},"50cc":function(t,s,i){"use strict";i("211e")},"5d8d":function(t,s,i){"use strict";i("a4c2")},a3e9:function(t,s,i){"use strict";i("f2ea")},a4c2:function(t,s,i){},dbea:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t._self._c;return t.details?s("div",{staticClass:"album"},[s("div",{staticClass:"w1200"},[s("div",{staticClass:"album-cover"},[s("div",{staticClass:"album-img"},[s("el-image",{attrs:{src:t.details.picUrl}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1),s("div",{staticClass:"album-info"},[s("div",{staticClass:"album-title"},[t._v(" "+t._s(t.details.name)+" "),s("span",[t._v(t._s("#"+t.details.type))])]),s("div",{staticClass:"album-singer"},[t._v("歌手："),t._l(t.details.artists,(function(i,e){return s("router-link",{key:i.name,staticClass:"song_name",attrs:{to:{path:"/singer",query:{id:i.id}}}},[t._v(t._s(0!==e?" / "+i.name:i.name))])}))],2),s("div",{staticClass:"album-time"},[t._v("发行时间："+t._s(t.$utils.formartDate(t.details.publishTime,"yyyy-MM-dd")))]),s("div",{staticClass:"album-company"},[t._v("发行公司："+t._s(t.details.company))]),t.details.description?s("div",{staticClass:"album-desc"},[s("h5",[t._v("歌单简介"),t.isShowDesc?s("em",{staticClass:"desc-close",on:{click:function(s){t.isShowDesc=!1}}},[s("i",{staticClass:"iconfont icon-closed"})]):t._e()]),s("p",{on:{click:t.showAllDesc}},[t._v(t._s(t.details.description))]),t.isShowDesc?s("pre",{staticClass:"album-desc-all"},[t._v("                        "+t._s(t.details.description)+"\n                    ")]):t._e()]):t._e()])]),s("div",{staticClass:"detail-container"},[s("div",{staticClass:"detail-main"},[s("div",{staticClass:"song-header"},[s("h4",[t._v("包含歌曲列表 "),s("em",[t._v(t._s(t.details.size+"首歌"))])]),s("span",{staticClass:"play-all",on:{click:t.playAllSongs}},[s("i",{staticClass:"iconfont icon-audio-play"}),t._v(" 播放全部")]),s("span",{class:["collect",t.dynamic.isSub?"active":""],on:{click:t.subAlbum}},[s("i",{class:["iconfont","icon-collect"+(t.dynamic.isSub?"-active":"")]}),t._v(" "+t._s(t.dynamic.isSub?"已收藏":"收藏"))])]),s("song-list",{attrs:{songList:t.songList,stripe:!0}}),s("div",{ref:"comment",staticClass:"album-comments"},[s("Comments",{attrs:{type:t.type,id:t.albumId}})],1)],1),s("div",{staticClass:"detail-aside"},[s("h3",{staticClass:"aside-title"},[t._v(t._s(t.details.artists[0].name)+"的其他专辑"),s("router-link",{staticClass:"album-more",attrs:{to:{path:"/singer",query:{id:t.details.artists[0].id,type:"album"}}}},[t._v("全部>>")])],1),s("div",{staticClass:"aside-main aside-album-main"},t._l(t.hotAlbums,(function(i){return s("router-link",{key:i.id,staticClass:"aside-album-item",attrs:{to:{path:"/album",query:{id:i.id}}}},[s("el-image",{attrs:{src:i.picUrl}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])]),s("div",{staticClass:"aside-album-info"},[s("div",{staticClass:"aside-album-name"},[t._v(t._s(i.name))]),s("div",{staticClass:"aside-album-time"},[t._v(" "+t._s(t.$utils.formartDate(t.details.publishTime,"yyyy-MM-dd"))+" ")])])],1)})),1)])])])]):t._e()},a=[],n=(i("14d9"),i("2f62")),o=i("eb4d"),m=i("18fd"),l=i("09a4"),c={name:"albumDetail",components:{songList:m["a"],Comments:l["a"]},mounted(){this.albumId=this.$route.query.id,this._initialize()},data(){return{albumId:"",details:null,songList:[],dynamic:{},hotAlbums:[],comments:[],type:3,isShowDesc:!1}},computed:{},methods:{...Object(n["d"])({setPlayStatus:"SET_PLAYSTATUS",setPlayList:"SET_PLAYLIST",setPlayIndex:"SET_PLAYINDEX"}),async getAlbum(t){const{data:s}=await this.$http.album(t);if(200!==s.code)return this.$msg.error("数据请求失败");this.details=s.album,this.songList=this._formatSongs(s.songs),this.getArtistAlbum()},async getAlbumDynamic(t){const{data:s}=await this.$http.albumDynamic(t);if(200!==s.code)return this.$msg.error("数据请求失败");this.dynamic=s},async getArtistAlbum(){const{data:t}=await this.$http.artistAlbum({id:this.details.artists[0].id,limit:5});if(200!==t.code)return this.$msg.error("数据请求失败");this.hotAlbums=t.hotAlbums},showAllDesc(){this.details.description.length>120&&(this.isShowDesc=!this.isShowDesc)},playAllSongs(){this.playAll({list:this.songList})},async subAlbum(){const{data:t}=await this.$http.albumSub({id:this.albumId,t:Number(!this.dynamic.isSub)});if(200!==t.code)return this.$msg.error("数据请求失败");this.dynamic.isSub=Number(!this.dynamic.isSub)},_formatSongs(t){const s=[];return t.map((i,e)=>{i.id&&(i.license=!t[e].privilege.cp,s.push(Object(o["a"])(i)))}),s},_initialize(){this.getAlbum({id:this.albumId}),this.getAlbumDynamic({id:this.albumId})},...Object(n["b"])(["playAll"])},watch:{$route(t,s){this.albumId=this.$route.query.id,this.albumId&&this._initialize()}}},r=c,d=(i("50cc"),i("2877")),u=Object(d["a"])(r,e,a,!1,null,"7241a2ad",null);s["default"]=u.exports},f2ea:function(t,s,i){}}]);
//# sourceMappingURL=chunk-4dab67cb.78097bf0.js.map