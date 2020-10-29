(this["webpackJsonpthe-maze"]=this["webpackJsonpthe-maze"]||[]).push([[0],{33:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),i=a(5),c=a(21),s=a(2),u=a(11),d=a(12),p=a(6),m=a(14),v=a(13),h=a(3),f=function(){return o.a.createElement("div",{className:"heading"},o.a.createElement("h1",{className:"heading__title"},"Welcome to the Maze!"),o.a.createElement("h3",{className:"heading__subtitle"},"Use the ARROW keys or SWIPE to navigate and escape through the exit at the bottom."))},y=a(26),g=a.n(y),E=a(31),b=function(e){return e.level},O=Object(h.createGetSelector)(b,"size"),S=Object(h.createGetSelector)(b,"cells"),k=Object(h.createGetSelector)(b,"start"),w=(Object(h.createGetSelector)(b,"end"),["left","right","up","down"]),j="EASY",N="NORMAL",_="MEDIUM",L="HARD",A="INSANE",T=function(e){return e.app},M=Object(h.createGetSelector)(T,"position"),C=Object(h.createGetSelector)(T,"difficulty"),G=Object(h.createGetSelector)(T,"isModalOpened"),x=Object(h.createGetSelector)(T,"isAlertOpened"),D=Object(h.createGetSelector)(T,"isLoadedFromStorage"),I=function(e){return{type:"INITIALIZE_LEVEL",payload:e}},P=function(e,t,a,n,o,r,l){e>=0&&e<o&&!t&&!a.includes(e)&&n.push({index:e,direction:r,oppositeDirection:l})},R=function e(t,a,n,o,r,l){if(t.length>0){var i=[],c=n-1,s=n+1,u=n-r,d=n+r,p=n%r===0,m=n%r===r-1,v=0===Math.floor(n/r),h=Math.floor(n/r)===r-1;if(P(c,p,a,i,l,"left","right"),P(s,m,a,i,l,"right","left"),P(u,v,a,i,l,"up","down"),P(d,h,a,i,l,"down","up"),i.length<1&&(t.pop(),n=t[t.length-1],t.length>0&&e(t,a,n,o,r,l)),0===t.length)return;var f=i[Math.floor(Math.random()*i.length)],y=f.index,g=f.direction,E=f.oppositeDirection;o[n].allowedDirections.push(g),o[y].allowedDirections.push(E),n=y,a.push(n),t.push(n),e(t,a,n,o,r,l)}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=10,a=[],n=[],o=[];switch(e){case j:t=10;break;case N:t=14;break;case _:t=18;break;case L:t=22;break;case A:t=26}for(var r=Math.pow(t,2),l=Math.floor(Math.random()*r),i=0;i<r;i++){var c=i%t,s=Math.floor(i/t);a[i]={coordinates:{x:c,y:s},allowedDirections:[],key:"".concat(c,"-").concat(s)},0===c&&0===s&&(a[i].isStart=!0),c===t-1&&s===t-1&&(a[i].isEnd=!0)}return n.push(l),o.push(l),R(o,n,l,a,t,r),{size:t,cells:a,start:{coordinates:{x:0,y:0}},end:{coordinates:{x:t-1,y:t-1}}}},U=function(e){return{type:"SET_CURRENT_POSITION",payload:{position:e}}},W=function(e){return function(t,a){var n=e||k(a()).coordinates;return t(U(n))}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:"TOGGLE_MODAL",payload:{isModalOpened:e}}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:"SET_LOADED_STATUS",payload:{isLoadedFromStorage:e}}},H=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},J=function(e){var t=e.classesString;return o.a.createElement("div",{className:"level__cell ".concat(t)})},Y=Object(h.createPropsSelector)({levelSize:O,appPosition:M}),V=Object(i.b)(Y)((function(e){var t=function(e,t){var a=1/e,n=t.x*a+a/2,o=t.y*a+a/2,r=window.outerWidth;return{computedLeft:r<560?n*(r-40):560*n,computedTop:r<560?o*(r-40):560*o}}(e.levelSize,e.appPosition),a=t.computedLeft,n=t.computedTop,r={transform:"translate3d(".concat(a,"px, ").concat(n,"px, 0)")};return o.a.createElement("div",{className:"level__pin",style:r})})),X=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleEvent=g()(e.handleEvent.bind(Object(p.a)(e)),150,{trailing:!1}),e.updatePosition=g()(e.updatePosition.bind(Object(p.a)(e)),150,{trailing:!1}),e}return Object(d.a)(a,[{key:"updatePosition",value:function(e,t){var a=this.props,n=a.appPosition,o=a.updateCurrentPosition,r=a.levelCells,l=a.toggleModal,i=r.find((function(e){return H(e.coordinates,n)})),c=r.find((function(t){return H(t.coordinates,e)})),s=i.allowedDirections.includes(t),u=!!c&&c.isEnd;s&&(o(e),u&&setTimeout((function(){l(!0)}),150))}},{key:"handleEvent",value:function(e){var t=this.props.appPosition,a=e.keyCode||e.dir.toLowerCase(),n=e.keyCode?37:"left",o=e.keyCode?39:"right",r=e.keyCode?38:"up",l=e.keyCode?40:"down";switch(a){case n:return this.updatePosition({x:t.x-1,y:t.y},"left");case o:return this.updatePosition({x:t.x+1,y:t.y},"right");case r:return this.updatePosition({x:t.x,y:t.y-1},"up");case l:return this.updatePosition({x:t.x,y:t.y+1},"down")}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleEvent)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.levelStart.coordinates,n=t.setCurrentPosition,o=t.isLoadedFromStorage;e.levelStart&&a!==e.levelStart.coordinates&&!o&&n(a)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleEvent)}},{key:"render",value:function(){var e=this.props,t=e.levelSize,a=e.levelCells;return a?o.a.createElement(E.a,Object.assign({onSwiped:this.handleEvent},{delta:10,preventDefaultTouchmoveEvent:!0,trackTouch:!0,trackMouse:!1,rotationAngle:0}),o.a.createElement("div",{className:"level level--size-".concat(t)},o.a.createElement(V,null),a.map((function(e){var t,a=e.key,n=e.allowedDirections,r=[];return w.map((function(e){n.includes(e)||r.push("level__cell--border-".concat(e))})),t=r.join(" "),o.a.createElement(J,{classesString:t,key:a})})))):null}}]),a}(o.a.Component),Z=Object(h.createPropsSelector)({levelSize:O,levelCells:S,levelStart:k,appPosition:M,isLoadedFromStorage:D}),$={updateCurrentPosition:W,toggleModal:F,setCurrentPosition:U},q=Object(i.b)(Z,$)(X),K=a(16),Q=a.n(K),ee=a(18),te=function(e){var t=e.text,a=e.type,n=e.clickHandler,r=e.href,l=Q()("button",Object(ee.a)({},"button--".concat(a),Boolean(a)));return r?o.a.createElement(c.b,{to:r,className:l},t):o.a.createElement("button",{className:l,onClick:n||null},t)},ae=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).closeModal=e.closeModal.bind(Object(p.a)(e)),e.loadNextLevel=e.loadNextLevel.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"closeModal",value:function(){(0,this.props.toggleModal)(!1)}},{key:"loadNextLevel",value:function(){var e=this.props,t=e.initializeLevel,a=e.difficulty;t(z(a)),this.closeModal()}},{key:"render",value:function(){var e=this.props.isModalOpened;return o.a.createElement("div",{className:Q()("modal",{"modal--open":e})},o.a.createElement("div",{className:"modal__overlay",onClick:this.closeModal}),o.a.createElement("div",{className:"modal__content"},o.a.createElement("div",{className:"modal__body"},o.a.createElement("h4",null,"Congratulations, you have escaped the Maze!"),o.a.createElement("p",null,"Do you want to play more?")),o.a.createElement("div",{className:"modal__actions"},o.a.createElement(te,{text:"No",type:"secondary",clickHandler:this.closeModal,href:"/"}),o.a.createElement(te,{text:"Yes",type:"primary",clickHandler:this.loadNextLevel}))))}}]),a}(o.a.Component),ne=Object(h.createPropsSelector)({isModalOpened:G,difficulty:C}),oe={toggleModal:F,initializeLevel:I},re=Object(i.b)(ne,oe)(ae),le=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleSaveGame=e.handleSaveGame.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.startGame,a=e.loadGame,n=e.difficulty;e.isLoadedFromStorage?a():t(n)}},{key:"componentWillUnmount",value:function(){(0,this.props.setLoadedStatus)(!1)}},{key:"handleSaveGame",value:function(){var e=this.props;(0,e.saveGame)(e.history)}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(f,null),o.a.createElement(q,null),o.a.createElement(re,null),o.a.createElement(te,{text:"Save Progress and Exit",type:"primary",clickHandler:this.handleSaveGame}))}}]),a}(o.a.Component),ie=Object(h.createPropsSelector)({difficulty:C,isLoadedFromStorage:D}),ce={startGame:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EASY";return function(t){t(I(z(e))),t(W()),t(F(!1))}},saveGame:function(e){return function(t,a){var n=b(a()),o=M(a());localStorage&&(localStorage.setItem("level",JSON.stringify(n)),localStorage.setItem("position",JSON.stringify(o)),e.push("/"))}},loadGame:function(){return function(e){var t=JSON.parse(localStorage.getItem("level")),a=JSON.parse(localStorage.getItem("position"));e(I(t)),e(W(a)),e(F(!1))}},setLoadedStatus:B},se=Object(i.b)(ie,ce)(le),ue=[{id:"start-new-game-easy",label:"Start New Game - Easy",action:{type:"START",difficulty:"EASY"}},{id:"start-new-game-normal",label:"Start New Game - Normal",action:{type:"START",difficulty:"NORMAL"}},{id:"start-new-game-medium",label:"Start New Game - Medium",action:{type:"START",difficulty:"MEDIUM"}},{id:"start-new-game-hard",label:"Start New Game - Hard",action:{type:"START",difficulty:"HARD"}},{id:"start-new-game-insane",label:"Start New Game - Insane",action:{type:"START",difficulty:"INSANE"}},{id:"load-game",label:"Load Game",action:{type:"LOAD"}}],de=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:"TOGGLE_ALERT",payload:{isAlertOpened:e}}},pe=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).closeAlert=e.closeAlert.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"closeAlert",value:function(){(0,this.props.toggleAlert)(!1)}},{key:"render",value:function(){var e,t=this.props,a=t.type,n=t.text,r=t.isAlertOpened,l=Q()("alert",(e={},Object(ee.a)(e,"alert--".concat(a),Boolean(a)),Object(ee.a)(e,"is--visible",r),e));return o.a.createElement("div",{className:l},o.a.createElement("div",{className:"alert__content"},n),o.a.createElement("div",{className:"alert__close",onClick:this.closeAlert}))}}]),a}(o.a.Component),me=Object(h.createPropsSelector)({isAlertOpened:x}),ve={toggleAlert:de},he=Object(i.b)(me,ve)(pe),fe=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleButtonClick=e.handleButtonClick.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.toggleAlert)()}},{key:"handleButtonClick",value:function(e){var t=this.props,a=t.setDifficulty,n=t.setLoadedStatus,o=t.history,r=t.toggleAlert;switch(e.type){case"START":n(!1),a(e.difficulty),o.push("/playing");break;case"LOAD":localStorage.length>0&&localStorage.getItem("level")&&localStorage.getItem("position")?(n(!0),o.push("/playing")):r(!0)}}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"start-screen"},o.a.createElement("div",{className:"start-screen__content"},o.a.createElement("div",{className:"start-screen__heading"},o.a.createElement("h1",null,"The Maze")),o.a.createElement("div",{className:"start-screen__menu"},o.a.createElement("ul",null,ue.map((function(t){var a=t.id,n=t.label,r=t.action;return o.a.createElement("li",{key:a},o.a.createElement(te,{type:"link",text:n,clickHandler:function(){return e.handleButtonClick(r)}}))})))))),o.a.createElement(he,{type:"warning",text:"Nothing to load!"}))}}]),a}(o.a.Component),ye={setDifficulty:function(e){return{type:"SET_DIFFICULTY_LEVEL",payload:{difficulty:e}}},setLoadedStatus:B,toggleAlert:de},ge=Object(i.b)(null,ye)(fe),Ee=function(){return o.a.createElement(c.a,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:ge}),o.a.createElement(s.a,{path:"/playing",component:se})))},be=a(15),Oe=a(32),Se=a(22),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se.a.Map(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_POSITION":case"TOGGLE_MODAL":case"SET_DIFFICULTY_LEVEL":case"SET_LOADED_STATUS":case"TOGGLE_ALERT":return e.merge(t.payload);default:return e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se.a.Map(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZE_LEVEL":return e.merge(t.payload);default:return e}},je=Object(be.c)({app:ke,level:we}),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,_e=Object(be.e)(je,Ne(Object(be.a)(Oe.a))),Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(45);l.a.render(o.a.createElement(i.a,{store:_e},o.a.createElement(Ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/maze",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/maze","/service-worker.js");Le?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.608fbff9.chunk.js.map