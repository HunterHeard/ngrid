(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3JFK":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("qFEQ"),n=a("GAih"),o=a("cc5W"),r=a("EM62");let c=(()=>{class t{}return t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({factory:function(e){return new(e||t)},imports:[[i.i,n.e,o.l],i.i,n.e,o.l]}),t})()},D57K:function(t,e,a){"use strict";function i(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r}a.d(e,"a",(function(){return i}))},L7hU:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var i=a("2kYt"),n=a("iAde"),o=a("R7+U"),r=a("Y2X+"),c=a("PBFl"),s=a("XApm"),g=a("EM62");let p=(()=>{class t{constructor(t,e){t.resolveComponentFactory(n.a).create(e)}}return t.\u0275mod=g.Qb({type:t}),t.\u0275inj=g.Pb({factory:function(e){return new(e||t)(g.cc(g.j),g.cc(g.v))},imports:[[i.c,n.c,o.b,r.d,c.c,s.l]]}),t})()},ePkB:function(t,e,a){"use strict";a.r(e),a.d(e,"EnablingCustomTriggersExampleModule",(function(){return f}));var i=a("D57K"),n=a("2kYt"),o=a("XApm"),r=a("L7hU"),c=a("cc5W"),s=a("3JFK"),g=a("JRn2"),p=a("EM62"),l=a("Ht9o"),b=a("p3Cn"),u=a("v/G+");function d(t,e){if(1&t&&p.Tb(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;p.rc("table",t)("paginator",t.ds.paginator)}}let h=(()=>{let t=class{constructor(t){this.datasource=t,this.columns={table:{cols:[{prop:"id"},{prop:"name"},{prop:"email"}]}},this.dsCustomTrigger=Object(o.t)().setCustomTriggers("pagination","sort").onTrigger((t=>!(!t.pagination.changed&&!t.isInitial)&&(t.updateTotalLength(500),this.datasource.getPeople(0,500).then((e=>{const a=t.pagination.page.curr,i=t.pagination.perPage.curr;return e.slice((a-1)*i,(a-1)*i+i)}))))).create()}};return t.\u0275fac=function(e){return new(e||t)(p.Sb(g.a))},t.\u0275cmp=p.Mb({type:t,selectors:[["pbl-enabling-custom-triggers-example-component"]],decls:2,vars:2,consts:[["usePagination","",3,"dataSource","columns"],[3,"table","paginator",4,"pblNgridPaginatorRef"],[3,"table","paginator"]],template:function(t,e){1&t&&(p.Yb(0,"pbl-ngrid",0),p.Jc(1,d,1,2,"pbl-ngrid-paginator",1),p.Xb()),2&t&&p.rc("dataSource",e.dsCustomTrigger)("columns",e.columns)},directives:[l.a,b.f,u.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(c.e)("pbl-enabling-custom-triggers-example-component",{title:"Enabling custom triggers"})],t),t})(),f=(()=>{let t=class{};return t.\u0275mod=p.Qb({type:t}),t.\u0275inj=p.Pb({factory:function(e){return new(e||t)},imports:[[n.c,s.a,o.l,r.a]]}),t=Object(i.a)([Object(c.a)(h)],t),t})()},"v/G+":function(t,e,a){"use strict";a.d(e,"a",(function(){return z}));var i=a("5XID"),n=a("XApm"),o=a("EM62"),r=a("iAde"),c=a("2kYt"),s=a("PBFl"),g=a("Y2X+"),p=a("29Wa"),l=a("R7+U"),b=a("mFH5");function u(t,e){if(1&t&&(o.Yb(0,"mat-option",17),o.Lc(1),o.Xb()),2&t){const t=e.$implicit;o.rc("value",t),o.Gb(1),o.Nc(" ",t," ")}}function d(t,e){if(1&t){const t=o.Zb();o.Yb(0,"mat-form-field",14),o.Yb(1,"mat-select",15),o.gc("selectionChange",(function(e){return o.zc(t),o.kc(2).paginator.perPage=e.value})),o.Jc(2,u,2,2,"mat-option",16),o.Xb(),o.Xb()}if(2&t){const t=o.kc(2);o.Gb(1),o.rc("value",t.paginator.perPage)("aria-label",t._intl.itemsPerPageLabel)("disabled",t.pageSizes[0]>=t.paginator.total&&!t.paginator.hasPrev()&&!t.paginator.hasNext()),o.Gb(1),o.rc("ngForOf",t.pageSizes)}}function h(t,e){if(1&t&&(o.Yb(0,"div"),o.Lc(1),o.Xb()),2&t){const t=o.kc(2);o.Gb(1),o.Mc(null==t.paginator?null:t.paginator.perPage)}}function f(t,e){if(1&t&&(o.Yb(0,"div",11),o.Yb(1,"div",12),o.Lc(2),o.Xb(),o.Jc(3,d,3,4,"mat-form-field",8),o.Jc(4,h,2,1,"div",13),o.Xb()),2&t){const t=o.kc();o.Gb(2),o.Nc(" ",t._intl.itemsPerPageLabel," "),o.Gb(1),o.rc("ngIf",t.pageSizes.length>1),o.Gb(1),o.rc("ngIf",t.pageSizes.length<=1)}}function m(t,e){if(1&t&&(o.Yb(0,"div",18),o.Lc(1),o.Xb()),2&t){const t=o.kc();o.Gb(1),o.Nc(" ",t._intl.getRangeLabel(t.paginator.page-1,t.paginator.perPage,t.paginator.total)," ")}}function P(t,e){if(1&t&&(o.Yb(0,"mat-option",17),o.Lc(1),o.Xb()),2&t){const t=e.$implicit;o.rc("value",t),o.Gb(1),o.Mc(t)}}function v(t,e){if(1&t){const t=o.Zb();o.jc(),o.ic(),o.Yb(0,"mat-form-field",14),o.Yb(1,"mat-select",19),o.gc("selectionChange",(function(e){return o.zc(t),o.kc().paginator.page=e.value})),o.Jc(2,P,2,2,"mat-option",16),o.Xb(),o.Xb()}if(2&t){const t=o.kc();o.Gb(1),o.rc("value",t.paginator.page)("disabled",1===t.paginator.totalPages),o.Gb(1),o.rc("ngForOf",t.pages)}}const S=[5,10,20,50,100];let z=(()=>{class t{constructor(t,e,a){this._intl=e,this.cdr=a,this.pages=[],this.pageSizes=S.slice(),this._hidePageSize=!1,this._hideRangeSelect=!1,t&&(this.table=t),e.changes.pipe(n.x.unrx(this)).subscribe((()=>this.cdr.markForCheck()))}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=t,this.pageSizes=(t||S).slice(),this.updatePageSizes()}get paginator(){return this._paginator}set paginator(t){this._paginator!==t&&(this._paginator&&n.x.unrx.kill(this,this._paginator),this._paginator=t,t&&(t.onChange.pipe(n.x.unrx(this,t)).subscribe((t=>this.handlePageChange(t))),this.updatePageSizes()))}get hidePageSize(){return this._hidePageSize}set hidePageSize(t){this._hidePageSize=Object(i.c)(t)}get hideRangeSelect(){return this._hideRangeSelect}set hideRangeSelect(t){this._hideRangeSelect=Object(i.c)(t)}ngOnDestroy(){n.x.unrx.kill(this)}updatePageSizes(){this.paginator&&-1===this.pageSizes.indexOf(this.paginator.perPage)&&this.pageSizes.push(this.paginator.perPage),this.pageSizes.sort(((t,e)=>t-e))}handlePageChange(t){if(this.pages.length!==this.paginator.totalPages){const t=this.pages=[];for(let e=1,a=this.paginator.totalPages+1;e<a;e++)t.push(e)}this.cdr.detectChanges(),this.cdr.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(n.h,8),o.Sb(r.b),o.Sb(o.h))},t.\u0275cmp=o.Mb({type:t,selectors:[["pbl-ngrid-paginator"]],hostAttrs:[1,"mat-paginator"],inputs:{pageSizeOptions:"pageSizeOptions",paginator:"paginator",table:"table",hidePageSize:"hidePageSize",hideRangeSelect:"hideRangeSelect"},decls:12,vars:11,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],["class","mat-paginator-range-label",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["class","mat-paginator-page-size-select",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],[4,"ngIf"],[1,"mat-paginator-page-size-select"],[3,"value","aria-label","disabled","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-range-label"],[3,"value","disabled","selectionChange"]],template:function(t,e){1&t&&(o.Yb(0,"div",0),o.Yb(1,"div",1),o.Jc(2,f,5,3,"div",2),o.Yb(3,"div",3),o.Jc(4,m,2,1,"div",4),o.Yb(5,"button",5),o.gc("click",(function(){return e.paginator.prevPage()})),o.jc(),o.Yb(6,"svg",6),o.Tb(7,"path",7),o.Xb(),o.Xb(),o.Jc(8,v,3,3,"mat-form-field",8),o.ic(),o.Yb(9,"button",9),o.gc("click",(function(){return e.paginator.nextPage()})),o.jc(),o.Yb(10,"svg",6),o.Tb(11,"path",10),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb()),2&t&&(o.Gb(2),o.rc("ngIf",!e.hidePageSize),o.Gb(2),o.rc("ngIf","pageNumber"===e.paginator.kind),o.Gb(1),o.rc("matTooltip",e._intl.previousPageLabel)("matTooltipPosition","above")("disabled",!e.paginator.hasPrev()),o.Hb("aria-label",e._intl.previousPageLabel),o.Gb(3),o.rc("ngIf",!e.hideRangeSelect&&"pageNumber"===e.paginator.kind&&e.pageSizes.length>=1),o.Gb(1),o.rc("matTooltip",e._intl.nextPageLabel)("matTooltipPosition","above")("disabled",!e.paginator.hasNext()),o.Hb("aria-label",e._intl.nextPageLabel))},directives:[c.t,s.b,g.c,p.c,l.a,c.s,b.n],styles:[".mat-paginator-range-label{flex-grow:1}.mat-paginator-container{box-sizing:border-box}"],encapsulation:2,changeDetection:0}),t})()}}]);