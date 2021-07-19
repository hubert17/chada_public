var t=Object.defineProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,e=(s,r,i)=>r in s?t(s,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[r]=i;import{t as a}from"./vendor.69b3f927.js";import{M as c}from"./MusicItem.500c2db3.js";import{L as o,n}from"./index.15f8a9b6.js";import"https://cdn.jsdelivr.net/npm/vue-recaptcha@1.3.0/dist/vue-recaptcha.es.js";import"https://cdn.jsdelivr.net/npm/js-cookie@3.0.0-rc.1/dist/js.cookie.min.mjs";var d=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("v-container",[t.artist?t._e():r("Loading"),t.artist?r("v-card",{attrs:{loading:!t.artist}},[r("v-img",{attrs:{"aspect-ratio":"1.7","max-height":"300px",src:t.artist.artist.picUrl+"?param=400y400"}}),r("v-card-title",[t._v(t._s(t.artist.artist.name))]),r("v-card-text",{on:{click:function(s){t.descWrap=!t.descWrap}}},[r("div",{staticClass:"my-2 body-2 primary--text"},[t._v("Albums: "+t._s(t.artist.artist.albumSize)+" - Music: "+t._s(t.artist.artist.musicSize))]),r("div",{class:t.descWrap?"text-truncate":null},[t._v(t._s(t.artist.artist.briefDesc))])]),r("v-card-actions",[r("v-btn",{attrs:{rounded:"",ripple:"",block:"",color:"primary",to:{path:"/artist/albums",query:{id:t.artist.artist.id}}}},[t._v("All Albums")])],1)],1):t._e(),t.artist?r("div",t._l(t.artist.hotSongs,(function(s){return r("MusicItem",{key:s.id,attrs:{id:s.id,artist:s.ar[0].name,name:s.name,album:s.al.name},on:{setMusic:t.setMusic}})})),1):t._e()],1)},l=[];const m={components:{MusicItem:c,Loading:o},data:()=>({id:null,descWrap:!0}),mounted(){this.id=this.$route.query.id,this.$store.dispatch("artist/fetchArtistById",this.id)},computed:((t,a)=>{for(var c in a||(a={}))r.call(a,c)&&e(t,c,a[c]);if(s)for(var c of s(a))i.call(a,c)&&e(t,c,a[c]);return t})({},a({artist:"artist/getArtist"})),methods:{setMusic(t){this.$store.commit("player/setMusicDetailByIdsList",this.artist.hotSongs),this.$store.commit("player/setMusicUrlsListByPassIdFromMusicList",t)}}},u={};var p=n(m,d,l,!1,v,"cccfa1d4",null,null);function v(t){for(let s in u)this[s]=u[s]}var f=function(){return p.exports}();export default f;
