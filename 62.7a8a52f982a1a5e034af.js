(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{HsLd:function(e,t,a){"use strict";a.r(t),a.d(t,"InfiniteScrollPerformanceDemoExampleModule",function(){return K});var o=a("mrSG"),n=a("ofXK"),l=a("kmnG"),i=a("d3UM"),r=a("5RNC"),c=a("QibW"),s=a("bSwM"),d=a("Xa2L"),u=a("XEBs"),b=a("LnE1"),p=a("4dOD"),h=a("6JOf"),f=a("BuSo"),m=a("+9h+"),g=a("MhSk"),w=a("Lr2k"),v=a("LpJu"),y=a("YT2F"),C=a("WPM6"),S=a("mwjq"),x=a("fXoL"),M=a("fluT"),k=a("XiUz"),L=a("XkVd"),T=a("7WRX"),I=a("BxRN"),P=a("4DA5"),X=a("cGur"),W=a("gAVq"),D=a("IO+B"),O=a("Dh3D"),j=a("+Czz"),R=a("kvXS"),q=a("aR4q"),B=a("L3Ad"),F=a("PIXP"),A=a("tQNW"),N=a("8r4k");function J(e,t){if(1&e){const e=x.Yb();x.Xb(0,"mat-slider",10),x.fc("change",function(t){return x.yc(e),x.jc().wheelMode=t.value}),x.Wb()}if(2&e){const e=x.jc();x.qc("value",e.wheelMode)}}function z(e,t){if(1&e&&(x.Xb(0,"div",17),x.Lc(1),x.kc(2,"currency"),x.Wb()),2&e){const e=t.value,a=t.col,o=t.row;x.qc("ngridCellClass",e<0?a.type.data.pbl:a.type.data.pos),x.Fb(1),x.Mc(x.nc(2,2,e,a.type.data.meta.currency(o),"symbol",a.type.data.format))}}function G(e,t){if(1&e&&(x.Xb(0,"div"),x.Lc(1),x.Wb()),2&e){const e=t.col,a=t.row;x.Fb(1),x.Mc(e.type.data.flagAndCountry(a))}}function U(e,t){if(1&e&&(x.Xb(0,"div"),x.Lc(1),x.kc(2,"number"),x.kc(3,"number"),x.kc(4,"number"),x.Wb()),2&e){const e=x.jc(2);x.Fb(1),x.Pc(" Showing ",x.lc(2,3,e.ds.renderStart)," to ",x.lc(3,5,e.ds.renderStart+e.ds.renderLength)," out of ",x.lc(4,7,e.ds.length),"")}}function V(e,t){1&e&&(x.Xb(0,"pbl-ngrid-row",18),x.Sb(1,"mat-spinner",19),x.Wb())}function E(e,t){if(1&e&&(x.Xb(0,"pbl-ngrid",11),x.Sb(1,"pbl-demo-action-row",12),x.Jc(2,z,3,7,"div",13),x.Jc(3,G,2,1,"div",14),x.Jc(4,U,5,9,"div",15),x.Jc(5,V,2,0,"pbl-ngrid-row",16),x.Wb()),2&e){const e=x.jc();x.qc("dataSource",e.ds)("columns",e.columns)("wheelMode",e.wheelMode)("hideColumns",e.hideColumns),x.Fb(2),x.qc("pblNgridCellTypeDef","accountBalance"),x.Fb(1),x.qc("pblNgridCellTypeDef","flagAndCountry"),x.Fb(1),x.qc("pblNgridFooterCellDef","footerPageInfo")}}const H={currency:e=>{var t;return null===(t=H.data.countries[e.country])||void 0===t?void 0:t.currencies[0]},flagAndCountry:e=>H.flag(e)+" "+H.name(e),name:e=>{var t;return null===(t=H.data.countries[e.country])||void 0===t?void 0:t.name},flag:e=>{var t;return null===(t=H.data.countries[e.country])||void 0===t?void 0:t.emoji},data:void 0},Q={name:"accountBalance",data:{pbl:"balance-negative",pos:"balance-positive",format:"1.0-2",meta:H}};function Y(e=!1){const t=t=>e?void 0:t;return Object(u.s)().default({minWidth:100,resize:!0}).table({prop:"id",pIndex:!0,width:"40px"},{prop:"name",sort:!0,reorder:!0},{prop:"country",headerType:t("country"),type:t({name:"flagAndCountry",data:H}),width:"150px"},{prop:"jobTitle"},{prop:"accountId"},{prop:"accountType",reorder:!0},{prop:"primeAccount",type:t("visualBool"),width:"24px"},{prop:"creditScore",type:t("starRatings"),width:"50px"},{prop:"balance",type:t(Q),sort:!0},...Array.from(new Array(12)).map((e,a)=>({prop:`monthlyBalance.${a}`,type:t(Q),sort:!0}))).headerGroup({prop:"name",span:2,label:"Customer Info"},{prop:"accountId",span:4,label:"Account Info"},{prop:"monthlyBalance.0",label:"Monthly Balance"}).footer({id:"footerPageInfo"}).footer({id:"rere123f",label:"FOOTER2"}).build()}let $=(()=>{let e=class{constructor(e,t,a){this.datasource=e,this.client=t,this.cdr=a,this.columns=Y(),this.ds=this.getDatasource(),this.wheelMode="passive",this.wheelModeState="passive",this.plainColumns=!1,this.showTable=!0,this.hideColumns=[]}toggleColumn(e,t){const a=e.indexOf(t);-1===a?e.push(t):e.splice(a,1)}togglePlainColumns(){this.plainColumns=!this.plainColumns,this.showTable=!1,setTimeout(()=>{this.showTable=!0,this.columns=Y(this.plainColumns),this.ds=this.getDatasource(),this.cdr.detectChanges()},100)}wheelModeChange(e){switch(this.wheelModeState=e.value,this.wheelModeState){case"passive":case"blocking":this.wheelMode=this.wheelModeState;break;default:this.wheelMode=15}}getDatasource(){return Object(v.b)().withInfiniteScrollOptions({blockSize:100,initialVirtualSize:100}).withCacheOptions("sequenceBlocks").onTrigger(e=>{if(e.isInitial)return this.datasource.getCountries().then(e=>H.data=e).then(()=>this.client.getCustomers({pagination:{itemsPerPage:100,page:1}})).then(t=>(console.log("Init Infinite Request!"),this.ds.updateVirtualSize(3e6),e.updateTotalLength(3e6),t.items));{const t=Math.floor(e.fromRow/100)+1;return console.log(`Infinite Request - Page: ${t} | Items: 100 `),this.client.getCustomers({pagination:{itemsPerPage:100,page:1}}).then(e=>e.items.map(e=>Object.assign(Object.create(e),{id:e.id+100*(t-1)})))}}).create()}};return e.\u0275fac=function(t){return new(t||e)(x.Rb(M.a),x.Rb(M.b),x.Rb(x.h))},e.\u0275cmp=x.Lb({type:e,selectors:[["pbl-infinite-scroll-performance-demo-example"]],viewQuery:function(e,t){if(1&e&&x.Sc(u.g,!0),2&e){let e;x.uc(e=x.gc())&&(t.pblTable=e.first)}},decls:14,vars:6,consts:[["fxLayout","column","fxLayoutGap","16px",1,"pbl-fill-absolute"],["fxLayout","row","fxLayoutGap","16px",2,"width","100%"],["fxLayout","row","fxLayoutGap","8px",3,"value","disabled","change"],["value","passive"],["value","blocking"],["value","threshold"],["thumbLabel","","min","1","max","55",3,"value","change",4,"ngIf"],[3,"value","change"],[2,"flex","1 1 100%","display","flex","min-height","0px"],["class","pbl-ngrid-cell-ellipsis pbl-ngrid-header-cell-ellipsis","style","height: 100%; width: 100%;","vScrollAuto","","maxBufferPx","100","minBufferPx","50","showHeader","","columnReorder","","blockUi","","matSort","","cellTooltip","","matCheckboxSelection","selection",3,"dataSource","columns","wheelMode","hideColumns",4,"ngIf"],["thumbLabel","","min","1","max","55",3,"value","change"],["vScrollAuto","","maxBufferPx","100","minBufferPx","50","showHeader","","columnReorder","","blockUi","","matSort","","cellTooltip","","matCheckboxSelection","selection",1,"pbl-ngrid-cell-ellipsis","pbl-ngrid-header-cell-ellipsis",2,"height","100%","width","100%",3,"dataSource","columns","wheelMode","hideColumns"],["filter","","label","Infinite Scroll Performance","showFps",""],[3,"ngridCellClass",4,"pblNgridCellTypeDef"],[4,"pblNgridCellTypeDef"],[4,"pblNgridFooterCellDef"],["in","","class","pbl-ngrid-infinite-virtual-row","infiniteRow","",4,"pblNgridInfiniteVirtualRowDef"],[3,"ngridCellClass"],["in","","infiniteRow","",1,"pbl-ngrid-infinite-virtual-row"],["diameter","24"]],template:function(e,t){1&e&&(x.Xb(0,"div",0),x.Xb(1,"div",1),x.Xb(2,"mat-radio-group",2),x.fc("change",function(e){return t.wheelModeChange(e)}),x.Xb(3,"mat-radio-button",3),x.Lc(4,"Passive"),x.Wb(),x.Xb(5,"mat-radio-button",4),x.Lc(6,"Blocking"),x.Wb(),x.Xb(7,"mat-radio-button",5),x.Lc(8),x.Wb(),x.Wb(),x.Jc(9,J,1,1,"mat-slider",6),x.Wb(),x.Xb(10,"mat-checkbox",7),x.fc("change",function(){return t.togglePlainColumns()}),x.Lc(11,"Use plain columns (higher frame rate)"),x.Wb(),x.Xb(12,"div",8),x.Jc(13,E,6,7,"pbl-ngrid",9),x.Wb(),x.Wb()),2&e&&(x.Fb(2),x.qc("value",t.wheelModeState)("disabled",null==t.pblTable?null:t.pblTable.virtualPagingActive),x.Fb(6),x.Nc("Threshold","threshold"===t.wheelModeState?" ("+t.wheelMode+")":"",""),x.Fb(1),x.qc("ngIf","threshold"===t.wheelModeState),x.Fb(1),x.qc("value",t.plainColumns),x.Fb(3),x.qc("ngIf",t.showTable))},directives:[k.f,k.g,c.b,c.a,n.t,s.a,r.a,L.a,T.a,I.b,P.b,X.b,W.b,D.a,O.a,j.b,R.a,q.a,B.a,F.a,A.a,N.a,d.c],pipes:[n.d,n.g],styles:[".balance-negative{background:rgba(255,0,0,.33)}.balance-positive{background:rgba(0,128,0,.33)}"],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(y.e)("pbl-infinite-scroll-performance-demo-example",{title:"Infinite Scroll Performance Demo"}),Object(o.b)("design:paramtypes",[M.a,M.b,x.h])],e),e})(),K=(()=>{let e=class{};return e.\u0275mod=x.Pb({type:e}),e.\u0275inj=x.Ob({factory:function(t){return new(t||e)},providers:[u.o],imports:[[n.c,l.e,i.b,r.b,c.c,s.b,d.b,C.a,S.b,u.k.withCommon([{component:S.a}]),b.a.withDefaultTemplates(),p.a,h.a,f.a,m.a,g.a,w.a,v.a]]}),e=Object(o.a)([Object(y.a)($)],e),e})()}}]);