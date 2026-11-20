if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import*as r from"@angular/core";import{SecurityContext as a}from"@angular/core";var y=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=r.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,p){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})(),i;function d(){if(i===void 0&&(i=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{i=n.trustedTypes.createPolicy("angular#components",{createHTML:e=>e})}catch(e){console.error(e)}}return i}function l(n){return d()?.createHTML(n)||n}function m(n,e,o){let t=o.sanitize(a.HTML,e);n.innerHTML=l(t||"")}export{y as a,l as b,m as c};
