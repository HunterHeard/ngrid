(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+9h+":function(t,i,e){"use strict";e.d(i,"a",function(){return d});var c=e("cGur"),o=e("ofXK"),r=e("Dh3D"),n=e("bTqV"),s=e("XEBs");class a extends s.k{constructor(t){super(),this.cfr=t,this.name="sortContainer",this.kind="dataHeaderExtensions",this.projectContent=!0}shouldRender(t){return!!t.col.sort&&!!t.injector.get(r.a,!1)}getFactory(t){return this.cfr.resolveComponentFactory(r.b)}onCreated(t,i){this.deregisterId(t,i.instance.id=t.col.id),i.changeDetectorRef.markForCheck()}deregisterId(t,i){const e=t.injector.get(r.a),c=e.sortables.get(i);c&&e.deregister(c)}}var l=e("fXoL");let d=(()=>{class t{constructor(t,i){this.registry=t,t.addMulti("dataHeaderExtensions",new a(i))}}return t.NGRID_PLUGIN=Object(s.u)({id:c.a},c.b),t.\u0275mod=l.Sb({type:t}),t.\u0275inj=l.Rb({factory:function(i){return new(i||t)(l.hc(s.n),l.hc(l.j))},imports:[[o.c,n.c,r.c,s.j],r.c]}),t})()},WPM6:function(t,i,e){"use strict";e.d(i,"a",function(){return s});var c=e("XiUz"),o=e("znSr"),r=e("YT2F"),n=e("fXoL");let s=(()=>{class t{}return t.\u0275mod=n.Sb({type:t}),t.\u0275inj=n.Rb({factory:function(i){return new(i||t)},imports:[[c.e,o.b,r.l],c.e,o.b,r.l]}),t})()},cGur:function(t,i,e){"use strict";e.d(i,"a",function(){return s}),e.d(i,"b",function(){return a});var c=e("DcT9"),o=e("XEBs"),r=e("fXoL"),n=e("Dh3D");const s="matSort";let a=(()=>{class t{constructor(t,i,e){this.table=t,this.pluginCtrl=i,this.sort=e,this._removePlugin=i.setPlugin(s,this);let o="click";this.sort.sortChange.pipe(Object(c.r)(this)).subscribe(t=>{this.onSort(t,o),o="click"});const r=t=>{const{column:i}=t,e=t.sort?t.sort.order:void 0;if(this.sort&&i){if(this.sort.active===i.id&&this.sort.direction===(e||""))return;const t=this.sort.sortables.get(i.id);t&&(o="ds",this.sort.active=void 0,t.start=e||"asc",t._handleClick())}else if(this.sort.active){const t=this.sort.sortables.get(this.sort.active);if(t){if(!t.disableClear){let i;for(;i=this.sort.getNextSortDirection(t);)this.sort.direction=i}o="ds",t._handleClick()}}};i.events.pipe(c.e).subscribe(i=>{const e=this.sort&&this.sort.active;t.ds&&t.ds.sort&&(!t.ds.sort.column&&e?this.onSort({active:this.sort.active,direction:this.sort.direction||"asc"},o):t.ds.sort.column&&!e&&setTimeout(()=>r(t.ds.sort)))}),i.events.subscribe(i=>{"onDataSource"===i.kind&&(c.r.kill(this,i.prev),this.sort&&this.sort.active&&this.onSort({active:this.sort.active,direction:this.sort.direction||"asc"},o),t.ds.sortChange.pipe(Object(c.r)(this,i.curr)).subscribe(t=>{r(t)}))})}ngOnDestroy(){this._removePlugin(this.table),c.r.kill(this)}onSort(t,i){const e=this.table,c=e.columnApi.visibleColumns.find(i=>i.id===t.active);if("click"===i&&c&&c.sort){const i={},o="function"==typeof c.sort&&c.sort;t.direction&&(i.order=t.direction),o&&(i.sortFn=o);const r=e.ds.sort;if(c===r.column&&i.order===(r.sort||{}).order)return;e.ds.setSort(c,i)}}}return t.\u0275fac=function(i){return new(i||t)(r.Ub(o.f),r.Ub(o.m),r.Ub(n.a))},t.\u0275dir=r.Pb({type:t,selectors:[["pbl-ngrid","matSort",""]],exportAs:["pblMatSort"]}),t})()},g7cI:function(t,i,e){"use strict";e.r(i),e.d(i,"ContextExampleExampleModule",function(){return I});var c=e("mrSG"),o=e("XEBs"),r=e("YT2F"),n=e("WPM6"),s=e("4dOD"),a=e("ewPf"),l=e("+9h+"),d=e("fluT"),p=e("fXoL"),u=e("XkVd"),b=e("cGur"),f=e("rIse"),h=e("Dh3D"),m=e("IJFs"),g=e("mxEP"),v=e("nve3"),w=e("ibH8");function x(t,i){if(1&t){const t=p.bc();p.ac(0,"div"),p.ac(1,"input",3,4),p.lc("change",function(){p.Hc(t);const e=i.$implicit,c=p.Ec(2);return e.value=c.value}),p.Zb(),p.ac(3,"button",5),p.lc("click",function(){return i.$implicit.stopEdit()}),p.Sc(4,"X"),p.Zb(),p.Zb()}if(2&t){const t=i.$implicit;p.Hb(1),p.wc("value",t.value)("pblCellEditAutoFocus",t)}}function C(t,i){if(1&t&&p.Vb(0,"pbl-ngrid-paginator",6),2&t){const t=i.$implicit;p.wc("grid",t)("paginator",t.ds.paginator)}}let S=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(o.r)().table({prop:"id",pIndex:!0,width:"50px"},{prop:"name",width:"200px",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(100,500)).create()}};return t.\u0275fac=function(i){return new(i||t)(p.Ub(d.a))},t.\u0275cmp=p.Ob({type:t,selectors:[["pbl-context-example-example"]],decls:3,vars:3,consts:[["usePagination","","matSort","",3,"dataSource","columns","cellClick"],[4,"pblNgridCellEditorDef"],[3,"grid","paginator",4,"pblNgridPaginatorRef"],[3,"value","pblCellEditAutoFocus","change"],["input",""],[3,"click"],[3,"grid","paginator"]],template:function(t,i){1&t&&(p.ac(0,"pbl-ngrid",0),p.lc("cellClick",function(t){return null==t.context?null:t.context.startEdit()}),p.Qc(1,x,5,2,"div",1),p.Qc(2,C,1,2,"pbl-ngrid-paginator",2),p.Zb()),2&t&&(p.wc("dataSource",i.ds)("columns",i.columns),p.Hb(1),p.wc("pblNgridCellEditorDef","name"))},directives:[u.a,b.b,f.c,h.a,m.a,g.a,v.a,w.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(c.a)([Object(r.e)("pbl-context-example-example",{title:"Context Example"}),Object(c.b)("design:paramtypes",[d.a])],t),t})();var D=e("aR4q");function j(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",t.rowContext.dsIndex," ")}}function H(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",t.rowContext.index," ")}}function O(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",!!t.rowContext.firstRender," ")}}function y(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",!!t.rowContext.outOfView," ")}}function k(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",t.rowContext.count," ")}}function N(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",!!t.rowContext.even," ")}}function U(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",!!t.rowContext.odd," ")}}function E(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",!!t.rowContext.first," ")}}function Z(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",!!t.rowContext.last," ")}}function $(t,i){if(1&t&&(p.ac(0,"div"),p.Sc(1),p.Zb()),2&t){const t=i.$implicit;p.Hb(1),p.Uc(" ",t.rowContext.identity," ")}}let P=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(o.r)().table({prop:"id",width:"50px"},{prop:"name",width:"100px",pIndex:!0},{prop:"firstRender",width:"50px"},{prop:"outOfView",width:"50px"},{prop:"dsIndex",width:"50px"},{prop:"index",width:"50px"},{prop:"count",width:"50px"},{prop:"odd",width:"50px"},{prop:"even",width:"50px"},{prop:"first",width:"50px"},{prop:"last",width:"50px"},{prop:"identity",width:"100px"}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(100,500)).create()}};return t.\u0275fac=function(i){return new(i||t)(p.Ub(d.a))},t.\u0275cmp=p.Ob({type:t,selectors:[["pbl-context-object-example"]],decls:11,vars:12,consts:[[3,"dataSource","columns"],[4,"pblNgridCellDef"]],template:function(t,i){1&t&&(p.ac(0,"pbl-ngrid",0),p.Qc(1,j,2,1,"div",1),p.Qc(2,H,2,1,"div",1),p.Qc(3,O,2,1,"div",1),p.Qc(4,y,2,1,"div",1),p.Qc(5,k,2,1,"div",1),p.Qc(6,N,2,1,"div",1),p.Qc(7,U,2,1,"div",1),p.Qc(8,E,2,1,"div",1),p.Qc(9,Z,2,1,"div",1),p.Qc(10,$,2,1,"div",1),p.Zb()),2&t&&(p.wc("dataSource",i.ds)("columns",i.columns),p.Hb(1),p.wc("pblNgridCellDef","dsIndex"),p.Hb(1),p.wc("pblNgridCellDef","index"),p.Hb(1),p.wc("pblNgridCellDef","firstRender"),p.Hb(1),p.wc("pblNgridCellDef","outOfView"),p.Hb(1),p.wc("pblNgridCellDef","count"),p.Hb(1),p.wc("pblNgridCellDef","even"),p.Hb(1),p.wc("pblNgridCellDef","odd"),p.Hb(1),p.wc("pblNgridCellDef","first"),p.Hb(1),p.wc("pblNgridCellDef","last"),p.Hb(1),p.wc("pblNgridCellDef","identity"))},directives:[u.a,D.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(c.a)([Object(r.e)("pbl-context-object-example",{title:"Context Object"}),Object(c.b)("design:paramtypes",[d.a])],t),t})(),I=(()=>{let t=class{};return t.\u0275mod=p.Sb({type:t}),t.\u0275inj=p.Rb({factory:function(i){return new(i||t)},imports:[[n.a,o.j,s.a,a.a,l.a]]}),t=Object(c.a)([Object(r.a)(S,P)],t),t})()}}]);