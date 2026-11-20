if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import{a as m}from"@nf-internal/chunk-UAU6UPPG";import"@nf-internal/chunk-BXKJ7O3J";import*as r from"@angular/core";import{InjectionToken as d,inject as l,ElementRef as g,numberAttribute as o}from"@angular/core";import{NgTemplateOutlet as u}from"@angular/common";import{BidiModule as _}from"@angular/cdk/bidi";import"@angular/cdk/layout";var h=new d("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:p})}),p=100,f=10,v=(()=>{class i{_elementRef=l(g);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(h),t=m(),a=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=p;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-f)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["determinateSpinner"];function t(a,s){if(a&1&&(r.\u0275\u0275namespaceSVG(),r.\u0275\u0275elementStart(0,"svg",11),r.\u0275\u0275element(1,"circle",12),r.\u0275\u0275elementEnd()),a&2){let n=r.\u0275\u0275nextContext();r.\u0275\u0275attribute("viewBox",n._viewBox()),r.\u0275\u0275advance(),r.\u0275\u0275styleProp("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeCircumference()/2,"px")("stroke-width",n._circleStrokeWidth(),"%"),r.\u0275\u0275attribute("r",n._circleRadius())}}return r.\u0275\u0275defineComponent({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(s,n){if(s&1&&r.\u0275\u0275viewQuery(e,5),s&2){let c;r.\u0275\u0275queryRefresh(c=r.\u0275\u0275loadQuery())&&(n._determinateCircle=c.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(s,n){s&2&&(r.\u0275\u0275attribute("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),r.\u0275\u0275classMap("mat-"+n.color),r.\u0275\u0275styleProp("width",n.diameter,"px")("height",n.diameter,"px")("--%NS%mat-progress-spinner-size",n.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",n.diameter+"px"),r.\u0275\u0275classProp("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",o],diameter:[2,"diameter","diameter",o],strokeWidth:[2,"strokeWidth","strokeWidth",o]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(s,n){if(s&1&&(r.\u0275\u0275template(0,t,2,8,"ng-template",null,0,r.\u0275\u0275templateRefExtractor),r.\u0275\u0275elementStart(2,"div",2,1),r.\u0275\u0275namespaceSVG(),r.\u0275\u0275elementStart(4,"svg",3),r.\u0275\u0275element(5,"circle",4),r.\u0275\u0275elementEnd()(),r.\u0275\u0275namespaceHTML(),r.\u0275\u0275elementStart(6,"div",5)(7,"div",6)(8,"div",7),r.\u0275\u0275elementContainer(9,8),r.\u0275\u0275elementEnd(),r.\u0275\u0275elementStart(10,"div",9),r.\u0275\u0275elementContainer(11,8),r.\u0275\u0275elementEnd(),r.\u0275\u0275elementStart(12,"div",10),r.\u0275\u0275elementContainer(13,8),r.\u0275\u0275elementEnd()()()),s&2){let c=r.\u0275\u0275reference(1);r.\u0275\u0275advance(4),r.\u0275\u0275attribute("viewBox",n._viewBox()),r.\u0275\u0275advance(),r.\u0275\u0275styleProp("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),r.\u0275\u0275attribute("r",n._circleRadius()),r.\u0275\u0275advance(4),r.\u0275\u0275property("ngTemplateOutlet",c),r.\u0275\u0275advance(2),r.\u0275\u0275property("ngTemplateOutlet",c),r.\u0275\u0275advance(2),r.\u0275\u0275property("ngTemplateOutlet",c)}},dependencies:[u],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return i})(),P=v,W=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=r.\u0275\u0275defineNgModule({type:i});static \u0275inj=r.\u0275\u0275defineInjector({imports:[_]})}return i})();export{h as MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,v as MatProgressSpinner,W as MatProgressSpinnerModule,P as MatSpinner};
