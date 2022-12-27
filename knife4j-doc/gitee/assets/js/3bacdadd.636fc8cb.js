"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9264],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),k=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=k(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=k(t),m=n,d=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return t?a.createElement(d,l(l({ref:r},s),{},{components:t})):a.createElement(d,l({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var k=2;k<i;k++)l[k]=t[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12763:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>k,toc:()=>p});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),l=["components"],o={},u="1.4 Eureka\u6a21\u5f0f",k={unversionedId:"middleware-sources/aggregation-eureka",id:"middleware-sources/aggregation-eureka",title:"1.4 Eureka\u6a21\u5f0f",description:"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003\u57fa\u4e8eEureka\u6ce8\u518c\u4e2d\u5fc3\u805a\u5408OpenAPI",source:"@site/docs/middleware-sources/aggregation-eureka.md",sourceDirName:"middleware-sources",slug:"/middleware-sources/aggregation-eureka",permalink:"/docs/middleware-sources/aggregation-eureka",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1672149817,formattedLastUpdatedAt:"2022\u5e7412\u670827\u65e5",frontMatter:{},sidebar:"middleware-sources",previous:{title:"1.3 Cloud\u6a21\u5f0f",permalink:"/docs/middleware-sources/aggregation-cloud"},next:{title:"1.5 Nacos\u6a21\u5f0f",permalink:"/docs/middleware-sources/aggregation-nacos"}},s={},p=[],c={toc:p};function m(e){var r=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"14-eureka\u6a21\u5f0f"},"1.4 Eureka\u6a21\u5f0f"),(0,i.kt)("p",null,"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/action/aggregation-eureka",target:null,rel:null},"\u57fa\u4e8eEureka\u6ce8\u518c\u4e2d\u5fc3\u805a\u5408OpenAPI")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u4eceEureka\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u805a\u5408\u5df2\u7ecf\u6ce8\u518c\u7684\u670d\u52a1\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ee5\u53ca\u6ce8\u518c\u7684\u670d\u52a1\u5fc5\u987b\u96c6\u6210OpenAPI\u5e76\u4e14\u80fd\u63d0\u4f9b\u63a5\u53e3\n\u8be5\u6a21\u5f0f\u7c7b\u4f3c\u4e8eCloud\u6a21\u5f0f\uff0c\u53ea\u662f\u9690\u85cf\u4e86\u670d\u52a1\u7684\u5730\u5740\u800c\u5df2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enable-aggregation: true\n  eureka:\n    enable: false\n    service-url: http://localhost:10000/eureka/\n    routes:\n      - name: \u8ba2\u5355\u670d\u52a1\n        service-name: service-order\n        location: /v2/api-docs?group=default\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.enable"),":\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u4ee3\u8868\u542f\u7528Eureka\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.service-url"),":Eureka\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.service-auth"),":\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u516c\u5171Basic\u9a8c\u8bc1\u5c5e\u6027(\u53ef\u9009)\uff0c\u5982\u679cEureka\u7684\u6ce8\u518c\u548c\u83b7\u53d6\u670d\u52a1\u9700\u8981\u8fdb\u884cBasic\u8ba4\u8bc1\uff0c\u5f00\u53d1\u8005\u9700\u8981\u914d\u7f6e\u8be5\u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.service-auth.enable"),":\u662f\u5426\u542f\u7528Eureka\u6ce8\u518c\u4e2d\u5fc3Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.service-auth.usernae"),":Eureka\u6ce8\u518c\u4e2d\u5fc3Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.service-auth.password"),":Eureka\u6ce8\u518c\u4e2d\u5fc3Basic\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.route-auth"),":\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u516c\u5171Basic\u9a8c\u8bc1\u5c5e\u6027(\u53ef\u9009)\uff0c\u5982\u679c\u5f00\u53d1\u8005\u63d0\u4f9b\u7684OpenAPI\u89c4\u8303\u7684\u670d\u52a1\u9700\u8981\u4ee5Basic\u9a8c\u8bc1\u8fdb\u884c\u9274\u6743\u8bbf\u95ee\uff0c\u90a3\u4e48\u53ef\u4ee5\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5982\u679c\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5219\u8be5\u6a21\u5f0f\u4e0b\u6240\u6709\u914d\u7f6e\u7684Routes\u8282\u70b9\u63a5\u53e3\u90fd\u4f1a\u4ee5Basic\u9a8c\u8bc1\u4fe1\u606f\u8bbf\u95ee\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.route-auth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.route-auth.usernae"),":Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.route-auth.password"),":Basic\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes"),":\u9700\u8981\u805a\u5408\u7684\u670d\u52a1\u96c6\u5408(\u5fc5\u9009)\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.name"),":\u670d\u52a1\u540d\u79f0(\u663e\u793a\u540d\u79f0\uff0c\u6700\u7ec8\u5728Ui\u7684\u5de6\u4e0a\u89d2\u4e0b\u62c9\u6846\u8fdb\u884c\u663e\u793a)\uff0c\u5982\u679c\u8be5\u5c5e\u6027\u4e0d\u914d\u7f6e\uff0c\u6700\u7ec8Ui\u4f1a\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"li"},"serviceName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.service-name"),":Eureka\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.uri"),":\u8be5\u670d\u52a1\u7684\u63a5\u53e3URI\u8d44\u6e90\uff0c\u5982\u679c\u662fHTTPS\uff0c\u5219\u9700\u8981\u5b8c\u6574\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.location:"),":\u5177\u4f53\u8d44\u6e90\u63a5\u53e3\u5730\u5740\uff0c\u6700\u7ec8Knife4j\u662f\u901a\u8fc7\u6ce8\u518c\u670d\u52a1uri+location\u7684\u7ec4\u5408\u8def\u5f84\u8fdb\u884c\u8bbf\u95ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.swagger-version"),":\u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"2.0"),"\uff0c\u53ef\u9009\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.service-path"),":\u8be5\u5c5e\u6027\u662f\u6700\u7ec8\u5728Ui\u4e2d\u5c55\u793a\u7684\u63a5\u53e3\u524d\u7f00\u5c5e\u6027\uff0c\u63d0\u4f9b\u8be5\u5c5e\u6027\u7684\u76ee\u7684\u4e5f\u662f\u56e0\u4e3a\u901a\u5e38\u5f00\u53d1\u8005\u5728\u4ee5Gateway\u7b49\u65b9\u5f0f\u805a\u5408\u65f6\uff0c\u9700\u8981\u4e00\u4e2a\u524d\u7f00\u8def\u5f84\u6765\u8fdb\u884c\u8f6c\u53d1\uff0c\u800c\u6700\u7ec8\u8fd9\u4e2a\u524d\u7f00\u8def\u5f84\u4f1a\u5728\u6bcf\u4e2a\u63a5\u53e3\u4e2d\u8fdb\u884c\u8ffd\u52a0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.route-auth"),":\u5982\u679c\u8be5Route\u8282\u70b9\u7684\u63a5\u53e3\u5f00\u542f\u4e86Basic\uff0c\u5e76\u4e14\u548c\u516c\u5171\u914d\u7f6e\u7684Basic\u4e0d\u4e00\u6837\uff0c\u9700\u8981\u5355\u72ec\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.route-auth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.route-auth.usernae"),":Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.route-auth.password"),":Basic\u5bc6\u7801")))}m.isMDXComponent=!0}}]);