if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-76dd9a6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AlbumDetail.276d9a88.js",revision:"1acf7f82ca5a74eac9495640620e9cc8"},{url:"assets/AlbumDetail.bce1592b.css",revision:"4bf5b4811a89b05b385ba863289606af"},{url:"assets/AlbumItem.951441ea.js",revision:"b9de93d199f6a225d20c1bdd022ffd3a"},{url:"assets/Artist.501d5352.css",revision:"086709e1e2347a0a58e098d335eb0d96"},{url:"assets/Artist.566c3457.js",revision:"467c8e4b36079c2d93f3357cbba17e85"},{url:"assets/ArtistAlbums.e761c2a8.js",revision:"32e96a3b5497bdc2104422d35665f38b"},{url:"assets/ArtistItem.e2a188e7.js",revision:"9cb88a826275de5255e81b591cc59725"},{url:"assets/index.41341502.css",revision:"b23baf721b6cebbc37d308c1f4971baf"},{url:"assets/index.b1fedc7f.js",revision:"0cf2f1405466e8a56678a1d93b26fab0"},{url:"assets/MusicItem.99412e02.js",revision:"44f290d5ead3405e2d359591dd7aa192"},{url:"assets/NewAlbum.11268664.js",revision:"8d7452a958d5887a6dfbf2e953ec7f73"},{url:"assets/PlaylistDetail.53733fc9.css",revision:"fada2f2065510c7180f4aedb0ceae8b1"},{url:"assets/PlaylistDetail.dd851015.js",revision:"b28cdd4961a7d3ef420e69fe17820b76"},{url:"assets/Search.b804a7c0.js",revision:"e3da75aabab6deb91cb923f10bdef949"},{url:"assets/SearchMusic.0b1beb76.js",revision:"50de46c5883166fb2b3edaf006d67881"},{url:"assets/Setting.915c71a9.js",revision:"a8b16f6c8640f44482fa9f709256dbf5"},{url:"assets/TabDownload.86877325.js",revision:"54db1fd5cddc5c6c47e37a088d6a528c"},{url:"assets/TabLyric.966036e8.js",revision:"c17f4ba00b0d083de6dc375a07b79653"},{url:"assets/TabMessage.599c0617.js",revision:"86e60a681081ac7644f2352cae09391c"},{url:"assets/TabPlaylist.8bea7030.js",revision:"043ecc1ecb1f1a96c7a8e3f3ea292e9f"},{url:"assets/TopArtist.822b616e.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/TopArtist.e6dbef04.js",revision:"d8ee31ad43d689b102283101caa80b77"},{url:"assets/TopPlayLists.a308dc49.js",revision:"a4b5c46891ac6122d9b511ce89668465"},{url:"assets/TopPlayLists.ae7c7134.css",revision:"fab1e55497306be0881775dd0754d882"},{url:"assets/vendor.69b3f927.js",revision:"858b493b7ecdb224a4426e29453c8eae"},{url:"assets/virtual_pwa-register.93d5579f.js",revision:"5914c8d6635164476c22ccca1667f668"},{url:"index.html",revision:"c51f56493504ba376e2c21fd60627984"},{url:"favicon.svg",revision:"1cb4e8b7f79a9238eaa9b020910cf1a5"},{url:"img/mykzpic.jpg",revision:"7ec87736a497ee7ad2eb029c4b120e3e"},{url:"pwa-192x192.png",revision:"947270e7966b8e9da139623d5d39a031"},{url:"pwa-512x512.png",revision:"26ed3d3eb5fbbc0101e0f66d55d908c8"},{url:"manifest.webmanifest",revision:"2a171d62e5c26110b5dbf2795f8b5eb8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/api45\.bernardgabon\.com\/.*/i,new e.CacheFirst({cacheName:"rdhenry-cache01",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/api45gabs\.azurewebsites\.net\/.*/i,new e.CacheFirst({cacheName:"rdhenry-cache02",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/newsapi\.org\/.*/i,new e.CacheFirst({cacheName:"rdhenry-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.vuetifyjs\.com\/.*/i,new e.CacheFirst({cacheName:"vuetifyjs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.CacheFirst({cacheName:"jsdelivr-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
