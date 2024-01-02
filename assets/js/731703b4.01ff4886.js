/*! For license information please see 731703b4.01ff4886.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49620],{69708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(85893),s=r(11151);const a={sidebar_label:"Frame.type"},i="Frame.type() method",o={id:"api/puppeteer.frame.type",title:"Frame.type() method",description:"Sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.frame.type.md",sourceDirName:"api",slug:"/api/puppeteer.frame.type",permalink:"/api/puppeteer.frame.type",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"Frame.type"},sidebar:"api",previous:{title:"Frame.title",permalink:"/api/puppeteer.frame.title"},next:{title:"Frame.url",permalink:"/api/puppeteer.frame.url"}},l={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frametype-method",children:"Frame.type() method"}),"\n",(0,n.jsxs)(t.p,{children:["Sends a ",(0,n.jsx)(t.code,{children:"keydown"}),", ",(0,n.jsx)(t.code,{children:"keypress"}),"/",(0,n.jsx)(t.code,{children:"input"}),", and ",(0,n.jsx)(t.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  type(\n    selector: string,\n    text: string,\n    options?: Readonly<KeyboardTypeOptions>\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"selector"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"the selector for the element to type into. If there are multiple the first will be used."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"text"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"text to type into the element"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsxs)(t.td,{children:["Readonly<",(0,n.jsx)(t.a,{href:"/api/puppeteer.keyboardtypeoptions",children:"KeyboardTypeOptions"}),">"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," takes one option, ",(0,n.jsx)("code",{children:"delay"}),", which sets the time to wait between key presses in milliseconds. Defaults to ",(0,n.jsx)("code",{children:"0"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["To press a special key, like ",(0,n.jsx)(t.code,{children:"Control"})," or ",(0,n.jsx)(t.code,{children:"ArrowDown"}),", use ",(0,n.jsx)(t.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"await frame.type('#mytextarea', 'Hello'); // Types instantly\nawait frame.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,p=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:p,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(67294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);