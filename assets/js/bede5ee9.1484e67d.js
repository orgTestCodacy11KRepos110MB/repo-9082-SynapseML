(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[6504],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7886:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(4034),a=n(9973),l=(n(7294),n(3905)),i=["components"],o={title:"Http on Apache Spark",hide_title:!0,sidebar_label:"About",name:"about"},s="HTTP on Apache Spark",u={unversionedId:"features/http/about",id:"features/http/about",isDocsHomePage:!1,title:"Http on Apache Spark",description:"A library for interacting with HTTP services from Apache Spark",source:"@site/docs/features/http/about.md",sourceDirName:"features/http",slug:"/features/http/about",permalink:"/SynapseML/docs/next/features/http/about",tags:[],version:"current",frontMatter:{title:"Http on Apache Spark",hide_title:!0,sidebar_label:"About"},sidebar:"docs",previous:{title:"HttpOnSpark - Working with Arbitrary Web APIs",permalink:"/SynapseML/docs/next/features/http/HttpOnSpark - Working with Arbitrary Web APIs"},next:{title:"LightGBM - Overview",permalink:"/SynapseML/docs/next/features/lightgbm/LightGBM - Overview"}},c=[{value:"A library for interacting with HTTP services from Apache Spark",id:"a-library-for-interacting-with-http-services-from-apache-spark",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Send a JSON POST request",id:"send-a-json-post-request",children:[],level:3}],level:2},{value:"High-Performance Functionality",id:"high-performance-functionality",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"http-on-apache-spark"},"HTTP on Apache Spark"),(0,l.kt)("h3",{id:"a-library-for-interacting-with-http-services-from-apache-spark"},"A library for interacting with HTTP services from Apache Spark"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Flexible"),": Encodes the entire HTTP protocol in Apache Spark for\nfull control of web requests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Performant"),": Fully distributed across workers, built in support for\nmulti-threaded buffering, batching, and asynchronous request\nconcurrency."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Easy to Use"),": High-level APIs for automatic parsing of requests,\nabstracting all HTTP knowledge to under the hood."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accessible from Multiple Languages"),": Usable in Python and Scala.\nNative integration with Scala's Apache HTTP Core.  Native\nintegration with ",(0,l.kt)("a",{parentName:"li",href:"http://docs.python-requests.org/en/master/"},"Python Requests")," library coming soon!"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Composable"),": Pipeline Stage APIs allow users to embed and compose\nweb services with SparkML machine learning models.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"send-a-json-post-request"},"Send a JSON POST request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import synapse.ml\nfrom synapse.ml.io.http import SimpleHTTPTransformer, JSONOutputParser\nfrom pyspark.sql.types import StructType, StringType\n\ndf = sc.parallelize([(x, ) for x in range(100)]).toDF("data")\n\nclient = SimpleHTTPTransformer() \\\n  .setInputCol("data") \\\n  .setOutputParser(JSONOutputParser() \\\n                   .setDataType(StructType().add("replies", StringType))) \\\n  .setUrl("www.my_service_url.com/any_api_here") \\\n  .setOutputCol("results")\n\nresponses = client.transform(df)\n')),(0,l.kt)("h2",{id:"high-performance-functionality"},"High-Performance Functionality"),(0,l.kt)("p",null,"The Simple HTTP transformer provides options for batching request bodies\nand asynchronous request sending.  For simplicity and easier debugging,\nthese options are not enabled by default."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"maxBatchSize"),": Parameter that enables buffered minibatching.  If this\nparameter is set, a background thread will fetch up to at most\n",(0,l.kt)("inlineCode",{parentName:"p"},"maxBatchSize")," requests.  These requests's are combined by creating an\narray of their entity data.  The method sends ",(0,l.kt)("em",{parentName:"p"},"up to")," ",(0,l.kt)("inlineCode",{parentName:"p"},"maxBatchSize"),"\nrequests, rapid iterator materialization will result in smaller\nbatches as the background thread does not have enough time to\nmaterialize a full batch.  In other words, each new request sends all\nof the new data that has accumulated at this stage of the pipeline.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"concurrency"),": This parameter allows one to send up to ",(0,l.kt)("inlineCode",{parentName:"p"},"concurrency"),"\nrequests simultaneously using Scala futures under the hood.  If this\nparameter is set to 1 (default), then no Scala futures are used.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"concurrentTimeout"),": If ",(0,l.kt)("inlineCode",{parentName:"p"},"concurrency"),">1, requests will fail if they do\nnot receive a response within ",(0,l.kt)("inlineCode",{parentName:"p"},"concurrentTimeout")," seconds.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"handlingStrategy"),": (",(0,l.kt)("inlineCode",{parentName:"p"},'"basic"'),", or ",(0,l.kt)("inlineCode",{parentName:"p"},'"advanced"'),") advanced handling\nuses exponential backoff on the retires and can handle responses that\ninstruct clients to throttle or retry again."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'SimpleHTTPTransformer() \\\n  .setMaxBatchSize(100) \\\n  .setConcurrency(5) \\\n  .setConcurrentTimeout(30.0) \\\n  .setHandlingStrategy("advanced")\n')),(0,l.kt)("h2",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,"HTTP on Spark encapsulates the entire HTTP protocol within Spark's\ndatatypes.  Uses can create flexible web clients that communicate with a\nwide variety of endpoints.  SynapseML provides methods to convert between\nScala case classes, Spark types, and Apache HTTP Core types.  A common\nrepresentation makes it easy to work with HTTP on spark from Scala,\nPython, or any other spark compatible language.  This common\nrepresentation is serializable allowing for complex operations like SQL\njoins and repartitons."),(0,l.kt)("p",null,"In HTTP on Spark, each partition manages a running web client that sends\nrequests.  A schematic representation can be seen below:"),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"/img/notebooks/HTTPOnSparkArchitecture.png",width:"600"})),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("p",null,"This library adds Spark types that faithfully represent the HTTP\nprotocol for requests and responses.  SynapseML provides several ways to\ncreate these objects from the apache HTTP core library, and from a set\nof case classes."),(0,l.kt)("p",null,"The schema for a complete HTTP request looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"request: struct (nullable = true)\n +-- requestLine: struct (nullable = true)\n |    +-- method: string (nullable = true)\n |    +-- uri: string (nullable = true)\n |    +-- protoclVersion: struct (nullable = true)\n |         +-- protocol: string (nullable = true)\n |         +-- major: integer (nullable = false)\n |         +-- minor: integer (nullable = false)\n +-- headers: array (nullable = true)\n |    +-- element: struct (containsNull = true)\n |         +-- name: string (nullable = true)\n |         +-- value: string (nullable = true)\n +-- entity: struct (nullable = true)\n      +-- content: binary (nullable = true)\n      +-- contentEncoding: struct (nullable = true)\n      |    +-- name: string (nullable = true)\n      |    +-- value: string (nullable = true)\n      +-- contentLenth: long (nullable = false)\n      +-- contentType: struct (nullable = true)\n      |    +-- name: string (nullable = true)\n      |    +-- value: string (nullable = true)\n      +-- isChunked: boolean (nullable = false)\n      +-- isRepeatable: boolean (nullable = false)\n      +-- isStreaming: boolean (nullable = false)\n")),(0,l.kt)("p",null,"And the schema for a complete response looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"response: struct (nullable = true)\n +-- headers: array (nullable = true)\n |    +-- element: struct (containsNull = true)\n |         +-- name: string (nullable = true)\n |         +-- value: string (nullable = true)\n +-- entity: struct (nullable = true)\n |    +-- content: binary (nullable = true)\n |    +-- contentEncoding: struct (nullable = true)\n |    |    +-- name: string (nullable = true)\n |    |    +-- value: string (nullable = true)\n |    +-- contentLenth: long (nullable = false)\n |    +-- contentType: struct (nullable = true)\n |    |    +-- name: string (nullable = true)\n |    |    +-- value: string (nullable = true)\n |    +-- isChunked: boolean (nullable = false)\n |    +-- isRepeatable: boolean (nullable = false)\n |    +-- isStreaming: boolean (nullable = false)\n +-- statusLine: struct (nullable = true)\n |    +-- protocolVersion: struct (nullable = true)\n |    |    +-- protocol: string (nullable = true)\n |    |    +-- major: integer (nullable = false)\n |    |    +-- minor: integer (nullable = false)\n |    +-- statusCode: integer (nullable = false)\n |    +-- reasonPhrase: string (nullable = true)\n +-- locale: string (nullable = true)\n")))}m.isMDXComponent=!0}}]);