(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"11Gu":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var c=i("5XID"),l=i("XApm"),n=i("EM62");let r=(()=>{class t{constructor(t,e,i){this._click=!1,this._dblClick=!1,i.onInit().subscribe((()=>{this.targetEventsPlugin=i.getPlugin("targetEvents")||i.createPlugin("targetEvents"),this.update()}))}set cellEditClick(t){t=Object(c.c)(t),this._click!==t&&(this._click=t,this.update())}set cellEditDblClick(t){t=Object(c.c)(t),this._dblClick!==t&&(this._dblClick=t,this.update())}ngOnDestroy(){l.x.unrx.kill(this)}update(){this.targetEventsPlugin&&(l.x.unrx.kill(this,this.targetEventsPlugin),this._click&&this.targetEventsPlugin.cellClick.pipe(l.x.unrx(this,this.targetEventsPlugin)).subscribe((t=>{"data"===t.type&&t.column.editable&&t.context.startEdit(!0)})),this._dblClick&&this.targetEventsPlugin.cellDblClick.pipe(l.x.unrx(this,this.targetEventsPlugin)).subscribe((t=>{"data"===t.type&&t.column.editable&&t.context.startEdit(!0)})))}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(l.h),n.Sb(n.v),n.Sb(l.o))},t.\u0275dir=n.Nb({type:t,selectors:[["pbl-ngrid","cellEditClick",""],["pbl-ngrid","cellEditDblClick",""]],inputs:{cellEditClick:"cellEditClick",cellEditDblClick:"cellEditDblClick"}}),t})()},"fBd+":function(t,e,i){"use strict";i.r(e),i.d(e,"CellEditExampleModule",(function(){return S}));var c=i("D57K"),l=i("2kYt"),n=i("nIj0"),r=i("Cd2c"),a=i("29Wa"),o=i("gcUQ"),s=i("mFH5"),u=i("XApm"),b=i("/kex"),d=i("cc5W"),p=i("3JFK"),g=i("JRn2"),h=i("EM62"),m=i("Ht9o"),f=i("H1Fh"),v=i("I6nx");function C(t,e){if(1&t&&(h.Yb(0,"div"),h.Lc(1),h.Xb()),2&t){const t=e.$implicit;h.Gb(1),h.Nc(" ",!!t.rowContext.firstRender," ")}}function E(t,e){if(1&t&&(h.Yb(0,"div"),h.Yb(1,"a",5),h.gc("click",(function(){return e.$implicit.startEdit(!0)})),h.Lc(2),h.Xb(),h.Xb()),2&t){const t=e.$implicit;h.Gb(2),h.Mc(t.value)}}function k(t,e){if(1&t){const t=h.Zb();h.Yb(0,"div"),h.Yb(1,"input",6,7),h.gc("change",(function(i){return h.zc(t),e.$implicit.value=i.target.value}))("blur",(function(){return e.$implicit.stopEdit()})),h.Xb(),h.Xb()}if(2&t){const t=e.$implicit;h.Gb(1),h.rc("value",t.value)("pblCellEditAutoFocus",t)}}let x=(()=>{let t=class{constructor(t){this.datasource=t,this.hideColumns=["gender"],this.columns=Object(u.s)().table({prop:"id",width:"40px"},{prop:"name",editable:!0},{prop:"gender",width:"50px"},{prop:"birthdate"},{prop:"__isFirstRender",label:"First Render?",width:"60px"}).build(),this.ds=Object(u.t)().onTrigger((()=>this.datasource.getPeople(0,500))).create()}update(t){const e=t.columnApi.indexOf("name");t.contextApi.getCell(3,e).startEdit(!0)}};return t.\u0275fac=function(e){return new(e||t)(h.Sb(g.a))},t.\u0275cmp=h.Mb({type:t,selectors:[["pbl-cell-edit-example"]],decls:19,vars:6,consts:[[3,"dataSource","columns","hideColumns"],["grid1",""],[4,"pblNgridCellDef"],[4,"pblNgridCellEditorDef"],["mat-button","",3,"click"],[3,"click"],[3,"value","pblCellEditAutoFocus","change","blur"],["input",""]],template:function(t,e){if(1&t){const t=h.Zb();h.Yb(0,"pbl-ngrid",0,1),h.Jc(2,C,2,1,"div",2),h.Jc(3,E,3,1,"div",2),h.Jc(4,k,3,2,"div",3),h.Xb(),h.Yb(5,"ul"),h.Yb(6,"li"),h.Lc(7,"Clicking on any cell in the column "),h.Yb(8,"b"),h.Lc(9,"name"),h.Xb(),h.Lc(10," will trigger an input box, leaving the input box (blur) will return to the read-only view."),h.Xb(),h.Yb(11,"li"),h.Lc(12,"Clicking on "),h.Yb(13,"button",4),h.gc("click",(function(){h.zc(t);const i=h.wc(1);return e.update(i)})),h.Lc(14,"this button"),h.Xb(),h.Lc(15," will trigger edit on the 4th "),h.Yb(16,"b"),h.Lc(17,"rendered"),h.Xb(),h.Lc(18," row and the 2nd cell (name)."),h.Xb(),h.Xb()}2&t&&(h.rc("dataSource",e.ds)("columns",e.columns)("hideColumns",e.hideColumns),h.Gb(2),h.rc("pblNgridCellDef","__isFirstRender"),h.Gb(1),h.rc("pblNgridCellDef","name"),h.Gb(1),h.rc("pblNgridCellEditorDef","name"))},directives:[m.a,f.a,f.b,v.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(c.a)([Object(d.e)("pbl-cell-edit-example",{title:"Cell Edit"})],t),t})();var w=i("mcY/"),X=i("ELgr");function D(t,e){if(1&t){const t=h.Zb();h.Yb(0,"div"),h.Yb(1,"input",2),h.gc("change",(function(i){return h.zc(t),e.$implicit.value=i.target.value}))("blur",(function(){return e.$implicit.stopEdit()})),h.Xb(),h.Xb()}if(2&t){const t=e.$implicit;h.Gb(1),h.rc("value",t.value)("pblCellEditAutoFocus",t)}}function Y(t,e){if(1&t){const t=h.Zb();h.Yb(0,"div"),h.Yb(1,"input",3,4),h.gc("change",(function(){h.zc(t);const i=e.$implicit,c=h.wc(2);return h.kc().changeCheckbox(c,i)}))("blur",(function(){return e.$implicit.stopEdit()})),h.Xb(),h.Xb()}if(2&t){const t=e.$implicit;h.Gb(1),h.rc("checked",t.value)("pblCellEditAutoFocus",t)}}let j=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(u.s)().table({prop:"id",width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"birthdate"},{prop:"lead",editable:!0}).build(),this.ds=Object(w.b)().withInfiniteScrollOptions({blockSize:50,initialVirtualSize:500}).onTrigger((t=>{if(t.isInitial)return t.updateTotalLength(500),this.datasource.getPeople(0,50);{const e=t.fromRow+t.offset;return this.datasource.getPeople(500+1e3*Math.random(),e).then((i=>i.slice(t.fromRow,e)))}})).create()}changeCheckbox(t,e){e.value=t.checked,setTimeout((()=>e.stopEdit(!0)))}};return t.\u0275fac=function(e){return new(e||t)(h.Sb(g.a))},t.\u0275cmp=h.Mb({type:t,selectors:[["pbl-cell-edit-global-trigger-example"]],decls:3,vars:4,consts:[[3,"dataSource","columns","cellClick"],[4,"pblNgridCellEditorDef"],[3,"value","pblCellEditAutoFocus","change","blur"],["type","checkbox",3,"checked","pblCellEditAutoFocus","change","blur"],["cb",""]],template:function(t,e){1&t&&(h.Yb(0,"pbl-ngrid",0),h.gc("cellClick",(function(t){return t.context.startEdit()})),h.Jc(1,D,2,2,"div",1),h.Jc(2,Y,3,2,"div",1),h.Xb()),2&t&&(h.rc("dataSource",e.ds)("columns",e.columns),h.Gb(1),h.rc("pblNgridCellEditorDef","name"),h.Gb(1),h.rc("pblNgridCellEditorDef","lead"))},directives:[m.a,X.c,f.b,v.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(c.a)([Object(d.e)("pbl-cell-edit-global-trigger-example",{title:"Triggering edits globally"})],t),t})();var y=i("11Gu");function O(t,e){if(1&t){const t=h.Zb();h.Yb(0,"div"),h.Yb(1,"mat-form-field"),h.Yb(2,"input",2),h.gc("dateChange",(function(i){return h.zc(t),e.$implicit.value=i.value})),h.Xb(),h.Tb(3,"mat-datepicker-toggle",3),h.Yb(4,"mat-datepicker",4,5),h.gc("closed",(function(){return e.$implicit.stopEdit()})),h.Xb(),h.Xb(),h.Xb()}if(2&t){const t=e.$implicit,i=h.wc(5);h.Gb(2),h.rc("matDatepicker",i)("value",t.value),h.Gb(1),h.rc("for",i),h.Gb(1),h.rc("opened",!0)}}let G=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(u.s)().table({prop:"id",width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",editable:!0}).build(),this.ds=Object(u.t)().onTrigger((()=>this.datasource.getPeople(0,500))).create()}};return t.\u0275fac=function(e){return new(e||t)(h.Sb(g.a))},t.\u0275cmp=h.Mb({type:t,selectors:[["pbl-cell-edit-directives-example"]],decls:2,vars:3,consts:[["cellEditClick","",3,"dataSource","columns"],[4,"pblNgridCellEditorTypeDef"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],[3,"opened","closed"],["picker",""]],template:function(t,e){1&t&&(h.Yb(0,"pbl-ngrid",0),h.Jc(1,O,6,4,"div",1),h.Xb()),2&t&&(h.rc("dataSource",e.ds)("columns",e.columns),h.Gb(1),h.rc("pblNgridCellEditorTypeDef","date"))},directives:[m.a,y.a,f.b,a.c,r.b,o.b,o.d,a.j,o.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(c.a)([Object(d.e)("pbl-cell-edit-directives-example",{title:"Cell Edit Directives"})],t),t})(),S=(()=>{let t=class{};return t.\u0275mod=h.Qb({type:t}),t.\u0275inj=h.Pb({factory:function(e){return new(e||t)},imports:[[l.c,n.d,p.a,r.c,a.e,o.c,s.m,u.l,b.a]]}),t=Object(c.a)([Object(d.a)(x,j,G)],t),t})()}}]);