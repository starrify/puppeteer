/*! For license information please see 89e603d4.341dd2be.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85617],{15129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(85893),s=r(11151);const a={sidebar_label:"Page.setUserAgent"},i="Page.setUserAgent() method",o={id:"api/puppeteer.page.setuseragent",title:"Page.setUserAgent() method",description:"Signature:",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.page.setuseragent.md",sourceDirName:"api",slug:"/api/puppeteer.page.setuseragent",permalink:"/api/puppeteer.page.setuseragent",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"Page.setUserAgent"},sidebar:"api",previous:{title:"Page.setRequestInterception",permalink:"/api/puppeteer.page.setrequestinterception"},next:{title:"Page.setViewport",permalink:"/api/puppeteer.page.setviewport"}},p={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pagesetuseragent-method",children:"Page.setUserAgent() method"}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setUserAgent(\n    userAgent: string,\n    userAgentMetadata?: Protocol.Emulation.UserAgentMetadata\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"userAgent"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Specific user agent to use in this page"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"userAgentMetadata"}),(0,n.jsx)(t.td,{children:"Protocol.Emulation.UserAgentMetadata"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"(Optional)"})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.p,{children:"Promise which resolves when the user agent is set."})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!p.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:c,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(67294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);