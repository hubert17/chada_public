import{n as t}from"./index.e5eaf42f.js";const e={};var a=t({props:{id:{type:String},name:{type:String},alias:{type:String},picUrl:{type:String},musicSize:{type:Number},albumSize:{type:Number}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto mb-3",attrs:{color:"secondary darken-1",to:{path:"/artist",query:{id:t.id}},ripple:""}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"10rem",width:"100%",src:t.picUrl+"?param=400y400",alt:t.name}}),a("v-card-title",{staticClass:"pb-0 pt-1"},[t._v(" "+t._s(t.name)+" "),a("span",{staticClass:"subtitle-2 pl-2"},[t._v(t._s(t.alias))])]),a("v-card-text",[t._v("Music: "+t._s(t.musicSize)+" - Albums: "+t._s(t.albumSize))])],1)}),[],!1,i,null,null,null);function i(t){for(let a in e)this[a]=e[a]}var s=function(){return a.exports}();export{s as A};
