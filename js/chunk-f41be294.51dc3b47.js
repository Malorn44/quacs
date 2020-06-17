(self["webpackJsonp"]=self["webpackJsonp"]||[]).push([["chunk-f41be294"],{"3a2f":function(e,t,r){"use strict";var n=r("a1d7"),c=r.n(n);c.a},"6b7b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.departmentsInitialized&&e.catalogInitialized?r("div",[0===e.selectedCourses.length?r("div",{staticClass:"warning-message"},[r("h3",[e._v("It looks like you have not selected any courses yet :(")]),r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Click to select a course")])],1):r("div",{key:e.lastNewSchedule,staticStyle:{"padding-bottom":"2rem"}},[r("div",{staticClass:"schedule-select"},[0!==e.numSchedules?r("div",[r("b-icon-chevron-left",{staticClass:"schedule-select-button",on:{click:function(t){return e.decrementSchedule()}}}),r("span",{staticClass:"schedule-num"},[e._v(" "+e._s(e.visibleCurrentScheduleNumber)+" / "+e._s(e.numSchedules)+" ")]),r("b-icon-chevron-right",{staticClass:"schedule-select-button",on:{click:function(t){return e.incrementSchedule()}}})],1):r("div",[e._v(" No valid schedules, "),e.filteredKeepSelected.length>0?r("span",[e._v("there are conflicts")]):r("span",[e._v("please select at least one course")])])]),0!==e.numSchedules?r("Calendar",{attrs:{crns:e.currentScheduleCRNs}}):e._e(),r("div",{staticClass:"crn-list"},[e._v(" CRNs: "),e._l(e.currentScheduleCRNs,(function(t,n){return[0!==n?[e._v(", ")]:e._e(),r("span",{key:t,staticClass:"crn",on:{click:function(r){return e.copyToClipboard(t)}}},[e._v(e._s(t))])]})),r("div",{attrs:{id:"crn-copy-indicator"}},[e._v("Copied!")])],2)],1),r("div",{staticClass:"card-columns"},e._l(e.selectedCourses,(function(e){return r("CourseCard",{key:e.subj+e.crse+e.title,attrs:{course:e}})})),1)]):r("b-spinner",{staticClass:"loading-spinner",attrs:{label:"Loading"}})],1)},c=[],o=r("9ab4"),i=r("60a3"),a=r("2f62"),l=r("dcb3"),s=r("b42e"),u=r("fa73"),d=r("6c06"),f=r("7b1e"),b=r("a8c8"),h=r("3a58");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={variant:{type:String,default:null},fontScale:{type:[Number,String],default:1},scale:{type:[Number,String],default:1},rotate:{type:[Number,String],default:0},flipH:{type:Boolean,default:!1},flipV:{type:Boolean,default:!1},shiftH:{type:[Number,String],default:0},shiftV:{type:[Number,String],default:0},animation:{type:String,default:null}},g={viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img",alt:"icon"},O={width:null,height:null,focusable:null,role:null,alt:null},j=l["a"].extend({name:"BVIconBase",functional:!0,props:y({content:{type:String},stacked:{type:Boolean,default:!1}},v),render:function(e,t){var r,n=t.data,c=t.props,o=t.children,i=Object(b["a"])(Object(h["a"])(c.fontScale,1),0)||1,a=Object(b["a"])(Object(h["a"])(c.scale,1),0)||1,l=Object(h["a"])(c.rotate,0),u=Object(h["a"])(c.shiftH,0),p=Object(h["a"])(c.shiftV,0),y=c.flipH,v=c.flipV,j=c.animation,S=y||v||1!==a,C=S||l,w=u||p,_=[C?"translate(8 8)":null,S?"scale(".concat((y?-1:1)*a," ").concat((v?-1:1)*a,")"):null,l?"rotate(".concat(l,")"):null,C?"translate(-8 -8)":null].filter(d["a"]),P=c.stacked,x=!Object(f["j"])(c.content),N=e("g",{attrs:{transform:_.join(" ")||null},domProps:x?{innerHTML:c.content||""}:{}},o);return w&&(N=e("g",{attrs:{transform:"translate(".concat(16*u/16," ").concat(-16*p/16,")")}},[N])),P&&(N=e("g",{},[N])),e("svg",Object(s["a"])({staticClass:"b-icon bi",class:(r={},m(r,"text-".concat(c.variant),!!c.variant),m(r,"b-icon-animation-".concat(j),!!j),r),attrs:g,style:P?{}:{fontSize:1===i?null:"".concat(100*i,"%")}},n,P?{attrs:O}:{},{attrs:{xmlns:P?null:"http://www.w3.org/2000/svg",fill:"currentColor"}}),[N])}});function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(e,t){var r="BIcon".concat(Object(u["d"])(e)),n="bi-".concat(Object(u["a"])(e)),c=Object(u["f"])(t||"");return l["a"].extend({name:r,functional:!0,props:C(C({},v),{},{stacked:{type:Boolean,default:!1}}),render:function(e,t){var r=t.data,o=t.props;return e(j,Object(s["a"])(r,{staticClass:n,props:C(C({},o),{},{content:c})}))}})},P=_("ChevronLeft",'<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>'),x=_("ChevronRight",'<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>'),N=r("01e3"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"calendar",style:{height:e.totalHeight+"px"}},[r("div",{staticClass:"calendar-times"},e._l(e.strHours,(function(t){return r("div",{key:t,staticClass:"hour-label",class:{hour_label_military:e.isMilitaryTime()},style:{height:e.hourHeight+"%"}},[r("div",[e._v(e._s(t))])])})),0),r("div",{staticClass:"calendar-grid"},e._l(e.days,(function(t){return r("div",{key:t.short,staticClass:"grid-day",style:{width:e.dayWidth+"%"}},[r("div",{staticClass:"day-label"},[e._v(e._s(t.name))]),e._l(e.sessionsOnDay(t),(function(n){return r("div",{key:t.short+n.timeslot.timeStart+n.section.crn+n.timeslot.instrutor+n.timeslot.location,staticClass:"calendar-event",style:{"margin-top":e.eventPosition(n.timeslot)+"px",height:e.eventHeight(n.timeslot)+"px",width:e.dayWidth+"%",backgroundColor:e.colors(n.section.crn).bg,borderColor:e.colors(n.section.crn).border,color:e.colors(n.section.crn).text}},[r("div",{staticClass:"event-text"},[e._v(" "+e._s(n.section.title)+" "),r("br"),e._v(" "+e._s(n.section.subj)+" "+e._s(n.section.crse)+" - "+e._s(n.section.sec)+" "),r("br"),e._v(" "+e._s(n.section.crn)+" "),r("br"),e._v(" "+e._s(n.timeslot.instructor)+" "),r("br"),e._v(" "+e._s(n.timeslot.location)+" ")])])})),e._l(e.strHours,(function(t){return r("div",{key:t,staticClass:"grid-hour",style:{height:e.hourHeight+"%"}})}))],2)})),0)])},H=[],T=r("16bd"),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.startTime=420,t.endTime=1320,t.totalHeight=650,t}return Object(o["d"])(t,e),Object.defineProperty(t.prototype,"numMinutes",{get:function(){return this.endTime-this.startTime},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dayWidth",{get:function(){return 100/T["a"].length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hourHeight",{get:function(){return 6e3/this.numMinutes},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"crnToSections",{get:function(){var e,t,r,n,c,i,a={};try{for(var l=Object(o["f"])(this.$store.state.departments),s=l.next();!s.done;s=l.next()){var u=s.value;try{for(var d=(r=void 0,Object(o["f"])(u.courses)),f=d.next();!f.done;f=d.next()){var b=f.value;try{for(var h=(c=void 0,Object(o["f"])(b.sections)),p=h.next();!p.done;p=h.next()){var y=p.value;a[y.crn]=y}}catch(m){c={error:m}}finally{try{p&&!p.done&&(i=h.return)&&i.call(h)}finally{if(c)throw c.error}}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(n=d.return)&&n.call(d)}finally{if(r)throw r.error}}}}catch(g){e={error:g}}finally{try{s&&!s.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}return a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selected",{get:function(){var e,t,r=[];try{for(var n=Object(o["f"])(this.crns),c=n.next();!c.done;c=n.next()){var i=c.value;r.push(this.crnToSections[i])}}catch(a){e={error:a}}finally{try{c&&!c.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}return r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sessionsOnDay",{get:function(){var e=this;return function(t){var r,n,c,i,a=[];try{for(var l=Object(o["f"])(e.selected),s=l.next();!s.done;s=l.next()){var u=s.value;try{for(var d=(c=void 0,Object(o["f"])(u.timeslots)),f=d.next();!f.done;f=d.next()){var b=f.value;b.days.includes(t.short)&&a.push({section:u,timeslot:b})}}catch(h){c={error:h}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(c)throw c.error}}}}catch(p){r={error:p}}finally{try{s&&!s.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return a}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"strHours",{get:function(){for(var e=[],t=this.startTime;t<this.endTime;t+=60)e.push(Object(T["h"])(t,this.$store.getters["settings/isMilitaryTime"]()));return e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"eventHeight",{get:function(){var e=this;return function(t){return e.totalHeight*(Object(T["e"])(t)/e.numMinutes)}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"eventPosition",{get:function(){var e=this;return function(t){var r=Object(T["j"])(t.timeStart);return e.totalHeight*((r-e.startTime)/e.numMinutes)}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colors",{get:function(){var e=this;return function(t){var r=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--num-calendar-colors")),n=e.selected.findIndex((function(e){return e.crn===t}))%r;return{bg:getComputedStyle(document.documentElement).getPropertyValue("--calendar-bg-color-"+n),border:getComputedStyle(document.documentElement).getPropertyValue("--calendar-border-color-"+n),text:getComputedStyle(document.documentElement).getPropertyValue("--calendar-text-color-"+n)}}},enumerable:!1,configurable:!0}),Object(o["c"])([Object(i["b"])()],t.prototype,"crns",void 0),t=Object(o["c"])([Object(i["a"])({computed:Object(o["a"])({days:function(){return T["a"]}},Object(a["b"])("settings",["isMilitaryTime"]))})],t),t}(i["c"]),D=E,I=D,M=(r("3a2f"),r("2877")),B=Object(M["a"])(I,k,H,!1,null,"636dd92e",null),V=B.exports,$=r("8f57");
/*!
 * BootstrapVue Icons, generated from Bootstrap Icons 1.0.0-alpha4
 *
 * @link https://icons.getbootstrap.com/
 * @license MIT
 * https://github.com/twbs/icons/blob/master/LICENSE.md
 */function z(e,t){return(e%t+t)%t}var R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.keepSelected=[],t.currentScheduleNumber=0,t.currentScheduleCRNs=[],t}return Object(o["d"])(t,e),t.prototype.onPropertyChanged=function(){this.currentScheduleNumber=0,this.getSchedule(this.currentScheduleNumber)},Object.defineProperty(t.prototype,"selectedCourses",{get:function(){var e,t,r,n,c,i;if(this.keepSelected.length>0)return this.keepSelected;try{for(var a=Object(o["f"])(this.$store.state.departments),l=a.next();!l.done;l=a.next()){var s=l.value;try{for(var u=(r=void 0,Object(o["f"])(s.courses)),d=u.next();!d.done;d=u.next()){var f=d.value;try{for(var b=(c=void 0,Object(o["f"])(f.sections)),h=b.next();!h.done;h=b.next()){var p=h.value;if(this.$store.getters["schedule/isSelected"](p.crn)){this.keepSelected.push(f);break}}}catch(y){c={error:y}}finally{try{h&&!h.done&&(i=b.return)&&i.call(b)}finally{if(c)throw c.error}}}}catch(m){r={error:m}}finally{try{d&&!d.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}}}catch(v){e={error:v}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return this.keepSelected},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"filteredKeepSelected",{get:function(){var e=this;return this.keepSelected.filter((function(t){return t.sections.some((function(t){return e.$store.getters["schedule/isSelected"](t.crn)}))}))},enumerable:!1,configurable:!0}),t.prototype.mounted=function(){this.getSchedule(this.currentScheduleNumber)},Object.defineProperty(t.prototype,"lastNewSchedule",{get:function(){return this.$store.state.schedule.lastNewSchedule},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visibleCurrentScheduleNumber",{get:function(){return 0===this.numSchedules?(this.currentScheduleNumber=0,0):this.currentScheduleNumber+1},enumerable:!1,configurable:!0}),t.prototype.getSchedule=function(e){return Object(o["b"])(this,void 0,void 0,(function(){var t;return Object(o["e"])(this,(function(r){switch(r.label){case 0:return 0===this.numSchedules?[2,[]]:(t=this,[4,this.$store.getters["schedule/getSchedule"](e)]);case 1:return t.currentScheduleCRNs=r.sent(),[2]}}))}))},t.prototype.incrementSchedule=function(){this.currentScheduleNumber=z(this.currentScheduleNumber+1,this.numSchedules),this.getSchedule(this.currentScheduleNumber)},t.prototype.decrementSchedule=function(){this.currentScheduleNumber=z(this.currentScheduleNumber-1,this.numSchedules),this.getSchedule(this.currentScheduleNumber)},t.prototype.copyToClipboard=function(e){var t=document.createElement("input");t.style="position: absolute; left: -1000px; top: -1000px",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t);var r=document.getElementById("crn-copy-indicator");r.className="show",setTimeout((function(){r.className=r.className.replace("show","")}),2e3)},Object(o["c"])([Object(i["d"])("lastNewSchedule")],t.prototype,"onPropertyChanged",null),t=Object(o["c"])([Object(i["a"])({computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(a["b"])(["departmentsInitialized","catalogInitialized"])),Object(a["b"])("schedule",["numSchedules"])),Object(a["c"])("schedule",["lastNewSchedule"])),components:{Calendar:V,CourseCard:$["a"],"b-icon-chevron-left":P,"b-icon-chevron-right":x,"b-spinner":N["a"]}})],t),t}(i["c"]),L=R,W=L,J=(r("aca0"),Object(M["a"])(W,n,c,!1,null,"33636d51",null));t["default"]=J.exports},a1d7:function(e,t,r){},aca0:function(e,t,r){"use strict";var n=r("d8b1"),c=r.n(n);c.a},d8b1:function(e,t,r){}}]);
//# sourceMappingURL=chunk-f41be294.51dc3b47.js.map