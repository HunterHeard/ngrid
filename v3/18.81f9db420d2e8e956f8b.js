(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+9h+":function(e,t,i){"use strict";i.d(t,"a",function(){return d});var o=i("cGur"),r=i("ofXK"),c=i("Dh3D"),s=i("bTqV"),a=i("XEBs");class n extends a.l{constructor(e){super(),this.cfr=e,this.name="sortContainer",this.kind="dataHeaderExtensions",this.projectContent=!0}shouldRender(e){return!!e.col.sort&&!!e.injector.get(c.a,!1)}getFactory(e){return this.cfr.resolveComponentFactory(c.b)}onCreated(e,t){this.deregisterId(e,t.instance.id=e.col.id),t.changeDetectorRef.markForCheck()}deregisterId(e,t){const i=e.injector.get(c.a),o=i.sortables.get(t);o&&i.deregister(o)}}var l=i("fXoL");let d=(()=>{class e{constructor(e,t){this.registry=e,e.addMulti("dataHeaderExtensions",new n(t))}}return e.NGRID_PLUGIN=Object(a.v)({id:o.a},o.b),e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(t){return new(t||e)(l.bc(a.o),l.bc(l.j))},imports:[[r.c,s.c,c.c,a.k],c.c]}),e})()},"1UCR":function(e,t,i){"use strict";i.r(t),i.d(t,"DetailRowExampleModule",function(){return J});var o=i("mrSG"),r=i("ofXK"),c=i("FKr1"),s=i("bSwM"),a=i("QibW"),n=i("kmnG"),l=i("d3UM"),d=i("Xa2L"),b=i("XEBs"),p=i("M1+n"),u=i("6JOf"),h=i("ewPf"),g=i("+9h+"),f=i("YT2F"),m=i("WPM6"),w=i("fluT"),v=i("fXoL"),k=i("XkVd"),R=i("4DA5"),x=i("z6lm"),W=i("ugF5"),X=i("NRLV"),D=i("fdU2");function y(e,t){if(1&e&&(v.Xb(0,"div",3),v.Xb(1,"div"),v.Xb(2,"h1"),v.Kc(3,"Detail Row"),v.Wb(),v.Xb(4,"pre"),v.Kc(5),v.kc(6,"json"),v.Wb(),v.Wb(),v.Wb()),2&e){const e=t.$implicit;v.Fb(5),v.Lc(v.lc(6,1,e))}}function j(e,t){if(1&e&&v.Sb(0,"pbl-ngrid-row",4),2&e){const e=t.$implicit;v.qc("grid",t.grid)("detailRow",e)}}let O=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(b.s)().default({minWidth:100}).table({prop:"detailRowHandle",label:" ",type:"detailRowHandle",minWidth:48,maxWidth:48},{prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(b.t)().onTrigger(()=>this.datasource.getPeople(0,4)).create()}onToggleChange(e){this.lastToggleEvent=e}};return e.\u0275fac=function(t){return new(t||e)(v.Rb(w.a))},e.\u0275cmp=v.Lb({type:e,selectors:[["pbl-detail-row-example"]],decls:5,vars:3,consts:[["blockUi","","vScrollNone","","detailRow","",3,"dataSource","columns","toggleChange"],["class","pbl-detail-row",4,"pblNgridDetailRowDef"],["matRipple","",3,"grid","detailRow",4,"pblNgridDetailRowParentRef"],[1,"pbl-detail-row"],["matRipple","",3,"grid","detailRow"]],template:function(e,t){1&e&&(v.Xb(0,"pbl-ngrid",0),v.fc("toggleChange",function(e){return t.onToggleChange(e)}),v.Ic(1,y,7,3,"div",1),v.Ic(2,j,1,2,"pbl-ngrid-row",2),v.Wb(),v.Xb(3,"div"),v.Kc(4),v.Wb()),2&e&&(v.qc("dataSource",t.ds)("columns",t.columns),v.Fb(4),v.Mc(" Last Toggled Id: ",t.lastToggleEvent?t.lastToggleEvent.row.id+" - "+t.lastToggleEvent.expended:"","\n"))},directives:[k.a,R.b,x.a,W.b,X.b,X.c,D.a,c.r],pipes:[r.k],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(f.e)("pbl-detail-row-example",{title:"Detail Row"}),Object(o.b)("design:paramtypes",[w.a])],e),e})();var S=i("aR4q");function P(e,t){if(1&e&&(v.Xb(0,"div",3),v.Xb(1,"div"),v.Xb(2,"h1"),v.Kc(3,"Detail Row"),v.Wb(),v.Xb(4,"pre"),v.Kc(5),v.kc(6,"json"),v.Wb(),v.Wb(),v.Wb()),2&e){const e=t.$implicit;v.Fb(5),v.Lc(v.lc(6,1,e))}}function C(e,t){1&e&&(v.Xb(0,"div",4),v.Kc(1,"\u229e"),v.Wb())}let U=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(b.s)().default({minWidth:100}).table({prop:"detailRowHandle",label:" ",type:"detailRowHandle",minWidth:48,maxWidth:48},{prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(b.t)().onTrigger(()=>this.datasource.getPeople(0,4)).create()}};return e.\u0275fac=function(t){return new(t||e)(v.Rb(w.a))},e.\u0275cmp=v.Lb({type:e,selectors:[["pbl-custom-parent-example"]],decls:3,vars:3,consts:[["blockUi","","detailRow","","vScrollNone","",3,"dataSource","columns"],["class","pbl-detail-row",4,"pblNgridDetailRowDef"],["class","detail-row-handle",4,"pblNgridCellTypeDef"],[1,"pbl-detail-row"],[1,"detail-row-handle"]],template:function(e,t){1&e&&(v.Xb(0,"pbl-ngrid",0),v.Ic(1,P,7,3,"div",1),v.Ic(2,C,2,0,"div",2),v.Wb()),2&e&&(v.qc("dataSource",t.ds)("columns",t.columns),v.Fb(2),v.qc("pblNgridCellTypeDef","detailRowHandle"))},directives:[k.a,R.b,W.b,x.a,X.b,S.a],pipes:[r.k],styles:[".pbl-row-detail-parent:not(.pbl-row-detail-opened):hover{background:#f5f5f5}.pbl-row-detail-parent .detail-row-handle{font-size:24px}"],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(f.e)("pbl-custom-parent-example",{title:"Custom Parent"}),Object(o.b)("design:paramtypes",[w.a])],e),e})();function _(e,t){if(1&e&&(v.Xb(0,"div",3),v.Xb(1,"div"),v.Xb(2,"h1"),v.Kc(3,"Detail Row"),v.Wb(),v.Xb(4,"pre"),v.Kc(5),v.kc(6,"json"),v.Wb(),v.Wb(),v.Wb()),2&e){const e=t.$implicit;v.Fb(5),v.Lc(v.lc(6,1,e))}}let N=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(b.s)().default({minWidth:100}).table({prop:"detailRowHandle",label:" ",type:"detailRowHandle",minWidth:48,maxWidth:48},{prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(b.t)().onTrigger(()=>this.datasource.getPeople(0,4)).create(),this.disableName=[]}};return e.\u0275fac=function(t){return new(t||e)(v.Rb(w.a))},e.\u0275cmp=v.Lb({type:e,selectors:[["pbl-single-and-exclude-mode-example"]],decls:6,vars:6,consts:[["blockUi","","detailRow","","vScrollNone","",3,"dataSource","columns","singleDetailRow","excludeToggleFrom"],["class","pbl-detail-row",4,"pblNgridDetailRowDef"],[3,"checked","change"],[1,"pbl-detail-row"]],template:function(e,t){1&e&&(v.Xb(0,"pbl-ngrid",0),v.Ic(1,_,7,3,"div",1),v.Wb(),v.Xb(2,"mat-checkbox",2),v.fc("change",function(e){return t.forceSingle=e.checked}),v.Kc(3,"Force single row"),v.Wb(),v.Xb(4,"mat-checkbox",2),v.fc("change",function(){return t.disableName=0===t.disableName.length?["name"]:[]}),v.Kc(5,"Disable toggle from 'Name'"),v.Wb()),2&e&&(v.qc("dataSource",t.ds)("columns",t.columns)("singleDetailRow",t.forceSingle)("excludeToggleFrom",t.disableName),v.Fb(2),v.qc("checked",t.forceSingle),v.Fb(2),v.qc("checked",t.disableName.length>0))},directives:[k.a,R.b,W.b,x.a,X.b,s.a],pipes:[r.k],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(f.e)("pbl-single-and-exclude-mode-example",{title:"Single And Exclude Mode"}),Object(o.b)("design:paramtypes",[w.a])],e),e})();function I(e,t){if(1&e&&(v.Xb(0,"div",6),v.Xb(1,"div"),v.Xb(2,"h1"),v.Kc(3,"Detail Row"),v.Wb(),v.Xb(4,"pre"),v.Kc(5),v.kc(6,"json"),v.Wb(),v.Wb(),v.Wb()),2&e){const e=t.$implicit;v.Fb(5),v.Lc(v.lc(6,1,e))}}let K=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(b.s)().default({minWidth:100}).table({prop:"detailRowHandle",label:" ",type:"detailRowHandle",minWidth:48,maxWidth:48},{prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(b.t)().onTrigger(()=>this.datasource.getPeople(0,4)).create(),this.detailRow="off",this.detailRowEvenPredicate=(e,t)=>e%2!=0}onDetailRowChange(e){switch(e){case"off":this.detailRowPredicate=void 0;break;case"on":this.detailRowPredicate=!0;break;case"predicate":this.detailRowPredicate=this.detailRowEvenPredicate}}};return e.\u0275fac=function(t){return new(t||e)(v.Rb(w.a))},e.\u0275cmp=v.Lb({type:e,selectors:[["pbl-predicate-example"]],decls:9,vars:4,consts:[["blockUi","","vScrollNone","",3,"dataSource","columns","detailRow"],["class","pbl-detail-row",4,"pblNgridDetailRowDef"],[3,"value","change"],["value","off"],["value","on"],["value","predicate"],[1,"pbl-detail-row"]],template:function(e,t){1&e&&(v.Xb(0,"pbl-ngrid",0),v.Ic(1,I,7,3,"div",1),v.Wb(),v.Xb(2,"mat-radio-group",2),v.fc("change",function(e){return t.onDetailRowChange(e.value)}),v.Xb(3,"mat-radio-button",3),v.Kc(4,"Off"),v.Wb(),v.Xb(5,"mat-radio-button",4),v.Kc(6,"On"),v.Wb(),v.Xb(7,"mat-radio-button",5),v.Kc(8,"Predicate (Even rows only)"),v.Wb(),v.Wb()),2&e&&(v.qc("dataSource",t.ds)("columns",t.columns)("detailRow",t.detailRowPredicate),v.Fb(2),v.qc("value",t.detailRow))},directives:[k.a,R.b,x.a,W.b,X.b,a.b,a.a],pipes:[r.k],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(f.e)("pbl-predicate-example",{title:"Predicate"}),Object(o.b)("design:paramtypes",[w.a])],e),e})();var E=i("cGur"),L=i("Dh3D"),F=i("kvXS"),T=i("R+S/"),H=i("mxEP"),q=i("ibH8");function B(e,t){if(1&e&&(v.Xb(0,"div",11),v.Xb(1,"div"),v.Xb(2,"h1"),v.Kc(3,"Detail Row"),v.Wb(),v.Xb(4,"pre"),v.Kc(5),v.kc(6,"json"),v.Wb(),v.Wb(),v.Wb()),2&e){const e=t.$implicit;v.Fb(5),v.Lc(v.lc(6,1,e))}}function M(e,t){1&e&&(v.Xb(0,"div",12),v.Sb(1,"mat-spinner"),v.Wb())}function V(e,t){if(1&e&&v.Sb(0,"pbl-ngrid-paginator",13),2&e){const e=t.$implicit;v.qc("table",e)("paginator",e.ds.paginator)}}let G=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(b.s)().default({minWidth:100}).table({prop:"detailRowHandle",label:" ",type:"detailRowHandle",minWidth:48,maxWidth:48},{prop:"id",pIndex:!0,sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(b.t)().onTrigger(()=>(this.datasource.reset("people"),this.datasource.getPeople(500,500))).create()}};return e.\u0275fac=function(t){return new(t||e)(v.Rb(w.a))},e.\u0275cmp=v.Lb({type:e,selectors:[["pbl-multi-page-example"]],decls:16,vars:3,consts:[["blockUi","","usePagination","","matSort","","vScrollNone","","detailRow","",2,"height","600px",3,"dataSource","columns"],["detailRow","pblNgridDetailRow"],["filter",""],["class","pbl-detail-row",4,"pblNgridDetailRowDef"],["class","pbl-ngrid-ui-block",4,"pblNgridBlockUiDef"],[3,"table","paginator",4,"pblNgridPaginatorRef"],["placeholder","whenContextChange",3,"value","selectionChange"],["value","ignore"],["value","context"],["value","render"],["value","close"],[1,"pbl-detail-row"],[1,"pbl-ngrid-ui-block"],[3,"table","paginator"]],template:function(e,t){if(1&e){const e=v.Yb();v.Xb(0,"pbl-ngrid",0,1),v.Sb(2,"pbl-demo-action-row",2),v.Ic(3,B,7,3,"div",3),v.Ic(4,M,2,0,"div",4),v.Ic(5,V,1,2,"pbl-ngrid-paginator",5),v.Wb(),v.Xb(6,"mat-form-field"),v.Xb(7,"mat-select",6),v.fc("selectionChange",function(t){return v.yc(e),v.vc(1).whenContextChange=t.value}),v.Xb(8,"mat-option",7),v.Kc(9,"Ignore"),v.Wb(),v.Xb(10,"mat-option",8),v.Kc(11,"Context"),v.Wb(),v.Xb(12,"mat-option",9),v.Kc(13,"Render"),v.Wb(),v.Xb(14,"mat-option",10),v.Kc(15,"Close"),v.Wb(),v.Wb(),v.Wb()}if(2&e){const e=v.vc(1);v.qc("dataSource",t.ds)("columns",t.columns),v.Fb(7),v.qc("value",null==e?null:e.whenContextChange)}},directives:[k.a,R.b,E.b,x.a,W.b,L.a,F.a,X.b,T.a,H.a,n.c,l.a,c.m,d.c,q.a],pipes:[r.k],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(f.e)("pbl-multi-page-example",{title:"Multi Page"}),Object(o.b)("design:paramtypes",[w.a])],e),e})();function $(e,t){if(1&e&&(v.Xb(0,"div",2),v.Xb(1,"div"),v.Xb(2,"h1"),v.Kc(3,"Detail Row"),v.Wb(),v.Xb(4,"pre"),v.Kc(5),v.kc(6,"json"),v.Wb(),v.Wb(),v.Wb()),2&e){const e=t.$implicit;v.Fb(5),v.Lc(v.lc(6,1,e))}}let A=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(b.s)().default({minWidth:100}).table({prop:"detailRowHandle",label:" ",type:"detailRowHandle",minWidth:48,maxWidth:48},{prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(b.t)().onTrigger(()=>this.datasource.getPeople(100,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(v.Rb(w.a))},e.\u0275cmp=v.Lb({type:e,selectors:[["pbl-detail-row-virtual-scroll-example"]],decls:2,vars:2,consts:[["detailRow","","vScrollDynamic","",3,"dataSource","columns"],["class","pbl-detail-row",4,"pblNgridDetailRowDef"],[1,"pbl-detail-row"]],template:function(e,t){1&e&&(v.Xb(0,"pbl-ngrid",0),v.Ic(1,$,7,3,"div",1),v.Wb()),2&e&&v.qc("dataSource",t.ds)("columns",t.columns)},directives:[k.a,W.b,x.a,X.b],pipes:[r.k],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(f.e)("pbl-detail-row-virtual-scroll-example",{title:"Detail Row Virtual Scroll"}),Object(o.b)("design:paramtypes",[w.a])],e),e})(),J=(()=>{let e=class{};return e.\u0275mod=v.Pb({type:e}),e.\u0275inj=v.Ob({factory:function(t){return new(t||e)},imports:[[r.c,c.s,s.b,a.c,d.b,n.e,l.b,m.a,b.k,p.a,u.a,h.a,g.a]]}),e=Object(o.a)([Object(f.a)(O,U,N,K,G,A)],e),e})()},"4DA5":function(e,t,i){"use strict";i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n});var o=i("7+OI"),r=i("8LU1"),c=i("XEBs"),s=i("fXoL");const a="blockUi";let n=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(a,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:i}=e;t&&c.x.unrx.kill(this,t),i.onSourceChanging.pipe(c.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(c.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(r.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(o.a)(e)&&this._blockUi!==e?(Object(o.a)(this._blockUi)&&c.x.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(c.x.unrx(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){c.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(c.g),s.Rb(c.n))},e.\u0275dir=s.Mb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,i){"use strict";i.d(t,"a",function(){return n});var o=i("ofXK"),r=i("f6nW"),c=i("XEBs"),s=i("4DA5"),a=i("fXoL");let n=(()=>{class e{}return e.NGRID_PLUGIN=Object(c.v)({id:s.a},s.b),e.\u0275mod=a.Pb({type:e}),e.\u0275inj=a.Ob({factory:function(t){return new(t||e)},imports:[[o.c,r.r,c.k]]}),e})()},"R+S/":function(e,t,i){"use strict";i.d(t,"a",function(){return c});var o=i("XEBs"),r=i("fXoL");let c=(()=>{class e extends o.r{constructor(e,t){super(e,t),this.kind="blocker"}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(r.Q),r.Rb(o.o))},e.\u0275dir=r.Mb({type:e,selectors:[["","pblNgridBlockUiDef",""]],features:[r.Cb]}),e})()},cGur:function(e,t,i){"use strict";i.d(t,"a",function(){return s}),i.d(t,"b",function(){return a});var o=i("XEBs"),r=i("fXoL"),c=i("Dh3D");const s="matSort";let a=(()=>{class e{constructor(e,t,i){this.table=e,this.pluginCtrl=t,this.sort=i,this._removePlugin=t.setPlugin(s,this);let r="click";this.sort.sortChange.pipe(o.x.unrx(this)).subscribe(e=>{this.onSort(e,r),r="click"});const c=e=>{const{column:t}=e,i=e.sort?e.sort.order:void 0;if(this.sort&&t){if(this.sort.active===t.id&&this.sort.direction===(i||""))return;const e=this.sort.sortables.get(t.id);e&&(r="ds",this.sort.active=void 0,e.start=i||"asc",e._handleClick())}else if(this.sort.active){const e=this.sort.sortables.get(this.sort.active);if(e){if(!e.disableClear){let t;for(;t=this.sort.getNextSortDirection(e);)this.sort.direction=t}r="ds",e._handleClick()}}};t.events.subscribe(t=>{if("onInvalidateHeaders"===t.kind){const t=this.sort&&this.sort.active;e.ds&&e.ds.sort&&(!e.ds.sort.column&&t?this.onSort({active:this.sort.active,direction:this.sort.direction||"asc"},r):e.ds.sort.column&&!t&&setTimeout(()=>c(e.ds.sort)))}"onDataSource"===t.kind&&(o.x.unrx.kill(this,t.prev),this.sort&&this.sort.active&&this.onSort({active:this.sort.active,direction:this.sort.direction||"asc"},r),e.ds.sortChange.pipe(o.x.unrx(this,t.curr)).subscribe(e=>{c(e)}))})}ngOnDestroy(){this._removePlugin(this.table),o.x.unrx.kill(this)}onSort(e,t){const i=this.table,o=i.columnApi.visibleColumns.find(t=>t.id===e.active);if("click"===t&&o&&o.sort){const t={},r="function"==typeof o.sort&&o.sort;e.direction&&(t.order=e.direction),r&&(t.sortFn=r);const c=i.ds.sort;if(o===c.column&&t.order===(c.sort||{}).order)return;i.ds.setSort(o,t)}}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(o.g),r.Rb(o.n),r.Rb(c.a))},e.\u0275dir=r.Mb({type:e,selectors:[["pbl-ngrid","matSort",""]],exportAs:["pblMatSort"]}),e})()}}]);