(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],{24:function(e,t,c){e.exports={position:"Loader_position__2MPw1",lds_ellipsis:"Loader_lds_ellipsis__hmAlb","lds-ellipsis1":"Loader_lds-ellipsis1__2yOT7","lds-ellipsis2":"Loader_lds-ellipsis2__2zSDJ","lds-ellipsis3":"Loader_lds-ellipsis3__1X2Wz"}},34:function(e,t,c){},35:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(18),a=c.n(s),i=(c(34),c(17)),o=(c(35),c(11)),l=c(3),d=c(5),u=c(0),j=function(e){var t=e.name,c=e.country,r=e.date;return Object(u.jsxs)("div",{className:"city-info",children:[Object(u.jsxs)("h2",{children:[t," ",c]}),Object(u.jsx)("h4",{children:r})]})},b=function(e){var t=e.iconUrl,c=e.temp,r=e.description;return Object(u.jsxs)("div",{className:"city-weather-wrapper",children:[Object(u.jsx)("div",{className:"city-icon",children:Object(u.jsx)("img",{src:t,alt:"img"})}),Object(u.jsxs)("div",{className:"city-weather-temp",children:[Object(u.jsxs)("h3",{children:[c,"\xb0"]}),Object(u.jsx)("h4",{children:r})]})]})},h=function(e){var t=e.data,c=e.text;return Object(u.jsxs)("div",{className:"city-weather-data-info",children:[Object(u.jsx)("h4",{children:t}),Object(u.jsx)("span",{children:c})]})},p=function(e){var t=e.highestTemp,c=e.lowestTemp,r=e.wind,n=e.sunrise,s=e.sunset,a=e.humidity;return Object(u.jsxs)("div",{className:"city-weather-data",children:[Object(u.jsx)(h,{data:t+"\xb0",text:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f"}),Object(u.jsx)(h,{data:c+"\xb0",text:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f"}),Object(u.jsx)(h,{data:r+" \u043c\u0438\u043b\u044c/\u0447",text:"B\u0435\u0442e\u0440"}),Object(u.jsx)(h,{data:a+"%",text:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(u.jsx)(h,{data:n,text:"\u0412\u043e\u0441\u0445\u043e\u0434"}),Object(u.jsx)(h,{data:s,text:"\u0417\u0430\u043a\u0430\u0442"})]})},m=function(e){var t=e.forecastData,c=Math.floor(1*t.main.temp)/1,r=t.weather[0].description,n=t.weather[0].icon,s=t.dt_txt.slice(5,7),a=t.dt_txt.slice(8,10),i=t.dt_txt.slice(11,13),o="https://openweathermap.org/img/w/".concat(n,".png");return Object(u.jsxs)("div",{className:"forecast-wrapper",children:[Object(u.jsxs)("span",{children:[a,".",s]}),Object(u.jsxs)("span",{children:[i,".00"]}),Object(u.jsx)("img",{src:o,alt:"icon"}),Object(u.jsx)("span",{children:r}),Object(u.jsxs)("h4",{children:[c,"\xb0"]})]})},O=function(e){var t=e.forecast.map((function(e){return Object(u.jsx)(m,{forecastData:e},e.dt)}));return Object(u.jsx)("div",{className:"forecasts",children:t})},x=Object(l.e)((function(e){var t=e.match.params.cityId,c=Object(d.c)((function(e){return e.reducer.searchedCities[t]})),r=c.name,n=c.country,s=c.date,a=c.temp,i=c.highestTemp,o=c.lowestTemp,l=c.description,h=c.wind,m=c.humidity,x=c.iconCode,f=c.sunrise,g=c.sunset,w=c.forecast,y="https://openweathermap.org/img/w/".concat(x,".png");return Object(u.jsxs)("div",{className:"city",children:[Object(u.jsxs)("div",{className:"city-wrap",children:[Object(u.jsx)(j,{name:r,country:n,date:s}),Object(u.jsx)(b,{iconUrl:y,temp:a,description:l}),Object(u.jsx)(p,{highestTemp:i,lowestTemp:o,wind:h,sunrise:f,sunset:g,humidity:m})]}),Object(u.jsx)(O,{forecast:w})]})})),f=c(10),g=c.n(f),w=c(13),y=c(14),v=c(16),N=c(28),C=c(29),k=function(){function e(){Object(N.a)(this,e)}return Object(C.a)(e,null,[{key:"getWeatherData",value:function(){var e=Object(w.a)(g.a.mark((function e(t){var c,r,n,s,a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&lang=ru&appid=a9ebdb68b0dbf40182f5638efcca3afd&units=metric"),r="https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&lang=ru&appid=a9ebdb68b0dbf40182f5638efcca3afd&units=metric"),e.next=4,Promise.all([fetch(c),fetch(r)]);case 4:if(n=e.sent,e.prev=5,s=Object(y.a)(n,2),a=s[0],i=s[1],!a.ok||!i.ok){e.next=9;break}return e.abrupt("return",Promise.all([a.json(),i.json()]));case 9:return e.abrupt("return");case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return","Not found");case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),_=window.localStorage.getItem("listOfCities"),T={currentWeather:{name:"Chegem",description:"",temp:10,wind:0,humidity:0,pressure:0,icon:"",iconCode:"",id:null,country:"",highestTemp:0,lowestTemp:0,clouds:0,sunrise:"",sunset:"",date:"",forecast:[]},searchedCities:null!==_?JSON.parse(_):{},loading:!1,alert:!1,error:""},q=Object(v.b)("weather/getWeatherThunk",function(){var e=Object(w.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=k.getWeatherData(t),console.log(c),e.abrupt("return",c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(v.c)({name:"weather",initialState:T,reducers:{getWeather:function(e,t){e.currentWeather.name=t.payload.name,e.currentWeather.temp=t.payload.temp},deleteCity:function(e,t){delete e.searchedCities[t.payload],window.localStorage.setItem("listOfCities",JSON.stringify(e.searchedCities)),console.log(e.searchedCities)}},extraReducers:function(e){e.addCase(q.pending,(function(e,t){e.loading=!0})).addCase(q.fulfilled,(function(e,t){if(!t.payload)return e.loading=!1,e.alert=!0,e.error="\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430.",e;var c=Object(y.a)(t.payload,2),r=c[0],n=c[1];if("400"===r.cod||!r)return e.loading=!1,e.alert=!0,e.error="\u041f\u0443\u0441\u0442\u043e\u0439 \u0432\u0432\u043e\u0434. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430.",e;if("404"===r.cod)return e.loading=!1,e.alert=!0,e.error="\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",e;if(console.log(t.payload),"400"!==r.cod){var s=new Date,a="".concat(["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"][s.getDay()]," ").concat(s.getDate()," ").concat(["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][s.getMonth()]),o=new Date(1e3*r.sys.sunset).toLocaleTimeString().slice(0,5),l=new Date(1e3*r.sys.sunrise).toLocaleTimeString().slice(0,5);e.currentWeather=Object(i.a)(Object(i.a)({},e.currentWeather),{},{name:r.name,country:r.sys.country,temp:r.main.temp,highestTemp:r.main.temp_max,lowestTemp:r.main.temp_min,wind:r.wind.speed,description:r.weather[0].description,humidity:r.main.humidity,pressure:r.main.pressure,iconCode:r.weather[0].icon,id:r.id,clouds:r.clouds.all,sunrise:l,sunset:o,date:a,forecast:n.list}),e.searchedCities[r.id]=e.currentWeather,e.alert=!1,localStorage.setItem("listOfCities",JSON.stringify(e.searchedCities))}e.loading=!1}))}}),S=D.actions,W=(S.getWeather,S.deleteCity),L=D.reducer,P=function(e){var t=e.text;return Object(u.jsx)("div",{className:"alert alert-info",role:"alert",children:t})},F=function(){var e=Object(r.useState)(""),t=Object(y.a)(e,2),c=t[0],n=t[1],s=Object(d.b)(),a=Object(d.c)((function(e){return e.reducer.alert})),i=Object(d.c)((function(e){return e.reducer.error})),o=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s(q(c));case 3:n("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:o,children:[a?Object(u.jsx)(P,{text:i}):null,Object(u.jsxs)("div",{className:"input-group mb-3",children:[Object(u.jsx)("input",{type:"text",className:"form-control",id:"title",value:c,name:"title",placeholder:"\u0413\u043e\u0440\u043e\u0434",onChange:function(e){n(e.target.value)}}),Object(u.jsx)("div",{className:"input-group-append",children:Object(u.jsx)("button",{className:"btn btn-info",type:"submit",style:{backgroundColor:"#b690da",border:"#b690da"},children:"\u041f\u043e\u0438\u0441\u043a"})})]})]})})},I=function(e){var t=e.cityData,c=t.name,r=t.country,n=t.date,s=t.temp,a=t.highestTemp,i=t.lowestTemp,l=t.description,j=t.wind,b=t.humidity,h=t.pressure,p=t.iconCode,m=t.sunrise,O=t.sunset,x=t.clouds,f=t.id,g=Object(d.b)(),w="https://openweathermap.org/img/w/".concat(p,".png");return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"col-sm-6 shadow-lg p-3 mb-5 rounded",children:Object(u.jsxs)("div",{className:"card",style:{marginBottom:"15px",marginTop:"15px"},children:[Object(u.jsxs)("h5",{className:"card-header",children:[c," ",r,Object(u.jsx)("button",{onClick:function(){return function(e){g(W(e))}(f)},style:{width:"40px"},type:"button",className:"close float-right","aria-label":"Close",children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("img",{src:w,alt:l}),Object(u.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(u.jsxs)("p",{children:[" \u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",s," \xb0C"]}),Object(u.jsx)("footer",{className:"blockquote-footer",children:l[0].toUpperCase()+l.slice(1)}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["\u0414\u0430\u0442\u0430: ",n]}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",a," \xb0C"]}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",i," \xb0C"]}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["C\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430 - ",j," \u043c/\u0441,"]}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c - ",b," %"]}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435 - ",h," \u043c\u043c \u0440\u0442."]}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c - ",x,"."]}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["\u0412\u043e\u0441\u0445\u043e\u0434 \u0441\u043e\u043b\u043d\u0446\u0430 - ",m,"."]}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["\u0417\u0430\u043a\u0430\u0442 \u0441\u043e\u043b\u043d\u0446\u0430 - ",O,"."]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{className:"btn btn-secondary",style:{backgroundColor:"#b8b3dd",border:"#b8b3dd",color:"white"},children:Object(u.jsx)(o.b,{style:{color:"white"},to:"/city/".concat(f),children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437"})})]})]})})})},J=c(24),M=c.n(J),B=function(){return Object(u.jsx)("div",{className:M.a.position,children:Object(u.jsxs)("div",{className:M.a.lds_ellipsis,children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})},A=function(){var e=Object(d.c)((function(e){return Object.values(e.reducer.searchedCities)}));return Object(d.c)((function(e){return e.reducer.loading}))?Object(u.jsx)(B,{}):e&&0!==e.length?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row p-3 mb-5 rounded",children:e.reverse().map((function(e){return Object(u.jsx)(I,{cityData:e},100*Math.random())}))})}):Object(u.jsx)("h2",{children:"No data"})},E=function(){return Object(u.jsxs)("div",{className:"main-content",children:[Object(u.jsx)(F,{}),Object(u.jsx)(A,{})]})},U=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(o.b,{to:"/",className:"mainPageLink",children:Object(u.jsx)("h4",{children:"WEATHER APP"})}),Object(u.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(u.jsx)(E,{})}}),Object(u.jsx)(l.a,{exact:!0,path:"/weather-api-with-redux-tools",render:function(){return Object(u.jsx)(E,{})}}),Object(u.jsx)(l.a,{path:"/city/:cityId?",render:function(){return Object(u.jsx)(x,Object(i.a)({},e))}})]})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))},R=Object(v.a)({reducer:{reducer:L}});a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{store:R,children:Object(u.jsx)(U,{})})})}),document.getElementById("root")),z()}},[[47,1,2]]]);
//# sourceMappingURL=main.2a13c09d.chunk.js.map