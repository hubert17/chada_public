if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-76dd9a6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AlbumDetail.225dc63e.js",revision:"dc1357105f0e0850b54ab923147f1e78"},{url:"assets/AlbumDetail.bce1592b.css",revision:"4bf5b4811a89b05b385ba863289606af"},{url:"assets/AlbumItem.ea3c5c12.js",revision:"ad4b8bd3b314348db1f7106312510adb"},{url:"assets/Artist.501d5352.css",revision:"086709e1e2347a0a58e098d335eb0d96"},{url:"assets/Artist.dfc678a9.js",revision:"5fbf0792fb7cae0a1189c64ecc3d97dc"},{url:"assets/ArtistAlbums.16db0e91.js",revision:"fb7fa025eb6afac74406931b0a031d17"},{url:"assets/ArtistItem.9097b390.js",revision:"10dc74374c509b11708e0b686c5c1324"},{url:"assets/index.96af7c8c.css",revision:"db2886d3f1698b9aa7dd57516fb03490"},{url:"assets/index.d8470eb3.js",revision:"7d8d5ad4a285090faba99d2c2172769a"},{url:"assets/MusicItem.dc52a3ef.js",revision:"6e2494b9087d92af3425a1d161c631ae"},{url:"assets/NewAlbum.6d1eb0e1.js",revision:"f445408149117da1689485212a8a3886"},{url:"assets/PlaylistDetail.49a3b6bc.js",revision:"2622cf67b3fa474ec372f35c7f7605ae"},{url:"assets/PlaylistDetail.53733fc9.css",revision:"fada2f2065510c7180f4aedb0ceae8b1"},{url:"assets/Search.9c09499e.js",revision:"9ca695058b07fa0a13fe5a73daa9abdd"},{url:"assets/SearchMusic.eecdc002.js",revision:"137eb35f65def69088c663ad5b77fd06"},{url:"assets/Setting.8ff63bb8.js",revision:"dbfe6f38cb4bdff2433d5916b79c2b18"},{url:"assets/TabDownload.2c389e5e.js",revision:"ba732c48fa0b53aa55e3507b3238c94f"},{url:"assets/TabLyric.5a6be68b.js",revision:"d562b3ae5ee24993e209abc4314e40c2"},{url:"assets/TabMessage.537a9c10.js",revision:"5c85a7750d0529e0f7c477902b602a37"},{url:"assets/TabPlaylist.7a4fca55.js",revision:"160e769c4526b1e0283c9185d6b611f0"},{url:"assets/TopArtist.822b616e.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/TopArtist.cb96edd9.js",revision:"7307f214e21ad8eb65909729bfe44a65"},{url:"assets/TopPlayLists.8b0e1ff0.js",revision:"fd6d9ea34e6209390b71df7177296b6b"},{url:"assets/TopPlayLists.ae7c7134.css",revision:"fab1e55497306be0881775dd0754d882"},{url:"assets/vendor.69b3f927.js",revision:"858b493b7ecdb224a4426e29453c8eae"},{url:"assets/virtual_pwa-register.93d5579f.js",revision:"5914c8d6635164476c22ccca1667f668"},{url:"index.html",revision:"23d2f638b9af65f4c34f6a043a08fda7"},{url:"favicon.svg",revision:"1cb4e8b7f79a9238eaa9b020910cf1a5"},{url:"img/mykzpic.jpg",revision:"7ec87736a497ee7ad2eb029c4b120e3e"},{url:"pwa-192x192.png",revision:"947270e7966b8e9da139623d5d39a031"},{url:"pwa-512x512.png",revision:"26ed3d3eb5fbbc0101e0f66d55d908c8"},{url:"manifest.webmanifest",revision:"2a171d62e5c26110b5dbf2795f8b5eb8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/api45\.bernardgabon\.com\/.*/i,new e.CacheFirst({cacheName:"rdhenry-cache01",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/api45gabs\.azurewebsites\.net\/.*/i,new e.CacheFirst({cacheName:"rdhenry-cache02",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/newsapi\.org\/.*/i,new e.CacheFirst({cacheName:"rdhenry-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.vuetifyjs\.com\/.*/i,new e.CacheFirst({cacheName:"vuetifyjs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.CacheFirst({cacheName:"jsdelivr-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
