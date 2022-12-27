"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2231],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(87462),a=t(67294),o=t(86010),l=t(72389),i=t(67392),s=t(7094),u=t(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,k=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.l)(y,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),j=w.tabGroupChoices,N=w.setTabGroupChoices,O=(0,a.useState)(h),E=O[0],T=O[1],D=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=j[k];null!=P&&P!==E&&y.some((function(e){return e.value===P}))&&T(P)}var C=function(e){var n=e.currentTarget,t=D.indexOf(n),r=y[t].value;r!==E&&(x(n),T(r),null!=k&&N(k,String(r)))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=D.indexOf(e.currentTarget)+1;t=null!=(r=D[a])?r:D[0];break;case"ArrowLeft":var o,l=D.indexOf(e.currentTarget)-1;t=null!=(o=D[l])?o:D[D.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return D.push(e)},onKeyDown:_,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function m(e){var n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},11403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=(t(65488),t(85162),["components"]),i={},s="\u5b89\u88c5",u={unversionedId:"middleware-sources/desktop-install",id:"middleware-sources/desktop-install",title:"\u5b89\u88c5",description:"\u81ea2.0\u7248\u672c\u5f00\u59cb\uff0c\u4e0d\u5728\u63d0\u4f9b\u53d1\u884c\u7248\u6587\u4ef6\u5305\u7684\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u8fd0\u884c\uff0c\u63a8\u8350\u4f7f\u7528docker-compose\u7684\u65b9\u5f0f\u3002",source:"@site/docs/middleware-sources/desktop-install.md",sourceDirName:"middleware-sources",slug:"/middleware-sources/desktop-install",permalink:"/docs/middleware-sources/desktop-install",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1672134067,formattedLastUpdatedAt:"2022\u5e7412\u670827\u65e5",frontMatter:{},sidebar:"middleware-sources",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/middleware-sources/desktop-introduction"},next:{title:"\u6570\u636e\u6e90-\u670d\u52a1\u4e2d\u5fc3",permalink:"/docs/middleware-sources/desktop/service-introduction"}},c={},p=[{value:"Disk\u672c\u5730\u78c1\u76d8",id:"disk\u672c\u5730\u78c1\u76d8",level:2},{value:"Nacos\u914d\u7f6e\u4e2d\u5fc3",id:"nacos\u914d\u7f6e\u4e2d\u5fc3",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u81ea2.0\u7248\u672c\u5f00\u59cb\uff0c\u4e0d\u5728\u63d0\u4f9b\u53d1\u884c\u7248\u6587\u4ef6\u5305\u7684\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u8fd0\u884c\uff0c\u63a8\u8350\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"Desktop\u7ec4\u4ef6\u81ea2.0\u7248\u672c\u5f00\u59cb\uff0c\u6570\u636e\u6e90\u5f00\u542f\u652f\u6301\u914d\u7f6e\u4e2d\u5fc3\u4e2d\u95f4\u4ef6\u7684\u6a21\u5f0f\uff0c\u56e0\u6b64\uff0c\u76f8\u8f83\u4e8e\u539f1.0\u7248\u672c\u4e2d\u53ea\u652f\u6301\u672c\u5730\u78c1\u76d8\u7684\u65b9\u5f0f\uff0c\u5728\u4f7f\u7528\u4e0a\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u8fd9\u53d6\u51b3\u4e8e\u5f00\u53d1\u8005\u81ea\u5df1\u9009\u62e9\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u7684\u7248\u672c\u4e2d\uff0c\u4e3b\u8981\u4e24\u79cd\u6a21\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Disk\u672c\u5730\u78c1\u76d8"),"\uff1a\u6570\u636e\u6765\u6e90\u4e8e\u672c\u5730\u78c1\u76d8\uff0c\u5305\u62ecOpenAPI\u89c4\u8303\u6587\u4ef6\uff0c\u6216\u8005\u6240\u652f\u6301\u7684\u96c6\u4e2d\u6a21\u5f0f\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nacos\u914d\u7f6e\u4e2d\u5fc3"),"\uff1a\u6570\u636e\u6765\u6e90\u4e8eNacos\u4e2d\u95f4\u4ef6\u4e0a\uff0c\u4f7f\u7528\u8005\u53ea\u9700\u8981\u5c06\u914d\u7f6e\u5728Nacos\u4e0a\u8fdb\u884c\u64cd\u4f5c\u5373\u53ef\u3002")),(0,o.kt)("p",null,"\u4e24\u79cd\u6a21\u5f0f\u6240\u5206\u522b\u5bf9\u5e94",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u914d\u7f6e\u6709\u6240\u4e0d\u540c\u3002"),(0,o.kt)("h2",{id:"disk\u672c\u5730\u78c1\u76d8"},"Disk\u672c\u5730\u78c1\u76d8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'# \u901a\u8fc7docker-compose\u53ef\u4ee5\u5feb\u901f\u90e8\u7f72knife4j\u670d\u52a1\nversion: "2.0"\nservices:\n  knife4j:\n    container_name: knife4j-desktop\n    restart: always\n    image: "xiaoymin/knfie4j:v2.0"\n    network_mode: "bridge"\n    # \u672c\u5730\u78c1\u76d8\u76ee\u5f55\u6620\u5c04\n    volumes:\n      - D:\\Temp\\data:/knife4j/data\n    ports:\n      - "10000:10000"\n    # \u6307\u5b9a\u914d\u7f6e\u5c5e\u6027\u6a21\u5f0f\u4e3adisk\u672c\u5730\u78c1\u76d8\n    environment:\n      - knife4j.source=disk\n      - knife4j.disk.dir=/knife4j/data\n\n')),(0,o.kt)("p",null,"\u5f00\u53d1\u8005\u9700\u6ce8\u610f\uff0c\u6b64\u5904volumes\u6302\u8f7d\u76ee\u5f55",(0,o.kt)("inlineCode",{parentName:"p"},"D:\\Temp\\data"),"\u4ec5\u4f9b\u53c2\u8003\u4f7f\u7528"),(0,o.kt)("p",null,"\u5982\u76ee\u5f55\u4e0d\u540c\uff0c\u53ef\u81ea\u884c\u521b\u5efa\uff0cwindows/linux\u5747\u53ef\u3002"),(0,o.kt)("p",null,"\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"desktop/config-disk",target:null,rel:null},"\u4f7f\u7528\u8bf4\u660e")),(0,o.kt)("h2",{id:"nacos\u914d\u7f6e\u4e2d\u5fc3"},"Nacos\u914d\u7f6e\u4e2d\u5fc3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f:Nacos\u63a8\u8350\u4f7f\u7528\u7248\u672c >= 2.0"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'\n# \u901a\u8fc7docker-compose\u53ef\u4ee5\u5feb\u901f\u90e8\u7f72knife4j\u670d\u52a1\nversion: "2.0"\nservices:\n  knife4j:\n    container_name: knife4j-desktop-nacos\n    restart: always\n    image: "xiaoymin/knfie4j:v2.0"\n    network_mode: "bridge"\n    # \u7aef\u53e3\u6620\u5c04\n    ports:\n      - "10000:10000"\n    # \u6307\u5b9a\u914d\u7f6e\u5c5e\u6027\u6a21\u5f0f\u4e3aNacos\u914d\u7f6e\u4e2d\u5fc3\n    environment:\n      - knife4j.source=nacos\n      - knife4j.nacos.server=127.0.0.1:8848\n      - knife4j.nacos.username=nacos\n      - knife4j.nacos.password=nacos\n      # \u4f7f\u7528\u8005\u81ea\u884c\u5728\u6240\u6307\u5b9a\u7684nacos\u4e0a\u521b\u5efa namespace \u3001dataid\u3001group\n      - knife4j.nacos.namespace=knife4j\n      - knife4j.nacos.dataId=knife4j_data_id\n      - knife4j.nacos.group=DEFAULT_GROUP\n\n')),(0,o.kt)("p",null,"\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"desktop/config-nacos",target:null,rel:null},"\u4f7f\u7528\u8bf4\u660e")))}m.isMDXComponent=!0}}]);