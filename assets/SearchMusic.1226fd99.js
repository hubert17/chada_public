var t=Object.defineProperty,e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;import{L as i,n as a}from"./index.15f8a9b6.js";import{M as c}from"./MusicItem.500c2db3.js";import{t as n}from"./vendor.69b3f927.js";import"https://cdn.jsdelivr.net/npm/vue-recaptcha@1.3.0/dist/vue-recaptcha.es.js";import"https://cdn.jsdelivr.net/npm/js-cookie@3.0.0-rc.1/dist/js.cookie.min.mjs";var l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pt-0"},[r("v-row",{staticClass:"text-center"},[r("v-col",[t.getSearchResult?t._e():r("Loading"),t._l(t.getSearchResult,(function(e){return r("v-list",{key:e.id,staticClass:"ma-0 pa-0"},[r("MusicItem",{attrs:{id:e.id,artist:e.artists[0].name,name:e.name},on:{setMusic:t.setMusic}}),r("v-divider")],1)}))],2)],1)],1)},u=[];const m={name:"List",components:{Loading:i,MusicItem:c},data:()=>({keyword:""}),mounted(){console.log(this.$route.query.keyword),this.keyword=this.$route.query.keyword,this.$store.commit("setSearchResult",this.keyword)},computed:((t,i)=>{for(var a in i||(i={}))r.call(i,a)&&o(t,a,i[a]);if(e)for(var a of e(i))s.call(i,a)&&o(t,a,i[a]);return t})({},n({getSearchResult:"getSearchResult"})),methods:{setMusic(t){this.$store.commit("player/setMusicDetailByIdFromSearch",t),this.$store.commit("player/setMusicUrlsListById")}}},d={};var p=a(m,l,u,!1,h,null,null,null);function h(t){for(let e in d)this[e]=d[e]}var v=function(){return p.exports}();export default v;
