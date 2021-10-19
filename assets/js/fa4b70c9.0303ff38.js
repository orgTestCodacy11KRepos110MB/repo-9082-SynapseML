(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5498],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),f=n,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1188:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=a(4034),n=a(9973),i=(a(7294),a(3905)),l=["components"],o={title:"Examples",hide_title:!0,sidebar_label:"About"},s=void 0,p={unversionedId:"examples/about",id:"examples/about",isDocsHomePage:!1,title:"Examples",description:"Examples",source:"@site/docs/examples/about.md",sourceDirName:"examples",slug:"/examples/about",permalink:"/SynapseML/docs/next/examples/about",tags:[],version:"current",frontMatter:{title:"Examples",hide_title:!0,sidebar_label:"About"},sidebar:"docs",previous:{title:"About",permalink:"/SynapseML/docs/next/features/vw/about"},next:{title:"AzureSearchIndex - Met Artworks",permalink:"/SynapseML/docs/next/examples/AzureSearchIndex - Met Artworks"}},c=[{value:"Examples",id:"examples",children:[],level:2}],u={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a deep image classifier with transfer learning (",(0,i.kt)("a",{parentName:"li",href:"../deep_learning/DeepLearning%20-%20Flower%20Image%20Classification",title:"DeepLearning - Flower Image Classification"},"DeepLearning - Flower Image Classification"),")"),(0,i.kt)("li",{parentName:"ul"},"Fit a LightGBM classification or regression model on a biochemical dataset\n(",(0,i.kt)("a",{parentName:"li",href:"../../features/lightgbm/LightGBM%20-%20Overview",title:"LightGBM Overview"},"LightGBM Overview"),"), to learn more check out the ",(0,i.kt)("a",{parentName:"li",href:"../../features/lightgbm/about"},"LightGBM documentation\npage"),"."),(0,i.kt)("li",{parentName:"ul"},"Deploy a deep network as a distributed web service with ",(0,i.kt)("a",{parentName:"li",href:"../../features/spark_serving/about"},"MMLSpark\nServing")),(0,i.kt)("li",{parentName:"ul"},"Use web services in Spark with ",(0,i.kt)("a",{parentName:"li",href:"../../features/http/about"},"HTTP on Apache Spark")),(0,i.kt)("li",{parentName:"ul"},"Use Bi-directional LSTMs from Keras for medical entity extraction\n(",(0,i.kt)("a",{parentName:"li",href:"../deep_learning/DeepLearning%20-%20BiLSTM%20Medical%20Entity%20Extraction",title:"DeepLearning - BiLSTM Medical Entity Extraction"},"DeepLearning - BiLSTM Medical Entity Extraction"),")"),(0,i.kt)("li",{parentName:"ul"},"Create a text analytics system on Amazon book reviews (",(0,i.kt)("a",{parentName:"li",href:"../text_analytics/TextAnalytics%20-%20Amazon%20Book%20Reviews",title:"TextAnalytics - Amazon Book Reviews"},"TextAnalytics - Amazon Book Reviews"),")"),(0,i.kt)("li",{parentName:"ul"},"Perform distributed hyperparameter tuning to identify Breast Cancer\n(",(0,i.kt)("a",{parentName:"li",href:"../HyperParameterTuning%20-%20Fighting%20Breast%20Cancer",title:"HyperParameterTuning - Fighting Breast Cancer"},"HyperParameterTuning - Fighting Breast Cancer"),")"),(0,i.kt)("li",{parentName:"ul"},"Easily ingest images from HDFS into Spark ",(0,i.kt)("inlineCode",{parentName:"li"},"DataFrame")," (",(0,i.kt)("a",{parentName:"li",href:"../deep_learning/DeepLearning%20-%20CIFAR10%20Convolutional%20Network",title:"DeepLearning - CIFAR10 Convolutional Network"},"DeepLearning - CIFAR10 Convolutional Network"),")"),(0,i.kt)("li",{parentName:"ul"},"Use OpenCV on Spark to manipulate images (",(0,i.kt)("a",{parentName:"li",href:"../OpenCV%20-%20Pipeline%20Image%20Transformations",title:"OpenCV - Pipeline Image Transformations"},"OpenCV - Pipeline Image Transformations"),")"),(0,i.kt)("li",{parentName:"ul"},"Train classification and regression models easily via implicit featurization\nof data (",(0,i.kt)("a",{parentName:"li",href:"../classification/Classification%20-%20Adult%20Census",title:"Classification - Adult Census"},"Classification - Adult Census"),")"),(0,i.kt)("li",{parentName:"ul"},"Train and evaluate a flight delay prediction system (",(0,i.kt)("a",{parentName:"li",href:"../regression/Regression%20-%20Flight%20Delays",title:"Regression - Flight Delays"},"Regression - Flight Delays"),")"),(0,i.kt)("li",{parentName:"ul"},"Finding anomalous data access patterns using the Access Anomalies package of CyberML (",(0,i.kt)("a",{parentName:"li",href:"../CyberML%20-%20Anomalous%20Access%20Detection",title:"CyberML - Anomalous Access Detection"},"CyberML - Anomalous Access Detection"),")"),(0,i.kt)("li",{parentName:"ul"},"Model interpretation (",(0,i.kt)("a",{parentName:"li",href:"../model_interpretability/Interpretability%20-%20Tabular%20SHAP%20explainer",title:"Interpretability - Tabular SHAP Explainer"},"Interpretability - Tabular SHAP Explainer"),", ",(0,i.kt)("a",{parentName:"li",href:"../model_interpretability/Interpretability%20-%20Image%20Explainers",title:"Interpretability - Image Explainers"},"Interpretability - Image Explainers"),", ",(0,i.kt)("a",{parentName:"li",href:"../model_interpretability/Interpretability%20-%20Text%20Explainers",title:"Interpretability - Text Explainers"},"Interpretability - Text Explainers"),")")))}m.isMDXComponent=!0}}]);