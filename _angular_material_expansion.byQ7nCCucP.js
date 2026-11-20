if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import{a as f}from"@nf-internal/chunk-XECEUOJY";import{b as u}from"@nf-internal/chunk-UAU6UPPG";import"@nf-internal/chunk-BXKJ7O3J";import*as n from"@angular/core";import{InjectionToken as g,inject as r,TemplateRef as E,ViewContainerRef as P,DOCUMENT as C,NgZone as S,ElementRef as y,Renderer2 as N,EventEmitter as b,booleanAttribute as v,ChangeDetectorRef as A,HostAttributeToken as k,numberAttribute as T,QueryList as D}from"@angular/core";import{CdkAccordionItem as H,CdkAccordion as I,CdkAccordionModule as O}from"@angular/cdk/accordion";import{UniqueSelectionDispatcher as z}from"@angular/cdk/collections";import{TemplatePortal as F,CdkPortalOutlet as R,PortalModule as V}from"@angular/cdk/portal";import{_IdGenerator as j,FocusMonitor as Q,FocusKeyManager as B}from"@angular/cdk/a11y";import{Subject as L,Subscription as W,EMPTY as Z,merge as q}from"rxjs";import{startWith as _,filter as m,take as K}from"rxjs/operators";import{ENTER as X,hasModifierKey as U,SPACE as G}from"@angular/cdk/keycodes";import{_CdkPrivateStyleLoader as Y}from"@angular/cdk/private";import{BidiModule as $}from"@angular/cdk/bidi";import"@angular/cdk/layout";var x=new g("MAT_ACCORDION"),w=new g("MAT_EXPANSION_PANEL"),J=(()=>{class a{_template=r(E);_expansionPanel=r(w,{optional:!0});static \u0275fac=function(t){return new(t||a)};static \u0275dir=n.\u0275\u0275defineDirective({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),M=new g("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),nn=(()=>{class a extends H{_viewContainerRef=r(P);_animationsDisabled=u();_document=r(C);_ngZone=r(S);_elementRef=r(y);_renderer=r(N);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new b;afterCollapse=new b;_inputChanges=new L;accordion=r(x,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=r(j).getId("mat-expansion-panel-header-");constructor(){super();let e=r(M,{optional:!0});this._expansionDispatcher=r(z),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(_(null),m(()=>this.expanded&&!this._portal),K(1)).subscribe(()=>{this._portal=new F(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){let e=["body"],t=["bodyWrapper"],l=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],d=["mat-expansion-panel-header","*","mat-action-row"];function o(i,p){}return n.\u0275\u0275defineComponent({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(p,s,c){if(p&1&&n.\u0275\u0275contentQuery(c,J,5),p&2){let h;n.\u0275\u0275queryRefresh(h=n.\u0275\u0275loadQuery())&&(s._lazyContent=h.first)}},viewQuery:function(p,s){if(p&1&&n.\u0275\u0275viewQuery(e,5)(t,5),p&2){let c;n.\u0275\u0275queryRefresh(c=n.\u0275\u0275loadQuery())&&(s._body=c.first),n.\u0275\u0275queryRefresh(c=n.\u0275\u0275loadQuery())&&(s._bodyWrapper=c.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(p,s){p&2&&n.\u0275\u0275classProp("mat-expanded",s.expanded)("mat-expansion-panel-spacing",s._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",v],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[n.\u0275\u0275ProvidersFeature([{provide:x,useValue:void 0},{provide:w,useExisting:a}]),n.\u0275\u0275InheritDefinitionFeature,n.\u0275\u0275NgOnChangesFeature],ngContentSelectors:d,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(p,s){p&1&&(n.\u0275\u0275projectionDef(l),n.\u0275\u0275projection(0),n.\u0275\u0275elementStart(1,"div",2,0)(3,"div",3,1)(5,"div",4),n.\u0275\u0275projection(6,1),n.\u0275\u0275template(7,o,0,0,"ng-template",5),n.\u0275\u0275elementEnd(),n.\u0275\u0275projection(8,2),n.\u0275\u0275elementEnd()()),p&2&&(n.\u0275\u0275advance(),n.\u0275\u0275attribute("inert",s.expanded?null:""),n.\u0275\u0275advance(2),n.\u0275\u0275property("id",s.id),n.\u0275\u0275attribute("aria-labelledby",s._headerId),n.\u0275\u0275advance(4),n.\u0275\u0275property("cdkPortalOutlet",s._portal))},dependencies:[R],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})})()}return a})(),Pn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=n.\u0275\u0275defineDirective({type:a,selectors:[["mat-action-row"]],hostAttrs:[1,"mat-action-row"]})}return a})(),en=(()=>{class a{panel=r(nn,{host:!0});_element=r(y);_focusMonitor=r(Q);_changeDetectorRef=r(A);_parentChangeSubscription=W.EMPTY;constructor(){r(Y).load(f);let e=this.panel,t=r(M,{optional:!0}),l=r(new k("tabindex"),{optional:!0}),d=e.accordion?e.accordion._stateChanges.pipe(m(o=>!!(o.hideToggle||o.togglePosition))):Z;this.tabIndex=parseInt(l||"")||0,this._parentChangeSubscription=q(e.opened,e.closed,d,e._inputChanges.pipe(m(o=>!!(o.hideToggle||o.disabled||o.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(m(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case G:case X:U(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){let e=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],t=["mat-panel-title","mat-panel-description","*"];function l(d,o){d&1&&(n.\u0275\u0275domElementStart(0,"span",1),n.\u0275\u0275namespaceSVG(),n.\u0275\u0275domElementStart(1,"svg",2),n.\u0275\u0275domElement(2,"path",3),n.\u0275\u0275domElementEnd()())}return n.\u0275\u0275defineComponent({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(o,i){o&1&&n.\u0275\u0275listener("click",function(){return i._toggle()})("keydown",function(s){return i._keydown(s)}),o&2&&(n.\u0275\u0275attribute("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),n.\u0275\u0275styleProp("height",i._getHeaderHeight()),n.\u0275\u0275classProp("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",d=>d==null?0:T(d)]},ngContentSelectors:t,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(o,i){o&1&&(n.\u0275\u0275projectionDef(e),n.\u0275\u0275domElementStart(0,"span",0),n.\u0275\u0275projection(1),n.\u0275\u0275projection(2,1),n.\u0275\u0275projection(3,2),n.\u0275\u0275domElementEnd(),n.\u0275\u0275conditionalCreate(4,l,3,0,"span",1)),o&2&&(n.\u0275\u0275classProp("mat-content-hide-toggle",!i._showToggle()),n.\u0275\u0275advance(4),n.\u0275\u0275conditional(i._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})})()}return a})(),Cn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=n.\u0275\u0275defineDirective({type:a,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return a})(),Sn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=n.\u0275\u0275defineDirective({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})(),Nn=(()=>{class a extends I{_keyManager;_ownHeaders=new D;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(_(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new B(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(l){return(e||(e=n.\u0275\u0275getInheritedFactory(a)))(l||a)}})();static \u0275dir=n.\u0275\u0275defineDirective({type:a,selectors:[["mat-accordion"]],contentQueries:function(t,l,d){if(t&1&&n.\u0275\u0275contentQuery(d,en,5),t&2){let o;n.\u0275\u0275queryRefresh(o=n.\u0275\u0275loadQuery())&&(l._headers=o)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,l){t&2&&n.\u0275\u0275classProp("mat-accordion-multi",l.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",v],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[n.\u0275\u0275ProvidersFeature([{provide:x,useExisting:a}]),n.\u0275\u0275InheritDefinitionFeature]})}return a})(),An=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=n.\u0275\u0275defineNgModule({type:a});static \u0275inj=n.\u0275\u0275defineInjector({imports:[O,V,$]})}return a})();export{x as MAT_ACCORDION,w as MAT_EXPANSION_PANEL,M as MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,Nn as MatAccordion,An as MatExpansionModule,nn as MatExpansionPanel,Pn as MatExpansionPanelActionRow,J as MatExpansionPanelContent,Cn as MatExpansionPanelDescription,en as MatExpansionPanelHeader,Sn as MatExpansionPanelTitle};
