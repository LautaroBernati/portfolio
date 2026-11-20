if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import{c as Q,d as I}from"@nf-internal/chunk-DBFJEG5J";import{a as B}from"@nf-internal/chunk-XECEUOJY";import{b as w}from"@nf-internal/chunk-UAU6UPPG";import"@nf-internal/chunk-BXKJ7O3J";import*as t from"@angular/core";import{InjectionToken as C,inject as l,TemplateRef as E,ViewContainerRef as bt,booleanAttribute as g,ElementRef as T,ChangeDetectorRef as W,NgZone as P,Injector as K,Renderer2 as Y,EventEmitter as y,afterNextRender as F,numberAttribute as M,QueryList as mt,computed as pt,signal as H,HostAttributeToken as ht}from"@angular/core";import{CdkPortal as ut,TemplatePortal as _t,CdkPortalOutlet as U}from"@angular/cdk/portal";import{Subject as L,of as gt,merge as z,EMPTY as ft,Observable as vt,timer as yt,Subscription as x,BehaviorSubject as kt}from"rxjs";import{_CdkPrivateStyleLoader as X}from"@angular/cdk/private";import{FocusKeyManager as xt,_IdGenerator as $,CdkMonitorFocus as Ct,FocusMonitor as Tt}from"@angular/cdk/a11y";import{Directionality as J,BidiModule as wt}from"@angular/cdk/bidi";import{hasModifierKey as It,SPACE as O,ENTER as tt}from"@angular/cdk/keycodes";import{SharedResizeObserver as St}from"@angular/cdk/observers/private";import{Platform as et}from"@angular/cdk/platform";import{ViewportRuler as Dt,CdkScrollable as Mt}from"@angular/cdk/scrolling";import{debounceTime as Lt,takeUntil as k,startWith as S,switchMap as Nt,skip as Pt,filter as Rt}from"rxjs/operators";import{CdkObserveContent as at}from"@angular/cdk/observers";import"@angular/cdk/layout";import"@angular/cdk/coercion";var Bt=new C("MatTabContent"),At=(()=>{class n{template=l(E);static \u0275fac=function(a){return new(a||n)};static \u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","matTabContent",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:Bt,useExisting:n}])]})}return n})(),Et=new C("MatTabLabel"),nt=new C("MAT_TAB"),Ft=(()=>{class n extends ut{_closestTab=l(nt,{optional:!0});static \u0275fac=(()=>{let e;return function(i){return(e||(e=t.\u0275\u0275getInheritedFactory(n)))(i||n)}})();static \u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:Et,useExisting:n}]),t.\u0275\u0275InheritDefinitionFeature]})}return n})(),it=new C("MAT_TAB_GROUP"),Ht=(()=>{class n{_viewContainerRef=l(bt);_closestTabGroup=l(it,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new L;position=null;origin=null;isActive=!1;constructor(){l(X).load(B)}ngOnChanges(e){(Object.hasOwn(e,"textLabel")||Object.hasOwn(e,"disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new _t(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=(function(){let e=["*"];function a(i,o){i&1&&t.\u0275\u0275projection(0)}return t.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab"]],contentQueries:function(o,b,u){if(o&1&&t.\u0275\u0275contentQuery(u,Ft,5)(u,At,7,E),o&2){let _;t.\u0275\u0275queryRefresh(_=t.\u0275\u0275loadQuery())&&(b.templateLabel=_.first),t.\u0275\u0275queryRefresh(_=t.\u0275\u0275loadQuery())&&(b._explicitContent=_.first)}},viewQuery:function(o,b){if(o&1&&t.\u0275\u0275viewQuery(E,7),o&2){let u;t.\u0275\u0275queryRefresh(u=t.\u0275\u0275loadQuery())&&(b._implicitContent=u.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(o,b){o&2&&t.\u0275\u0275attribute("id",null)},inputs:{disabled:[2,"disabled","disabled",g],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[t.\u0275\u0275ProvidersFeature([{provide:nt,useExisting:n}]),t.\u0275\u0275NgOnChangesFeature],ngContentSelectors:e,decls:1,vars:0,template:function(o,b){o&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275domTemplate(0,a,1,0,"ng-template"))},encapsulation:2,changeDetection:1})})()}return n})(),A="mdc-tab-indicator--active",G="mdc-tab-indicator--no-transition",N=class{_items;_currentItem;constructor(v){this._items=v}hide(){this._items.forEach(v=>v.deactivateInkBar()),this._currentItem=void 0}alignToElement(v){let e=this._items.find(i=>i.elementRef.nativeElement===v),a=this._currentItem;if(e!==a&&(a?.deactivateInkBar(),e)){let i=a?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},ot=(()=>{class n{_elementRef=l(T);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let a=this._elementRef.nativeElement;if(!e||!a.getBoundingClientRect||!this._inkBarContentElement){a.classList.add(A);return}let i=a.getBoundingClientRect(),o=e.width/i.width,b=e.left-i.left;a.classList.add(G),this._inkBarContentElement.style.setProperty("transform",`translateX(${b}px) scaleX(${o})`),a.getBoundingClientRect(),a.classList.remove(G),a.classList.add(A),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(A)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,a=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");a.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",a.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(a){return new(a||n)};static \u0275dir=t.\u0275\u0275defineDirective({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",g]}})}return n})(),ve=new C("MatInkBarPositioner",{providedIn:"root",factory:()=>v=>({left:v?(v.offsetLeft||0)+"px":"0",width:v?(v.offsetWidth||0)+"px":"0"})}),rt=(()=>{class n extends ot{elementRef=l(T);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(i){return(e||(e=t.\u0275\u0275getInheritedFactory(n)))(i||n)}})();static \u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(a,i){a&2&&(t.\u0275\u0275attribute("aria-disabled",!!i.disabled),t.\u0275\u0275classProp("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",g]},features:[t.\u0275\u0275InheritDefinitionFeature]})}return n})(),q={passive:!0},zt=650,Ot=100;function D(n){let v=n+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(v)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(v)?v:""}var st=(()=>{class n{_elementRef=l(T);_changeDetectorRef=l(W);_viewportRuler=l(Dt);_dir=l(J,{optional:!0});_ngZone=l(P);_platform=l(et);_sharedResizeObserver=l(St);_injector=l(K);_renderer=l(Y);_animationsDisabled=w();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new L;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new L;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let a=isNaN(e)?0:e;this._selectedIndex!=a&&(this._selectedIndexChanged=!0,this._selectedIndex=a,this._keyManager&&this._keyManager.updateActiveItem(a))}_selectedIndex=0;selectFocusedIndex=new y;indexFocused=new y;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),q),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),q))}ngAfterContentInit(){let e=this._dir?this._dir.change:gt("ltr"),a=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Lt(32),k(this._destroyed)),i=this._viewportRuler.change(150).pipe(k(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new xt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),F(o,{injector:this._injector}),z(e,i,a,this._items.changes,this._itemsResized()).pipe(k(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(b=>{this.indexFocused.emit(b),this._setTabFocus(b)})}_itemsResized(){return typeof ResizeObserver!="function"?ft:this._items.changes.pipe(S(this._items),Nt(e=>new vt(a=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(o=>a.next(o));return e.forEach(o=>i.observe(o.elementRef.nativeElement)),()=>{i.disconnect()}}))),Pt(1),Rt(e=>e.some(a=>a.contentRect.width>0&&a.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!It(e))switch(e.keyCode){case tt:case O:if(this.focusIndex!==this.selectedIndex){let a=this._items.get(this.focusIndex);a&&!a.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let a=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?a.scrollLeft=0:a.scrollLeft=a.scrollWidth-a.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,a=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(a)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let a=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*a/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let a=this._items?this._items.toArray()[e]:null;if(!a)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:b}=a.elementRef.nativeElement,u,_;this._getLayoutDirection()=="ltr"?(u=o,_=u+b):(_=this._tabListInner.nativeElement.offsetWidth-o,u=_-b);let p=this.scrollDistance,r=this.scrollDistance+i;u<p?this.scrollDistance-=p-u:_>r&&(this.scrollDistance+=Math.min(_-r,u-p))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,a=this._elementRef.nativeElement.offsetWidth,i=e-a>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,a=this._tabListContainer.nativeElement.offsetWidth;return e-a||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,a=e?e.elementRef.nativeElement:null;a?this._inkBar.alignToElement(a):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,a){a&&a.button!=null&&a.button!==0||(this._stopInterval(),yt(zt,Ot).pipe(k(z(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:o}=this._scrollHeader(e);(o===0||o>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let a=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(a,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:a,distance:this._scrollDistance}}static \u0275fac=function(a){return new(a||n)};static \u0275dir=t.\u0275\u0275defineDirective({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",g],selectedIndex:[2,"selectedIndex","selectedIndex",M]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),Vt=(()=>{class n extends st{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new N(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=t.\u0275\u0275getInheritedFactory(n)))(i||n)}})();static \u0275cmp=(function(){let e=["tabListContainer"],a=["tabList"],i=["tabListInner"],o=["nextPaginator"],b=["previousPaginator"];return t.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab-header"]],contentQueries:function(p,r,s){if(p&1&&t.\u0275\u0275contentQuery(s,rt,4),p&2){let c;t.\u0275\u0275queryRefresh(c=t.\u0275\u0275loadQuery())&&(r._items=c)}},viewQuery:function(p,r){if(p&1&&t.\u0275\u0275viewQuery(e,7)(a,7)(i,7)(o,5)(b,5),p&2){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._tabListContainer=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._tabList=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._tabListInner=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._nextPaginator=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._previousPaginator=s.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(p,r){p&2&&t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",g]},features:[t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:["*"],decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(p,r){p&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",5,0),t.\u0275\u0275listener("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(c){return r._handlePaginatorPress("before",c)})("touchend",function(){return r._stopInterval()}),t.\u0275\u0275element(2,"div",6),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",7,1),t.\u0275\u0275listener("keydown",function(c){return r._handleKeydown(c)}),t.\u0275\u0275elementStart(5,"div",8,2),t.\u0275\u0275listener("cdkObserveContent",function(){return r._onContentChanges()}),t.\u0275\u0275elementStart(7,"div",9,3),t.\u0275\u0275projection(9),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(10,"div",10,4),t.\u0275\u0275listener("mousedown",function(c){return r._handlePaginatorPress("after",c)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),t.\u0275\u0275element(12,"div",6),t.\u0275\u0275elementEnd()),p&2&&(t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),t.\u0275\u0275property("matRippleDisabled",r._disableScrollBefore||r.disableRipple),t.\u0275\u0275advance(3),t.\u0275\u0275classProp("_mat-animation-noopable",r._animationsDisabled),t.\u0275\u0275advance(2),t.\u0275\u0275attribute("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),t.\u0275\u0275advance(5),t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),t.\u0275\u0275property("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[I,at],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return n})(),dt=new C("MAT_TABS_CONFIG"),Z=(()=>{class n extends U{_host=l(V);_ngZone=l(P);_centeringSub=x.EMPTY;_leavingSub=x.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(S(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=t.\u0275\u0275getInheritedFactory(n)))(i||n)}})();static \u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","matTabBodyHost",""]],features:[t.\u0275\u0275InheritDefinitionFeature]})}return n})(),V=(()=>{class n{_elementRef=l(T);_dir=l(J,{optional:!0});_ngZone=l(P);_injector=l(K);_renderer=l(Y);_diAnimationsDisabled=w();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=x.EMPTY;_position;_previousPosition;_onCentering=new y;_beforeCentering=new y;_afterLeavingCenter=new y;_onCentered=new y(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=l(W);this._dirChangeSubscription=this._dir.change.subscribe(a=>{this._computePositionAnimationState(a),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),F(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,a=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",a),this._renderer.listen(e,"transitioncancel",a)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),F(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=(function(){let e=["content"];function a(i,o){}return t.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab-body"]],viewQuery:function(o,b){if(o&1&&t.\u0275\u0275viewQuery(Z,5)(e,5),o&2){let u;t.\u0275\u0275queryRefresh(u=t.\u0275\u0275loadQuery())&&(b._portalHost=u.first),t.\u0275\u0275queryRefresh(u=t.\u0275\u0275loadQuery())&&(b._contentElement=u.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(o,b){o&2&&t.\u0275\u0275attribute("inert",b._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(o,b){o&1&&(t.\u0275\u0275elementStart(0,"div",1,0),t.\u0275\u0275template(2,a,0,0,"ng-template",2),t.\u0275\u0275elementEnd()),o&2&&t.\u0275\u0275classProp("mat-tab-body-content-left",b._position==="left")("mat-tab-body-content-right",b._position==="right")("mat-tab-body-content-can-animate",b._position==="center"||b._previousPosition==="center")},dependencies:[Z,Mt],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return n})(),ye=(()=>{class n{_elementRef=l(T);_changeDetectorRef=l(W);_ngZone=l(P);_tabsSubscription=x.EMPTY;_tabLabelSubscription=x.EMPTY;_tabBodySubscription=x.EMPTY;_diAnimationsDisabled=w();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new mt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=D(e.body),this._headerAnimationDuration=D(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=D(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let a=this._elementRef.nativeElement.classList;a.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&a.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new y;focusChange=new y;animationDone=new y;selectedTabChange=new y(!0);_groupId;_isServer=!l(et).isBrowser;constructor(){let e=l(dt,{optional:!0});this._groupId=l($).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let a=this._selectedIndex==null;if(!a){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,o)=>i.isActive=o===e),a||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((a,i)=>{a.position=i-e,this._selectedIndex!=null&&a.position==0&&!a.origin&&(a.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let a=this._tabs.toArray(),i;for(let o=0;o<a.length;o++)if(a[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,i=a[o];break}!i&&a[e]&&Promise.resolve().then(()=>{a[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(S(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(a=>a._closestTabGroup===this||!a._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let a=this._tabHeader;a&&(a.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let a=new j;return a.index=e,this._tabs&&this._tabs.length&&(a.tab=this._tabs.toArray()[e]),a}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=z(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,a){return e.id||`${this._groupId}-label-${a}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let a=this._tabBodyWrapper.nativeElement;a.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(a.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,a,i){a.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){let a=this._lastFocusedTabIndex??this.selectedIndex;return e===a?0:-1}_tabFocusChanged(e,a){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=a)}_bodyCentered(e){e&&this._tabBodies?.forEach((a,i)=>a._setActiveClass(i===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=(function(){let e=["tabBodyWrapper"],a=["tabHeader"],i=["*"];function o(s,c){}function b(s,c){if(s&1&&t.\u0275\u0275template(0,o,0,0,"ng-template",12),s&2){let d=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275property("cdkPortalOutlet",d.templateLabel)}}function u(s,c){if(s&1&&t.\u0275\u0275text(0),s&2){let d=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275textInterpolate(d.textLabel)}}function _(s,c){if(s&1){let d=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",7,2),t.\u0275\u0275listener("click",function(){let m=t.\u0275\u0275restoreView(d),f=m.$implicit,R=m.$index,lt=t.\u0275\u0275nextContext(),ct=t.\u0275\u0275reference(1);return t.\u0275\u0275resetView(lt._handleClick(f,ct,R))})("cdkFocusChange",function(m){let f=t.\u0275\u0275restoreView(d).$index,R=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(R._tabFocusChanged(m,f))}),t.\u0275\u0275element(2,"span",8)(3,"div",9),t.\u0275\u0275elementStart(4,"span",10)(5,"span",11),t.\u0275\u0275conditionalCreate(6,b,1,1,null,12)(7,u,1,1),t.\u0275\u0275elementEnd()()()}if(s&2){let d=c.$implicit,h=c.$index,m=t.\u0275\u0275reference(1),f=t.\u0275\u0275nextContext();t.\u0275\u0275classMap(d.labelClass),t.\u0275\u0275classProp("mdc-tab--active",f.selectedIndex===h),t.\u0275\u0275property("id",f._getTabLabelId(d,h))("disabled",d.disabled)("fitInkBarToContent",f.fitInkBarToContent),t.\u0275\u0275attribute("tabIndex",f._getTabIndex(h))("aria-posinset",h+1)("aria-setsize",f._tabs.length)("aria-controls",f._getTabContentId(h))("aria-selected",f.selectedIndex===h)("aria-label",d.ariaLabel||null)("aria-labelledby",!d.ariaLabel&&d.ariaLabelledby?d.ariaLabelledby:null),t.\u0275\u0275advance(3),t.\u0275\u0275property("matRippleTrigger",m)("matRippleDisabled",d.disabled||f.disableRipple),t.\u0275\u0275advance(3),t.\u0275\u0275conditional(d.templateLabel?6:7)}}function p(s,c){s&1&&t.\u0275\u0275projection(0)}function r(s,c){if(s&1){let d=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"mat-tab-body",13),t.\u0275\u0275listener("_onCentered",function(){t.\u0275\u0275restoreView(d);let m=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(m._removeTabBodyWrapperHeight())})("_onCentering",function(m){t.\u0275\u0275restoreView(d);let f=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(f._setTabBodyWrapperHeight(m))})("_beforeCentering",function(m){t.\u0275\u0275restoreView(d);let f=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(f._bodyCentered(m))}),t.\u0275\u0275elementEnd()}if(s&2){let d=c.$implicit,h=c.$index,m=t.\u0275\u0275nextContext();t.\u0275\u0275classMap(d.bodyClass),t.\u0275\u0275property("id",m._getTabContentId(h))("content",d.content)("position",d.position)("animationDuration",m._bodyAnimationDuration)("preserveContent",m.preserveContent),t.\u0275\u0275attribute("tabindex",m.contentTabIndex!=null&&m.selectedIndex===h?m.contentTabIndex:null)("aria-labelledby",m._getTabLabelId(d,h))("aria-hidden",m.selectedIndex!==h)}}return t.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab-group"]],contentQueries:function(c,d,h){if(c&1&&t.\u0275\u0275contentQuery(h,Ht,5),c&2){let m;t.\u0275\u0275queryRefresh(m=t.\u0275\u0275loadQuery())&&(d._allTabs=m)}},viewQuery:function(c,d){if(c&1&&t.\u0275\u0275viewQuery(e,5)(a,5)(V,5),c&2){let h;t.\u0275\u0275queryRefresh(h=t.\u0275\u0275loadQuery())&&(d._tabBodyWrapper=h.first),t.\u0275\u0275queryRefresh(h=t.\u0275\u0275loadQuery())&&(d._tabHeader=h.first),t.\u0275\u0275queryRefresh(h=t.\u0275\u0275loadQuery())&&(d._tabBodies=h)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(c,d){c&2&&(t.\u0275\u0275attribute("mat-align-tabs",d.alignTabs),t.\u0275\u0275classMap("mat-"+(d.color||"primary")),t.\u0275\u0275styleProp("--%NS%mat-tab-body-animation-duration",d._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",d._headerAnimationDuration),t.\u0275\u0275classProp("mat-mdc-tab-group-dynamic-height",d.dynamicHeight)("mat-mdc-tab-group-inverted-header",d.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",d.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",g],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",g],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",g],selectedIndex:[2,"selectedIndex","selectedIndex",M],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",M],disablePagination:[2,"disablePagination","disablePagination",g],disableRipple:[2,"disableRipple","disableRipple",g],preserveContent:[2,"preserveContent","preserveContent",g],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[t.\u0275\u0275ProvidersFeature([{provide:it,useExisting:n}])],ngContentSelectors:i,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(c,d){c&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"mat-tab-header",3,0),t.\u0275\u0275listener("indexFocused",function(m){return d._focusChanged(m)})("selectFocusedIndex",function(m){return d.selectedIndex=m}),t.\u0275\u0275repeaterCreate(2,_,8,17,"div",4,t.\u0275\u0275repeaterTrackByIdentity),t.\u0275\u0275elementEnd(),t.\u0275\u0275conditionalCreate(4,p,1,0),t.\u0275\u0275elementStart(5,"div",5,1),t.\u0275\u0275repeaterCreate(7,r,1,10,"mat-tab-body",6,t.\u0275\u0275repeaterTrackByIdentity),t.\u0275\u0275elementEnd()),c&2&&(t.\u0275\u0275property("selectedIndex",d.selectedIndex||0)("disableRipple",d.disableRipple)("disablePagination",d.disablePagination),t.\u0275\u0275ariaProperty("aria-label",d.ariaLabel)("aria-labelledby",d.ariaLabelledby),t.\u0275\u0275advance(2),t.\u0275\u0275repeater(d._tabs),t.\u0275\u0275advance(2),t.\u0275\u0275conditional(d._isServer?4:-1),t.\u0275\u0275advance(),t.\u0275\u0275classProp("_mat-animation-noopable",d._bodyAnimationsDisabled()),t.\u0275\u0275advance(2),t.\u0275\u0275repeater(d._tabs))},dependencies:[Vt,rt,Ct,I,U,V],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return n})(),j=class{index;tab},jt=(()=>{class n extends st{_focusedItem=H(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new kt(!1);stretchTabs=!0;animationDuration="";_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let a=this._elementRef.nativeElement.classList;a.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&a.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=H(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=l(dt,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new N(this._items),this._items.changes.pipe(S(null),k(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(S(null),k(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let a=0;a<e.length;a++)if(e[a].active){this.selectedIndex=a,this.tabPanel&&(this.tabPanel._activeTabId=e[a].id),this._focusedItem.set(e[a]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(e){return this._keyManager?.activeItem===e}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=(function(){let e=["tabListContainer"],a=["tabList"],i=["tabListInner"],o=["nextPaginator"],b=["previousPaginator"];return t.\u0275\u0275defineComponent({type:n,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(p,r,s){if(p&1&&t.\u0275\u0275contentQuery(s,Wt,5),p&2){let c;t.\u0275\u0275queryRefresh(c=t.\u0275\u0275loadQuery())&&(r._items=c)}},viewQuery:function(p,r){if(p&1&&t.\u0275\u0275viewQuery(e,7)(a,7)(i,7)(o,5)(b,5),p&2){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._tabListContainer=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._tabList=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._tabListInner=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._nextPaginator=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(r._previousPaginator=s.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(p,r){p&2&&(t.\u0275\u0275attribute("role",r._getRole()),t.\u0275\u0275styleProp("--%NS%mat-tab-header-animation-duration",r.animationDuration),t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",r.stretchTabs)("mat-primary",r.color!=="warn"&&r.color!=="accent")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("_mat-animation-noopable",r._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",g],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",g],animationDuration:[2,"animationDuration","animationDuration",D],backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",g],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:["*"],decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(p,r){p&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",5,0),t.\u0275\u0275listener("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(c){return r._handlePaginatorPress("before",c)})("touchend",function(){return r._stopInterval()}),t.\u0275\u0275element(2,"div",6),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",7,1),t.\u0275\u0275listener("keydown",function(c){return r._handleKeydown(c)}),t.\u0275\u0275elementStart(5,"div",8,2),t.\u0275\u0275listener("cdkObserveContent",function(){return r._onContentChanges()}),t.\u0275\u0275elementStart(7,"div",9,3),t.\u0275\u0275projection(9),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(10,"div",10,4),t.\u0275\u0275listener("mousedown",function(c){return r._handlePaginatorPress("after",c)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),t.\u0275\u0275element(12,"div",6),t.\u0275\u0275elementEnd()),p&2&&(t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),t.\u0275\u0275property("matRippleDisabled",r._disableScrollBefore||r.disableRipple),t.\u0275\u0275advance(10),t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),t.\u0275\u0275property("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[I,at],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})})()}return n})(),Wt=(()=>{class n extends ot{_tabNavBar=l(jt);elementRef=l(T);_focusMonitor=l(Tt);_destroyed=new L;_isActive=!1;_tabIndex=pt(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=H(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=l($).getId("mat-tab-link-");constructor(){super(),l(X).load(B);let e=l(Q,{optional:!0}),a=l(new ht("tabindex"),{optional:!0});this.rippleConfig=e||{},this.tabIndex=a==null?0:parseInt(a)||0,w()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(k(this._destroyed)).subscribe(i=>{this.fitInkBarToContent=i})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===O||e.keyCode===tt)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===O&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=(function(){return t.\u0275\u0275defineComponent({type:n,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(i,o){i&1&&t.\u0275\u0275listener("focus",function(){return o._handleFocus()})("keydown",function(u){return o._handleKeydown(u)}),i&2&&(t.\u0275\u0275attribute("aria-controls",o._getAriaControls())("aria-current",o._getAriaCurrent())("aria-disabled",o.disabled)("aria-selected",o._getAriaSelected())("id",o.id)("tabIndex",o._tabIndex())("role",o._getRole()),t.\u0275\u0275classProp("mat-mdc-tab-disabled",o.disabled)("mdc-tab--active",o.active))},inputs:{active:[2,"active","active",g],disabled:[2,"disabled","disabled",g],disableRipple:[2,"disableRipple","disableRipple",g],tabIndex:[2,"tabIndex","tabIndex",a=>a==null?0:M(a)],id:"id"},exportAs:["matTabLink"],features:[t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:["*"],decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(i,o){i&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275element(0,"span",0)(1,"div",1),t.\u0275\u0275elementStart(2,"span",2)(3,"span",3),t.\u0275\u0275projection(4),t.\u0275\u0275elementEnd()()),i&2&&(t.\u0275\u0275advance(),t.\u0275\u0275property("matRippleTrigger",o.elementRef.nativeElement)("matRippleDisabled",o.rippleDisabled))},dependencies:[I],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})})()}return n})(),ke=(()=>{class n{id=l($).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(a){return new(a||n)};static \u0275cmp=(function(){return t.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(i,o){i&2&&t.\u0275\u0275attribute("aria-labelledby",o._activeTabId)("id",o.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2})})()}return n})(),xe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=t.\u0275\u0275defineNgModule({type:n});static \u0275inj=t.\u0275\u0275defineInjector({imports:[wt]})}return n})();export{nt as MAT_TAB,dt as MAT_TABS_CONFIG,Bt as MAT_TAB_CONTENT,it as MAT_TAB_GROUP,Et as MAT_TAB_LABEL,N as MatInkBar,st as MatPaginatedTabHeader,Ht as MatTab,V as MatTabBody,Z as MatTabBodyPortal,j as MatTabChangeEvent,At as MatTabContent,ye as MatTabGroup,Vt as MatTabHeader,Ft as MatTabLabel,rt as MatTabLabelWrapper,Wt as MatTabLink,jt as MatTabNav,ke as MatTabNavPanel,xe as MatTabsModule,ve as _MAT_INK_BAR_POSITIONER};
