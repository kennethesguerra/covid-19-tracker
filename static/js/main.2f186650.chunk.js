(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/coronavirus.29f7b0b2.png"},34:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),o=a(9),s=a(10),m=a(12),i=a(11),u=a(16),d=a(6),h=a(15),E=a.n(h),p=a(30),v=a(13),f=a.n(v),g=function(e){var t=e.details,a=e.formatNumber;return r.a.createElement("div",null,r.a.createElement("p",{className:"center grey-text"},"As of ",r.a.createElement("b",null,t.lastUpdate)),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"card-panel yellow darken-3"},r.a.createElement("p",null,r.a.createElement("b",null,"CONFIRMED CASES")),r.a.createElement("h4",{className:"white-text"},a(t.confirmed.value)))),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"card-panel green darken-3"},r.a.createElement("p",null,r.a.createElement("b",null,"RECOVERED")),r.a.createElement("h4",{className:"white-text"},a(t.recovered.value)))),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"card-panel red darken-3"},r.a.createElement("p",null,r.a.createElement("b",null,"DEATHS")),r.a.createElement("h4",{className:"white-text"},a(t.deaths.value)))))},N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={world:{},userCountry:{},userCountryCode:"",userCountryName:""},e.formatNumber=function(e){return"undefined"!==typeof e?e.toLocaleString(navigator.language,{minimumFractionDigits:0}):0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(E.a.mark((function e(){var t=this;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://ip-api.com/json").then((function(e){t.setState({userCountryCode:e.data.countryCode,userCountryName:e.data.country})}));case 2:f.a.get("https://covid19.mathdro.id/api").then((function(e){t.setState({world:e.data})})),f.a.get("https://covid19.mathdro.id/api/countries/"+this.state.userCountryCode).then((function(e){t.setState({userCountry:e.data})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.world,t=this.state.userCountry,a=Object.entries(e).length?r.a.createElement("div",{className:"row"},r.a.createElement("h4",{className:"center grey-text text-darken-2"},"Global"),r.a.createElement(g,{details:e,formatNumber:this.formatNumber})):r.a.createElement("div",{className:"center"},"Loading..."),n=Object.entries(t).length?r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"center grey-text text-darken-2"},this.state.userCountryName),r.a.createElement(g,{details:t,formatNumber:this.formatNumber})):r.a.createElement("div",{className:"center"},"Loading...");return r.a.createElement("div",{className:"summary"},a,n)}}]),a}(n.Component),b=a(31),y=a.n(b),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"home-page container"},r.a.createElement("div",{className:"center"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:y.a,className:"logo"}),r.a.createElement("h3",{className:"grey-text text-darken-2"},"COVID-19 Pandemic Tracker")),r.a.createElement("p",{className:"center grey-text"},"Made by",r.a.createElement("a",{href:"http://github.com/kennethesguerra"}," @kennethesguerra")," using",r.a.createElement("a",{href:"http://github.com/kennethesguerra"}," @mathdroid"),"'s Covid-19 API")),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:N})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2f186650.chunk.js.map