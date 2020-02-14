(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{13:function(e,t,a){},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),l=a.n(r),s=(a(29),a(3)),i=a(4),o=a(6),m=a(5),u=a(7),h=a(8),p=a(11),d=a(15),v=a.n(d),E=(a(13),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"Nav"},c.a.createElement("div",{className:"nav-main"},c.a.createElement("ul",{className:"nav-wrapper"},c.a.createElement("li",{className:"nav-li"},c.a.createElement(h.b,{className:"Nav__link",to:"/business"},"Business")),c.a.createElement("li",{className:"nav-li"},c.a.createElement(h.b,{className:"Nav__link",to:"/entertainment"},"Entertainment")),c.a.createElement("li",{className:"nav-li"},c.a.createElement(h.b,{className:"Nav__link",to:"/general"},"General")),c.a.createElement("li",{className:"nav-li"},c.a.createElement(h.b,{className:"Nav__link",to:"/health"},"Health")),c.a.createElement("li",{className:"nav-li"},c.a.createElement(h.b,{className:"Nav__link",to:"/science"},"Science")),c.a.createElement("li",{className:"nav-li"},c.a.createElement(h.b,{className:"Nav__link",to:"/sports"},"Sports")),c.a.createElement("li",{className:"nav-li"},c.a.createElement(h.b,{className:"Nav__link",to:"/technology"},"Technology")))))}}]),t}(n.Component)),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"home"},c.a.createElement("div",{className:"home-main"},c.a.createElement(h.b,{className:"home-link",to:"/"},"News Today")))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"footer"},c.a.createElement("div",{className:"footer-main"},'All content is derived from "https://newsapi.org/"'))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,items:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:"d45cf98059b64c9f826c8dd2c7eb1d76",fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat("d45cf98059b64c9f826c8dd2c7eb1d76")).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.articles})}));case 2:case"end":return t.stop()}}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;return t?c.a.createElement("div",{className:"app-main"},c.a.createElement(f,null),c.a.createElement(E,null),c.a.createElement("h1",{className:"trending-header"}," Trending Stories  "),a.map((function(e){return c.a.createElement("a",{className:"link-container",href:e.url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"item-container"},c.a.createElement("img",{alt:"Nothing to Show",src:e.urlToImage}),c.a.createElement("h3",{className:"item-title"}," ",e.title," "),c.a.createElement("p",{className:"item-description"},e.description)))})),c.a.createElement(b,null)):c.a.createElement("div",null,"Loading...")}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,articles:[],category:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.getArticles();case 1:case"end":return e.stop()}}),null,this)}},{key:"getCategory",value:function(){var e=this.props.location.pathname.split("/").pop();return this.setState({category:e}),e}},{key:"getArticles",value:function(){var e,t=this;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e=this.getCategory(),"d45cf98059b64c9f826c8dd2c7eb1d76",fetch("https://newsapi.org/v2/top-headlines?country=us&category=".concat(e,"&apiKey=").concat("d45cf98059b64c9f826c8dd2c7eb1d76")).then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,articles:e.articles})}));case 3:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.articles,a=e.category;return c.a.createElement("div",{className:"categories-main"},c.a.createElement(f,null),c.a.createElement("h1",{className:"categories-h1"}," Trending in ",a),t.map((function(e){return c.a.createElement("a",{className:"link-container",href:e.url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"article-container"},c.a.createElement("img",{alt:"Nothing to Show",src:e.urlToImage}),c.a.createElement("h3",{className:"item-title"}," ",e.title," "),c.a.createElement("p",{className:"article-description"},e.description)))})),c.a.createElement(b,null))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/",component:N,exact:!0}),c.a.createElement(p.a,{path:"/business",component:g}),c.a.createElement(p.a,{path:"/entertainment",component:g}),c.a.createElement(p.a,{path:"/general",component:g}),c.a.createElement(p.a,{path:"/health",component:g}),c.a.createElement(p.a,{path:"/science",component:g}),c.a.createElement(p.a,{path:"/sports",component:g}),c.a.createElement(p.a,{path:"/technology",component:g})))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.8e21c6bc.chunk.js.map