(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)o=i[d],a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},3360:function(t,e,n){},"36b5":function(t,e,n){"use strict";var r=n("3360"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AsteroidGrid",{attrs:{asteroids:t.asteroids,header:"Near-Earth Objects"},on:{remove:t.remove}})],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card mt-5"},[n("h2",{staticClass:"card-header"},[t._v("Near-Earth Objects")]),n("transition",{attrs:{name:"shooting-star"}},[t.numAsteroids>0&&t.showSummary?n("div",{directives:[{name:"clock",rawName:"v-clock"}],staticClass:"m-3"},[n("p",[t._v("showing "+t._s(t.numAsteroids)+" items")]),n("p",[t._v(t._s(t.closesObject)+" has the shortest miss distance.")])]):t._e()]),n("div",{staticClass:"m-3"},[n("a",{attrs:{href:"#"},on:{click:function(e){t.showSummary=!t.showSummary}}},[t._v("Show/hide summary")])]),n("table",{staticClass:"table table-striped",class:[{"table-dark":!1},"table-bordered"]},[t._m(0),n("transition-group",{tag:"tbody",attrs:{tag:"tbody",name:"neo-list"}},t._l(t.asteroids,function(e,r){return n("tr",{key:e.neo_reference_id,class:{highlight:t.isMissingData(e),"shadow-sm":!0}},[n("td",[t._v(t._s(r+1)+"\n                ")]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(t.getCloseApproachDate(e)))]),n("td",[e.close_approach_data.length>0?n("ul",t._l(e.close_approach_data[0].miss_distance,function(e,r){return n("li",[t._v("\n                            "+t._s(r)+": "+t._s(e)+"\n                        ")])}),0):t._e()]),n("td",[n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.remove(r)}}},[t._v("Remove")])])])}),0)],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-light"},[n("th",[t._v("#")]),n("th",[t._v("Name")]),n("th",[t._v("Close Approach Date")]),n("th",[t._v("Miss Distance")]),n("th",[t._v("Remove")])])}],c=(n("55dd"),n("7f7f"),{props:["asteroids","header"],data:function(){return{showSummary:!0}},computed:{numAsteroids:function(){return this.asteroids.length},closesObject:function(){var t=this.asteroids.filter(function(t){return t.close_approach_data.length>0}),e=t.map(function(t){return{name:t.name,miles:t.close_approach_data[0].miss_distance.miles}}),n=e.sort(function(t,e){return t.miles-e.miles});return n[0].name}},methods:{getCloseApproachDate:function(t){return t.close_approach_data.length>0?t.close_approach_data[0].close_approach_date:"N/A"},remove:function(t){this.asteroids.splice(t,1)},getRowStyle:function(t){if(0==t.close_approach_data.length)return{border:"solid 3px red",color:"red"}},isMissingData:function(t){return 0==t.close_approach_data.length}}}),u=c,l=(n("36b5"),n("2877")),d=Object(l["a"])(u,o,i,!1,null,"34844d02",null),p=d.exports,h=n("bc3a"),f=n.n(h),_={name:"app",components:{AsteroidGrid:p},data:function(){return{asteroids:[]}},created:function(){this.fetchAsteroids()},methods:{fetchAsteroids:function(){var t=this,e="http://737798.youcanlearnit.net/neos.json";f.a.get(e).then(function(e){t.asteroids=e.data.near_earth_objects.slice(0,10)})},remove:function(t){this.asteroids.splice(t,1)}}},m=_,v=(n("034f"),Object(l["a"])(m,a,s,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.f830a465.js.map