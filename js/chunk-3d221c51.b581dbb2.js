(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d221c51"],{"543f":function(t,i,s){},"7f63":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"video-detail"},[i("div",{staticClass:"v-video",class:[t.isNight?"active":""]},[i("div",{staticClass:"w1200"},[i("div",{staticClass:"video-main"},[t.videoOptions.sources[0].src?i("video-player",{attrs:{options:t.videoOptions},on:{play:t.onPlay,pause:t.onPause,seeking:t.onSeeking,qualityChange:t.onQualityChange}}):t._e(),i("div",{staticClass:"v-light",class:[t.isNight?"active":""],on:{click:t.toggleLight}},[i("i",{staticClass:"iconfont",class:[t.isNight?"icon-night":"icon-day"]})])],1),i("div",{staticClass:"v-info"},[i("div",{staticClass:"v-info-hd"},[i("div",{staticClass:"info-name"},[t._v(t._s(t.videoDetail.title))]),t.videoDetail.creator?i("router-link",{staticClass:"song-author",attrs:{to:{path:"/user",query:{id:t.videoDetail.creator.userId}}}},[t._v("By. "+t._s(t.videoDetail.creator.nickname))]):t._e(),i("div",{staticClass:"v-info-count"},[i("span",{staticClass:"info-count"},[t._v("播放量："+t._s(t.$utils.formartNum(t.videoDetail.playTime)))]),i("span",{staticClass:"info-time"},[t._v("发布时间："+t._s(t.$utils.formartDate(t.videoDetail.publishTime,"yyyy-MM-dd")))])])],1),i("div",{staticClass:"v-desc"},[t._v(" "+t._s(t.videoDetail.briefDesc?t.videoDetail.briefDesc:"暂无简介")+" ")])])])]),i("div",{staticClass:"w1200"},[i("div",{staticClass:"v-container"},[i("div",{staticClass:"v-main"},[i("Comments",{attrs:{type:t.type,id:t.vId}})],1),i("div",{staticClass:"v-aside"},[i("div",{staticClass:"simi-video"},[i("h3",{staticClass:"aside-title"},[t._v("相关视频")]),i("div",{staticClass:"aside-main v-main"},t._l(t.simiVideo,(function(s,e){return i("div",{key:""+s.id+e,staticClass:"item"},[i("router-link",{staticClass:"faceImg",attrs:{to:{path:s.type?"/video":"/mv",query:{id:s.vid}}}},[i("i",{staticClass:"iconfont icon-play"}),i("el-image",{attrs:{src:s.coverUrl}},[i("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"iconfont icon-placeholder"})])]),i("span",{staticClass:"playCount"},[i("i",{staticClass:"iconfont icon-video"}),i("em",[t._v(t._s(t.$utils.formartNum(s.playTime)))])]),i("div",{staticClass:"v-time"},[t._v(t._s(t.$utils.formatSongTime(s.durationms)))])],1),i("div",{staticClass:"info"},[i("router-link",{staticClass:"v-name",attrs:{to:{path:"/video",query:{id:s.vid}}}},[t._v(t._s(s.title))]),t._l(s.creator,(function(s,e){return i("router-link",{key:e,staticClass:"v-author",attrs:{to:{path:"/user",query:{uid:s.userId}}}},[t._v("By. "+t._s(0!==e?" / "+s.userName:s.userName))])}))],2)],1)})),0)])])])])])},a=[],o=s("0de3"),r=s("09a4"),n=s("2f62"),d={name:"videoDetail",components:{videoPlayer:o["a"],Comments:r["a"]},data(){return{vId:this.$route.query.id,videoDetail:{},type:5,videoOptions:{sources:[{type:"",src:""}],qualityList:[],quality:{}},currentTime:0,simiVideo:[],isNight:!1}},computed:{},mounted(){this.init(),this.setPlayStatus(!1)},methods:{...Object(n["d"])({setPlayStatus:"SET_PLAYSTATUS"}),async getVideoDetail(){const{data:t}=await this.$http.videoDetail({id:this.vId});if(200!==t.code)return this.$msg.error("数据请求失败");this.videoDetail=t.data,this.videoOptions.qualityList=t.data.brs,this.videoOptions.quality=t.mp},async getMvUrl(t){const{data:i}=await this.$http.videoUrl({id:this.vId,r:t});if(200!==i.code)return this.$msg.error("数据请求失败");this.$set(this.videoOptions.sources,0,{type:"video/mp4",src:i.urls[0].url})},async getSimiMv(){const{data:t}=await this.$http.simiVideo({id:this.vId});if(200!==t.code)return this.$msg.error("数据请求失败");this.simiVideo=t.data},init(){const t=this.$http.videoDetail({id:this.vId}),i=this.$http.videoUrl({id:this.vId});this.currentTime=0,Promise.all([t,i]).then(t=>{t.forEach((t,i)=>{const s=t.data;if(0===i){if(200!==s.code)return this.$msg.error("数据请求失败");this.videoDetail=s.data,this.videoOptions.qualityList=s.data.resolutions.map(t=>{const i={};return i.br=t.resolution,i.size=t.size,i})}else{if(200!==s.code)return this.$msg.error("数据请求失败");this.$set(this.videoOptions.sources,0,{type:"video/mp4",src:s.urls[0].url}),this.videoOptions.quality={br:s.urls[0].r}}})}),this.getSimiMv()},onPlay(t){t.currentTime(this.currentTime)},onSeeking(t){this.currentTime=t.currentTime()},onPause(t){this.currentTime=t.currentTime(),t.pause()},onQualityChange(t){this.onPause(t),this.currentTime=t.currentTime(),this.getMvUrl(t.quality.val)},toggleLight(){this.isNight=!this.isNight}},watch:{$route(t,i){this.vId=this.$route.query.id,this.vId&&this.init()}}},l=d,c=(s("da78"),s("2877")),v=Object(c["a"])(l,e,a,!1,null,"949a766e",null);i["default"]=v.exports},da78:function(t,i,s){"use strict";s("543f")}}]);
//# sourceMappingURL=chunk-3d221c51.b581dbb2.js.map