import{n as t}from"./index.45b70c33.js";const i={};var a=t({props:{id:{type:String},name:{type:String},alias:{type:String},picUrl:{type:String},musicSize:{type:Number},albumSize:{type:Number}}},(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-card",{staticClass:"mx-auto mb-3",attrs:{color:"secondary darken-1",to:{path:"/artist",query:{id:t.id}},ripple:""}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"10rem",width:"100%",src:t.picUrl+"?param=400y400",alt:t.name}}),a("v-card-title",{staticClass:"pb-0 pt-1"},[t._v(" "+t._s(t.name)+" "),a("span",{staticClass:"subtitle-2 pl-2"},[t._v(t._s(t.alias))])]),a("v-card-text",[t._v("Music: "+t._s(t.musicSize)+" - Albums: "+t._s(t.albumSize))])],1)}),[],!1,e,null,null,null);function e(t){for(let a in i)this[a]=i[a]}var s=function(){return a.exports}();export{s as A};
