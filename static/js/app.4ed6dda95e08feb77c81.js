webpackJsonp([1],{"5rXa":function(t,e){},CTQH:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtYXAtbWFya2VyLWFsdCIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLW1hcC1tYXJrZXItYWx0IGZhLXctMTIiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzg0IDUxMiI+PHBhdGggZmlsbD0iUkVEIiBkPSJNMTcyLjI2OCA1MDEuNjdDMjYuOTcgMjkxLjAzMSAwIDI2OS40MTMgMCAxOTIgMCA4NS45NjEgODUuOTYxIDAgMTkyIDBzMTkyIDg1Ljk2MSAxOTIgMTkyYzAgNzcuNDEzLTI2Ljk3IDk5LjAzMS0xNzIuMjY4IDMwOS42Ny05LjUzNSAxMy43NzQtMjkuOTMgMTMuNzczLTM5LjQ2NCAwek0xOTIgMjcyYzQ0LjE4MyAwIDgwLTM1LjgxNyA4MC04MHMtMzUuODE3LTgwLTgwLTgwLTgwIDM1LjgxNy04MCA4MCAzNS44MTcgODAgODAgODB6Ij48L3BhdGg+PC9zdmc+"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(t){n("5rXa")},null,null).exports,s=n("/ocq"),o=n("bOdI"),c=n.n(o),u=n("d7EF"),l=n.n(u),d=n("Meid"),p=n.n(d),m=n("Sp9l"),M=n.n(m),h={currentPosition:"map-marker-current.svg",stores:{many:"map-marker-many.svg",less:"map-marker-less.svg",zero:"map-marker-zero.svg"}},g={url:"https://js.arcgis.com/3.31/"},I={storesGraphicLayer:{layer:null,index:1},currentPositionGraphicLayer:{layer:null,index:2}},y=c()({props:["stores","storeId"],data:function(){return{graphics:[],map:null,screenUtils:null,graphicLayers:null}},watch:{storeId:function(t){var e=this.map,n=this.graphics.find(function(e){return e.attributes.properties.id===t});f(e,n,this.screenUtils.toScreenPoint(e.extent,e.width,e.height,n.geometry),n.geometry)},stores:function(t){var e=this;e.graphics=[],e.graphicLayers.storesGraphicLayer.clear(),t.forEach(function(t){var n=L(parseInt(t.properties.mask_adult));x(map,n,t.geometry.coordinates,e.graphicLayers).then(function(n){n.attributes=t,e.graphics.push(n)})})}},methods:{},created:function(){var t=this;p.a.loadModules(["esri/map","esri/layers/WebTiledLayer","esri/layers/GraphicsLayer","esri/geometry/screenUtils","esri/dijit/LocateButton"],g).then(function(e){var n=l()(e,5),r=n[0],i=n[1],a=n[2],s=n[3],o=n[4];t.map=new r("map",{center:[121.525,25.0392],basemap:"gray",logo:!1,fadeOnZoom:!0,minZoom:7}),t.initBasemap(t.map,i),t.graphicLayers=t.slimGraphicLayers(I,a),t.addGraphicLayersToMap(t.map,I),t.addGraphicLayersEvent(t.map,t.graphicLayers),t.addEventListener(t),t.screenUtils=s;var c=t;t.$nextTick(function(){v(c.map,o)})},function(t){console.log(t)})},mounted:function(){}},"methods",{getType:L,addPointGraphic:x,addCurrentPoint:v,initBasemap:function(t,e){t.setLevel(14);var n=new e("https://wmts.nlsc.gov.tw/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=EMAP&STYLE=_null&TILEMATRIXSET=EPSG:3857&TILEMATRIX=EPSG:3857:{level}&TILEROW={row}&TILECOL={col}&FORMAT=image/png");t.addLayer(n)},slimGraphicLayers:function(t,e){var n={};for(var r in t)t[r].layer=new e,n[r]=t[r].layer;return n},addGraphicLayersToMap:function(t,e){this.orderByGraphicLayersByIndex(e).forEach(function(n){var r=e[n.name];t.addLayer(r.layer,r.index)})},addGraphicLayersEvent:function(t,e){e.storesGraphicLayer.on("mouse-over",function(){t.setMapCursor("pointer")}),e.storesGraphicLayer.on("mouse-out",function(){t.setMapCursor("default")})},addEventListener:function(t){var e=t.map;e.on("extent-change",function(e){t.$emit("callback",e.extent)}),this.graphicLayers.storesGraphicLayer.on("click",function(n){var r=n.graphic,i=t.screenUtils.toMapPoint(e.extent,e.width,e.height,n.screenPoint);f(e,r,n.screenPoint,i)})},orderByGraphicLayersByIndex:function(t){var e=[];for(var n in t)e.push({name:n,index:t[n].index});return e.sort(function(t,e){return t.index-e.index}),e}});function v(t,e){var n=new e({map:t},"LocateButton");n.startup(),n.on("load",function(){n.locate()})}function f(t,e,n,r){var i=e.attributes,a='<p class="infoWindow title">'+i.properties.name+"</p>";a+='<a target="_blank" href="https://www.google.com/maps/dir/?api=1&amp;destination='+i.geometry.coordinates[1]+","+i.geometry.coordinates[0]+'"><p class="content infoWindow">'+i.properties.address+"</p></a>";var s=i.properties.phone.split("-");a+='<a href="'+("tel:+886-"+s[0].replace("0","")+"-"+s[1])+'"><p class="content infoWindow">'+i.properties.phone+"</p></a>",a+='<div class="mask-container">',a+='<div><p class="title infoWindow color_blue">成人口罩 '+i.properties.mask_adult+'</p><p class="title infoWindow color_green">兒童口罩 '+i.properties.mask_child+"</p></div>",""==i.properties.updated?a+='<div class="update"><p class="note infoWindow color_gray">更新時間：無資料</p></div>':a+='<div class="update"><p class="note infoWindow color_gray">更新時間：'+i.properties.updated+"</p></div>",a+="</div>",t.infoWindow.setTitle(""),t.infoWindow.setContent(a),t.infoWindow.show(n,t.getInfoWindowAnchor(n)),t.centerAt(r)}function L(t){return t>=100?"many":t>0?"less":"zero"}function x(t,e,r,i){var a=M()();return function(t,e){var r=M()(),i=function(t){switch(t){case"current":return h.currentPosition;case"many":return h.stores.many;case"less":return h.stores.less;case"zero":return h.stores.zero}}(t);return p.a.loadModules(["esri/geometry/Point","esri/graphic","esri/symbols/PictureMarkerSymbol"],g).then(function(t){var a=l()(t,3),s=a[0],o=a[1],c=a[2],u=new o(new s(e),new c({url:n("g2Y0")("./"+i),width:20,height:25,xoffset:0,yoffset:0}));r.resolve(u)}),r.promise}(e,r).then(function(t){(function(t,e){switch(t){case"current":return e.currentPositionGraphicLayer;default:return e.storesGraphicLayer}})(e,i).add(t),a.resolve(t)}),a.promise}var w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map",attrs:{id:"map"}},[e("div",{attrs:{id:"LocateButton"}}),this._v(" "),e("div",[e("div",{})])])}]};var j=n("VU/8")(y,w,!1,function(t){n("rAzX")},null,null).exports,T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"color_blue title",on:{click:function(e){return t.clickTitle(t.store.properties.id)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"map-marker"}}),t._v("\n    "+t._s(t.store.properties.name)+"\n  ")],1),t._v(" "),n("div",{staticClass:"content"},[n("a",{attrs:{target:"_blank",href:t.url}},[n("p",{staticClass:"content infoWindow"},[t._v(t._s(t.store.properties.address))])]),t._v(" "),n("a",{attrs:{href:t.phobeNumber}},[n("p",{staticClass:"content infoWindow"},[t._v(t._s(t.store.properties.phone))])])]),t._v(" "),n("div",{staticClass:"update color_gray"},[t._v("更新時間："+t._s(t.store.properties.updated))]),t._v(" "),n("div",{staticClass:"mask-container"},[n("div",{staticClass:"title color_blue"},[t._v("成人口罩 "+t._s(t.store.properties.mask_adult))]),t._v(" "),n("div",{staticClass:"title color_green"},[t._v("兒童口罩 "+t._s(t.store.properties.mask_child))])])])},staticRenderFns:[]};var A={name:"Sider",props:["shouldRender","stores","count"],data:function(){return{countValue:this.count}},watch:{},components:{vItem:n("VU/8")({props:["store"],components:{},methods:{clickTitle:function(t){this.$emit("clickStoreNameAfter",t)}},computed:{url:function(){return"https://www.google.com/maps/dir/?api=1&amp;destination="+this.store.geometry.coordinates[1]+","+this.store.geometry.coordinates[0]},phobeNumber:function(){var t=this.store.properties.phone.split("-");return"tel:+886-"+t[0].replace("0","")+"-"+t[1]}}},T,!1,function(t){n("yBkL")},"data-v-b745fb24",null).exports},methods:{closeSider:function(){this.$emit("callback",!1)},handleItemCallback:function(t){this.$emit("clickStoreNameAfter",t)},changeCount:function(){this.$emit("changeCountAfter",this.countValue)}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldRender,expression:"shouldRender"}],staticClass:"sider"},[n("div",{staticClass:"header"},[n("div",{staticClass:"close",on:{click:t.closeSider}},[t._v("✖")]),t._v(" "),n("div",{staticClass:"search"},[n("input",{attrs:{type:"text",name:"address",placeholder:"請輸入坐標或地址"}}),t._v(" "),n("span",{staticClass:"search-icon"},[n("font-awesome-icon",{staticClass:"color_gray icon",attrs:{icon:"search"}})],1)]),t._v(" "),n("div",{staticClass:"count"},[n("span",[t._v("最多顯示")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.countValue,expression:"countValue"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.countValue=e.target.multiple?n:n[0]},t.changeCount]}},[n("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),n("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),n("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),n("option",{attrs:{value:"100"}},[t._v("100")])]),n("span",[t._v(" 個")])])]),t._v(" "),n("div",{staticClass:"item-container"},t._l(t.stores,function(e){return n("div",{key:e.properties.id,staticClass:"item"},[n("v-Item",{attrs:{store:e},on:{clickStoreNameAfter:t.handleItemCallback}})],1)}),0),t._v(" "),n("div",{staticClass:"note color_gray"},[n("p",[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"exclamation-triangle"}}),t._v("部分藥局因採發放號碼牌方式，方便民眾購買口罩，系統目前無法顯示已發送號碼牌數量。\n    ")],1),t._v(" "),n("p",[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"exclamation-triangle"}}),t._v("口罩數量以藥局實際存量為主，線上查詢之數量僅供參考。\n    ")],1)])])},staticRenderFns:[]};var S=n("VU/8")(A,N,!1,function(t){n("iOh/")},"data-v-f6b3be52",null).exports,C=n("nvAS"),b="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json",D={name:"Home",components:{vMap:j,vSider:S},data:function(){return{showSider:screen.width>769,stores:null,count:30,storeId:null,extent:null}},created:function(){},watch:{count:function(t){var e=this;this.$http.get(b).then(function(n){e.stores=O(n.data.features,e.extent).sort(Z("properties","mask_adult")).slice(0,t+1)}).catch(function(t){console.log(t)})}},methods:{clickSiderIcon:function(){this.showSider=!0},handleSiderCallback:function(t){this.showSider=t},handleMapCallback:function(t){this.extent=t;var e=this;this.$http.get(b).then(function(n){e.stores=O(n.data.features,t).sort(Z("properties","mask_adult")).slice(0,e.count+1)}).catch(function(t){console.log(t)})},changeCountAfter:function(t){this.count=Number(t)}}};function O(t,e){var n=e.xmin,r=e.xmax,i=e.ymin,a=e.ymax,s=Object(C.a)(Object(C.a)("EPSG:3857"),Object(C.a)("EPSG:4326"),[n,i]),o=Object(C.a)(Object(C.a)("EPSG:3857"),Object(C.a)("EPSG:4326"),[r,a]);return t.filter(function(t){var e=t.geometry.coordinates[0],n=t.geometry.coordinates[1],r=!0;return(s[0]>e||o[0]<e)&&(r=!1),(s[1]>n||o[1]<n)&&(r=!1),r})}function Z(t,e){return function(n,r){var i=n[t][e],a=r[t][e];return a>i?1:a<i?-1:0}}var k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-container clearfix"},[n("div",{staticClass:"sider-icon",on:{click:t.clickSiderIcon}},[n("font-awesome-icon",{staticClass:"color_blue icon",attrs:{icon:"search"}})],1),t._v(" "),n("v-Sider",{attrs:{"should-render":t.showSider,count:t.count,stores:t.stores},on:{callback:t.handleSiderCallback,clickStoreNameAfter:function(e){t.storeId=e},changeCountAfter:t.changeCountAfter}}),t._v(" "),n("v-Map",{attrs:{stores:t.stores,storeId:t.storeId},on:{callback:t.handleMapCallback}})],1)},staticRenderFns:[]};var z=n("VU/8")(D,k,!1,function(t){n("RXtm")},"data-v-36f2984c",null).exports;r.a.use(s.a);var E=new s.a({routes:[{path:"/",name:"Home",component:z}]}),_=n("C/JF"),G=n("1P+R"),Y=n("1e6/"),P=n("mtWM"),W=n.n(P),B=n("Rf8U"),J=n.n(B);_.c.add(G.a),_.c.add(G.c),_.c.add(G.b),r.a.component("font-awesome-icon",Y.a),r.a.config.productionTip=!1,r.a.use(J.a,W.a),new r.a({el:"#app",router:E,components:{App:a},template:"<App/>"})},RXtm:function(t,e){},ZUom:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtYXAtbWFya2VyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbWFwLW1hcmtlciBmYS13LTEyIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM4NCA1MTIiPjxwYXRoIGZpbGw9IiMxNjlDNTQiIGQ9Ik0xNzIuMjY4IDUwMS42N0MyNi45NyAyOTEuMDMxIDAgMjY5LjQxMyAwIDE5MiAwIDg1Ljk2MSA4NS45NjEgMCAxOTIgMHMxOTIgODUuOTYxIDE5MiAxOTJjMCA3Ny40MTMtMjYuOTcgOTkuMDMxLTE3Mi4yNjggMzA5LjY3LTkuNTM1IDEzLjc3NC0yOS45MyAxMy43NzMtMzkuNDY0IDB6Ij48L3BhdGg+PC9zdmc+"},g2Y0:function(t,e,n){var r={"./close.svg":"zaOT","./map-marker-current.svg":"CTQH","./map-marker-less.svg":"y/c3","./map-marker-many.svg":"ZUom","./map-marker-zero.svg":"toKL"};function i(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id="g2Y0"},"iOh/":function(t,e){},rAzX:function(t,e){},toKL:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtYXAtbWFya2VyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbWFwLW1hcmtlciBmYS13LTEyIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM4NCA1MTIiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik0xNzIuMjY4IDUwMS42N0MyNi45NyAyOTEuMDMxIDAgMjY5LjQxMyAwIDE5MiAwIDg1Ljk2MSA4NS45NjEgMCAxOTIgMHMxOTIgODUuOTYxIDE5MiAxOTJjMCA3Ny40MTMtMjYuOTcgOTkuMDMxLTE3Mi4yNjggMzA5LjY3LTkuNTM1IDEzLjc3NC0yOS45MyAxMy43NzMtMzkuNDY0IDB6Ij48L3BhdGg+PC9zdmc+"},"y/c3":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtYXAtbWFya2VyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbWFwLW1hcmtlciBmYS13LTEyIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM4NCA1MTIiPjxwYXRoIGZpbGw9IiNFNkRFNjAiIGQ9Ik0xNzIuMjY4IDUwMS42N0MyNi45NyAyOTEuMDMxIDAgMjY5LjQxMyAwIDE5MiAwIDg1Ljk2MSA4NS45NjEgMCAxOTIgMHMxOTIgODUuOTYxIDE5MiAxOTJjMCA3Ny40MTMtMjYuOTcgOTkuMDMxLTE3Mi4yNjggMzA5LjY3LTkuNTM1IDEzLjc3NC0yOS45MyAxMy43NzMtMzkuNDY0IDB6Ij48L3BhdGg+PC9zdmc+"},yBkL:function(t,e){},zaOT:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aW1lcyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzUyIDUxMiI+PHBhdGggZmlsbD0iIzU1NSIgZD0iTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eiI+PC9wYXRoPjwvc3ZnPg=="}},["NHnr"]);
//# sourceMappingURL=app.4ed6dda95e08feb77c81.js.map