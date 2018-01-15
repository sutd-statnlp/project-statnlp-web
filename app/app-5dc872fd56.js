!function(){"use strict";function t(t){t.initialize()}angular.module("webApp",["ngResource","ngAria","ui.router","oc.lazyLoad","ngAnimate","cgBusy"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t,a){return t("",{},{getTutorials:{method:"GET",cache:!0,url:a.getApiEndpoint("Tutorial","A1","H8")}})}angular.module("webApp").factory("TutorialService",t),t.$inject=["$resource","DataService"]}(),function(){"use strict";function t(t,a){return t("",{},{getPublications:{method:"GET",cache:!0,url:a.getApiEndpoint("Publication","A1","H10")}})}angular.module("webApp").factory("PublicationService",t),t.$inject=["$resource","DataService"]}(),function(){"use strict";function t(t,a){return t("",{},{getLatestProjects:{method:"GET",cache:!0,url:a.getApiEndpoint("Project","A1","H5")},getProjects:{method:"GET",cache:!0,url:a.getApiEndpoint("Project","A1","H10")}})}angular.module("webApp").factory("ProjectService",t),t.$inject=["$resource","DataService"]}(),function(){"use strict";function t(t,a){return t("",{},{getHotNews:{method:"GET",cache:!0,url:a.getApiEndpoint("News","A1","H5")}})}angular.module("webApp").factory("NewsService",t),t.$inject=["$resource","DataService"]}(),function(){"use strict";function t(t){function a(t,a,n){return"https://sheets.googleapis.com/v4/spreadsheets/"+e+"/values/"+t+"!"+a+"%3A"+n+"?key="+i}var e="1oY0Oozw7KPs2EwxrR9bgcn65C-NMbau0s1JBhED0bP4",i="AIzaSyBQBvZnbU-SJqBtYxawwh4hkEGhl8UML-I",n={getApiEndpoint:a};return n}angular.module("webApp").factory("DataService",t),t.$inject=["$resource"]}(),function(){"use strict";function t(t){t.state("tutorial",{parent:"page",url:"/tutorial",data:{authorities:[]},views:{"content@":{templateUrl:"app/page/tutorial/tutorial.html",controller:"TutorialController",controllerAs:"vm"}}})}angular.module("webApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,a,e,i){function n(){function t(t){s.tutorials=i.getArrayDataFromSheet(t)}function a(t){console.log(t)}e.getTutorials({},t,a)}var s=this;s.tutorials=[],n()}angular.module("webApp").controller("TutorialController",t),t.$inject=["$scope","$state","TutorialService","DataUtils"]}(),function(){"use strict";function t(t){t.state("team",{parent:"page",url:"/team",data:{authorities:[]},views:{"content@":{templateUrl:"app/page/team/team.html",controller:"TeamController",controllerAs:"vm"}}})}angular.module("webApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,a,e,i){function n(){function t(t){s.teamMembers=i.getArrayDataFromSheet(t)}function a(t){console.log(t)}e.getMembers({},t,a)}var s=this;s.teamMembers=[],n()}angular.module("webApp").controller("TeamController",t),t.$inject=["$scope","$state","DataService","DataUtils"]}(),function(){"use strict";function t(t){t.state("publication",{parent:"page",url:"/publication",data:{authorities:[]},views:{"content@":{templateUrl:"app/page/publication/publication.html",controller:"PublicationController",controllerAs:"vm"}}})}angular.module("webApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,a,e,i){function n(){function t(t){s.publications=i.getArrayDataFromSheet(t)}function a(t){console.log(t)}s.promise=e.getPublications({},t,a)}var s=this;s.publications=[],s.promise={},n()}angular.module("webApp").controller("PublicationController",t),t.$inject=["$scope","$state","PublicationService","DataUtils"]}(),function(){"use strict";function t(t){t.state("project",{parent:"page",url:"/project",data:{authorities:[]},views:{"content@":{templateUrl:"app/page/project/project.html",controller:"ProjectController",controllerAs:"vm"}}})}angular.module("webApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,a,e,i){function n(){function t(t){s.projects=i.getArrayDataFromSheet(t)}function a(t){console.log(t)}s.promise=e.getProjects({},t,a)}var s=this;s.projects=[],s.promise={},n()}angular.module("webApp").controller("ProjectController",t),t.$inject=["$scope","$state","ProjectService","DataUtils"]}(),function(){"use strict";function t(t){t.state("page",{parent:"app",abstract:!0})}angular.module("webApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,a,e){e.load("content/js/front.js");var i=a.current.name;$(document).ready(function(){function t(t){a.removeClass("active"),t.addClass("active")}var a=$("#navigation ul li");a.each(function(){i===$(this).attr("data-state")&&t($(this))}),a.click(function(){t($(this))})})}angular.module("webApp").controller("NavbarController",t),t.$inject=["$scope","$state","$ocLazyLoad"]}(),function(){"use strict";function t(t,a){}angular.module("webApp").controller("FooterController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("webApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,a,e,i,n){function s(){function t(t){o.news=i.getArrayDataFromSheet(t)}e.getHotNews({},t,l)}function r(){function t(t){o.projects=i.getArrayDataFromSheet(t)}n.getLatestProjects({},t,l)}function l(t){console.log(t)}var o=this;o.news=[],o.projects=[],s(),r()}angular.module("webApp").controller("HomeController",t),t.$inject=["$scope","$state","NewsService","DataUtils","ProjectService"]}(),function(){"use strict";function t(){function t(t,a){if(isNaN(a))return t;if(a<=0)return"";if(t){var e=t.split(/\s+/);e.length>a&&(t=e.slice(0,a).join(" ")+"...")}return t}return t}angular.module("webApp").filter("words",t)}(),function(){"use strict";function t(){function t(t,a,e){if(isNaN(a))return t;if(a<=0)return"";if(t&&t.length>a){if(t=t.substring(0,a),e)for(;" "===t.charAt(t.length-1);)t=t.substr(0,t.length-1);else{var i=t.lastIndexOf(" ");i!==-1&&(t=t.substr(0,i))}return t+"..."}return t}return t}angular.module("webApp").filter("characters",t)}(),function(){"use strict";function t(){function t(t,a,e,i){a.bind("click",function(){i.sort(e.jhSortBy)})}var a={restrict:"A",scope:!1,require:"^jhSort",link:t};return a}angular.module("webApp").directive("jhSortBy",t)}(),function(){"use strict";function t(){var t={restrict:"A",scope:{predicate:"=jhSort",ascending:"=",callback:"&"},controller:a,controllerAs:"vm",bindToController:!0};return t}function a(t,a){function e(t){var a=t.find("span.glyphicon"),e="glyphicon-sort",i="glyphicon-sort-by-attributes",n="glyphicon-sort-by-attributes-alt",s=e+" "+n,l=i;r.ascending||(s=e+" "+i,l=n),r.resetClasses(),a.removeClass(s),a.addClass(l)}function i(){var t=a.find("span.glyphicon"),e="glyphicon-sort",i="glyphicon-sort-by-attributes",n="glyphicon-sort-by-attributes-alt";t.removeClass(i+" "+n),t.addClass(e)}function n(a){a!==r.predicate?r.ascending=!0:r.ascending=!r.ascending,r.predicate=a,t.$apply(),r.callback()}function s(t){r.resetClasses(),t&&"_score"!==t[0]&&r.applyClass(a.find("th[jh-sort-by='"+t[0]+"']"))}var r=this;r.applyClass=e,r.resetClasses=i,r.sort=n,r.triggerApply=s,t.$watchGroup(["vm.predicate","vm.ascending"],r.triggerApply),r.triggerApply()}angular.module("webApp").directive("jhSort",t),a.$inject=["$scope","$element"]}(),function(){"use strict";function t(){function t(t){if(0===t.length)throw new Error("input must not be of zero length");var a=t.split(","),e={};return angular.forEach(a,function(t){var a=t.split(">;");if(2!==a.length)throw new Error('section could not be split on ">;"');var i=a[0].replace(/<(.*)/,"$1").trim(),n={};i.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(t,a,e,i){n[a]=i});var s=n.page;angular.isString(s)&&(s=parseInt(s));var r=a[1].replace(/rel="(.*)"/,"$1").trim();e[r]=s}),e}var a={parse:t};return a}angular.module("webApp").factory("ParseLinks",t)}(),function(){"use strict";angular.module("webApp").constant("errorConstants",function(){var t="http://www.jhipster.tech/problem";return{EMAIL_ALREADY_USED_TYPE:t+"/email-already-used",LOGIN_ALREADY_USED_TYPE:t+"/login-already-used",EMAIL_NOT_FOUND_TYPE:t+"/email-not-found"}}())}(),function(){"use strict";function t(t){function a(t){return t?new Date(t):null}function e(t){if(t){var a=t.split("-");return new Date(a[0],a[1]-1,a[2])}return null}function i(a){return a?t("date")(a,"yyyy-MM-dd"):null}function n(){return"yyyy-MM-dd"}var s={convertDateTimeFromServer:a,convertLocalDateFromServer:e,convertLocalDateToServer:i,dateformat:n};return s}angular.module("webApp").factory("DateUtils",t),t.$inject=["$filter"]}(),function(){"use strict";function t(t){function a(t){return angular.isString(t)?t.length<30?t:t?t.substring(0,15)+"..."+t.slice(-10):"":""}function e(t){function a(t,a){return a.indexOf(t,a.length-t.length)!==-1}function e(t){return a("==",t)?2:a("=",t)?1:0}function i(t){return t.length/4*3-e(t)}function n(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" bytes"}return angular.isString(t)?n(i(t)):""}function i(a,e){t.open("data:"+a+";base64,"+e,"_blank","height=300,width=400")}function n(t,a){var e=new FileReader;e.readAsDataURL(t),e.onload=function(t){var e=t.target.result.substr(t.target.result.indexOf("base64,")+"base64,".length);a(e)}}function s(t){for(var a=[],e=t.values[0],i=1;i<t.values.length;i++){for(var n={},s=t.values[i],r=0;r<s.length;r++)n[e[r]]=s[r];a.push(n)}return a}var r={abbreviate:a,byteSize:e,openFile:i,toBase64:n,getArrayDataFromSheet:s};return r}angular.module("webApp").factory("DataUtils",t),t.$inject=["$window"]}(),function(){"use strict";function t(){function t(t){return null!==t&&(t=t.toLowerCase(),t=t.substring(0,1).toUpperCase()+t.substring(1)),t}return t}angular.module("webApp").filter("capitalize",t)}(),function(){"use strict";function t(){function t(t){for(var a,i,n,s,r,l,o,c="",d=0;d<t.length;)a=t.charCodeAt(d++),i=t.charCodeAt(d++),n=t.charCodeAt(d++),s=a>>2,r=(3&a)<<4|i>>4,l=(15&i)<<2|n>>6,o=63&n,isNaN(i)?l=o=64:isNaN(n)&&(o=64),c=c+e.charAt(s)+e.charAt(r)+e.charAt(l)+e.charAt(o);return c}function a(t){var a,i,n,s,r,l,o,c="",d=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<t.length;)s=e.indexOf(t.charAt(d++)),r=e.indexOf(t.charAt(d++)),l=e.indexOf(t.charAt(d++)),o=e.indexOf(t.charAt(d++)),a=s<<2|r>>4,i=(15&r)<<4|l>>2,n=(3&l)<<6|o,c+=String.fromCharCode(a),64!==l&&(c+=String.fromCharCode(i)),64!==o&&(c+=String.fromCharCode(n));return c}var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i={decode:a,encode:t};return i}angular.module("webApp").factory("Base64",t)}(),function(){"use strict";function t(t,a,e,i){function n(){t.VERSION=i;var a=t.$on("$stateChangeStart",function(a,i,n,s){t.toState=i,t.toStateParams=n,t.fromState=s,i.external&&(a.preventDefault(),e.open(i.url,"_self"))}),n=t.$on("$stateChangeSuccess",function(t,a,i,n,s){var r="StatNLP Framework";a.data.pageTitle&&(r=a.data.pageTitle),e.document.title=r});t.$on("$destroy",function(){angular.isDefined(a)&&null!==a&&a(),angular.isDefined(n)&&null!==n&&n()})}return{initialize:n}}angular.module("webApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$window","VERSION"]}(),function(){"use strict";function t(t,a){t.otherwise("/"),a.type("boolean",{name:"boolean",decode:function(t){return t===!0||"true"===t},encode:function(t){return t?1:0},equals:function(t,a){return this.is(t)&&t===a},is:function(t){return[!0,!1,0,1].indexOf(t)>=0},pattern:/bool|true|0|1/})}angular.module("webApp").config(t),t.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"]}(),function(){"use strict";function t(t,a){t.debugInfoEnabled(a)}angular.module("webApp").config(t),t.$inject=["$compileProvider","DEBUG_INFO_ENABLED"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{navbar:{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"},footer:{templateUrl:"app/layouts/footer/footer.html",controller:"FooterController",controllerAs:"vm"}}})}angular.module("webApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";angular.module("webApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!1).constant("BUILD_TIMESTAMP",1516010224320)}(),function(){angular.module("webApp").run(["$templateCache",function(t){t.put("app/home/home.html",'<div class="m-home"><section><!-- *** HOMEPAGE CAROUSEL ***\n            _________________________________________________________ --><div class="home-carousel"><div class="dark-mask"></div><div class="m-slider-container"><div id="myCarousel" class="carousel slide m-slider" data-ride="carousel"><!-- Indicators --><ol class="carousel-indicators m-slide-ol"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li></ol><!-- Wrapper for slides --><div class="carousel-inner"><div class="item active"><div class="row"><div class="col-sm-5 right"><p></p><h1>A Unified Framework</h1><p></p><p>For Structured Prediction<br>From Theory to Practice</p><p>For Machine Learning<br>From Big data to Insight</p><p></p><p><button ui-sref="tutorial" class="scroll-to btn btn-template-transparent-primary">Getting Started</button></p></div><div class="col-sm-7"><img class="img-responsive" src="content/images/mhome-slide-1-90df03b7b0.png" alt=""></div></div></div><div class="item"><div class="row"><div class="col-sm-7 text-center"><img class="img-responsive" src="content/images/mhome-slide-2-f7756cfa46.png" alt=""></div><div class="col-sm-5"><h2>Natural Language &amp Text processing</h2><ul class="list-style-none"><li>novel and efficient algorithms</li><li>fast prototyping</li><li>various structured prediction models</li><li>capable of modeling structures</li></ul><p><a href="http://visual.statnlp.tk" target="_blank" class="scroll-to btn btn-template-transparent-primary">Explore playground</a></p></div></div></div></div></div><!-- /.project owl-slider --></div></div><!-- *** HOMEPAGE CAROUSEL END *** --></section><section class="bar background-white"><div class="container"><div class="col-md-12"><div class="row"><div class="col-md-4"><div class="box-simple"><div class="icon"><i class="fa fa-expand"></i></div><h3>Feature Manager</h3><p>FeatureManager is the class where you can implement the feature extractor</p></div></div><div class="col-md-4"><div class="box-simple"><div class="icon"><i class="fa fa-cubes"></i></div><h3>Network Compiler</h3><p>NetworkCompiler is the class where you can implement the graphical model</p></div></div><div class="col-md-4"><div class="box-simple"><div class="icon"><i class="fa fa-hdd-o"></i></div><h3>Instance</h3><p>The data structure to store input, corresponding network structures, gold output and predictions.</p></div></div></div></div></div></section><section class="bar no-mb color-white padding-big text-center-sm"><div class="container"><div class="row"><div class="col-md-6 text-center"><img src="content/images/msutd-logo-19f57991f4.png" alt="" class="img-responsive"></div><div class="col-md-6"><h2 class="text-uppercase">StatNLP, the NLP &amp Big Data Research Group</h2><p class="lead mb-small">ISTD - Singapore University of Technology and Design</p><p class="mb-small">The StatNLP was created in 2014. Currently, it is led by <a class="m-a" href="https://istd.sutd.edu.sg/people/faculty/lu-wei" target="_blank"><strong>Prof Lu Wei</strong> </a>, consisting of several graduate students and researchers. The group subscribes to the design spirit of SUTD. The group has built a successful track record of publishing in the top ranked conferences. Members of StatNLP also collaborate with external organizations such as DSO National Laboratory.</p><p><a href="#" class="btn btn-template-transparent-primary">Read more</a></p></div></div></div></section><section class="bar background-white no-mb"><div class="container"><div class="col-md-12"><div class="heading text-center"><h2>Hot News</h2></div><!-- *** BLOG HOMEPAGE ***\n            _________________________________________________________ --><div class="row"><div ng-repeat="item in vm.news" class="col-md-3 col-sm-6 m-news"><div class="box-image-text blog"><div class="top"><div class="image"><img ng-src="{{item.imageUrl}}" alt="" class="img-responsive"></div><div class="bg"></div><div class="text"><p class="buttons"><a href="#" class="btn btn-template-transparent-primary"><i class="fa fa-link"></i> Read more</a></p></div></div><div class="content"><h4><a href="#" class="text-capitalize m-a-none">{{item.title}}</a></h4><p class="author-category">By <a href="#">{{item.date | date}}</a> in <a href="#">{{item.tag}}</a></p><p class="intro">{{item.content | limitTo: 160 }}...</p></div></div><!-- /.box-image-text --></div></div><!-- /.row --><!-- *** BLOG HOMEPAGE END *** --></div></div><!-- /.container --></section><!-- /.bar --><section class="bar background-white no-mb"><div class="container"><section><div class="row"><div class="col-md-12"><div class="heading text-center"><h2>Latest Projects</h2></div></div></div><div class="row portfolio"><div class="col-sm-6"><section><div class="panel-group" id="accordion1"><div ng-repeat="item in vm.projects.slice(0,2)" class="panel panel-primary"><div class="panel-heading"><h4 class="panel-title"><a class="text-capitalize m-a-none" data-toggle="collapse" data-parent="#accordion1" href="#p{{item.id}}">{{item.title}}</a></h4></div><div id="p{{item.id}}" class="panel-collapse collapse"><div class="panel-body"><div class="tabs"><ul class="nav nav-pills nav-justified"><li class="active"><a href="#tab{{item.id}}-1" data-toggle="tab">Abstraction</a></li><li class=""><a href="#tab{{item.id}}-2" data-toggle="tab">PI Co-PI</a></li><li class=""><a href="#tab{{item.id}}-3" data-toggle="tab">Funding Agency</a></li><li><a href="#tab{{item.id}}-4" data-toggle="tab">Support Period</a></li></ul><div class="tab-content tab-content-inverse"><div class="tab-pane active" id="tab{{item.id}}-1">{{item.abstract}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-2">{{item.pi}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-3">{{item.fundingAgency}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-4">{{item.supportPeriod}}</div><!-- /.tab --></div></div></div></div></div><!-- /.panel --></div><!-- /.panel --></section></div><!-- /.panel-group --><div class="col-sm-6"><section><div class="panel-group" id="accordion2"><div ng-repeat="item in vm.projects.slice(2,4)" class="panel panel-primary"><div class="panel-heading"><h4 class="panel-title"><a class="text-capitalize m-a-none" data-toggle="collapse" data-parent="#accordion2" href="#p{{item.id}}">{{item.title}}</a></h4></div><div id="p{{item.id}}" class="panel-collapse collapse"><div class="panel-body"><div class="tabs"><ul class="nav nav-pills nav-justified"><li class="active"><a href="#tab{{item.id}}-1" data-toggle="tab">Abstraction</a></li><li class=""><a href="#tab{{item.id}}-2" data-toggle="tab">PI Co-PI</a></li><li class=""><a href="#tab{{item.id}}-3" data-toggle="tab">Funding Agency</a></li><li><a href="#tab{{item.id}}-4" data-toggle="tab">Support Period</a></li></ul><div class="tab-content tab-content-inverse"><div class="tab-pane active" id="tab{{item.id}}-1">{{item.abstract}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-2">{{item.pi}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-3">{{item.fundingAgency}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-4">{{item.supportPeriod}}</div><!-- /.tab --></div></div></div></div></div><!-- /.panel --></div><!-- /.panel --></section></div><!-- /.panel-group --></div></section></div></section></div><section class="bar background-gray no-mb"><div class="container"><div class="row"><div class="col-md-12"><div class="heading text-center"><h2>Funding Agencies</h2></div><ul class="customers list-inline text-center"><li class="item"><a href="https://www.dso.org.sg/"><img src="content/images/magency-1-d0ad4ceb6a.png" alt="" class="img-responsive"></a></li><li class="item"><a href="http://www.moe.gov.sg/"><img src="content/images/magency-2-4cbd6da93a.png" alt="" class="img-responsive"></a></li><li class="item"><a href="https://www.mindef.gov.sg/"><img src="content/images/magency-3-66ab89d7e9.png" alt="" class="img-responsive"></a></li><li class="item"><a href="https://www.nrf.gov.sg/"><img src="content/images/magency-4-8cde93310d.png" alt="" class="img-responsive"></a></li><li class="item"><a href="http://www.nsfc.gov.cn/"><img src="content/images/magency-5-9d6e760c7f.png" alt="" class="img-responsive"></a></li><li class="item"><a href="https://sutd.edu.sg/"><img src="content/images/magency-6-13e676acb8.png" alt="" class="img-responsive"></a></li></ul><!-- /.owl-carousel --></div></div></div></section>'),t.put("app/layouts/footer/footer.html",'<!-- *** FOOTER ***\n_________________________________________________________ --><!-- <footer id="footer">\n\n</footer> --><!-- /#footer --><!-- *** FOOTER END *** --><!-- *** COPYRIGHT ***\n_________________________________________________________ --><footer id="copyright"><div class="container"><div class="col-md-12 text-center"><p>&copy; Copyright 2018 StatNLP | All Rights Reserved</p><p class="pull-right" hidden>Template by <a href="https://bootstrapious.com">Bootstrapious</a> & <a href="https://fity.cz">Fity.cz</a><!-- Not removing these links is part of the license conditions of the template. Thanks for understanding :) If you want to use the template without the attribution links, you can do so after supporting further themes development at https://bootstrapious.com/donate  --></p></div></div></footer><!-- /#copyright --><!-- *** COPYRIGHT END *** -->'),t.put("app/page/project/project.html",'<section class="m-project"><div class="container" cg-busy="vm.promise"><div class="row portfolio"><div class="col-sm-6"><section><div class="panel-group" id="accordion1"><div ng-repeat="item in vm.projects.slice(0,3)" class="panel panel-primary"><div class="panel-heading"><h4 class="panel-title"><a class="text-capitalize m-a-none" data-toggle="collapse" data-parent="#accordion1" href="project#p{{item.id}}">{{item.title}}</a></h4></div><div id="p{{item.id}}" class="panel-collapse collapse"><div class="panel-body"><div class="tabs"><ul class="nav nav-pills nav-justified"><li class="active"><a href="project#tab{{item.id}}-1" data-toggle="tab">Abstraction</a></li><li class=""><a href="project#tab{{item.id}}-2" data-toggle="tab">PI Co-PI</a></li><li class=""><a href="project#tab{{item.id}}-3" data-toggle="tab">Funding Agency</a></li><li><a href="project#tab{{item.id}}-4" data-toggle="tab">Support Period</a></li></ul><div class="tab-content tab-content-inverse"><div class="tab-pane active" id="tab{{item.id}}-1">{{item.abstract}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-2">{{item.pi}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-3">{{item.fundingAgency}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-4">{{item.supportPeriod}}</div><!-- /.tab --></div></div></div></div></div><!-- /.panel --></div><!-- /.panel --></section></div><!-- /.panel-group --><div class="col-sm-6"><section><div class="panel-group" id="accordion2"><div ng-repeat="item in vm.projects.slice(3,6)" class="panel panel-primary"><div class="panel-heading"><h4 class="panel-title"><a class="text-capitalize m-a-none" data-toggle="collapse" data-parent="#accordion2" href="project#p{{item.id}}">{{item.title}}</a></h4></div><div id="p{{item.id}}" class="panel-collapse collapse"><div class="panel-body"><div class="tabs"><ul class="nav nav-pills nav-justified"><li class="active"><a href="project#tab{{item.id}}-1" data-toggle="tab">Abstraction</a></li><li class=""><a href="project#tab{{item.id}}-2" data-toggle="tab">PI Co-PI</a></li><li class=""><a href="project#tab{{item.id}}-3" data-toggle="tab">Funding Agency</a></li><li><a href="project#tab{{item.id}}-4" data-toggle="tab">Support Period</a></li></ul><div class="tab-content tab-content-inverse"><div class="tab-pane active" id="tab{{item.id}}-1">{{item.abstract}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-2">{{item.pi}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-3">{{item.fundingAgency}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-4">{{item.supportPeriod}}</div><!-- /.tab --></div></div></div></div></div><!-- /.panel --></div><!-- /.panel --></section></div><!-- /.panel-group --></div></div></section>'),t.put("app/layouts/navbar/navbar.html",'<div class="navbar navbar-default yamm" role="navigation" id="navbar"><div class="container"><div class="navbar-header"><div class="m-navbar-brand"><a class="navbar-brand home" href="/"><h2 class="hidden-xs hidden-sm">StatNLP Framework</h2><h3 class="visible-xs visible-sm">StatNLP Framework</h3><span class="sr-only">StatNLP Framework</span></a></div><div class="navbar-buttons"><button type="button" class="navbar-toggle btn-template-main" data-toggle="collapse" data-target="#navigation"><span class="sr-only">Toggle navigation</span> <i class="fa fa-align-justify"></i></button></div></div><!--/.navbar-header --><div class="navbar-collapse collapse" id="navigation"><ul class="nav navbar-nav navbar-right"><li class="active"><a href="/">Home</a></li><li data-state="publication"><a ui-sref="publication">Publication</a></li><li data-state="project"><a ui-sref="project">Project</a></li><li><a href="/">Team</a></li><li><a href="/">Dataset</a></li><li><a href="/">Seminar</a></li><li><a href="http://visual.statnlp.tk" target="_blank">Demo</a></li></ul></div><!--/.nav-collapse --><div class="collapse clearfix" id="search"><form class="navbar-form" role="search"><div class="input-group"><input type="text" class="form-control" placeholder="Search"> <span class="input-group-btn"><button type="submit" class="btn btn-template-main"><i class="fa fa-search"></i></button></span></div></form></div><!--/.nav-collapse --></div></div><!-- /#navbar -->'),t.put("app/page/publication/publication.html",'<section class="m-publication"><div class="container"><div class="row"><div class="col-md-3"><div class="panel panel-default sidebar-menu with-icons"><div class="panel-heading"><h3 class="panel-title">Years</h3></div><div class="panel-body"><ul class="nav nav-pills nav-stacked"><li class="active"><a href="">2017</a></li><li><a href="">2016</a></li><li><a href="">2015</a></li><li><a href="">2014</a></li></ul></div></div><!-- *** MENUS AND FILTERS END *** --></div><div class="col-md-9"><div class="panel-group" id="accordion2" cg-busy="vm.promise"><div ng-repeat="item in vm.publications" class="panel panel-primary"><div class="panel-heading"><h4 class="panel-title"><a class="text-capitalize m-a-none" data-toggle="collapse" data-parent="#accordion2" href="publication#p{{item.id}}">{{item.name}}</a></h4></div><div id="p{{item.id}}" class="panel-collapse collapse"><div class="panel-body"><div class="tabs"><ul class="nav nav-pills nav-justified"><li class="active"><a href="project#tab{{item.id}}-1" data-toggle="tab">Abstraction</a></li><li class=""><a href="project#tab{{item.id}}-2" data-toggle="tab">Authors</a></li><li class=""><a href="project#tab{{item.id}}-3" data-toggle="tab">Publisher</a></li><li><a href="project#tab{{item.id}}-4" data-toggle="tab">Download</a></li></ul><div class="tab-content tab-content-inverse"><div class="tab-pane active" id="tab{{item.id}}-1">{{item.abstract}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-2">{{item.authors}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-3">{{item.publisher}}</div><!-- /.tab --><div class="tab-pane" id="tab{{item.id}}-4"><div class="buttons"><a ng-hide="{{item.paperUrl == null}}" href="{{item.paperUrl}}" class="btn btn-template-main"><i class="fa fa-download"></i>Paper</a> <a ng-hide="{{item.sourceUrl == null}}" href="{{item.sourceUrl}}" class="btn btn-template-main"><i class="fa fa-code"></i>Code</a> <a ng-hide="{{item.suppUrl == null}}" href="{{item.suppUrl}}" class="btn btn-template-main"><i class="fa fa-plus"></i>Supplementary</a></div></div><!-- /.tab --></div></div></div></div></div><!-- /.panel --></div></div><!-- /.container --></div></div></section>'),t.put("app/page/team/team.html",'<table><tr><th>Name</th><th>Age</th></tr><tr ng-repeat="member in vm.teamMembers"><td>{{member.Name}}</td><td>{{member.Age}}</td></tr></table>'),t.put("app/page/tutorial/tutorial.html",'<!-- White boxes --><section class="m-tutorial"><div class="container"><div class="row justify-content-center"><div ng-repeat="item in vm.tutorials" class="col-md-2 card"><div class="box-simple"><div class="icon"><i class="fa fa-{{item.icon}}"></i></div><a class="m-a-none" href="{{item.htmlUrl}}" target="_blank"><h3>{{item.name}}</h3></a><p>{{item.description}}</p><div class="buttons"><a href="{{item.pdfUrl}}" class="btn btn-template-main"><i class="fa fa-download"></i>Download</a></div></div></div></div></div><div class="push-footer"></div></section>')}])}();