(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"3JFK":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r("qFEQ"),s=r("GAih"),o=r("cc5W"),i=r("EM62");let n=(()=>{class e{}return e.\u0275mod=i.Qb({type:e}),e.\u0275inj=i.Pb({factory:function(t){return new(t||e)},imports:[[c.i,s.e,o.l],c.i,s.e,o.l]}),e})()},D57K:function(e,t,r){"use strict";function c(e,t,r,c){var s,o=arguments.length,i=o<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,r):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,c);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}r.d(t,"a",(function(){return c}))},Pi2p:function(e,t,r){"use strict";r.r(t),r.d(t,"TransposeExampleModule",(function(){return O}));var c=r("D57K"),s=r("2kYt"),o=r("+Tre"),i=r("XApm"),n=r("zbMq"),l=r("WNo/"),a=r("cc5W"),b=r("3JFK"),u=r("JRn2"),d=r("EM62"),p=r("Ht9o"),h=r("R3BP"),g=r("hiZZ"),f=r("H1Fh");function m(e,t){if(1&e&&(d.Yb(0,"div"),d.Lc(1),d.lc(2,"date"),d.Xb()),2&e){const e=t.value,r=t.col;d.Gb(1),d.Mc(d.nc(2,1,e,r.type.data.format))}}function k(e,t){if(1&e&&(d.Yb(0,"div",4),d.Lc(1),d.Xb()),2&e){const e=t.value;d.Gb(1),d.Mc(e)}}let y=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(i.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(i.t)().onTrigger((()=>this.datasource.getPeople(0,5))).create(),this.transposeToggle=!1}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-transpose-example"]],decls:5,vars:6,consts:[["blockUi","",3,"transpose","dataSource","columns"],[4,"pblNgridCellTypeDef"],["style","background: green",4,"pblNgridCellDef"],[3,"checked","change"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Jc(1,m,3,4,"div",1),d.Jc(2,k,2,1,"div",2),d.Xb(),d.Yb(3,"mat-checkbox",3),d.gc("change",(function(e){return t.transposeToggle=e.checked})),d.Lc(4,"Transpose Enabled"),d.Xb()),2&e&&(d.rc("transpose",t.transposeToggle)("dataSource",t.ds)("columns",t.columns),d.Gb(1),d.rc("pblNgridCellTypeDef","date"),d.Gb(1),d.rc("pblNgridCellDef","name"),d.Gb(1),d.rc("checked",t.transposeToggle))},directives:[p.a,h.b,g.b,f.a,o.a],pipes:[s.f],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(a.e)("pbl-transpose-example",{title:"Transpose"})],e),e})();function v(e,t){if(1&e&&(d.Yb(0,"div",2),d.Lc(1),d.Xb()),2&e){const e=t.value;d.Gb(1),d.Mc(e)}}let x=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(i.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(i.t)().onTrigger((()=>this.datasource.getPeople(0,15))).create()}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-original-templates-example"]],decls:2,vars:3,consts:[["blockUi","","transpose","","matchTemplates","",3,"dataSource","columns"],["style","background: green",4,"pblNgridCellDef"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Jc(1,v,2,1,"div",1),d.Xb()),2&e&&(d.rc("dataSource",t.ds)("columns",t.columns),d.Gb(1),d.rc("pblNgridCellDef","name"))},directives:[p.a,h.b,g.b,f.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(a.e)("pbl-original-templates-example",{title:"Transpose with Original Templates"})],e),e})();function w(e,t){if(1&e&&(d.Yb(0,"div",2),d.Lc(1),d.Xb()),2&e){const e=t.value;d.Gb(1),d.Mc(e)}}const _=function(){return{minWidth:100}};let j=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(i.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(i.t)().onTrigger((()=>this.datasource.getPeople(0,25))).create()}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-with-column-styles-example"]],decls:2,vars:5,consts:[["blockUi","","transpose","",3,"transposeDefaultCol","dataSource","columns"],["style","background: green",4,"pblNgridCellDef"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Jc(1,w,2,1,"div",1),d.Xb()),2&e&&(d.rc("transposeDefaultCol",d.sc(4,_))("dataSource",t.ds)("columns",t.columns),d.Gb(1),d.rc("pblNgridCellDef","name"))},directives:[p.a,h.b,g.b,f.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(a.e)("pbl-with-column-styles-example",{title:"With Column Styles"})],e),e})(),O=(()=>{let e=class{};return e.\u0275mod=d.Qb({type:e}),e.\u0275inj=d.Pb({factory:function(t){return new(t||e)},imports:[[s.c,o.b,b.a,i.l,n.a,l.a]]}),e=Object(c.a)([Object(a.a)(y,x,j)],e),e})()},R3BP:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return l}));var c=r("9bRT"),s=r("5XID"),o=r("XApm"),i=r("EM62");const n="blockUi";let l=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(n,this),e.registry.changes.subscribe((e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}})),t.events.subscribe((e=>{if("onDataSource"===e.kind){const{prev:t,curr:r}=e;t&&o.x.unrx.kill(this,t),r.onSourceChanging.pipe(o.x.unrx(this,r)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())})),r.onSourceChanged.pipe(o.x.unrx(this,r)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())}))}}))}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(s.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(c.a)(e)&&this._blockUi!==e?(Object(c.a)(this._blockUi)&&o.x.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(o.x.unrx(this,this._blockUi)).subscribe((e=>{this._blockInProgress=e,this.setupBlocker()}))):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){o.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(o.h),i.Sb(o.o))},e.\u0275dir=i.Nb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"WNo/":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var c=r("2kYt"),s=r("fL1z"),o=r("XApm"),i=r("R3BP"),n=r("EM62");let l=(()=>{class e{}return e.NGRID_PLUGIN=Object(o.v)({id:i.a},i.b),e.\u0275mod=n.Qb({type:e}),e.\u0275inj=n.Pb({factory:function(t){return new(t||e)},imports:[[c.c,s.s,o.l]]}),e})()}}]);