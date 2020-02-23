(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){e.exports=n(214)},127:function(e,t,n){},129:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=(n(127),n(15)),s=n(16),l=n(18),u=n(17),m=n(19),d=(n(129),n(58)),p=n(216),v=n(215),f=n(218),h=n(217),b=n(105),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onSelectLevel=function(e){n.props.onSelectLevel(e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.level;return r.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},r.a.createElement(p.a,{gutter:16},r.a.createElement(v.a,{span:12,offset:6},r.a.createElement(f.a,{title:"Level Selections",bordered:!1},r.a.createElement(p.a,{gutter:16},t.map(function(t){return r.a.createElement(v.a,{key:t,span:12},r.a.createElement(b.a,{value:t,type:"primary",block:!0,onClick:function(n){return e.onSelectLevel(t,n)}},t))}))))))}}]),t}(r.a.Component),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onRevealCell=function(e){n.props.onRevealCell(e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getValue",value:function(){var e=this.props.value;return e.isRevealed?e.isMine?"\ud83d\udca3":0===e.neighbour?null:e.neighbour:null}},{key:"render",value:function(){var e=this,t=this.props.value,n="cell "+(t.isRevealed?"":"hidden")+(t.isMine?" s-mine":"");return r.a.createElement("div",{onClick:function(n){return e.onRevealCell(t,n)},className:n},this.getValue())}}]),t}(r.a.Component),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={second:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"startTimer",value:function(){var e=this;this.timer=setInterval(function(){e.setState({second:e.state.second+1})},1e3)}},{key:"stopTimer",value:function(){clearInterval(this.timer),this.setState({second:0})}},{key:"convertTime",value:function(){var e=Number(this.state.second),t=Math.floor(e/3600),n=Math.floor(e%3600/60),a=Math.floor(e%3600%60),r=t<10?"0".concat(t):t>0?t:"00",o=n<10?"0".concat(n):n>0?n:"00",i=a<10?"0".concat(a):a>0?a:"00";return"".concat(r,":").concat(o,":").concat(i)}},{key:"render",value:function(){return r.a.createElement("div",null,this.convertTime())}}]),t}(r.a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getHidden=function(e){var t=[];return e.map(function(e){return e.map(function(e){return e.isRevealed||t.push(e),e}),e}),t},n.onShowResult=function(e){n.props.onShowResult(e,n.clock.current.convertTime()),n.setState({startGame:!1}),n.clock.current.stopTimer()},n.onReplay=function(){n.props.onReplay()},n.state={boardData:n.initBoardData(n.props.width,n.props.height,n.props.mines),gameStatus:"Game in progress",mines:n.props.mines,startGame:!1,second:0},n.clock=r.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"initBoardData",value:function(e,t,n){var a=this.createBoardWithMines(e,t,n);return a=this.getNeighbours(a,e,t)}},{key:"createBoardWithMines",value:function(e,t,n){for(var a=[],r=0;r<e;r++){a.push([]);for(var o=0;o<t;o++)a[r][o]={x:r,y:o,isMine:!1,neighbour:0,isRevealed:!1,isEmpty:!1}}return n.map(function(e){return a[e.x][e.y].isMine=!0,e}),a}},{key:"getNeighbours",value:function(e,t,n){for(var a=this,r=e,o=0;o<t;o++)for(var i=0;i<n;i++)e[o][i].isMine||function(){var t=0;a.surfingBoard(e[o][i].x,e[o][i].y,e).map(function(e){return e.isMine&&t++,e}),0===t&&(r[o][i].isEmpty=!0),r[o][i].neighbour=t}();return r}},{key:"surfingBoard",value:function(e,t,n){for(var a=[],r=-1;r<=1;r++)for(var o=-1;o<=1;o++){var i=e+r,c=t+o;if(i>-1&&i<this.props.width&&c>-1&&c<this.props.height){var s=n[i][c];a.push(s)}}return a}},{key:"revealAllBoard",value:function(){var e=this.state.boardData;e.map(function(e){return e.map(function(e){return e.isRevealed=!0,e}),e}),this.setState({boardData:e})}},{key:"renderBoard",value:function(e){var t=this;return e.map(function(e){return e.map(function(n){return r.a.createElement("div",{key:n.x*e.length+n.y},r.a.createElement(y,{onRevealCell:function(){return t.handleCellClick(n.x,n.y)},value:n}),e[e.length-1]===n?r.a.createElement("div",{className:"clear"}):"")})})}},{key:"revealEmpty",value:function(e,t,n){var a=this;return this.surfingBoard(e,t,n).map(function(e){return e.isRevealed||!e.isEmpty&&e.isMine||(n[e.x][e.y].isRevealed=!0,e.isEmpty&&a.revealEmpty(e.x,e.y,n)),e}),n}},{key:"handleCellClick",value:function(e,t){var n=this;if("Game in progress"===this.state.gameStatus&&this.setState({startGame:!0}),setTimeout(function(){n.state.startGame&&0===n.clock.current.state.second&&!n.clock.current.timer&&n.clock.current.startTimer()},0),!this.state.boardData[e][t].isRevealed){this.state.boardData[e][t].isMine&&(this.setState({gameStatus:"Lost"}),this.revealAllBoard(),setTimeout(function(){n.onShowResult(n.state.gameStatus)},0));var a=this.state.boardData;a[e][t].isRevealed=!0,a[e][t].isEmpty&&(a=this.revealEmpty(e,t,a)),this.getHidden(a).length===this.props.mines&&(this.setState({gameStatus:"Win"}),this.revealBoard(),setTimeout(function(){n.onShowResult(n.state.gameStatus)},0)),this.setState({boardData:a})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"board"},r.a.createElement(p.a,{type:"flex",justify:"center"},r.a.createElement(v.a,{span:12},r.a.createElement("div",{className:"game-info"},r.a.createElement("span",{className:"info"},"Time"),r.a.createElement("h1",null,r.a.createElement(E,{ref:this.clock}))))),r.a.createElement(p.a,{type:"flex",justify:"center"},r.a.createElement(v.a,{span:10===this.props.mines.length?6:10},this.renderBoard(this.state.boardData))))}}]),t}(r.a.Component),S=n(219),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,visible:!1,content:n.props.content},n.onReplay=function(){n.setState({loading:!0}),setTimeout(function(){n.setState({loading:!1,visible:!1})},3e3),n.props.onReplay()},n.onBackToHome=function(){n.setState({visible:!1}),n.props.onBackToHome()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.props,t=e.visible,n=e.loading,a=e.content;return r.a.createElement("div",null,r.a.createElement(S.a,{visible:t,title:"Result",onOk:this.onReplay,onCancel:this.onViewBoard,footer:[r.a.createElement(p.a,{key:"result-modals",gutter:10},r.a.createElement(v.a,{key:"replay",span:6},r.a.createElement(b.a,{key:"back",onClick:this.onReplay},"New Game")),r.a.createElement(v.a,{key:"viewboard",span:6},r.a.createElement(b.a,{key:"submit",type:"primary",loading:n,onClick:this.onBackToHome},"Home Page")))]},r.a.createElement("p",null,a)))}}]),t}(r.a.Component),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderContent=function(){var e=n.state,t=e.level,a=e.selectedLevel,o=e.modalVisible,i=e.modalContent;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{type:"flex",justify:"center"},r.a.createElement(v.a,{span:24},n.state.selectedLevel?r.a.createElement("div",{className:"game"},r.a.createElement(k,{width:"beginner"===a?9:"advantage"===a?16:0,height:"beginner"===a?9:"advantage"===a?16:0,mines:n.props.mineList,onShowResult:n.onShowResult})):r.a.createElement(f.a,{title:"Minesweeper"},r.a.createElement(g,{level:t,onSelectLevel:n.onSelectLevel})))),r.a.createElement(w,{ref:n.modal,visible:o,content:i,onReplay:n.onReplay,onBackToHome:n.onBackToHome}))},n.onSelectLevel=function(e){n.props.getMines(e),n.setState({selectedLevel:e})},n.onShowResult=function(e,t){n.setState({modalVisible:!0,modalContent:"Win"===e?"You won the game in: ".concat(t):"You lost the game in: ".concat(t)})},n.onReplay=function(){n.setState({modalVisible:!1,modalContent:""}),n.onSelectLevel(n.state.selectedLevel)},n.onBackToHome=function(){n.props.clearMines(),n.setState({modalVisible:!1,modalContent:"",selectedLevel:""})},n.modal=r.a.createRef(),n.state={level:["beginner","advantage"],selectedLevel:"",modalVisible:!1,modalContent:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.loading,t=this.renderContent();return r.a.createElement("div",{className:"App"},e?r.a.createElement("div",{className:"spin"}," ",r.a.createElement(h.a,null," ",this.renderContent()," ")," "):r.a.createElement("div",{className:"App"}," ",t," "))}}]),t}(a.Component),O=Object(d.b)(function(e){return{loading:e.loading,mineList:e.mineList,error:e.error,state:e}},function(e){return{getMines:function(t){return e({type:"GET_MINES",lv:t})},clearMines:function(){return e({type:"CLEAR_MINES"})}}})(j),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var M=n(42),L=n(119),N=n(45),T="GET_MINES",x="GET_MINES_SUCCESS",B="GET_MINES_FAIL",A="CLEAR_MINES",_="CLEAR_MINES_SUCCESS",I={loading:!1,success:!1,error:"",mineList:[]};var G=n(34),W=n.n(G),D=n(24),H=n(118),U=n.n(H),V=function(e){var t=e&&"beginner"===e?9:16,n=e&&"beginner"===e?10:40;return U()({method:"get",url:"https://tiki-minesweeper.herokuapp.com/getMines?size=".concat(t,"&mines=").concat(n)})},F=W.a.mark(Y),P=W.a.mark(z),J=W.a.mark($);function Y(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)("GET_MINES",z);case 2:return e.next=4,Object(D.c)("CLEAR_MINES",$);case 4:case"end":return e.stop()}},F)}function z(e){var t,n;return W.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.lv,a.next=3,Object(D.a)(V,t);case 3:if(!(n=a.sent).data.data||"success"!==n.data.msg){a.next=9;break}return a.next=7,Object(D.b)({type:"GET_MINES_SUCCESS",data:n.data.data});case 7:a.next=11;break;case 9:return a.next=11,Object(D.b)({type:"GET_MINES_FAIL",error:n.data.msg});case 11:case"end":return a.stop()}},P)}function $(){var e;return W.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,Object(D.b)({type:"CLEAR_MINES_SUCCESS",data:e});case 3:case"end":return t.stop()}},J)}var q=Object(L.a)(),K=Object(M.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(N.a)({},e,{loading:!0});case x:return Object(N.a)({},e,{loading:!1,mineList:t.data});case B:return Object(N.a)({},e,{loading:!1,error:t.msg});case A:return Object(N.a)({},e,{loading:!0});case _:return Object(N.a)({},e,{loading:!1,mineList:t.data});default:return e}},Object(M.c)(Object(M.a)(q)));q.run(Y),i.a.render(r.a.createElement(d.a,{store:K},r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/minesweeper",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/minesweeper","/service-worker.js");C?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):R(t,e)})}}()}},[[122,2,1]]]);
//# sourceMappingURL=main.6910c4b2.chunk.js.map