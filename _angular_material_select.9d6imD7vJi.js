if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import{a as W}from"@nf-internal/chunk-4OKCNCO6";import{d as z}from"@nf-internal/chunk-DBFJEG5J";import{a as B}from"@nf-internal/chunk-XECEUOJY";import{a as pe,c as he,d as ue,f as fe,h as ge,i as G,m as K,o as be,p as j}from"@nf-internal/chunk-VYZ462G7";import{b as w}from"@nf-internal/chunk-UAU6UPPG";import"@nf-internal/chunk-BXKJ7O3J";import{_IdGenerator as Ae,LiveAnnouncer as Re,ActiveDescendantKeyManager as Fe}from"@angular/cdk/a11y";import{Directionality as Pe,BidiModule as Ve}from"@angular/cdk/bidi";import{SelectionModel as Le}from"@angular/cdk/collections";import{hasModifierKey as A,ENTER as Z,SPACE as ee,A as ze,ESCAPE as Be,DOWN_ARROW as te,UP_ARROW as ne,LEFT_ARROW as We,RIGHT_ARROW as Ge}from"@angular/cdk/keycodes";import{createRepositionScrollStrategy as Ke,OVERLAY_DEFAULT_CONFIG as je,CdkOverlayOrigin as ae,CdkConnectedOverlay as ie,OverlayModule as He}from"@angular/cdk/overlay";import{ViewportRuler as qe,CdkScrollableModule as Qe}from"@angular/cdk/scrolling";import*as n from"@angular/core";import{InjectionToken as L,inject as u,Injector as Ye,ChangeDetectorRef as Ue,ElementRef as Xe,Renderer2 as $e,signal as Je,EventEmitter as R,HostAttributeToken as Ze,booleanAttribute as v,numberAttribute as oe}from"@angular/core";import{NgControl as et,Validators as tt,NgForm as nt,FormGroupDirective as at}from"@angular/forms";import{_getEventTarget as it}from"@angular/cdk/platform";import{FORM_FIELD as ot}from"@angular/forms/signals";import{Subject as F,defer as rt,merge as P}from"rxjs";import{startWith as re,switchMap as le,filter as se,map as ce,takeUntil as C,take as lt}from"rxjs/operators";import{_IdGenerator as q}from"@angular/cdk/a11y";import{ENTER as ye,SPACE as _e,hasModifierKey as ve}from"@angular/cdk/keycodes";import*as a from"@angular/core";import{InjectionToken as Q,inject as _,booleanAttribute as Y,ElementRef as xe,ChangeDetectorRef as ke,signal as Se,EventEmitter as Ce,isSignal as we}from"@angular/core";import{Subject as Me}from"rxjs";import*as x from"@angular/core";import"@angular/core";var H=(()=>{class i{_animationsDisabled=w();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=x.\u0275\u0275defineComponent({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&x.\u0275\u0275classProp("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();import{_CdkPrivateStyleLoader as Oe,_VisuallyHiddenLoader as Ie}from"@angular/cdk/private";var M=new Q("MAT_OPTION_PARENT_COMPONENT"),O=new Q("MatOptgroup"),Ne=(()=>{class i{label;disabled=!1;_labelId=_(q).getId("mat-optgroup-label-");_inert;constructor(){let e=_(M,{optional:!0});this._inert=e?.inertGroups??!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["mat-option"],["ng-container"]]],t=["*","mat-option, ng-container"];return a.\u0275\u0275defineComponent({type:i,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-mdc-optgroup"],hostVars:3,hostBindings:function(c,s){c&2&&a.\u0275\u0275attribute("role",s._inert?null:"group")("aria-disabled",s._inert?null:s.disabled.toString())("aria-labelledby",s._inert?null:s._labelId)},inputs:{label:"label",disabled:[2,"disabled","disabled",Y]},exportAs:["matOptgroup"],features:[a.\u0275\u0275ProvidersFeature([{provide:O,useExisting:i}])],ngContentSelectors:t,decls:5,vars:4,consts:[["role","presentation",1,"mat-mdc-optgroup-label",3,"id"],[1,"mdc-list-item__primary-text"]],template:function(c,s){c&1&&(a.\u0275\u0275projectionDef(e),a.\u0275\u0275domElementStart(0,"span",0)(1,"span",1),a.\u0275\u0275text(2),a.\u0275\u0275projection(3),a.\u0275\u0275domElementEnd()(),a.\u0275\u0275projection(4,1)),c&2&&(a.\u0275\u0275classProp("mdc-list-item--disabled",s.disabled),a.\u0275\u0275domProperty("id",s._labelId),a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate1("",s.label," "))},styles:[`.mat-mdc-optgroup {
  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));
  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2})})()}return i})(),D=class{source;isUserInput;constructor(f,e=!1){this.source=f,this.isUserInput=e}},I=(()=>{class i{_element=_(xe);_changeDetectorRef=_(ke);_parent=_(M,{optional:!0});group=_(O,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=_(q).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Se(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ce;_text;_stateChanges=new Me;constructor(){let e=_(Oe);e.load(B),e.load(Ie),this._signalDisableRipple=!!this._parent&&we(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===ye||e.keyCode===_e)&&!ve(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new D(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["text"],t=[[["mat-icon"]],"*"],r=["mat-icon","*"];function c(m,g){if(m&1&&a.\u0275\u0275element(0,"mat-pseudo-checkbox",1),m&2){let l=a.\u0275\u0275nextContext();a.\u0275\u0275property("disabled",l.disabled)("state",l.selected?"checked":"unchecked")}}function s(m,g){if(m&1&&a.\u0275\u0275element(0,"mat-pseudo-checkbox",3),m&2){let l=a.\u0275\u0275nextContext();a.\u0275\u0275property("disabled",l.disabled)}}function y(m,g){if(m&1&&(a.\u0275\u0275elementStart(0,"span",4),a.\u0275\u0275text(1),a.\u0275\u0275elementEnd()),m&2){let l=a.\u0275\u0275nextContext();a.\u0275\u0275advance(),a.\u0275\u0275textInterpolate1("(",l.group.label,")")}}return a.\u0275\u0275defineComponent({type:i,selectors:[["mat-option"]],viewQuery:function(g,l){if(g&1&&a.\u0275\u0275viewQuery(e,7),g&2){let d;a.\u0275\u0275queryRefresh(d=a.\u0275\u0275loadQuery())&&(l._text=d.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(g,l){g&1&&a.\u0275\u0275listener("click",function(){return l._selectViaInteraction()})("keydown",function(h){return l._handleKeydown(h)}),g&2&&(a.\u0275\u0275domProperty("id",l.id),a.\u0275\u0275attribute("aria-selected",l.selected)("aria-disabled",l.disabled.toString()),a.\u0275\u0275classProp("mdc-list-item--selected",l.selected)("mat-mdc-option-multiple",l.multiple)("mat-mdc-option-active",l.active)("mdc-list-item--disabled",l.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Y]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:r,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(g,l){g&1&&(a.\u0275\u0275projectionDef(t),a.\u0275\u0275conditionalCreate(0,c,1,2,"mat-pseudo-checkbox",1),a.\u0275\u0275projection(1),a.\u0275\u0275elementStart(2,"span",2,0),a.\u0275\u0275projection(4,1),a.\u0275\u0275elementEnd(),a.\u0275\u0275conditionalCreate(5,s,1,1,"mat-pseudo-checkbox",3),a.\u0275\u0275conditionalCreate(6,y,2,1,"span",4),a.\u0275\u0275element(7,"div",5)),g&2&&(a.\u0275\u0275conditional(l.multiple?0:-1),a.\u0275\u0275advance(5),a.\u0275\u0275conditional(!l.multiple&&l.selected&&!l.hideSingleSelectionIndicator?5:-1),a.\u0275\u0275advance(),a.\u0275\u0275conditional(l.group&&l.group._inert?6:-1),a.\u0275\u0275advance(),a.\u0275\u0275property("matRippleTrigger",l._getHostElement())("matRippleDisabled",l.disabled||l.disableRipple))},dependencies:[H,z],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function U(i,f,e){if(e.length){let t=f.toArray(),r=e.toArray(),c=0;for(let s=0;s<i+1;s++)t[s].group&&t[s].group===r[c]&&c++;return c}return 0}function X(i,f,e,t){return i<e?i:i+f>e+t?Math.max(0,i-t+f):e}import*as E from"@angular/core";import"@angular/core";var $=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=E.\u0275\u0275defineService({token:i,factory:i.\u0275fac})}return i})();import{isSignal as De}from"@angular/core";var N=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(f,e,t,r,c){this._defaultMatcher=f,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=c,e?De(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let f=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==f&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(f){if(this.formField&&f?.isSignalErrorState)return f.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return f?.isErrorState(t,e)??!1}};import{BidiModule as Te}from"@angular/cdk/bidi";import*as S from"@angular/core";import"@angular/core";import{BidiModule as Ee}from"@angular/cdk/bidi";import*as k from"@angular/core";import"@angular/core";var J=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=k.\u0275\u0275defineNgModule({type:i});static \u0275inj=k.\u0275\u0275defineInjector({imports:[Ee]})}return i})();var T=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=S.\u0275\u0275defineNgModule({type:i});static \u0275inj=S.\u0275\u0275defineInjector({imports:[W,J,I,Te]})}return i})();import"@angular/cdk/coercion";import"@angular/common";import"@angular/cdk/observers/private";import"@angular/cdk/layout";import"@angular/cdk/private";import"@angular/cdk/observers";var st=new L("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=u(Ye);return()=>Ke(i)}}),ct=new L("MAT_SELECT_CONFIG"),de=new L("MatSelectTrigger"),V=class{source;value;constructor(f,e){this.source=f,this.value=e}},In=(()=>{class i{_viewportRuler=u(qe);_changeDetectorRef=u(Ue);_elementRef=u(Xe);_dir=u(Pe,{optional:!0});_idGenerator=u(Ae);_renderer=u($e);_parentFormField=u(K,{optional:!0});ngControl=u(et,{self:!0,optional:!0});_liveAnnouncer=u(Re);_defaultOptions=u(ct,{optional:!0});_animationsDisabled=w();_popoverLocation;_initialized=new F;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,c=U(e,this.options,this.optionGroups),s=t._getHostElement();e===0&&c===1?r.scrollTop=0:r.scrollTop=X(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new V(this,e)}_scrollStrategyFactory=u(st);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new F;_errorStateTracker;stateChanges=new F;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Je(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(tt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=rt(()=>{let e=this.options;return e?e.changes.pipe(re(e),le(()=>P(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(le(()=>this.optionSelectionChanges))});openedChange=new R;_openedStream=this.openedChange.pipe(se(e=>e),ce(()=>{}));_closedStream=this.openedChange.pipe(se(e=>!e),ce(()=>{}));selectionChange=new R;valueChange=new R;constructor(){let e=u($),t=u(nt,{optional:!0}),r=u(at,{optional:!0}),c=u(new Ze("tabindex"),{optional:!0}),s=u(je,{optional:!0}),y=u(ot,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new N(e,y||this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=c==null?0:parseInt(c)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Le(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(C(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(C(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(re(null),C(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(lt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",c=>{c.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===te||t===ne||t===We||t===Ge,c=t===Z||t===ee,s=this._keyManager;if(!s.isTyping()&&c&&!A(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let y=this.selected;s.onKeydown(e);let m=this.selected;m&&y!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,c=r===te||r===ne,s=t.isTyping();if(c&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===Z||r===ee)&&t.activeItem&&!A(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===ze&&e.ctrlKey){e.preventDefault();let y=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(y?m.select():m.deselect())})}else{let y=t.activeItemIndex;t.onKeydown(e),this._multiple&&c&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==y&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===Be&&!A(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ae?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Fe(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=P(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(C(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),P(...this.options.map(t=>t._stateChanges)).pipe(C(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=it(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["trigger"],t=["panel"],r=[[["mat-select-trigger"]],"*"],c=["mat-select-trigger","*"];function s(d,h){if(d&1&&(n.\u0275\u0275elementStart(0,"span",4),n.\u0275\u0275text(1),n.\u0275\u0275elementEnd()),d&2){let o=n.\u0275\u0275nextContext();n.\u0275\u0275advance(),n.\u0275\u0275textInterpolate(o.placeholder)}}function y(d,h){d&1&&n.\u0275\u0275projection(0)}function m(d,h){if(d&1&&(n.\u0275\u0275elementStart(0,"span",11),n.\u0275\u0275text(1),n.\u0275\u0275elementEnd()),d&2){let o=n.\u0275\u0275nextContext(2);n.\u0275\u0275advance(),n.\u0275\u0275textInterpolate(o.triggerValue)}}function g(d,h){if(d&1&&(n.\u0275\u0275elementStart(0,"span",5),n.\u0275\u0275conditionalCreate(1,y,1,0)(2,m,2,1,"span",11),n.\u0275\u0275elementEnd()),d&2){let o=n.\u0275\u0275nextContext();n.\u0275\u0275advance(),n.\u0275\u0275conditional(o.customTrigger?1:2)}}function l(d,h){if(d&1){let o=n.\u0275\u0275getCurrentView();n.\u0275\u0275elementStart(0,"div",12,1),n.\u0275\u0275listener("keydown",function(b){n.\u0275\u0275restoreView(o);let me=n.\u0275\u0275nextContext();return n.\u0275\u0275resetView(me._handleKeydown(b))}),n.\u0275\u0275projection(2,1),n.\u0275\u0275elementEnd()}if(d&2){let o=n.\u0275\u0275nextContext();n.\u0275\u0275classMap(o.panelClass),n.\u0275\u0275classProp("mat-select-panel-animations-enabled",!o._animationsDisabled)("mat-primary",o._parentFormField?.color==="primary")("mat-accent",o._parentFormField?.color==="accent")("mat-warn",o._parentFormField?.color==="warn")("mat-undefined",!o._parentFormField?.color),n.\u0275\u0275attribute("id",o.id+"-panel")("aria-multiselectable",o.multiple)("aria-label",o.ariaLabel||null)("aria-labelledby",o._getPanelAriaLabelledby())}}return n.\u0275\u0275defineComponent({type:i,selectors:[["mat-select"]],contentQueries:function(h,o,p){if(h&1&&n.\u0275\u0275contentQuery(p,de,5)(p,I,5)(p,O,5),h&2){let b;n.\u0275\u0275queryRefresh(b=n.\u0275\u0275loadQuery())&&(o.customTrigger=b.first),n.\u0275\u0275queryRefresh(b=n.\u0275\u0275loadQuery())&&(o.options=b),n.\u0275\u0275queryRefresh(b=n.\u0275\u0275loadQuery())&&(o.optionGroups=b)}},viewQuery:function(h,o){if(h&1&&n.\u0275\u0275viewQuery(e,5)(t,5)(ie,5),h&2){let p;n.\u0275\u0275queryRefresh(p=n.\u0275\u0275loadQuery())&&(o.trigger=p.first),n.\u0275\u0275queryRefresh(p=n.\u0275\u0275loadQuery())&&(o.panel=p.first),n.\u0275\u0275queryRefresh(p=n.\u0275\u0275loadQuery())&&(o._overlayDir=p.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(h,o){h&1&&n.\u0275\u0275listener("keydown",function(b){return o._handleKeydown(b)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),h&2&&(n.\u0275\u0275attribute("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),n.\u0275\u0275classProp("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",v],disableRipple:[2,"disableRipple","disableRipple",v],tabIndex:[2,"tabIndex","tabIndex",d=>d==null?0:oe(d)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",v],placeholder:"placeholder",required:[2,"required","required",v],multiple:[2,"multiple","multiple",v],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",v],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",oe],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",v]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[n.\u0275\u0275ProvidersFeature([{provide:G,useExisting:i},{provide:M,useExisting:i}]),n.\u0275\u0275NgOnChangesFeature],ngContentSelectors:c,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(h,o){if(h&1&&(n.\u0275\u0275projectionDef(r),n.\u0275\u0275elementStart(0,"div",2,0),n.\u0275\u0275listener("click",function(){return o.open()}),n.\u0275\u0275elementStart(3,"div",3),n.\u0275\u0275conditionalCreate(4,s,2,1,"span",4)(5,g,3,1,"span",5),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(6,"div",6)(7,"div",7),n.\u0275\u0275namespaceSVG(),n.\u0275\u0275elementStart(8,"svg",8),n.\u0275\u0275element(9,"path",9),n.\u0275\u0275elementEnd()()()(),n.\u0275\u0275template(10,l,3,16,"ng-template",10),n.\u0275\u0275listener("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(b){return o._handleOverlayKeydown(b)})),h&2){let p=n.\u0275\u0275reference(1);n.\u0275\u0275advance(3),n.\u0275\u0275attribute("id",o._valueId),n.\u0275\u0275advance(),n.\u0275\u0275conditional(o.empty?4:5),n.\u0275\u0275advance(6),n.\u0275\u0275property("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||p)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[ae,ie],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})(),Nn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=n.\u0275\u0275defineDirective({type:i,selectors:[["mat-select-trigger"]],features:[n.\u0275\u0275ProvidersFeature([{provide:de,useExisting:i}])]})}return i})(),Dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=n.\u0275\u0275defineNgModule({type:i});static \u0275inj=n.\u0275\u0275defineInjector({imports:[He,T,Ve,Qe,j,T]})}return i})();export{ct as MAT_SELECT_CONFIG,st as MAT_SELECT_SCROLL_STRATEGY,de as MAT_SELECT_TRIGGER,he as MatError,be as MatFormField,ue as MatHint,pe as MatLabel,Ne as MatOptgroup,I as MatOption,fe as MatPrefix,In as MatSelect,V as MatSelectChange,Dn as MatSelectModule,Nn as MatSelectTrigger,ge as MatSuffix};
