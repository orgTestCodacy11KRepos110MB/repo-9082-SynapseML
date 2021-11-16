"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8110],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},242:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],l={title:"Vowpal Wabbit - Overview",hide_title:!0,status:"stable",url_path:"features/vw/Vowpal Wabbit - Overview",name:"Vowpal Wabbit - Overview"},s=void 0,p={unversionedId:"features/vw/Vowpal Wabbit - Overview",id:"features/vw/Vowpal Wabbit - Overview",isDocsHomePage:!1,title:"Vowpal Wabbit - Overview",description:"VowpalWabbit (VW) is a machine learning system which",source:"@site/docs/features/vw/Vowpal Wabbit - Overview.md",sourceDirName:"features/vw",slug:"/features/vw/Vowpal Wabbit - Overview",permalink:"/SynapseML/docs/next/features/vw/Vowpal Wabbit - Overview",tags:[],version:"current",frontMatter:{title:"Vowpal Wabbit - Overview",hide_title:!0,status:"stable",url_path:"features/vw/Vowpal Wabbit - Overview",name:"Vowpal Wabbit - Overview"},sidebar:"docs",previous:{title:"About",permalink:"/SynapseML/docs/next/features/lightgbm/about"},next:{title:"About",permalink:"/SynapseML/docs/next/features/vw/about"}},c=[{value:"Advantages of VowpalWabbit",id:"advantages-of-vowpalwabbit",children:[],level:3},{value:"Limitations of VowpalWabbit on Spark",id:"limitations-of-vowpalwabbit-on-spark",children:[],level:3},{value:"VowpalWabbit Usage:",id:"vowpalwabbit-usage",children:[],level:3},{value:"Heart Disease Detection with VowalWabbit Classifier",id:"heart-disease-detection-with-vowalwabbit-classifier",children:[{value:"Read dataset",id:"read-dataset",children:[],level:4},{value:"Split the dataset into train and test",id:"split-the-dataset-into-train-and-test",children:[],level:4},{value:"Use VowalWabbitFeaturizer to convert data features into vector",id:"use-vowalwabbitfeaturizer-to-convert-data-features-into-vector",children:[],level:4},{value:"Model Training",id:"model-training",children:[],level:4},{value:"Model Prediction",id:"model-prediction",children:[],level:4}],level:2},{value:"Adult Census with VowpalWabbitClassifier",id:"adult-census-with-vowpalwabbitclassifier",children:[{value:"Read dataset and split them into train &amp; test",id:"read-dataset-and-split-them-into-train--test",children:[],level:4},{value:"Model Training",id:"model-training-1",children:[],level:4},{value:"Model Prediction",id:"model-prediction-1",children:[],level:4}],level:2},{value:"Boston house price prediction with VowpalWabbitRegressor - Quantile Regression",id:"boston-house-price-prediction-with-vowpalwabbitregressor---quantile-regression",children:[{value:"Read dataset",id:"read-dataset-1",children:[],level:4},{value:"VW-style feature hashing",id:"vw-style-feature-hashing",children:[],level:4},{value:"Model training &amp; Prediction",id:"model-training--prediction",children:[],level:4},{value:"Compute Statistics &amp; Visualization",id:"compute-statistics--visualization",children:[],level:4}],level:2},{value:"Quantile Regression for Drug Discovery with VowpalWabbitRegressor",id:"quantile-regression-for-drug-discovery-with-vowpalwabbitregressor",children:[{value:"Read dataset",id:"read-dataset-2",children:[],level:4},{value:"Split dataset into train and test",id:"split-dataset-into-train-and-test",children:[],level:4},{value:"Model Training",id:"model-training-2",children:[],level:4},{value:"Model Prediction",id:"model-prediction-2",children:[],level:4}],level:2},{value:"VW Contextual Bandit",id:"vw-contextual-bandit",children:[{value:"Read dataset",id:"read-dataset-3",children:[],level:4}],level:2}],d={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{width:"200",src:"https://mmlspark.blob.core.windows.net/graphics/emails/vw-blue-dark-orange.svg"}),(0,r.kt)("h1",{id:"vowalwabbit"},"VowalWabbit"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit"},"VowpalWabbit")," (VW) is a machine learning system which\npushes the frontier of machine learning with techniques such as online, hashing, allreduce,\nreductions, learning2search, active, and interactive learning.\nVowpalWabbit is a popular choice in ad-tech due to it's speed and cost efficacy.\nFurthermore it includes many advances in the area of reinforcement learning (e.g. contextual bandits). "),(0,r.kt)("h3",{id:"advantages-of-vowpalwabbit"},"Advantages of VowpalWabbit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Composability"),": VowpalWabbit models can be incorporated into existing\nSparkML Pipelines, and used for batch, streaming, and serving workloads."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Small footprint"),": VowpalWabbit memory consumption is rather small and can be controlled through '-b 18' or setNumBits method.",(0,r.kt)("br",{parentName:"li"}),"This determines the size of the model (e.g. 2^18 * some_constant)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Feature Interactions"),": Feature interactions (e.g. quadratic, cubic,... terms) are created on-the-fly within the most inner\nlearning loop in VW.\nInteractions can be specified by using the -q parameter and passing the first character of the namespaces that should be ",(0,r.kt)("em",{parentName:"li"},"interacted"),".\nThe VW namespace concept is mapped to Spark using columns. The column name is used as namespace name, thus one sparse or dense Spark ML vector corresponds to the features of a single namespace.\nTo allow passing of multiple namespaces the VW estimator (classifier or regression) expose an additional property called ",(0,r.kt)("em",{parentName:"li"},"additionalFeatures"),". Users can pass an array of column names."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simple deployment"),": all native dependencies are packaged into a single jars (including boost and zlib)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VowpalWabbit command line arguments"),": users can pass VW command line arguments to control the learning process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VowpalWabbit binary models")," Users can supply an inital VowpalWabbit model to start the training which can be produced outside of\nVW on Spark by invoking ",(0,r.kt)("em",{parentName:"li"},"setInitialModel")," and pass the model as a byte array. Similarly users can access the binary model by invoking\n",(0,r.kt)("em",{parentName:"li"},"getModel")," on the trained model object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Java-based hashing")," VWs version of murmur-hash was re-implemented in Java (praise to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jackdoe"},"JackDoe"),")\nproviding a major performance improvement compared to passing input strings through JNI and hashing in C++."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross language")," VowpalWabbit on Spark is available on Spark, PySpark, and SparklyR.")),(0,r.kt)("h3",{id:"limitations-of-vowpalwabbit-on-spark"},"Limitations of VowpalWabbit on Spark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linux and CentOS only")," The native binaries included with the published jar are built Linux and CentOS only.\nWe're working on creating a more portable version by statically linking Boost and lib C++."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limited Parsing")," Features implemented in the native VW parser (e.g. ngrams, skips, ...) are not yet implemented in\nVowpalWabbitFeaturizer.")),(0,r.kt)("h3",{id:"vowpalwabbit-usage"},"VowpalWabbit Usage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VowpalWabbitClassifier: used to build classification models."),(0,r.kt)("li",{parentName:"ul"},"VowpalWabbitRegressor: used to build regression models."),(0,r.kt)("li",{parentName:"ul"},"VowpalWabbitFeaturizer: used for feature hashing and extraction. For details please visit ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/VowpalWabbit/vowpal_wabbit/wiki/Feature-Hashing-and-Extraction"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"VowpalWabbitContextualBandit: used to solve contextual bandits problems. For algorithm details please visit ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/VowpalWabbit/vowpal_wabbit/wiki/Contextual-Bandit-algorithms"},"here"),".")),(0,r.kt)("h2",{id:"heart-disease-detection-with-vowalwabbit-classifier"},"Heart Disease Detection with VowalWabbit Classifier"),(0,r.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Documentation/heart disease.png",width:"800"}),(0,r.kt)("h4",{id:"read-dataset"},"Read dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.format("csv")\\\n  .option("header", True)\\\n  .option("inferSchema", True)\\\n  .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/heart_disease_prediction_data.csv")\n# print dataset basic info\nprint("records read: " + str(df.count()))\nprint("Schema: ")\ndf.printSchema()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"display(df)\n")),(0,r.kt)("h4",{id:"split-the-dataset-into-train-and-test"},"Split the dataset into train and test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"train, test = df.randomSplit([0.85, 0.15], seed=1)\n")),(0,r.kt)("h4",{id:"use-vowalwabbitfeaturizer-to-convert-data-features-into-vector"},"Use VowalWabbitFeaturizer to convert data features into vector"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitFeaturizer\nfeaturizer = VowpalWabbitFeaturizer(inputCols=df.columns[:-1], outputCol="features")\ntrain_data = featurizer.transform(train)["target", "features"]\ntest_data = featurizer.transform(test)["target", "features"]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'display(train_data.groupBy("target").count())\n')),(0,r.kt)("h4",{id:"model-training"},"Model Training"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitClassifier\nmodel = VowpalWabbitClassifier(numPasses=20, labelCol="target", featuresCol="features").fit(train_data)\n')),(0,r.kt)("h4",{id:"model-prediction"},"Model Prediction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"predictions = model.transform(test_data)\ndisplay(predictions)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\nmetrics = ComputeModelStatistics(evaluationMetric='classification', labelCol='target', scoredLabelsCol='prediction').transform(predictions)\ndisplay(metrics)\n")),(0,r.kt)("h2",{id:"adult-census-with-vowpalwabbitclassifier"},"Adult Census with VowpalWabbitClassifier"),(0,r.kt)("p",null,"In this example, we predict incomes from the Adult Census dataset using Vowpal Wabbit (VW) Classifier in SynapseML."),(0,r.kt)("h4",{id:"read-dataset-and-split-them-into-train--test"},"Read dataset and split them into train & test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet")\ndata = data.select(["education", "marital-status", "hours-per-week", "income"])\ntrain, test = data.randomSplit([0.75, 0.25], seed=123)\ndisplay(train)\n')),(0,r.kt)("h4",{id:"model-training-1"},"Model Training"),(0,r.kt)("p",null,"We define a pipeline that includes feature engineering and training of a VW classifier. We use a featurizer provided by VW that hashes the feature names. Note that VW expects classification labels being -1 or 1. Thus, the income category is mapped to this space before feeding training data into the pipeline."),(0,r.kt)("p",null,"Note: VW supports distributed learning, and it's controlled by number of partitions of dataset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import when, col\nfrom pyspark.ml import Pipeline\nfrom synapse.ml.vw import VowpalWabbitFeaturizer, VowpalWabbitClassifier\n\n# Define classification label\ntrain = train.withColumn("label", when(col("income").contains("<"), 0.0).otherwise(1.0)).repartition(1)\nprint(train.count())\n\n# Specify featurizer\nvw_featurizer = VowpalWabbitFeaturizer(inputCols=["education", "marital-status", "hours-per-week"],\n                                       outputCol="features")\n')),(0,r.kt)("p",null,'Note: "args" parameter lets you pass in any params not exposed through our API. Full command line argument docs can be found ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit/wiki/Command-Line-Arguments"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Define VW classification model\nargs = "--loss_function=logistic --quiet --holdout_off"\nvw_model = VowpalWabbitClassifier(featuresCol="features",\n                                  labelCol="label",\n                                  args=args,\n                                  numPasses=10)\n\n# Create a pipeline\nvw_pipeline = Pipeline(stages=[vw_featurizer, vw_model])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"vw_trained = vw_pipeline.fit(train)\n")),(0,r.kt)("h4",{id:"model-prediction-1"},"Model Prediction"),(0,r.kt)("p",null,"After the model is trained, we apply it to predict the income of each sample in the test set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Making predictions\ntest = test.withColumn("label", when(col("income").contains("<"), 0.0).otherwise(1.0))\nprediction = vw_trained.transform(test)\ndisplay(prediction)\n')),(0,r.kt)("p",null,"Finally, we evaluate the model performance using ComputeModelStatistics function which will compute confusion matrix, accuracy, precision, recall, and AUC by default for classificaiton models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\nmetrics = ComputeModelStatistics(evaluationMetric="classification", \n                                 labelCol="label", \n                                 scoredLabelsCol="prediction").transform(prediction)\ndisplay(metrics)\n')),(0,r.kt)("h2",{id:"boston-house-price-prediction-with-vowpalwabbitregressor---quantile-regression"},"Boston house price prediction with VowpalWabbitRegressor - Quantile Regression"),(0,r.kt)("p",null,"In this example, we show how to build regression model with VW using Boston's house price."),(0,r.kt)("h4",{id:"read-dataset-1"},"Read dataset"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_boston.html"},(0,r.kt)("em",{parentName:"a"},"Boston house price")," dataset"),"\n.\nThe data was collected in 1978 from Boston area and consists of 506 entries with 14 features including the value of homes.\nWe use ",(0,r.kt)("inlineCode",{parentName:"p"},"sklearn.datasets")," module to download it easily, then split the set into training and testing by 75/25."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import math\nfrom matplotlib.colors import ListedColormap, Normalize\nfrom matplotlib.cm import get_cmap\nimport matplotlib.pyplot as plt\nfrom synapse.ml.train import ComputeModelStatistics\nfrom synapse.ml.vw import VowpalWabbitRegressor, VowpalWabbitFeaturizer\nimport numpy as np\nimport pandas as pd\nfrom sklearn.datasets import load_boston\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"boston = load_boston()\n\nfeature_cols = ['f' + str(i) for i in range(boston.data.shape[1])]\nheader = ['target'] + feature_cols\ndf = spark.createDataFrame(\n    pd.DataFrame(data=np.column_stack((boston.target, boston.data)), columns=header)\n).repartition(1)\nprint(\"Dataframe has {} rows\".format(df.count()))\ndisplay(df.limit(10))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"train_data, test_data = df.randomSplit([0.75, 0.25], seed=42)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"display(train_data.summary().toPandas())\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"train_data.show(10)\n")),(0,r.kt)("p",null,"Exploratory analysis: plot feature distributions over different target values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"features = train_data.columns[1:]\nvalues = train_data.drop('target').toPandas()\nncols = 5\nnrows = math.ceil(len(features) / ncols)\n\nyy = [r['target'] for r in train_data.select('target').collect()]\n\nf, axes = plt.subplots(nrows, ncols, sharey=True, figsize=(30,10))\nf.tight_layout()\n\nfor irow in range(nrows):\n    axes[irow][0].set_ylabel('target')\n    for icol in range(ncols):\n        try:\n            feat = features[irow*ncols + icol]\n            xx = values[feat]\n\n            axes[irow][icol].scatter(xx, yy, s=10, alpha=0.25)\n            axes[irow][icol].set_xlabel(feat)\n            axes[irow][icol].get_yaxis().set_ticks([])\n        except IndexError:\n            f.delaxes(axes[irow][icol])\n")),(0,r.kt)("h4",{id:"vw-style-feature-hashing"},"VW-style feature hashing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"vw_featurizer = VowpalWabbitFeaturizer(\n    inputCols=feature_cols,\n    outputCol='features',\n)\nvw_train_data = vw_featurizer.transform(train_data)['target', 'features']\nvw_test_data = vw_featurizer.transform(test_data)['target', 'features']\ndisplay(vw_train_data)\n")),(0,r.kt)("h4",{id:"model-training--prediction"},"Model training & Prediction"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vowpalWabbit/vowpal_wabbit/wiki/Command-Line-Arguments"},"VW wiki")," for command line arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"args = \"--holdout_off --loss_function quantile -l 7 -q :: --power_t 0.7\"\nvwr = VowpalWabbitRegressor(\n    labelCol='target',\n    featuresCol='features',\n    args=args,\n    numPasses=200,\n)\n\n# To reduce number of partitions (which will effect performance), use `vw_train_data.repartition(1)`\nvw_model = vwr.fit(vw_train_data.repartition(1))\nvw_predictions = vw_model.transform(vw_test_data)\n\ndisplay(vw_predictions.limit(20).toPandas())\n")),(0,r.kt)("h4",{id:"compute-statistics--visualization"},"Compute Statistics & Visualization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"metrics = ComputeModelStatistics(\n    evaluationMetric='regression',\n    labelCol='target',\n    scoresCol='prediction'\n).transform(vw_predictions)\n\nvw_result = metrics.toPandas()\nvw_result.insert(0, 'model', ['Vowpal Wabbit'])\ndisplay(vw_result)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"cmap = get_cmap('YlOrRd')\ntarget = np.array(test_data.select('target').collect()).flatten()\nmodel_preds = [(\"Vowpal Wabbit\", vw_predictions)]\n\nf, axe = plt.subplots(figsize=(6, 6))\nf.tight_layout()\n\npreds = np.array(vw_predictions.select('prediction').collect()).flatten()\nerr = np.absolute(preds - target)\nnorm = Normalize()\nclrs = cmap(np.asarray(norm(err)))[:, :-1]\nplt.scatter(preds, target, s=60, c=clrs, edgecolors='#888888', alpha=0.75)\nplt.plot((0, 60), (0, 60), linestyle='--', color='#888888')\naxe.set_xlabel('Predicted values')\naxe.set_ylabel('Actual values')\naxe.set_title(\"Vowpal Wabbit\")\n")),(0,r.kt)("h2",{id:"quantile-regression-for-drug-discovery-with-vowpalwabbitregressor"},"Quantile Regression for Drug Discovery with VowpalWabbitRegressor"),(0,r.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Documentation/drug.png",width:"800"}),(0,r.kt)("h4",{id:"read-dataset-2"},"Read dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'triazines = spark.read.format("libsvm")\\\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/triazines.scale.svmlight")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# print some basic info\nprint("records read: " + str(triazines.count()))\nprint("Schema: ")\ntriazines.printSchema()\ndisplay(triazines.limit(10))\n')),(0,r.kt)("h4",{id:"split-dataset-into-train-and-test"},"Split dataset into train and test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"train, test = triazines.randomSplit([0.85, 0.15], seed=1)\n")),(0,r.kt)("h4",{id:"model-training-2"},"Model Training"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitRegressor\nmodel = (VowpalWabbitRegressor(numPasses=20, args="--holdout_off --loss_function quantile -q :: -l 0.1")\n            .fit(train))\n')),(0,r.kt)("h4",{id:"model-prediction-2"},"Model Prediction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"scoredData = model.transform(test)\ndisplay(scoredData.limit(10))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\nmetrics = ComputeModelStatistics(evaluationMetric='regression',\n                                 labelCol='label',\n                                 scoresCol='prediction') \\\n            .transform(scoredData)\ndisplay(metrics)\n")),(0,r.kt)("h2",{id:"vw-contextual-bandit"},"VW Contextual Bandit"),(0,r.kt)("h4",{id:"read-dataset-3"},"Read dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.format("json").load("wasbs://publicwasb@mmlspark.blob.core.windows.net/vwcb_input.dsjson")\n')),(0,r.kt)("p",null,"Note: Actions are all five TAction_x_topic columns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql.functions import col \nfrom pyspark.sql.types import IntegerType, DoubleType \ndata = data.withColumn('GUser_id', col('c.GUser.id'))\\\n  .withColumn('GUser_major', col('c.GUser.major'))\\\n  .withColumn('GUser_hobby', col('c.GUser.hobby'))\\\n  .withColumn('GUser_favorite_character', col('c.GUser.favorite_character'))\\\n  .withColumn('TAction_0_topic', col('c._multi.TAction.topic')[0])\\\n  .withColumn('TAction_1_topic', col('c._multi.TAction.topic')[1])\\\n  .withColumn('TAction_2_topic', col('c._multi.TAction.topic')[2])\\\n  .withColumn('TAction_3_topic', col('c._multi.TAction.topic')[3])\\\n  .withColumn('TAction_4_topic', col('c._multi.TAction.topic')[4])\\\n  .withColumn('chosenAction', col('_label_Action').cast(IntegerType()))\\\n  .withColumn('label', col('_labelIndex').cast(DoubleType()))\\\n  .withColumn('probability', col('_label_probability'))\\\n  .select('GUser_id', 'GUser_major', 'GUser_hobby', 'GUser_favorite_character', 'TAction_0_topic', 'TAction_1_topic', 'TAction_2_topic', 'TAction_3_topic', 'TAction_4_topic', 'chosenAction', 'label', 'probability')\n\nprint(\"Schema: \") \ndata.printSchema()\n")),(0,r.kt)("p",null,"Add pipeline to add featurizer, convert all feature columns into vector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.vw import VowpalWabbitFeaturizer, VowpalWabbitContextualBandit, VectorZipper\nfrom pyspark.ml import Pipeline\npipeline = Pipeline(stages=[\n  VowpalWabbitFeaturizer(inputCols=['GUser_id'], outputCol='GUser_id_feature'),\n  VowpalWabbitFeaturizer(inputCols=['GUser_major'], outputCol='GUser_major_feature'),\n  VowpalWabbitFeaturizer(inputCols=['GUser_hobby'], outputCol='GUser_hobby_feature'),\n  VowpalWabbitFeaturizer(inputCols=['GUser_favorite_character'], outputCol='GUser_favorite_character_feature'),\n  VowpalWabbitFeaturizer(inputCols=['TAction_0_topic'], outputCol='TAction_0_topic_feature'),\n  VowpalWabbitFeaturizer(inputCols=['TAction_1_topic'], outputCol='TAction_1_topic_feature'),\n  VowpalWabbitFeaturizer(inputCols=['TAction_2_topic'], outputCol='TAction_2_topic_feature'),\n  VowpalWabbitFeaturizer(inputCols=['TAction_3_topic'], outputCol='TAction_3_topic_feature'),\n  VowpalWabbitFeaturizer(inputCols=['TAction_4_topic'], outputCol='TAction_4_topic_feature'),\n  VectorZipper(inputCols=['TAction_0_topic_feature', 'TAction_1_topic_feature', 'TAction_2_topic_feature', 'TAction_3_topic_feature','TAction_4_topic_feature'], outputCol='features')\n])\ntranformation_pipeline = pipeline.fit(data)\ntransformed_data = tranformation_pipeline.transform(data)\n\ndisplay(transformed_data)\n")),(0,r.kt)("p",null,"Build VowpalWabbit Contextual Bandit model and compute performance statistics."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"estimator = VowpalWabbitContextualBandit() \\\n    .setArgs(\"--cb_explore_adf --epsilon 0.2 --quiet\") \\\n    .setSharedCol('GUser_id_feature') \\\n    .setAdditionalSharedFeatures([\"GUser_major_feature\", \"GUser_hobby_feature\", \"GUser_favorite_character_feature\"]) \\\n    .setFeaturesCol('features') \\\n    .setUseBarrierExecutionMode(False)\\\n    .setChosenActionCol('chosenAction')\\\n    .setLabelCol('label')\\\n    .setProbabilityCol('probability')\nmodel = estimator.fit(transformed_data)\ndisplay(model.getPerformanceStatistics())\n")))}u.isMDXComponent=!0}}]);