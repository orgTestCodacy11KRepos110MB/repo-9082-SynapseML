"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[6179],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(3117),a=t(7294),o=t(2389),l=t(9443);var u=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(9521),i=t(6010),s="tabItem_1uMI";function p(e){var n,t,r,o=e.lazy,l=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),y=(0,c.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=u(),O=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(h),x=w[0],E=w[1],_=[],k=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=O[d];null!=T&&T!==x&&b.some((function(e){return e.value===T}))&&E(T)}var M=function(e){var n=e.currentTarget,t=_.indexOf(n),r=b[t].value;r!==x&&(k(n),E(r),null!=d&&N(d,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=_.indexOf(e.currentTarget)+1;t=_[r]||_[0];break;case"ArrowLeft":var a=_.indexOf(e.currentTarget)-1;t=_[a]||_[_.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},f)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":x===n}),key:n,ref:function(e){return _.push(e)},onKeyDown:D,onFocus:M,onClick:M},null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},1989:function(e,n,t){var r=t(7294),a=t(2263);n.Z=function(e){var n=e.className,t=e.py,o=e.scala,l=e.sourceLink,u=(0,a.Z)().siteConfig.customFields.version,c="https://mmlspark.blob.core.windows.net/docs/"+u+"/pyspark/"+t,i="https://mmlspark.blob.core.windows.net/docs/"+u+"/scala/"+o;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:c},n)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:i},n)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:l},n)))))}},1815:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return v},default:function(){return g},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),l=t(6396),u=t(8215),c=t(1989),i=["components"],s=[{value:"ONNXModel",id:"onnxmodel",children:[],level:2}],p={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"onnxmodel"},"ONNXModel"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from synapse.ml.onnx import ONNXModel\n\nmodel_path = "PUT_YOUR_MODEL_PATH"\nonnx_ml = (ONNXModel()\n            .setModelLocation(model_path)\n            .setFeedDict({"float_input": "features"})\n            .setFetchDict({"prediction": "output_label", "rawProbability": "output_probability"}))\n'))),(0,o.kt)(u.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.onnx._\n\nval model_path = "PUT_YOUR_MODEL_PATH"\nval onnx_ml = (new ONNXModel()\n                  .setModelLocation(model_path)\n                  .setFeedDict(Map("float_input" -> "features"))\n                  .setFetchDict(Map("prediction" -> "output_label", "rawProbability" -> "output_probability")))\n')))),(0,o.kt)(c.Z,{className:"ONNXModel",py:"synapse.ml.onnx.html#module-synapse.ml.onnx.ONNXModel",scala:"com/microsoft/azure/synapse/ml/onnx/ONNXModel.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/deep-learning/src/main/scala/com/microsoft/azure/synapse/ml/onnx/ONNXModel.scala",mdxType:"DocTable"}))}m.isMDXComponent=!0;var d=["components"],f={title:"Deep Learning",sidebar_label:"Deep Learning"},v=void 0,b={unversionedId:"documentation/transformers/transformers_deep_learning",id:"documentation/transformers/transformers_deep_learning",isDocsHomePage:!1,title:"Deep Learning",description:"export const toc = [...ONNXModelTOC]",source:"@site/docs/documentation/transformers/transformers_deep_learning.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/transformers_deep_learning",permalink:"/SynapseML/docs/next/documentation/transformers/transformers_deep_learning",tags:[],version:"current",frontMatter:{title:"Deep Learning",sidebar_label:"Deep Learning"},sidebar:"docs",previous:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/next/documentation/transformers/transformers_vw"},next:{title:"Core",permalink:"/SynapseML/docs/next/documentation/estimators/estimators_core"}},y=[].concat(s),h={toc:y};function g(e){var n=e.components,t=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(m,{mdxType:"ONNXModel"}))}g.isMDXComponent=!0}}]);