"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[2698],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(a),d=r,m=f["".concat(o,".").concat(d)]||f[d]||c[d]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4255:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],s={title:"Interpretability - Tabular SHAP explainer",hide_title:!0,status:"stable",name:"Interpretability - Tabular SHAP explainer"},o=void 0,p={unversionedId:"features/responsible_ai/Interpretability - Tabular SHAP explainer",id:"features/responsible_ai/Interpretability - Tabular SHAP explainer",isDocsHomePage:!1,title:"Interpretability - Tabular SHAP explainer",description:"Interpretability - Tabular SHAP explainer",source:"@site/docs/features/responsible_ai/Interpretability - Tabular SHAP explainer.md",sourceDirName:"features/responsible_ai",slug:"/features/responsible_ai/Interpretability - Tabular SHAP explainer",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - Tabular SHAP explainer",tags:[],version:"current",frontMatter:{title:"Interpretability - Tabular SHAP explainer",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Interpretability - Snow Leopard Detection",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - Snow Leopard Detection"},next:{title:"Interpretability - Text Explainers",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - Text Explainers"}},u=[{value:"Interpretability - Tabular SHAP explainer",id:"interpretability---tabular-shap-explainer",children:[],level:2}],c={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"interpretability---tabular-shap-explainer"},"Interpretability - Tabular SHAP explainer"),(0,l.kt)("p",null,"In this example, we use Kernel SHAP to explain a tabular classification model built from the Adults Census dataset."),(0,l.kt)("p",null,"First we import the packages and define some UDFs we will need later."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import pyspark\nfrom synapse.ml.explainers import *\nfrom pyspark.ml import Pipeline\nfrom pyspark.ml.classification import LogisticRegression\nfrom pyspark.ml.feature import StringIndexer, OneHotEncoder, VectorAssembler\nfrom pyspark.sql.types import *\nfrom pyspark.sql.functions import *\nimport pandas as pd\n\nvec_access = udf(lambda v, i: float(v[i]), FloatType())\nvec2array = udf(lambda vec: vec.toArray().tolist(), ArrayType(FloatType()))\n")),(0,l.kt)("p",null,"Now let's read the data and train a simple binary classification model."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet")\n\nlabelIndexer = StringIndexer(inputCol="income", outputCol="label", stringOrderType="alphabetAsc").fit(df)\nprint("Label index assigment: " + str(set(zip(labelIndexer.labels, [0, 1]))))\n\ntraining = labelIndexer.transform(df)\ndisplay(training)\ncategorical_features = [\n    "workclass",\n    "education",\n    "marital-status",\n    "occupation",\n    "relationship",\n    "race",\n    "sex",\n    "native-country",\n]\ncategorical_features_idx = [col + "_idx" for col in categorical_features]\ncategorical_features_enc = [col + "_enc" for col in categorical_features]\nnumeric_features = ["age", "education-num", "capital-gain", "capital-loss", "hours-per-week"]\n\nstrIndexer = StringIndexer(inputCols=categorical_features, outputCols=categorical_features_idx)\nonehotEnc = OneHotEncoder(inputCols=categorical_features_idx, outputCols=categorical_features_enc)\nvectAssem = VectorAssembler(inputCols=categorical_features_enc + numeric_features, outputCol="features")\nlr = LogisticRegression(featuresCol="features", labelCol="label", weightCol="fnlwgt")\npipeline = Pipeline(stages=[strIndexer, onehotEnc, vectAssem, lr])\nmodel = pipeline.fit(training)\n')),(0,l.kt)("p",null,"After the model is trained, we randomly select some observations to be explained."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"explain_instances = model.transform(training).orderBy(rand()).limit(5).repartition(200).cache()\ndisplay(explain_instances)\n")),(0,l.kt)("p",null,'We create a TabularSHAP explainer, set the input columns to all the features the model takes, specify the model and the target output column we are trying to explain. In this case, we are trying to explain the "probability" output which is a vector of length 2, and we are only looking at class 1 probability. Specify targetClasses to ',(0,l.kt)("inlineCode",{parentName:"p"},"[0, 1]")," if you want to explain class 0 and 1 probability at the same time. Finally we sample 100 rows from the training data for background data, which is used for integrating out features in Kernel SHAP."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'shap = TabularSHAP(\n    inputCols=categorical_features + numeric_features,\n    outputCol="shapValues",\n    numSamples=5000,\n    model=model,\n    targetCol="probability",\n    targetClasses=[1],\n    backgroundData=broadcast(training.orderBy(rand()).limit(100).cache()),\n)\n\nshap_df = shap.transform(explain_instances)\n\n')),(0,l.kt)("p",null,"Once we have the resulting dataframe, we extract the class 1 probability of the model output, the SHAP values for the target class, the original features and the true label. Then we convert it to a pandas dataframe for visisualization.\nFor each observation, the first element in the SHAP values vector is the base value (the mean output of the background dataset), and each of the following element is the SHAP values for each feature."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'shaps = (\n    shap_df.withColumn("probability", vec_access(col("probability"), lit(1)))\n    .withColumn("shapValues", vec2array(col("shapValues").getItem(0)))\n    .select(["shapValues", "probability", "label"] + categorical_features + numeric_features)\n)\n\nshaps_local = shaps.toPandas()\nshaps_local.sort_values("probability", ascending=False, inplace=True, ignore_index=True)\npd.set_option("display.max_colwidth", None)\nshaps_local\n')),(0,l.kt)("p",null,"We use plotly subplot to visualize the SHAP values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from plotly.subplots import make_subplots\nimport plotly.graph_objects as go\nimport pandas as pd\n\nfeatures = categorical_features + numeric_features\nfeatures_with_base = ["Base"] + features\n\nrows = shaps_local.shape[0]\n\nfig = make_subplots(\n    rows=rows,\n    cols=1,\n    subplot_titles="Probability: " + shaps_local["probability"].apply("{:.2%}".format) + "; Label: " + shaps_local["label"].astype(str),\n)\n\nfor index, row in shaps_local.iterrows():\n    feature_values = [0] + [row[feature] for feature in features]\n    shap_values = row["shapValues"]\n    list_of_tuples = list(zip(features_with_base, feature_values, shap_values))\n    shap_pdf = pd.DataFrame(list_of_tuples, columns=["name", "value", "shap"])\n    fig.add_trace(\n        go.Bar(x=shap_pdf["name"], y=shap_pdf["shap"], hovertext="value: " + shap_pdf["value"].astype(str)),\n        row=index + 1,\n        col=1,\n    )\n\nfig.update_yaxes(range=[-1, 1], fixedrange=True, zerolinecolor="black")\nfig.update_xaxes(type="category", tickangle=45, fixedrange=True)\nfig.update_layout(height=400 * rows, title_text="SHAP explanations")\nfig.show()\n\n')),(0,l.kt)("p",null,"Your results will look like:"),(0,l.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/explainers/tabular-shap.png"}))}f.isMDXComponent=!0}}]);