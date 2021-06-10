(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],{13:function(e,t,r){e.exports={position:"Loader_position__2MPw1",lds_ellipsis:"Loader_lds_ellipsis__hmAlb","lds-ellipsis1":"Loader_lds-ellipsis1__2yOT7","lds-ellipsis2":"Loader_lds-ellipsis2__2zSDJ","lds-ellipsis3":"Loader_lds-ellipsis3__1X2Wz"}},23:function(e,t,r){},24:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var s=r(1),c=r.n(s),n=r(9),a=r.n(n),i=(r(23),r(24),r(2)),o=r(4),l=r.n(o),d=r(6),u=r(5),j=r(14),m=r(8),b=r(17),h=r(18),p=function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,null,[{key:"getWeatherData",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var r,s,c,n,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&lang=ru&appid=a9ebdb68b0dbf40182f5638efcca3afd&units=metric"),s="https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&lang=ru&appid=a9ebdb68b0dbf40182f5638efcca3afd&units=metric"),e.next=4,Promise.all([fetch(r),fetch(s)]);case 4:if(c=e.sent,e.prev=5,n=Object(u.a)(c,2),a=n[0],i=n[1],!a.ok||!i.ok){e.next=9;break}return e.abrupt("return",Promise.all([a.json(),i.json()]));case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(5),e.abrupt("return","Not found");case 14:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),f={currentWeather:{name:"Chegem",description:null,temp:10,wind:0,humidity:0,pressure:0,icon:null,iconCode:"",id:null},searchedCities:window.localStorage.getItem("listOfCities")?JSON.parse(window.localStorage.getItem("listOfCities")):{},loading:!1,alert:!1,error:""},O=Object(m.b)("weather/getWeatherThunk",function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.getWeatherData(t),console.log(r),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(m.c)({name:"weather",initialState:f,reducers:{getWeather:function(e,t){e.currentWeather.name=t.payload.name,e.currentWeather.temp=t.payload.temp},deleteCity:function(e,t){delete e.searchedCities[t.payload],window.localStorage.setItem("listOfCities",JSON.stringify(e.searchedCities)),console.log(e.searchedCities)}},extraReducers:function(e){e.addCase(O.pending,(function(e,t){e.loading=!0})).addCase(O.fulfilled,(function(e,t){if(!t.payload)return e.loading=!1,e.alert=!0,e.error="\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430.",e;var r=Object(u.a)(t.payload,2),s=r[0],c=r[1];if("400"===s.cod||!s)return e.loading=!1,e.alert=!0,e.error="\u041f\u0443\u0441\u0442\u043e\u0439 \u0432\u0432\u043e\u0434. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430.",e;if("404"===s.cod)return e.loading=!1,e.alert=!0,e.error="\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",e;if(console.log(t.payload),"400"!==s.cod){var n=new Date,a="".concat(["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"][n.getDay()]," ").concat(n.getDate()," ").concat(["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][n.getMonth()]),i=new Date(1e3*s.sys.sunset).toLocaleTimeString().slice(0,5),o=new Date(1e3*s.sys.sunrise).toLocaleTimeString().slice(0,5);e.currentWeather=Object(j.a)(Object(j.a)({},e.currentWeather),{},{name:s.name,country:s.sys.country,temp:s.main.temp,highestTemp:s.main.temp_max,lowestTemp:s.main.temp_min,wind:s.wind.speed,description:s.weather[0].description,humidity:s.main.humidity,pressure:s.main.pressure,iconCode:s.weather[0].icon,id:s.id,clouds:s.clouds.all,sunrise:o,sunset:i,date:a,forecast:c.list}),e.searchedCities[s.id]=e.currentWeather,e.alert=!1,localStorage.setItem("listOfCities",JSON.stringify(e.searchedCities))}e.loading=!1}))}}),g=x.actions,w=(g.getWeather,g.deleteCity),v=x.reducer,N=r(0),y=function(e){var t=e.text;return Object(N.jsx)("div",{className:"alert alert-info",role:"alert",children:t})},C=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),r=t[0],c=t[1],n=Object(i.b)(),a=Object(i.c)((function(e){return e.reducer.alert})),o=Object(i.c)((function(e){return e.reducer.error})),j=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n(O(r));case 3:c("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("form",{onSubmit:j,children:[a?Object(N.jsx)(y,{text:o}):null,Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("input",{type:"text",className:"form-control",id:"title",value:r,name:"title",placeholder:"\u0413\u043e\u0440\u043e\u0434",onChange:function(e){c(e.target.value)}}),Object(N.jsx)("div",{className:"input-group-append",children:Object(N.jsx)("button",{className:"btn btn-info",type:"submit",style:{backgroundColor:"#b690da",border:"#b690da"},children:"\u041f\u043e\u0438\u0441\u043a"})})]})]})})},_=r(7),k=r.n(_),S=function(e){var t=e.temp,r=e.month,s=e.day,c=e.hour,n=e.icon,a=e.pressure,i=e.description,o="https://openweathermap.org/img/w/".concat(n,".png");return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card text-white mb-3 "+k.a.cardItem,style:{width:"18rem"},children:[Object(N.jsxs)("div",{className:"card-body mb-3",children:[Object(N.jsxs)("h5",{className:"card-title",children:["\u0414\u0430\u0442\u0430 - ",s,".",r]}),Object(N.jsx)("img",{className:k.a.cardImg,src:o,alt:t})]}),Object(N.jsxs)("ul",{className:"list-group list-group-flush "+k.a.listItem,children:[Object(N.jsxs)("li",{className:"list-group-item",children:[c,":00"]}),Object(N.jsx)("li",{className:"list-group-item",children:i[0].toUpperCase()+i.slice(1)}),Object(N.jsxs)("li",{className:"list-group-item",children:["\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",t," \xb0C"]}),Object(N.jsxs)("li",{className:"list-group-item",children:["\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",a," \u043c\u043c. \u0440\u0442. \u0441\u0442."]})]})]})})},q=function(e){var t=e.forecast,r=e.isModalOpen,s=e.name,c=e.onCloseModal,n=r?k.a.show:"",a=t.map((function(e){return Object(N.jsx)(S,{temp:Math.floor(1*e.main.temp)/1,pressure:e.main.pressure,description:e.weather[0].description,icon:e.weather[0].icon,month:e.dt_txt.slice(5,7),day:e.dt_txt.slice(8,10),hour:1*e.dt_txt.slice(11,13)},e.dt)}));return Object(N.jsx)("div",{className:"modal "+n,onClick:function(){return c()},children:Object(N.jsx)("div",{className:"modal-dialog",children:Object(N.jsxs)("div",{className:"modal-content",children:[Object(N.jsxs)("div",{className:"modal-header",children:["\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ",s,Object(N.jsx)("button",{className:"btn btn-secondary",onClick:function(){return c()},children:"X"})]}),Object(N.jsxs)("div",{className:"modal-body",children:[Object(N.jsx)("div",{className:"row shadow-lg p-3 mb-5 rounded",children:a})," "]})]})})})},I=function(e){var t=e.name,r=e.country,c=e.date,n=e.temp,a=e.highestTemp,o=e.lowestTemp,l=e.description,d=e.wind,j=e.humidity,m=e.pressure,b=e.icon,h=e.sunrise,p=e.sunset,f=e.clouds,O=e.forecast,x=e.id,g=Object(s.useState)(!1),v=Object(u.a)(g,2),y=v[0],C=v[1],_=Object(i.b)(),k="https://openweathermap.org/img/w/".concat(b,".png");return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(q,{isModalOpen:y,forecast:O,name:t,onCloseModal:function(){return C(!1)}}),Object(N.jsx)("div",{className:"col-sm-6 shadow-lg p-3 mb-5 rounded",children:Object(N.jsxs)("div",{className:"card",style:{marginBottom:"15px",marginTop:"15px"},children:[Object(N.jsxs)("h5",{className:"card-header",children:[t," ",r,Object(N.jsx)("button",{onClick:function(){return function(e){_(w(e))}(x)},style:{width:"40px"},type:"button",className:"close float-right","aria-label":"Close",children:Object(N.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("img",{src:k,alt:l}),Object(N.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(N.jsxs)("p",{children:[" \u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",n," \xb0C"]}),Object(N.jsx)("footer",{className:"blockquote-footer",children:l[0].toUpperCase()+l.slice(1)}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["\u0414\u0430\u0442\u0430: ",c]}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",a," \xb0C"]}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",o," \xb0C"]}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["C\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430 - ",d," \u043c/\u0441,"]}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c - ",j," %"]}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435 - ",m," \u043c\u043c \u0440\u0442."]}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c - ",f,"."]}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["\u0412\u043e\u0441\u0445\u043e\u0434 \u0441\u043e\u043b\u043d\u0446\u0430 - ",h,"."]}),Object(N.jsxs)("footer",{className:"blockquote-footer",children:["\u0417\u0430\u043a\u0430\u0442 \u0441\u043e\u043b\u043d\u0446\u0430 - ",p,"."]})]}),Object(N.jsx)("hr",{}),Object(N.jsx)("button",{className:"btn btn-secondary",style:{backgroundColor:"#b8b3dd",border:"#b8b3dd"},onClick:function(){return C(!0)},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437"})]})]})})]})},T=r(13),W=r.n(T),F=function(){return Object(N.jsx)("div",{className:W.a.position,children:Object(N.jsxs)("div",{className:W.a.lds_ellipsis,children:[Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{})]})})},D=function(){var e=Object(i.c)((function(e){return Object.values(e.reducer.searchedCities)}));return Object(i.c)((function(e){return e.reducer.loading}))?Object(N.jsx)(F,{}):e&&0!==e.lenght?Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("div",{className:"row p-3 mb-5 rounded",children:e.reverse().map((function(e){return Object(N.jsx)(I,{name:e.name,country:e.country,date:e.date,description:e.description,temp:e.temp,highestTemp:e.highestTemp,lowestTemp:e.lowestTemp,wind:e.wind,humidity:e.humidity,pressure:e.pressure,icon:e.iconCode,clouds:e.clouds,sunrise:e.sunrise,sunset:e.sunset,id:e.id,forecast:e.forecast},100*Math.random())}))})}):Object(N.jsx)("h2",{children:"No data"})};var M=function(){var e=Object(i.c)((function(e){return e.reducer.currentWeather})).name;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("h3",{className:"App",children:["Hello, ",e]}),Object(N.jsx)(C,{}),Object(N.jsx)(D,{})]})})},L=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,36)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),s(e),c(e),n(e),a(e)}))},J=Object(m.a)({reducer:{reducer:v}});a.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(i.a,{store:J,children:Object(N.jsx)(M,{})})}),document.getElementById("root")),L()},7:function(e,t,r){e.exports={show:"Forecast_show__5K-2h",cardItem:"Forecast_cardItem__2b08m",cardImg:"Forecast_cardImg__1yAqZ",listItem:"Forecast_listItem__3UUxM"}}},[[35,1,2]]]);
//# sourceMappingURL=main.703ad653.chunk.js.map