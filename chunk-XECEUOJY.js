if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import*as t from"@angular/core";import"@angular/core";var c=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,e){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return o})();export{c as a};
