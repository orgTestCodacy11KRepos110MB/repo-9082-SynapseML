"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4164],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7764:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Using the SynapseML Docker Image",sidebar_label:"Docker Image",description:"Using the SynapseML Docker Image"},l=void 0,p={unversionedId:"reference/docker",id:"reference/docker",isDocsHomePage:!1,title:"Using the SynapseML Docker Image",description:"Using the SynapseML Docker Image",source:"@site/docs/reference/docker.md",sourceDirName:"reference",slug:"/reference/docker",permalink:"/SynapseML/docs/next/reference/docker",tags:[],version:"current",frontMatter:{title:"Using the SynapseML Docker Image",sidebar_label:"Docker Image",description:"Using the SynapseML Docker Image"},sidebar:"docs",previous:{title:"Contributing Guide",permalink:"/SynapseML/docs/next/reference/contributing_guide"},next:{title:"R setup",permalink:"/SynapseML/docs/next/reference/R-setup"}},c=[{value:"Quickstart: install and run the Docker image",id:"quickstart-install-and-run-the-docker-image",children:[],level:2},{value:"Running a specific version",id:"running-a-specific-version",children:[],level:2},{value:"A more practical example",id:"a-more-practical-example",children:[],level:2},{value:"Running the container as a server",id:"running-the-container-as-a-server",children:[],level:2},{value:"Running other commands in an active container",id:"running-other-commands-in-an-active-container",children:[],level:2},{value:"Running other Spark executables",id:"running-other-spark-executables",children:[],level:2},{value:"Updating the SynapseML image",id:"updating-the-synapseml-image",children:[],level:2},{value:"A note about security",id:"a-note-about-security",children:[],level:2},{value:"Further reading",id:"further-reading",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"quickstart-install-and-run-the-docker-image"},"Quickstart: install and run the Docker image"),(0,i.kt)("p",null,"Begin by installing ",(0,i.kt)("a",{parentName:"p",href:"http://www.docker.com/products/overview/"},"Docker for your OS"),".  Then, to get the\nSynapseML image and run it, open a terminal (powershell/cmd on Windows) and run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8888:8888 mcr.microsoft.com/mmlspark/release\n")),(0,i.kt)("p",null,"In your browser, go to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888/"},"http://localhost:8888/")," \u2014 you'll see the Docker image\nEULA, and once you accept it, the Jupyter notebook interface will start.  To\nskip this step, add ",(0,i.kt)("inlineCode",{parentName:"p"},"-e ACCEPT_EULA=yes")," to the Docker command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8888:8888 -e ACCEPT_EULA=y mcr.microsoft.com/mmlspark/release\n")),(0,i.kt)("p",null,"You can now select one of the sample notebooks and run it, or create your own."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The EULA is needed only for running the SynapseML Docker image; the\nsource code is released under the MIT license (see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/SynapseML/blob/master/LICENSE"},"LICENSE"),"\nfile).")),(0,i.kt)("h2",{id:"running-a-specific-version"},"Running a specific version"),(0,i.kt)("p",null,"In the above, ",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/mmlspark/release")," specifies the project and image name that you\nwant to run.  There is another component implicit here which is the ",(0,i.kt)("em",{parentName:"p"},"tsag")," (=\nversion) that you want to use \u2014 specifying it explicitly looks like\n",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/mmlspark/release:0.9.4")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"0.9.4")," tag."),(0,i.kt)("p",null,"Leaving ",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/mmlspark/release")," by itself has an implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag, so it is\nequivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/mmlspark/release:latest"),".  The ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag is identical to the\nmost recent stable SynapseML version.  You can see the current ","[synapsemltags]"," on\nour ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/microsoft/mmlspark/"},"Docker Hub repository"),"."),(0,i.kt)("h2",{id:"a-more-practical-example"},"A more practical example"),(0,i.kt)("p",null,"The previous section had a rather simplistic command.  A more complete command\nthat you will probably want to use can look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm \\\n           -p 127.0.0.1:80:8888 \\\n           -v ~/myfiles:/notebooks/myfiles \\\n           mcr.microsoft.com/mmlspark/release:0.9.4\n")),(0,i.kt)("p",null,"In this example, backslashes are used to break things up for readability; you\ncan enter it as one long like.  Note that in powershell, the ",(0,i.kt)("inlineCode",{parentName:"p"},"myfiles")," local\npath and line breaks looks a little different:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -it --rm `\n           -p 127.0.0.1:80:8888 `\n           -v C:\\myfiles:/notebooks/myfiles `\n           mcr.microsoft.com/mmlspark/release:0.9.4\n")),(0,i.kt)("p",null,"Let's break this command and go over the meaning of each part:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"-it"))),(0,i.kt)("p",{parentName:"li"},"This is a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-t")," (which could also be specified as\n",(0,i.kt)("inlineCode",{parentName:"p"},"--interactive --tty"),").  The combination of these two flags mean that the\nimage is running interactively, which in this example means that you can see\nmessages that the server prints out, and it also makes it possible to use\n",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," to shut down the Jupyter notebook server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"--rm"))),(0,i.kt)("p",{parentName:"li"},"When Docker runs any image, it creates a ",(0,i.kt)("em",{parentName:"p"},"container")," to hold any additional\nfilesystem data for files that were created or modified.  If you ran the above\nquickstart command, you can see the container that is left behind with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker\ncontainer list -a"),".  You can reclaim such containers with `docker container rm"),(0,i.kt)("id",null),"`, or reclaim all containers from stopped run with `docker container prune`, or even more generally, reclaim all unused Docker resources with `docker system prune`.",(0,i.kt)("p",{parentName:"li"},"Back to ",(0,i.kt)("inlineCode",{parentName:"p"},"--rm"),": this flag tells Docker to discard the image when the image\nexits.  You should be aware that this means that any data created while\nrunning the image is discarded when the run is done \u2014 but see the description\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," flag below.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"-e ACCEPT_EULA=y"))),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," flag is used to set environment variables in the running container.\nIn this case, we use it to bypass the EULA check.  Additional flags can be\nadded for other variables, for example, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"-e\nMMLSPARK_JUPYTER_PORT=80")," to change the port that the Jupyter server listens\nto.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"-p 127.0.0.1:80:8888"))),(0,i.kt)("p",{parentName:"li"},"The Jupyter server in the SynapseML image listens to port 8888 \u2014 but that is\nnormally isolated from the actual network.  Previously, we have used ",(0,i.kt)("inlineCode",{parentName:"p"},"-p\n8888:8888")," to say that we want to map port 8888 (LHS) on our actual machine to\nport 8888 (RHS) in the container.  One problem with this is that ",(0,i.kt)("inlineCode",{parentName:"p"},"8888")," might\nbe hard to remember, but a more serious problem is that your machine now\nserves the Jupyter interface to any one on your network."),(0,i.kt)("p",{parentName:"li"},"This more complete example resolves these issues: we replaced ",(0,i.kt)("inlineCode",{parentName:"p"},"8888:8888")," with\n",(0,i.kt)("inlineCode",{parentName:"p"},"80:8888")," so HTTP port 80 goes to the container's running Jupyter (making just\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost/"},"http://localhost/")," work); and we also added a ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:")," prefix which means\nthat this is available only from your own machine rather than being exposed."),(0,i.kt)("p",{parentName:"li"},"You can repeat this flag to forward additional ports similarly.  For example,\nyou can expose some of the ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/security.html#configuring-ports-for-network-security"},"Spark ports"),", e.g.,: ",(0,i.kt)("inlineCode",{parentName:"p"},"-p 127.0.0.1:4040:4040"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"-v ~/myfiles:/notebooks/myfiles"))),(0,i.kt)("p",{parentName:"li"},"As described above, we're using ",(0,i.kt)("inlineCode",{parentName:"p"},"--rm")," to remove the container when the run\nexits.  This is usually fine since pulling out files from these containers can\nbe a little complicated.  Instead, we use this flag to map a directory from\nyour machine (the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/myfiles")," on the LHS) to a directory that is available\ninside the running container.  Any modifications to this directory that are\ndone by the Docker image are performed directly on the actual directory."),(0,i.kt)("p",{parentName:"li"},"Note that the local directory follows the local filename conventions, so on\nWindows you'd use a Windows-looking path.  On Windows you also need to share\nthe drive you want to use in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/#docker-settings"},"Docker settings"),"."),(0,i.kt)("p",{parentName:"li"},"The path on the right side is used inside the container and it is therefore a\nLinux path.  The SynapseML image runs Jupyter in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/notebooks")," directory, so\nit is a good place for making your files available conveniently."),(0,i.kt)("p",{parentName:"li"},"This flag can be used more than once, to make several directories available in\nthe running container.  Both paths must be absolute, so if you want to specify\na path relatively, you can use something like ",(0,i.kt)("inlineCode",{parentName:"p"},"-v\n$PWD/myfiles:/notebooks/myfiles"),"."),(0,i.kt)("p",{parentName:"li"},"With such directory sharing in place, you can create/edit notebooks, and code\nin notebooks can use the shared directory for additional data, for example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"data = spark.read.csv('myfiles/mydata.csv')\n...\nmodel.write().overwrite().save('myfiles/myTrainedModel.mml')\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"mcr.microsoft.com/mmlspark/release:0.9.4"))),(0,i.kt)("p",{parentName:"li"},"Finally, this specifies an explicit version tag for the image that we want to\nrun."))),(0,i.kt)("h2",{id:"running-the-container-as-a-server"},"Running the container as a server"),(0,i.kt)("p",null,"An alternative to running the Docker image interactively with ",(0,i.kt)("inlineCode",{parentName:"p"},"-it"),' is running\nit in a "detached" mode, as a server, using the ',(0,i.kt)("inlineCode",{parentName:"p"},"-d")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"--detach"),") flag.  An\nadditional flag that is useful for this is ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," that gives a convenient\nlabel to the running image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name my-synapseml ...flags... mcr.microsoft.com/mmlspark/release\n")),(0,i.kt)("p",null,"When running in this mode, you can use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"docker stop my-synapseml"),":  to stop the image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"docker start my-synapseml"),": to start it again")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"docker logs my-synapseml"),":  to see the log output it produced"))),(0,i.kt)("h2",{id:"running-other-commands-in-an-active-container"},"Running other commands in an active container"),(0,i.kt)("p",null,"Another useful ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," command is ",(0,i.kt)("inlineCode",{parentName:"p"},"exec"),", which runs a command in the context\nof an ",(0,i.kt)("em",{parentName:"p"},"existing")," active container.  To use it, you specify the container name,\nand the command to run.  For example, with a detached container started as\nabove, you can use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it my-synapseml bash\n")),(0,i.kt)("p",null,"to start a shell in the context of the server, roughly equivalent to starting a\nterminal in the Jupyter interface."),(0,i.kt)("p",null,"Other common Linux executables can be used, e.g.,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it my-synapseml top\ndocker exec my-synapseml ps auxw\n")),(0,i.kt)("p",null,"(Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"ps")," does not need ",(0,i.kt)("inlineCode",{parentName:"p"},"-it")," since it's not an interactive command.)"),(0,i.kt)("p",null,"These commands can be used with interactive containers too, and ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," can be\nused to make them easy to target.  If you don't use ",(0,i.kt)("inlineCode",{parentName:"p"},"--name"),", Docker assigns a\nrandom name to the container; you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"docker ps")," to see it --- and you can\nalso get the container IDs and use those instead of names."),(0,i.kt)("p",null,"Remember that the command given to ",(0,i.kt)("inlineCode",{parentName:"p"},"docker exec")," is running in the context of\nthe running container: you can only run executables that exist in the container,\nand the run is subject to the same resource restrictions (FS/network access,\netc) as the container.  The SynapseML image is based on a rather basic Ubuntu\ninstallation (the ",(0,i.kt)("inlineCode",{parentName:"p"},"ubuntu")," image from Docker Hub)."),(0,i.kt)("h2",{id:"running-other-spark-executables"},"Running other Spark executables"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," can accept another optional argument after the image name,\nspecifying an alternative executable to run instead of the default launcher that\nfires up the Jupyter notebook server.  This makes it possible to use the Spark\nenvironment directly in the container if you start it as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it ...flags... mcr.microsoft.com/mmlspark/release bash\n")),(0,i.kt)("p",null,"This starts the container with bash instead of Jupyter.  This environment has\nall of the Spark executables available in its ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),".  You still need to\nspecify the command-line flags that load the SynapseML package, but there are\nconvenient environment variables that hold the required package and repositories\nto use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pyspark --repositories "$MML_M2REPOS" --packages "$MML_PACKAGE" --master "local[*]"\n')),(0,i.kt)("p",null,"Many of the above listed flags are useful in this case too, such as mapping work\ndirectories with ",(0,i.kt)("inlineCode",{parentName:"p"},"-v"),"."),(0,i.kt)("h2",{id:"updating-the-synapseml-image"},"Updating the SynapseML image"),(0,i.kt)("p",null,"New releases of SynapseML are published from time to time, and they include a new\nDocker image.  As an image consumer, you will normlly not notice such new\nversions: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," will download an image if a copy of it does not exist\nlocally, but if it does, then ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," will blindly run it, ",(0,i.kt)("em",{parentName:"p"},"without"),"\nchecking for new tags that were pushed."),(0,i.kt)("p",null,"This means that you need to explicitly tell Docker to check for a new version\nand pull it if one exists.  You do this with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pull")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull mcr.microsoft.com/mmlspark/release\n")),(0,i.kt)("p",null,"Since we didn't specify an explicit tag here, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," adds the implied\n",(0,i.kt)("inlineCode",{parentName:"p"},":latest")," tag, and checks the available ",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/mmlspark/release")," image with this tag\non Docker Hub.  When it finds a different image with this tag, it will fetch a\ncopy to your machine, changing the image that an unqualified\n",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/mmlspark/release")," refers to."),(0,i.kt)("p",null,"Docker normally knows only about the tags that it fetched, so if you've always\nused ",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/mmlspark/release")," to refer to the image without an explicit version tag,\nthen you wouldn't have the version-tagged image too.  Once the tag is updated,\nthe previous version will still be in your system, only without any tag.  Using\n",(0,i.kt)("inlineCode",{parentName:"p"},"docker images")," to list the images in your system will now show you two images\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/mmlspark/release"),", one with a tag of ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," and one with no tag, shown\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"<none>"),".  Assuming that you don't have active containers (including detached\nones), ",(0,i.kt)("inlineCode",{parentName:"p"},"docker system prune")," will remove this untagged image, reclaiming the\nused space."),(0,i.kt)("p",null,"If you have used an explicit version tag, then it will still exist after a new\npull, which means that you can continue using this version.  Note that if you\nused an unqualified name first and then a version-tagged one, Docker will fetch\nboth tags, only the second fetch is fast since the it points to contents that\nwas already loaded.  In this case, doing a ",(0,i.kt)("inlineCode",{parentName:"p"},"pull")," when there's a new version\nwill fetch the new ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag and change its meaning to the newer version, but\nthe older version will still be available under its own version tag."),(0,i.kt)("p",null,"Finally, if there are such version-tagged older versions that you want to get\nrid of, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"docker images")," to check the list of installed images and\ntheir tags, and ",(0,i.kt)("inlineCode",{parentName:"p"},"docker rmi <name>:<tag>")," to remove the unwanted ones."),(0,i.kt)("h2",{id:"a-note-about-security"},"A note about security"),(0,i.kt)("p",null,"Executing code in a Docker container can be unsafe if the running user is\n",(0,i.kt)("inlineCode",{parentName:"p"},"root"),".  For this reason, the SynapseML image uses a proper username instead.  If\nyou still want to run as root (e.g., if you want to ",(0,i.kt)("inlineCode",{parentName:"p"},"apt install")," an additional\nubuntu package), then you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"--user root"),".  This can be useful when\ncombined with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker exec")," too do such administrative work while the image\ncontinues to run as usual."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,"This text covers very briefly some of the useful things that you can do with the\nSynapseML Docker image (and other images in general).  You can find much more\ndocumentation ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"online"),"."))}u.isMDXComponent=!0}}]);