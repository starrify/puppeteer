/*! For license information please see 7b19cdc3.d7b45679.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40430],{31594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=r(85893),s=r(11151);const a={sidebar_label:"JSHandle"},d="JSHandle class",l={id:"api/puppeteer.jshandle",title:"JSHandle class",description:"Represents a reference to a JavaScript object. Instances can be created using Page.evaluateHandle().",source:"@site/../docs/api/puppeteer.jshandle.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle",permalink:"/next/api/puppeteer.jshandle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"JSHandle"},sidebar:"api",previous:{title:"Frame.waitForXPath",permalink:"/next/api/puppeteer.frame.waitforxpath"},next:{title:"JSHandle.asElement",permalink:"/next/api/puppeteer.jshandle.aselement"}},i={},h=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"jshandle-class",children:"JSHandle class"}),"\n",(0,n.jsxs)(t.p,{children:["Represents a reference to a JavaScript object. Instances can be created using ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Handles prevent the referenced JavaScript object from being garbage-collected unless the handle is purposely ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.dispose",children:"disposed"}),". JSHandles are auto-disposed when their associated frame is navigated away or the parent context gets destroyed."]}),"\n",(0,n.jsxs)(t.p,{children:["Handles can be used as arguments for any evaluation function such as ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.page._eval",children:"Page.$eval()"}),", ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.page.evaluate",children:"Page.evaluate()"}),", and ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"}),". They are resolved to their referenced object."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class JSHandle<T = unknown>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(t.code,{children:"JSHandle"})," class."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const windowHandle = await page.evaluateHandle(() => window);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["Used for nominally typing ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle",children:"JSHandle"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"move"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"() => this"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.aselement",children:"asElement()"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Either ",(0,n.jsx)("code",{children:"null"})," or the handle itself if the handle is an instance of ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.dispose",children:"dispose()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Releases the object referenced by the handle for garbage collection."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.evaluate",children:"evaluate(pageFunction, args)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Evaluates the given function with the current handle as its first argument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.evaluatehandle",children:"evaluateHandle(pageFunction, args)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Evaluates the given function with the current handle as its first argument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.getproperties",children:"getProperties()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Gets a map of handles representing the properties of the current handle."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.getproperty",children:"getProperty(propertyName)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Fetches a single property from the referenced object."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.getproperty_1",children:"getProperty(propertyName)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.jsonvalue",children:"jsonValue()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"A vanilla object representing the serializable portions of the referenced object."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.remoteobject",children:"remoteObject()"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Provides access to the ",(0,n.jsx)(t.a,{href:"https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#type-RemoteObject",children:"Protocol.Runtime.RemoteObject"})," backing this handle."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle.tostring",children:"toString()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Returns a string representation of the JSHandle."})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var n,a={},h=null,c=null;for(n in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:h,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=h,t.jsxs=h},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>d});var n=r(67294);const s={},a=n.createContext(s);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);