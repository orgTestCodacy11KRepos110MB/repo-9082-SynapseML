"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[542],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5134:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],s={title:"CognitiveServices - Predictive Maintenance",hide_title:!0,status:"stable",name:"CognitiveServices - Predictive Maintenance"},l="Recipe: Predictive maintenance with the Cognitive Services for Big Data",c={unversionedId:"features/cognitive_services/CognitiveServices - Predictive Maintenance",id:"features/cognitive_services/CognitiveServices - Predictive Maintenance",isDocsHomePage:!1,title:"CognitiveServices - Predictive Maintenance",description:"This recipe shows how you can use Azure Synapse Analytics and Cognitive Services on Apache Spark for predictive maintenance of IoT devices. We'll follow along with the CosmosDB and Synapse Link sample. To keep things simple, in this recipe we'll read the data straight from a CSV file rather than getting streamed data through CosmosDB and Synapse Link. We strongly encourage you to look over the Synapse Link sample.",source:"@site/docs/features/cognitive_services/CognitiveServices - Predictive Maintenance.md",sourceDirName:"features/cognitive_services",slug:"/features/cognitive_services/CognitiveServices - Predictive Maintenance",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - Predictive Maintenance",tags:[],version:"current",frontMatter:{title:"CognitiveServices - Predictive Maintenance",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CognitiveServices - Overview",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - Overview"},next:{title:"Data Balance Analysis",permalink:"/SynapseML/docs/next/features/responsible_ai/Data Balance Analysis"}},p=[{value:"Hypothetical scenario",id:"hypothetical-scenario",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Create an Anomaly Detector resource",id:"create-an-anomaly-detector-resource",children:[],level:3}],level:2},{value:"Enter your service keys",id:"enter-your-service-keys",children:[],level:2},{value:"Read data into a DataFrame",id:"read-data-into-a-dataframe",children:[{value:"Run anomaly detection using Cognitive Services on Spark",id:"run-anomaly-detection-using-cognitive-services-on-spark",children:[],level:3}],level:2},{value:"Visualize anomalies for one of the devices",id:"visualize-anomalies-for-one-of-the-devices",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],u={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recipe-predictive-maintenance-with-the-cognitive-services-for-big-data"},"Recipe: Predictive maintenance with the Cognitive Services for Big Data"),(0,r.kt)("p",null,"This recipe shows how you can use Azure Synapse Analytics and Cognitive Services on Apache Spark for predictive maintenance of IoT devices. We'll follow along with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/cosmosdb-synapse-link-samples"},"CosmosDB and Synapse Link")," sample. To keep things simple, in this recipe we'll read the data straight from a CSV file rather than getting streamed data through CosmosDB and Synapse Link. We strongly encourage you to look over the Synapse Link sample."),(0,r.kt)("h2",{id:"hypothetical-scenario"},"Hypothetical scenario"),(0,r.kt)("p",null,"The hypothetical scenario is a Power Plant, where IoT devices are monitoring ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Steam_turbine"},"steam turbines"),". The IoTSignals collection has Revolutions per minute (RPM) and Megawatts (MW) data for each turbine. Signals from steam turbines are being analyzed and anomalous signals are detected."),(0,r.kt)("p",null,"There could be outliers in the data in random frequency. In those situations, RPM values will go up and MW output will go down, for circuit protection. The idea is to see the data varying at the same time, but with different signals."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Azure subscription - ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/"},"Create one for free")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-create-workspace"},"Azure Synapse workspace")," configured with a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-analyze-spark"},"serverless Apache Spark pool"))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"create-an-anomaly-detector-resource"},"Create an Anomaly Detector resource"),(0,r.kt)("p",null,"Azure Cognitive Services are represented by Azure resources that you subscribe to. Create a resource for Translator using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account?tabs=multiservice%2Clinux"},"Azure portal")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account-cli?tabs=linux"},"Azure CLI"),". You can also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View an existing resource in the  ",(0,r.kt)("a",{parentName:"li",href:"https://portal.azure.com/"},"Azure portal"),".")),(0,r.kt)("p",null,"Make note of the endpoint and the key for this resource, you'll need it in this guide."),(0,r.kt)("h2",{id:"enter-your-service-keys"},"Enter your service keys"),(0,r.kt)("p",null,"Let's start by adding your key and location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import os\n\nservice_key =  os.environ["ANOMALY_API_KEY"] # Paste your anomaly detector key here\nlocation = "westus2" # Paste your anomaly detector location here\n\nassert (service_key is not None)\n')),(0,r.kt)("h2",{id:"read-data-into-a-dataframe"},"Read data into a DataFrame"),(0,r.kt)("p",null,"Next, let's read the IoTSignals file into a DataFrame. Open a new notebook in your Synapse workspace and create a DataFrame from the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'df_signals = spark.read.csv("wasbs://publicwasb@mmlspark.blob.core.windows.net/iot/IoTSignals.csv", header=True, inferSchema=True)\n')),(0,r.kt)("h3",{id:"run-anomaly-detection-using-cognitive-services-on-spark"},"Run anomaly detection using Cognitive Services on Spark"),(0,r.kt)("p",null,"The goal is to find instances where the signals from the IoT devices were outputting anomalous values so that we can see when something is going wrong and do predictive maintenance. To do that, let's use Anomaly Detector on Spark:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'from pyspark.sql.functions import col, struct\nfrom synapse.ml.cognitive import SimpleDetectAnomalies\nfrom synapse.ml.core.spark import FluentAPI\n\ndetector = (SimpleDetectAnomalies()\n    .setSubscriptionKey(service_key)\n    .setLocation(location)\n    .setOutputCol("anomalies")\n    .setGroupbyCol("grouping")\n    .setSensitivity(95)\n    .setGranularity("secondly"))\n\ndf_anomaly = (df_signals\n    .where(col("unitSymbol") == \'RPM\')\n    .withColumn("timestamp", col("dateTime").cast("string"))\n    .withColumn("value", col("measureValue").cast("double"))\n    .withColumn("grouping", struct("deviceId"))\n    .mlTransform(detector)).cache()\n\ndf_anomaly.createOrReplaceTempView(\'df_anomaly\')\n')),(0,r.kt)("p",null,"Let's take a look at the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'df_anomaly.select("timestamp","value","deviceId","anomalies.isAnomaly").show(3)\n\n')),(0,r.kt)("p",null,"This cell should yield a result that looks like:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"timestamp"),(0,r.kt)("th",{parentName:"tr",align:"right"},"value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deviceId"),(0,r.kt)("th",{parentName:"tr",align:"left"},"isAnomaly"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2020-05-01 18:33:51"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3174"),(0,r.kt)("td",{parentName:"tr",align:"left"},"dev-7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2020-05-01 18:33:52"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2976"),(0,r.kt)("td",{parentName:"tr",align:"left"},"dev-7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2020-05-01 18:33:53"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2714"),(0,r.kt)("td",{parentName:"tr",align:"left"},"dev-7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")))),(0,r.kt)("h2",{id:"visualize-anomalies-for-one-of-the-devices"},"Visualize anomalies for one of the devices"),(0,r.kt)("p",null,"IoTSignals.csv has signals from multiple IoT devices. We'll focus on a specific device and visualize anomalous outputs from the device."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'df_anomaly_single_device = spark.sql("""\nselect\n  timestamp,\n  measureValue,\n  anomalies.expectedValue,\n  anomalies.expectedValue + anomalies.upperMargin as expectedUpperValue,\n  anomalies.expectedValue - anomalies.lowerMargin as expectedLowerValue,\n  case when anomalies.isAnomaly=true then 1 else 0 end as isAnomaly\nfrom\n  df_anomaly\nwhere deviceid = \'dev-1\' and timestamp < \'2020-04-29\'\norder by timestamp\nlimit 200""")\n')),(0,r.kt)("p",null,"Now that we have created a dataframe that represents the anomalies for a particular device, we can visualize these anomalies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import matplotlib.pyplot as plt\nfrom pyspark.sql.functions import col\n\nadf = df_anomaly_single_device.toPandas()\nadf_subset = df_anomaly_single_device.where(col(\"isAnomaly\") == 1).toPandas()\n\nplt.figure(figsize=(23,8))\nplt.plot(adf['timestamp'],adf['expectedUpperValue'], color='darkred', linestyle='solid', linewidth=0.25, label='UpperMargin')\nplt.plot(adf['timestamp'],adf['expectedValue'], color='darkgreen', linestyle='solid', linewidth=2, label='Expected Value')\nplt.plot(adf['timestamp'],adf['measureValue'], 'b', color='royalblue', linestyle='dotted', linewidth=2, label='Actual')\nplt.plot(adf['timestamp'],adf['expectedLowerValue'],  color='black', linestyle='solid', linewidth=0.25, label='Lower Margin')\nplt.plot(adf_subset['timestamp'],adf_subset['measureValue'], 'ro', label = 'Anomaly')\nplt.legend()\nplt.title('RPM Anomalies with Confidence Intervals')\nplt.show()\n")),(0,r.kt)("p",null,"If successful, your output will look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/MicrosoftDocs/azure-docs/raw/master/articles/cognitive-services/big-data/media/anomaly-output.png",alt:"Anomaly Detector Plot"})),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Learn how to do predictive maintenance at scale with Azure Cognitive Services, Azure Synapse Analytics, and Azure CosmosDB. For more information, see the full sample on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/cosmosdb-synapse-link-samples"},"GitHub"),"."))}d.isMDXComponent=!0}}]);