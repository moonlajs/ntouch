webpackJsonp([1],{"4B/U":function(e,t,n){"use strict";function a(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function o(e){return e instanceof a(e).Element||e instanceof Element}function r(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function i(e){return"undefined"!=typeof ShadowRoot&&(e instanceof a(e).ShadowRoot||e instanceof ShadowRoot)}n.d(t,"a",function(){return Q}),n.d(t,"b",function(){return H});var s=Math.round;function l(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function u(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=e.getBoundingClientRect(),u=1,c=1;t&&r(e)&&(u=e.offsetWidth>0&&s(i.width)/e.offsetWidth||1,c=e.offsetHeight>0&&s(i.height)/e.offsetHeight||1);var f=(o(e)?a(e):window).visualViewport,p=!!/^((?!chrome|android).)*safari/i.test(l())&&n,h=(i.left+(p&&f?f.offsetLeft:0))/u,d=(i.top+(p&&f?f.offsetTop:0))/c,v=i.width/u,y=i.height/c;return{width:v,height:y,top:d,right:h+v,bottom:d+y,left:h,x:h,y:d}}function c(e){var t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function f(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return a(e).getComputedStyle(e)}function d(e){var t=h(e),n=t.overflow,a=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+a)}function v(e,t,n){void 0===n&&(n=!1);var o,i,l=r(t),h=r(t)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,a=s(t.height)/e.offsetHeight||1;return 1!==n||1!==a}(t),v=p(t),y=u(e,h,n),m={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(l||!l&&!n)&&(("body"!==f(t)||d(v))&&(m=(o=t)!==a(o)&&r(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:c(o)),r(t)?((g=u(t,!0)).x+=t.clientLeft,g.y+=t.clientTop):v&&(g.x=function(e){return u(p(e)).left+c(e).scrollLeft}(v))),{x:y.left+m.scrollLeft-g.x,y:y.top+m.scrollTop-g.y,width:y.width,height:y.height}}function y(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||(i(e)?e.host:null)||p(e)}function m(e,t){var n;void 0===t&&(t=[]);var o=function e(t){return["html","body","#document"].indexOf(f(t))>=0?t.ownerDocument.body:r(t)&&d(t)?t:e(y(t))}(e),i=o===(null==(n=e.ownerDocument)?void 0:n.body),s=a(o),l=i?[s].concat(s.visualViewport||[],d(o)?o:[]):o,u=t.concat(l);return i?u:u.concat(m(y(l)))}function g(e){return["table","td","th"].indexOf(f(e))>=0}function b(e){return r(e)&&"fixed"!==h(e).position?e.offsetParent:null}function w(e){for(var t=a(e),n=b(e);n&&g(n)&&"static"===h(n).position;)n=b(n);return n&&("html"===f(n)||"body"===f(n)&&"static"===h(n).position)?t:n||function(e){var t=/firefox/i.test(l());if(/Trident/i.test(l())&&r(e)&&"fixed"===h(e).position)return null;var n=y(e);for(i(n)&&(n=n.host);r(n)&&["html","body"].indexOf(f(n))<0;){var a=h(n);if("none"!==a.transform||"none"!==a.perspective||"paint"===a.contain||-1!==["transform","perspective"].indexOf(a.willChange)||t&&"filter"===a.willChange||t&&a.filter&&"none"!==a.filter)return n;n=n.parentNode}return null}(e)||t}var x="top",k="bottom",j="right",_="left",S="auto",O="start",D="end",T=[].concat([x,k,j,_],[S]).reduce(function(e,t){return e.concat([t,t+"-"+O,t+"-"+D])},[]),z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function I(e){var t=new Map,n=new Set,a=[];return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach(function(a){if(!n.has(a)){var o=t.get(a);o&&e(o)}}),a.push(o)}(e)}),a}function E(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return[].concat(n).reduce(function(e,t){return e.replace(/%s/,t)},e)}var q='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',F='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',R=["name","enabled","phase","fn","effect","requires","options"];function P(e){return e.split("-")[0]}function L(e){return e.split("-")[1]}var C="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",A="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",V={placement:"bottom",modifiers:[],strategy:"absolute"};function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var M={passive:!0};var N={top:"auto",right:"auto",bottom:"auto",left:"auto"};function W(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,l=e.offsets,u=e.position,c=e.gpuAcceleration,f=e.adaptive,d=e.roundOffsets,v=e.isFixed,y=l.x,m=void 0===y?0:y,g=l.y,b=void 0===g?0:g,S="function"==typeof d?d({x:m,y:b}):{x:m,y:b};m=S.x,b=S.y;var O=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),z=_,I=x,E=window;if(f){var q=w(n),F="clientHeight",R="clientWidth";if(q===a(n)&&"static"!==h(q=p(n)).position&&"absolute"===u&&(F="scrollHeight",R="scrollWidth"),q=q,r===x||(r===_||r===j)&&i===D)I=k,b-=(v&&q===E&&E.visualViewport?E.visualViewport.height:q[F])-o.height,b*=c?1:-1;if(r===_||(r===x||r===k)&&i===D)z=j,m-=(v&&q===E&&E.visualViewport?E.visualViewport.width:q[R])-o.width,m*=c?1:-1}var P,L=Object.assign({position:u},f&&N),C=!0===d?function(e){var t=e.x,n=e.y,a=window.devicePixelRatio||1;return{x:s(t*a)/a||0,y:s(n*a)/a||0}}({x:m,y:b}):{x:m,y:b};return m=C.x,b=C.y,c?Object.assign({},L,((P={})[I]=T?"0":"",P[z]=O?"0":"",P.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",P)):Object.assign({},L,((t={})[I]=T?b+"px":"",t[z]=O?m+"px":"",t.transform="",t))}var Q=function(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,a=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?V:r;return function(e,t,n){void 0===n&&(n=i);var r,s,l={placement:"bottom",orderedModifiers:[],options:Object.assign({},V,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],f=!1,p={state:l,setOptions:function(n){var r="function"==typeof n?n(l.options):n;d(),l.options=Object.assign({},i,l.options,r),l.scrollParents={reference:o(e)?m(e):e.contextElement?m(e.contextElement):[],popper:m(t)};var s=function(e){var t=I(e);return z.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}(function(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}([].concat(a,l.options.modifiers)));l.orderedModifiers=s.filter(function(e){return e.enabled}),function(e){e.forEach(function(t){[].concat(Object.keys(t),R).filter(function(e,t,n){return n.indexOf(e)===t}).forEach(function(n){switch(n){case"name":"string"!=typeof t.name&&console.error(E(q,String(t.name),'"name"','"string"','"'+String(t.name)+'"'));break;case"enabled":"boolean"!=typeof t.enabled&&console.error(E(q,t.name,'"enabled"','"boolean"','"'+String(t.enabled)+'"'));break;case"phase":z.indexOf(t.phase)<0&&console.error(E(q,t.name,'"phase"',"either "+z.join(", "),'"'+String(t.phase)+'"'));break;case"fn":"function"!=typeof t.fn&&console.error(E(q,t.name,'"fn"','"function"','"'+String(t.fn)+'"'));break;case"effect":null!=t.effect&&"function"!=typeof t.effect&&console.error(E(q,t.name,'"effect"','"function"','"'+String(t.fn)+'"'));break;case"requires":null==t.requires||Array.isArray(t.requires)||console.error(E(q,t.name,'"requires"','"array"','"'+String(t.requires)+'"'));break;case"requiresIfExists":Array.isArray(t.requiresIfExists)||console.error(E(q,t.name,'"requiresIfExists"','"array"','"'+String(t.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+t.name+'" modifier, valid properties are '+R.map(function(e){return'"'+e+'"'}).join(", ")+'; but "'+n+'" was provided.')}t.requires&&t.requires.forEach(function(n){null==e.find(function(e){return e.name===n})&&console.error(E(F,String(t.name),n,n))})})})}((u=[].concat(s,l.options.modifiers),f=function(e){return e.name},v=new Set,u.filter(function(e){var t=f(e);if(!v.has(t))return v.add(t),!0}))),P(l.options.placement)===S&&(l.orderedModifiers.find(function(e){return"flip"===e.name})||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" ")));var u,f,v,y=h(t);return[y.marginTop,y.marginRight,y.marginBottom,y.marginLeft].some(function(e){return parseFloat(e)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" ")),l.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,a=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var r=o({state:l,name:t,instance:p,options:a});c.push(r||function(){})}}),p.update()},forceUpdate:function(){if(!f){var e=l.elements,t=e.reference,n=e.popper;if(B(t,n)){var a,o,r,i;l.rects={reference:v(t,w(n),"fixed"===l.options.strategy),popper:(a=n,o=u(a),r=a.offsetWidth,i=a.offsetHeight,Math.abs(o.width-r)<=1&&(r=o.width),Math.abs(o.height-i)<=1&&(i=o.height),{x:a.offsetLeft,y:a.offsetTop,width:r,height:i})},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(e){return l.modifiersData[e.name]=Object.assign({},e.data)});for(var s=0,c=0;c<l.orderedModifiers.length;c++){if((s+=1)>100){console.error(A);break}if(!0!==l.reset){var h=l.orderedModifiers[c],d=h.fn,y=h.options,m=void 0===y?{}:y,g=h.name;"function"==typeof d&&(l=d({state:l,options:m,name:g,instance:p})||l)}else l.reset=!1,c=-1}}else console.error(C)}},update:(r=function(){return new Promise(function(e){p.forceUpdate(),e(l)})},function(){return s||(s=new Promise(function(e){Promise.resolve().then(function(){s=void 0,e(r())})})),s}),destroy:function(){d(),f=!0}};if(!B(e,t))return console.error(C),p;function d(){c.forEach(function(e){return e()}),c=[]}return p.setOptions(n).then(function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)}),p}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,s=o.resize,l=void 0===s||s,u=a(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,M)}),l&&u.addEventListener("resize",n.update,M),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,M)}),l&&u.removeEventListener("resize",n.update,M)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=function(e){var t,n=e.reference,a=e.element,o=e.placement,r=o?P(o):null,i=o?L(o):null,s=n.x+n.width/2-a.width/2,l=n.y+n.height/2-a.height/2;switch(r){case x:t={x:s,y:n.y-a.height};break;case k:t={x:s,y:n.y+n.height};break;case j:t={x:n.x+n.width,y:l};break;case _:t={x:n.x-a.width,y:l};break;default:t={x:n.x,y:n.y}}var u=r?function(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}(r):null;if(null!=u){var c="y"===u?"height":"width";switch(i){case O:t[u]=t[u]-(n[c]/2-a[c]/2);break;case D:t[u]=t[u]+(n[c]/2-a[c]/2)}}return t}({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,a=n.gpuAcceleration,o=void 0===a||a,r=n.adaptive,i=void 0===r||r,s=n.roundOffsets,l=void 0===s||s,u=h(t.elements.popper).transitionProperty||"";i&&["transform","top","right","bottom","left"].some(function(e){return u.indexOf(e)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',"\n\n",'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.","\n\n","We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "));var c={placement:P(t.placement),variation:L(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,W(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,W(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},a=t.attributes[e]||{},o=t.elements[e];r(o)&&f(o)&&(Object.assign(o.style,n),Object.keys(a).forEach(function(e){var t=a[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var a=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});r(a)&&f(a)&&(Object.assign(a.style,i),Object.keys(o).forEach(function(e){a.removeAttribute(e)}))})}},requires:["computeStyles"]}]});var H={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,a=e.name,o=n.offset,r=void 0===o?[0,0]:o,i=T.reduce(function(e,n){return e[n]=function(e,t,n){var a=P(e),o=[_,x].indexOf(a)>=0?-1:1,r="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=r[0],s=r[1];return i=i||0,s=(s||0)*o,[_,j].indexOf(a)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,r),e},{}),s=i[t.placement],l=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[a]=i}}},"4ml/":function(e,t){},Lqls:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o=n("MJLE"),r=n.n(o),i={data:function(){return{active:"",activeNames:[""],activeNamesTwo:[""],othernumber:"",salary:"",msg:"",show:!1,fieldValue:"上海市",cascaderValue:"",cityoptions:[{text:"上海市"}],ttt:new Date,jjj:(new Date).getTime(),gonghuifei:"60",lastyearSalaryAll:"",sansuiyixia:"",option:[{text:"无",value:0},{text:"本人进行扣除",value:1},{text:"我与配偶共同扣除",value:2}],zinvjiaoyustepper:"0",zinvjiaoyu:"0",zufang:"",shangyang:"",daikuan:"",jixu:"",zinvjiaoyushow:!1,daikuanshow:!1,daikuanactions:[{name:"无",value:"0"},{name:"本人进行扣除",value:"1"},{name:"我与配偶共同扣除",value:"3"}],jixushow:!1,jixuactions:[{name:"无",value:"0"},{name:"当前正在接受学历教育",value:"1"},{name:"本年取得职业资格教育相关证书",value:"3"}],sansuiyixiashow:!1,zufangactions:[{name:"在上海没租房",value:"0"},{name:"在上海租房",value:"1"}],shangyangshow:!1,shangyangactions:[{name:"无",value:"0"},{name:"我是独生子女",value:"1"},{name:"我不是独生子女",value:"3"}],zufangshow:!1,minDate:new Date(2021,0,1),maxDate:new Date(2023,2,1),currentDateShow:!1,dateshow:!1,currentDate:"2021/08",yearcolumns:[{values:["2021 年度","2022 年度"]},{values:["01 月","02 月","03 月","04 月","05 月","06 月","07 月","08 月","09 月","10 月","11 月","12 月"]}],baseShebaoRate:.1+.005,gongjijinRate:.05,qrcode:"",qrcodeLoading:!1,keyboardshow:!1,othersalary:"0",otherkeyboardshow:!1,ka1:{4927:"6264",5975:"6426",6520:"6520"}}},computed:{realsalary:function(){return this.salary?this.round(parseFloat(this.salary)+parseFloat(this.othersalary)-parseFloat(this.gongjijinTatol)-parseFloat(this.shebaoTatol)-parseFloat(this.geshui)-parseFloat(this.gonghuifei)):"0"},realsalaryKa1:function(){return this.salary?parseFloat(this.ka1[this.baseSheBao])-parseFloat(this.geshuiKa1):"0"},realsalaryKa2:function(){return this.salary?parseFloat(this.realsalary)-parseFloat(this.realsalaryKa1):"0"},zhuanxiangfujia:function(){return this.round(parseInt(this.sansuiyixiatotal)+parseInt(this.zinvtotal)+parseInt(this.zufangtotal)+parseInt(this.shanyangtotal)+parseInt(this.daikuantotal)+parseInt(this.jixutotal))},baseSheBao:function(){var e="0";this.ttt="11111";var t=new Date(this.currentDate+"/01").getTime(),n=new Date("2021/7/31").getTime();return t>new Date("2022/6/30").getTime()?(e="6520",this.ttt="33333"):t>n?(this.ttt="44444",e="5975"):t&&(this.ttt="55555",e="4927"),e},geshuiKa1:function(){if(!this.salary)return"0";var e=parseFloat(this.ka1[this.baseSheBao])-5e3-this.shebaoTatol-this.gongjijinTatol;return this.round(e*this.calcRQ(e)[0])},geshuiKa2:function(){return this.salary?this.round(parseFloat(this.geshui)-parseFloat(this.geshuiKa1)):"0"},geshui:function(){var e="0",t=this.currentDate.split("/")[0],n=this.currentDate.split("/")[1],a=(new Date("2021/7/31").getTime(),new Date("2022/6/30").getTime(),new Date("2021/3/30").getTime(),parseFloat(this.salary)+parseFloat(this.othersalary)),o=parseFloat(this.ka1[this.baseSheBao]),r=a-o,i=0,s=0,l=0;return this.salary?(("2021"===t&&"1"===n||"2"===n||"3"===n)&&(i=o-5e3-this.shebaoTatol-this.gongjijinTatol,l=r-5e3,s=(parseInt(n)+1)*parseInt(r),e=i*this.calcRQ(i)[0]+l*this.calcRQ(s)[0]),("2021"===t&&"4"==n||"5"===n||"6"===n||"7"===n||"8"===n||"9"===n||"10"===n||"11"===n)&&(i=o-5e3-this.shebaoTatol-this.gongjijinTatol,l=r,s=(parseInt(n)+1)*parseInt(r),e=i*this.calcRQ(i)[0]+l*this.calcRQ(s)[0]),"2021"===t&&"12"===n&&(i=o-5e3-this.shebaoTatol-this.gongjijinTatol,l=r,s=1*parseInt(r),e=i*this.calcRQ(i)[0]+l*this.calcRQ(s)[0]),"2022"===t&&"12"!=n&&(i=o-5e3-this.shebaoTatol-this.gongjijinTatol,l=r,s=(parseInt(n)+1)*parseInt(r),e=i*this.calcRQ(i)[0]+l*this.calcRQ(s)[0]),"2022"===t&&"12"==n&&(i=o-5e3-this.shebaoTatol-this.gongjijinTatol,l=r,s=1*parseInt(r),e=i*this.calcRQ(i)[0]+l*this.calcRQ(s)[0]),this.round(e)):"0"},shebaoTatol:function(){return this.round(parseFloat(this.baseSheBao)*parseFloat(this.baseShebaoRate))},gongjijinTatol:function(){return Math.round(parseFloat(this.baseSheBao)*parseFloat(this.gongjijinRate))},shebaolableOne:function(){return"社保基数"+this.baseSheBao+" * 缴纳比例8%"},shebaolableTwo:function(){return"社保基数"+this.baseSheBao+" * 缴纳比例2%"},shebaolableThree:function(){return"社保基数"+this.baseSheBao+" * 缴纳比例0.5%"},shebaoValueOne:function(){return this.round(.08*parseFloat(this.baseSheBao))},shebaoValueTwo:function(){return this.round(.02*parseFloat(this.baseSheBao))},shebaoValueThree:function(){return this.round(.005*parseFloat(this.baseSheBao))},sansuiyixiatotal:function(){var e=0;return"0"==this.sansuiyixia&&(e="0"),"1"==this.sansuiyixia&&(e="1000"),"2"==this.sansuiyixia&&(e="500"),e},zinvtotal:function(){var e=0;return"0"==this.zinvjiaoyu&&(e="0"),"1"==this.zinvjiaoyu&&(e="1000"),"2"==this.zinvjiaoyu&&(e="500"),this.round(parseInt(e)*parseInt(this.zinvjiaoyustepper))},zufangtotal:function(){var e=0;return"0"==this.zufang&&(e="0"),"1"==this.zufang&&(e="1500"),e},shanyangtotal:function(){var e=0;return"0"==this.shangyang&&(e="0"),"1"==this.shangyang&&(e="2000"),"2"==this.shangyang&&(e="0"),e},daikuantotal:function(){var e=0;return"0"==this.daikuan&&(e="0"),"1"==this.daikuan&&(e="1000"),"2"==this.daikuan&&(e="500"),e},jixutotal:function(){var e=0;return"0"==this.jixu&&(e="0"),"1"==this.jixu&&(e="400"),"2"==this.jixu&&(e="3600"),e}},created:function(){},methods:{onFinish:function(e){var t=e.selectedOptions;this.show=!1,this.fieldValue=t.map(function(e){return e.text}).join("/")},round:function(e){return Math.round(100*e)/100},formatter:function(e,t){return"year"===e?t+"年":"month"===e?t+"月":t},salaryInput:function(){},formatDate:function(e){return e.getMonth()+1+"/"+e.getDate()},onConfirm:function(e){this.currentDateShow=!1,Array.isArray(e)?this.currentDate=e[0].split(" ")[0]+"/"+e[1].split(" ")[0]:this.currentDate=this.formatDate(e)},lastyearSalaryAllInput:function(){},ondaikuanSelect:function(e){this.daikuan=e.value,this.daikuanshow=!1},onjixuSelect:function(e){this.jixu=e.value,this.jixushow=!1},onzinvjiaoyuSelect:function(e){this.zinvjiaoyu=e.value,this.zinvjiaoyushow=!1},onsansuiyixiaSelect:function(e){this.sansuiyixia=e.value,this.sansuiyixiashow=!1},onshangyangSelect:function(e){this.shangyang=e.value,this.shangyangshow=!1},onzufangSelect:function(e){this.zufang=e.value,this.zufangshow=!1},onkeyboardInput:function(e){this.salary+=e},onkeyboardDelete:function(e){var t=this.salary.length-1;this.salary=this.salary.substring(0,t)},otheronkeyboardInput:function(e){this.othersalary+=e},otheronkeyboardDelete:function(e){var t=this.othersalary.length-1;this.othersalary=this.othersalary.substring(0,t)},calcRQ:function(e){var t=void 0,n=void 0;return(e=parseInt(e))<=36e3?(t=.03,n=0):e>36e3&&e<=144e3?(t=.1,n=2520):e>144e3&&e<=3e5?(t=.2,n=16920):e>3e5&&e<=42e4?(t=.25,n=31920):e>42e4&&e<=66e4?(t=.3,n=52920):e>66e4&&e<=96e4?(t=.35,n=85920):(t=.45,n=181920),[t,n]},qrcodeStart:function(){var e=document.body.clientWidth;new r.a("qrcodeImg",{text:this.qrcode||"https://moonlajs.github.io/ntouch/",width:e,height:e,render:"table",colorDark:"#000000",colorLight:"#ffffff",correctLevel:r.a.CorrectLevel.H})},downloadImg:function(){var e=document.getElementById("qrcodeImg").getElementsByTagName("img")[0],t=document.createElement("canvas");t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0);var n=t.toDataURL("image/png");document.getElementById("downloadImg").setAttribute("href",n),document.getElementById("downloadImg").setAttribute("download","二维码.jpg"),document.getElementById("downloadImg").click()}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("van-tabs",{attrs:{swipeable:"","title-active-color":"#000000"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tab",{key:"1",attrs:{title:"月薪计算"}},[n("van-form",[n("van-field",{attrs:{"is-link":"",readonly:"",label:"社保缴纳地区",placeholder:"社保缴纳地区"},on:{click:function(t){e.show=!0}},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}}),e._v(" "),n("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("van-cascader",{attrs:{title:"社保缴纳地区",options:e.cityoptions,"active-color":"#1989fa"},on:{close:function(t){e.show=!1},finish:e.onFinish},model:{value:e.cascaderValue,callback:function(t){e.cascaderValue=t},expression:"cascaderValue"}})],1),e._v(" "),n("van-field",{attrs:{readonly:"",clickable:"",label:"缴纳日期",value:e.currentDate,placeholder:"选择年月"},on:{click:function(t){e.currentDateShow=!0}}}),e._v(" "),n("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.currentDateShow,callback:function(t){e.currentDateShow=t},expression:"currentDateShow"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.yearcolumns},on:{cancel:function(t){e.currentDateShow=!1},confirm:e.onConfirm}})],1),e._v(" "),n("van-field",{attrs:{readonly:"",clickable:"",value:e.salary,center:"","input-align":"right",label:"工资",placeholder:"请输入工资薪水"},nativeOn:{touchstart:function(t){t.stopPropagation(),e.keyboardshow=!0}},scopedSlots:e._u([{key:"button",fn:function(){return[e._v("\n                      元/月\n                      ")]},proxy:!0}])}),e._v(" "),n("van-number-keyboard",{attrs:{show:e.keyboardshow,theme:"custom","extra-key":".","close-button-text":"完成"},on:{blur:function(t){e.keyboardshow=!1},input:e.onkeyboardInput,delete:e.onkeyboardDelete},model:{value:e.salary,callback:function(t){e.salary=t},expression:"salary"}}),e._v(" "),n("van-field",{attrs:{readonly:"",clickable:"",value:e.othersalary,center:"","input-align":"right",label:"奖金",placeholder:"若有请输入"},nativeOn:{touchstart:function(t){t.stopPropagation(),e.otherkeyboardshow=!0}}}),e._v(" "),n("van-number-keyboard",{attrs:{show:e.otherkeyboardshow,theme:"custom","extra-key":".","close-button-text":"完成"},on:{blur:function(t){e.otherkeyboardshow=!1},input:e.otheronkeyboardInput,delete:e.otheronkeyboardDelete},model:{value:e.othersalary,callback:function(t){e.othersalary=t},expression:"othersalary"}})],1),e._v(" "),n("van-collapse",{staticClass:"zk-van-collapse",model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"社保",name:"1"},scopedSlots:e._u([{key:"title",fn:function(){return[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"18"}},[e._v("社保")]),e._v(" "),n("van-col",{attrs:{span:"6"}},[e._v(e._s(e.shebaoTatol))])],1)]},proxy:!0}])},[e._v(" "),n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{attrs:{title:"养老保险",value:e.shebaoValueOne,label:e.shebaolableOne}}),e._v(" "),n("van-cell",{attrs:{title:"医疗保险",value:e.shebaoValueTwo,label:e.shebaolableTwo}}),e._v(" "),n("van-cell",{attrs:{title:"失业保险",value:e.shebaoValueThree,label:e.shebaolableThree}})],1),e._v(" "),n("van-row",{attrs:{type:"flex",justify:"center"}},[e._v("  2022年6月及之前社保基数5975元    ")]),e._v(" "),n("van-row",{attrs:{type:"flex",justify:"center"}},[e._v("  2022年7月及之后社保基数6520元    ")])],1),e._v(" "),n("van-collapse-item",{attrs:{title:"",name:"2"},scopedSlots:e._u([{key:"title",fn:function(){return[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"18"}},[e._v("公积金 ")]),e._v(" "),n("van-col",{attrs:{span:"6"}},[e._v(e._s(e.gongjijinTatol))])],1)]},proxy:!0}])},[e._v("\n                                  社保基数 "+e._s(e.baseSheBao)+" * 缴纳比例 "+e._s(100*e.gongjijinRate)+"%\n                          \n                      ")]),e._v(" "),n("van-collapse-item",{attrs:{title:"个税",name:"4"},scopedSlots:e._u([{key:"title",fn:function(){return[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"18"}},[e._v("个税")]),e._v(" "),n("van-col",{attrs:{span:"6"}},[e._v(e._s(e.geshui))])],1)]},proxy:!0}])},[e._v(" "),n("van-field",{attrs:{label:"卡一",value:e.geshuiKa1,"input-align":"right",readonly:""}}),e._v(" "),n("van-field",{attrs:{label:"卡二",value:e.geshuiKa2,"input-align":"right",readonly:""}})],1),e._v(" "),n("van-collapse-item",{attrs:{title:"工会费",name:"5"},scopedSlots:e._u([{key:"title",fn:function(){return[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"18"}},[e._v("工会费")]),e._v(" "),n("van-col",{attrs:{span:"6"}},[e._v(e._s(e.gonghuifei))])],1)]},proxy:!0}])}),e._v(" "),n("van-collapse-item",{attrs:{title:"",name:"6"},scopedSlots:e._u([{key:"title",fn:function(){return[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"18"}},[e._v("其他扣款")]),e._v(" "),n("van-col",{attrs:{span:"6"}},[e._v(e._s(e.othernumber))])],1)]},proxy:!0}])},[e._v(" "),n("van-cell-group",[n("van-field",{attrs:{type:"number",placeholder:"请输入",label:""},model:{value:e.othernumber,callback:function(t){e.othernumber=t},expression:"othernumber"}})],1)],1)],1),e._v(" "),n("van-field",{attrs:{label:"卡一",value:e.realsalaryKa1,"input-align":"right",readonly:""}}),e._v(" "),n("van-field",{attrs:{label:"卡二",value:e.realsalaryKa2,"input-align":"right",readonly:""}}),e._v(" "),n("van-field",{attrs:{label:"该月实发工资",value:e.realsalary,"input-align":"right",readonly:""}}),e._v("\n                      \n\n                  ====  "+e._s(e.ttt)+"====\n                  "+e._s(e.jjj)+" \n\n      ")],1),e._v(" "),n("van-tab",{key:"2",attrs:{title:"个税年度汇算"}},[n("van-collapse",{staticClass:"zk-van-collapse",model:{value:e.activeNamesTwo,callback:function(t){e.activeNamesTwo=t},expression:"activeNamesTwo"}},[n("van-collapse-item",{attrs:{title:"",name:"3"},scopedSlots:e._u([{key:"title",fn:function(){return[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"18"}},[e._v("专项附加扣除")]),e._v(" "),n("van-col",{attrs:{span:"6"}},[e._v(e._s(e.zhuanxiangfujia))])],1)]},proxy:!0}])},[e._v(" "),n("van-form",[n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{attrs:{value:e.sansuiyixiatotal,"is-link":""},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[e._v("3岁以下子女")])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-row",{staticStyle:{"align-items":"center"},attrs:{type:"flex",justify:"center"}},[n("van-icon",{attrs:{name:"arrow"},nativeOn:{touchstart:function(t){t.stopPropagation(),e.sansuiyixiashow=!0}}})],1)]},proxy:!0}])})],1),e._v(" "),n("van-action-sheet",{attrs:{actions:e.daikuanactions},on:{select:e.onsansuiyixiaSelect},model:{value:e.sansuiyixiashow,callback:function(t){e.sansuiyixiashow=t},expression:"sansuiyixiashow"}}),e._v(" "),n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{attrs:{value:e.zinvtotal,"value-class":""},scopedSlots:e._u([{key:"title",fn:function(){return[n("van-row",{staticStyle:{"align-items":"center"},attrs:{type:"flex",justify:"space-between"}},[n("span",{staticClass:"custom-title"},[e._v("子女教育人数")]),e._v(" "),n("van-stepper",{staticStyle:{display:"inline-block"},attrs:{min:"0",max:"8",theme:"round","button-size":"14","disable-input":"",integer:""},model:{value:e.zinvjiaoyustepper,callback:function(t){e.zinvjiaoyustepper=t},expression:"zinvjiaoyustepper"}})],1)]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-row",{staticStyle:{"align-items":"center"},attrs:{type:"flex",justify:"center"}},[n("van-icon",{attrs:{name:"arrow"},nativeOn:{touchstart:function(t){t.stopPropagation(),e.zinvjiaoyushow=!0}}})],1)]},proxy:!0}])})],1),e._v(" "),n("van-action-sheet",{attrs:{actions:e.daikuanactions},on:{select:e.onzinvjiaoyuSelect},model:{value:e.zinvjiaoyushow,callback:function(t){e.zinvjiaoyushow=t},expression:"zinvjiaoyushow"}}),e._v(" "),n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{attrs:{value:e.zufangtotal},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[e._v("住房租房")])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-row",{staticStyle:{"align-items":"center"},attrs:{type:"flex",justify:"center"}},[n("van-icon",{attrs:{name:"arrow"},nativeOn:{touchstart:function(t){t.stopPropagation(),e.zufangshow=!0}}})],1)]},proxy:!0}])})],1),e._v(" "),n("van-action-sheet",{attrs:{actions:e.zufangactions},on:{select:e.onzufangSelect},model:{value:e.zufangshow,callback:function(t){e.zufangshow=t},expression:"zufangshow"}}),e._v(" "),n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{attrs:{value:e.shanyangtotal},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[e._v("赡养60岁以上老人")])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-row",{staticStyle:{"align-items":"center"},attrs:{type:"flex",justify:"center"}},[n("van-icon",{attrs:{name:"arrow"},nativeOn:{touchstart:function(t){t.stopPropagation(),e.shangyangshow=!0}}})],1)]},proxy:!0}])})],1),e._v(" "),n("van-action-sheet",{attrs:{actions:e.shangyangactions},on:{select:e.onshangyangSelect},model:{value:e.shangyangshow,callback:function(t){e.shangyangshow=t},expression:"shangyangshow"}}),e._v(" "),n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{attrs:{value:e.daikuantotal},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[e._v("首套住房贷款")])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-row",{staticStyle:{"align-items":"center"},attrs:{type:"flex",justify:"center"}},[n("van-icon",{attrs:{name:"arrow"},nativeOn:{touchstart:function(t){t.stopPropagation(),e.daikuanshow=!0}}})],1)]},proxy:!0}])})],1),e._v(" "),n("van-action-sheet",{attrs:{actions:e.daikuanactions},on:{select:e.ondaikuanSelect},model:{value:e.daikuanshow,callback:function(t){e.daikuanshow=t},expression:"daikuanshow"}}),e._v(" "),n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{attrs:{value:e.jixutotal},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[e._v("继续教育")])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-row",{staticStyle:{"align-items":"center"},attrs:{type:"flex",justify:"center"}},[n("van-icon",{attrs:{name:"arrow"},nativeOn:{touchstart:function(t){t.stopPropagation(),e.jixushow=!0}}})],1)]},proxy:!0}])})],1),e._v(" "),n("van-action-sheet",{attrs:{actions:e.jixuactions},on:{select:e.onjixuSelect},model:{value:e.jixushow,callback:function(t){e.jixushow=t},expression:"jixushow"}}),e._v(" "),n("van-row",{attrs:{type:"flex",justify:"space-between"}}),e._v(" "),n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"18"}}),e._v(" "),n("van-col",{attrs:{span:"6"}})],1)],1)],1)],1)],1),e._v(" "),n("van-tab",{key:"3",attrs:{title:"二维码生成"}},[n("div",{staticStyle:{padding:"20px"}},[n("van-field",{attrs:{rows:"20",autosize:"",label:"",type:"textarea",maxlength:"2000",placeholder:"请输入","show-word-limit":""},model:{value:e.qrcode,callback:function(t){e.qrcode=t},expression:"qrcode"}}),e._v(" "),n("van-button",{attrs:{type:"primary",block:"",round:"","loading-type":"spinner",loading:e.qrcodeLoading},on:{click:e.qrcodeStart}},[e._v("开 始")]),e._v(" "),n("van-cell",[n("div",{attrs:{id:"qrcodeImg"}})]),e._v(" "),n("a",{attrs:{id:"downloadImg"}}),e._v(" "),n("van-button",{attrs:{type:"primary",block:"",round:"","loading-type":"spinner"},on:{click:e.downloadImg}},[e._v("下 载")])],1)])],1)],1)},staticRenderFns:[]};var l={name:"App",components:{dash:n("VU/8")(i,s,!1,function(e){n("Lqls")},"data-v-26438e75",null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("dash")],1)},staticRenderFns:[]};var c=n("VU/8")(l,u,!1,function(e){n("m1vo")},null,null).exports,f=n("Fd2+");n("4ml/");a.a.use(f.r),a.a.use(f.a),a.a.use(f.h),a.a.use(f.i),a.a.use(f.l),a.a.use(f.c),a.a.use(f.d),a.a.use(f.n),a.a.use(f.b),a.a.use(f.o),a.a.use(f.m),a.a.use(f.g),a.a.use(f.p),a.a.use(f.k),a.a.use(f.j),a.a.use(f.q),a.a.use(f.f),a.a.use(f.e),a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:c},template:"<App/>"})},m1vo:function(e,t){}},["NHnr"]);