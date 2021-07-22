var t=Object.defineProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(e,s,i)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i;import{A as a}from"./AlbumItem.f6ba7eea.js";import{M as c,n as o}from"./index.203c4b21.js";import{A as n}from"./ArtistItem.af20f934.js";import{t as l}from"./vendor.69b3f927.js";import"https://cdn.jsdelivr.net/npm/vue-recaptcha@1.3.0/dist/vue-recaptcha.es.js";import"https://cdn.jsdelivr.net/npm/js-cookie@3.0.0-rc.1/dist/js.cookie.min.mjs";var m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.getSearchSuggestion?s("v-container",{staticClass:"pt-0 mb-12 pb-4 pb-sm-12"},[s("div",{staticClass:"headline my-2 text-center"},[t._v("Search Result")]),s("v-row",{attrs:{"no-gutters":""}},[s("p",{staticClass:"col-12 headline mt-2 mb-1"},[t._v("Artist:")]),t._l(t.getSearchSuggestion.artists,(function(e){return s("v-col",{key:e.id,staticClass:"mr-4",attrs:{cols:"12",sm:"6"}},t._l(t.getSearchSuggestion.artists,(function(t){return s("ArtistItem",{key:t.id,attrs:{id:t.id,name:t.name,picUrl:t.picUrl,alias:t.alias[0],musicSize:t.musicSize,albumSize:t.albumSize}})})),1)})),s("v-divider",{staticClass:"col-12"}),s("p",{staticClass:"col-12 headline mt-2 mb-1"},[t._v("Albums:")]),t._l(t.getSearchSuggestion.albums,(function(t){return s("v-col",{key:t.id,staticClass:"mr-4",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[s("AlbumItem",{attrs:{id:t.id,ArtistPicUrl:t.artist.picUrl,name:t.name,artistName:t.artist.name,picUrl:t.artist.picUrl,company:t.company,subType:t.subType,type:t.type,size:t.size}})],1)})),s("v-divider",{staticClass:"col-12"}),s("p",{staticClass:"col-12 headline mt-4 mb-1"},[t._v("Music:")]),s("v-btn",{attrs:{color:"primary",block:"",to:{path:"/search/music",query:{keyword:t.keyword}}}},[t._v("Search All Music by "+t._s(t.keyword))]),t._l(t.getSearchSuggestion.songs,(function(e){return s("MusicItemWithPic",{key:e.id,attrs:{name:e.name,artist:e.artists[0].name,imgUrl:e.artists[0].img1v1Url,id:e.id},on:{setMusic:t.setMusic}})}))],2),s("v-row",{staticClass:"mt-4"},[s("v-spacer",{staticStyle:{height:"85px"}})],1)],1):t._e()},u=[];const p={name:"List",components:{AlbumItem:a,MusicItemWithPic:c,ArtistItem:n},data:()=>({keyword:""}),mounted(){this.keyword=this.$route.query.keyword,this.$store.dispatch("search/fetchSearchSuggestionByText",this.keyword)},computed:((t,a)=>{for(var c in a||(a={}))s.call(a,c)&&r(t,c,a[c]);if(e)for(var c of e(a))i.call(a,c)&&r(t,c,a[c]);return t})({},l({getSearchSuggestion:"search/getSearchSuggestion"})),methods:{setMusic(t){this.$store.commit("player/setMusicDetailByIdsList",this.getSearchSuggestion.songs),this.$store.commit("player/setMusicUrlsListByPassIdFromMusicList",t)}}},d={};var h=o(p,m,u,!1,g,null,null,null);function g(t){for(let e in d)this[e]=d[e]}var y=function(){return h.exports}();export default y;
