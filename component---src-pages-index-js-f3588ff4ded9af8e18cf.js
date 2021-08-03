"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5414:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),c=a(7198),l=a(7487),n=a(18),s=a(5444);function i(e){return Array.from(new Set(e)).sort((function(e,t){return e.localeCompare(t,"zh")}))}var m={company:"",city:"",work:""},o=function(){var e=function(){var e=(0,s.useStaticQuery)("3841103803").allCollectionJson.nodes,t=e.reduce((function(e,t){return{company:[].concat((0,n.Z)(e.company),[t.company.trim()]),city:[].concat((0,n.Z)(e.city),[t.city.trim()]),work:[].concat((0,n.Z)(e.work),[t.work.trim()])}}),{company:[],city:[],work:[]}),a=t.company,r=t.city,c=t.work;return{collections:e,companies:i(a),cities:i(r),works:i(c)}}(),t=e.collections,a=e.companies,o=e.cities,u=e.works,d=(0,r.useState)(t),p=d[0],y=d[1],b=[{type:"company",name:"公司",options:a},{type:"city",name:"城市",options:o},{type:"work",name:"岗位",options:u}];return r.createElement(c.Z,null,r.createElement(l.Z,{title:"互联网实习秋招避坑手册"}),r.createElement("div",{className:"flex flex-col items-start md:items-center md:flex-row"},r.createElement("div",{className:"md:mr-4 h-28 w-28 text-7xl flex md:justify-center items-center justify-start"},"📜"),r.createElement("h1",{className:"text-2xl font-extrabold text-black md:text-5xl dark:text-white"},"互联网实习秋招避坑手册")),r.createElement("div",{className:"mt-6 flex gap-4 items-center"},r.createElement("a",{href:"https://github.com/HUSTLab/hustlab.github.io"},r.createElement("img",{alt:"GitHub Repo stars",src:"https://img.shields.io/github/stars/hustlab/hustlab.github.io?style=social"})),r.createElement("a",{href:"https://github.com/HUSTLab/hustlab.github.io"},r.createElement("img",{src:"https://visitor-badge.glitch.me/badge?page_id=hustlab.github.io",alt:"visitor badge"}))),r.createElement("div",{className:"mt-6 text-gray-900 dark:text-white"},r.createElement("p",{className:"mt-2"},r.createElement("a",{href:"https://github.com/HUSTLab/hustlab.github.io",className:"text-yellow-700 transition hover:text-yellow-600 underline dark:text-blue-400  dark:hover:text-blue-300"},"互联网实习秋招避坑手册")," ","最初由华科 19 级软硕同学发起，通过分发问卷，调研了已实习同学的实习经历。主要收集房租、上下班时间、加班情况、公司福利、团队氛围、所做业务、是否受政策影响等等几个方面的信息，帮助其他同学应对接下来的秋招，也给即将实习的同学做一份参考。")),r.createElement("div",{className:"flex w-full mt-4 flex-col items-center gap-4 sm:flex-row"},b.map((function(e,a){return r.createElement("select",{key:a,onChange:function(a){!function(e,a){var r=e.target.value;m[a]=r;var c=function(e,t){return["","All",t].includes(m[e])},l=t.filter((function(e){return c("company",e.company)&&c("work",e.work)&&c("city",e.city)}));y(l)}(a,e.type)},defaultValue:"",required:!0,className:"select select-bordered w-full flex-1 text-base"},r.createElement("option",{value:"",disabled:"disabled"},e.name),r.createElement("option",{value:"All"},"全部"),e.options.map((function(e,t){return r.createElement("option",{key:t,value:e},e)})))}))),p.map((function(e,t){return r.createElement("div",{key:t,className:"card shadow mt-6 w-full"},r.createElement("div",{className:"card-body"},r.createElement("h2",{className:"card-title"},e.company,"-",e.department,"-",e.work),r.createElement("div",{className:"mb-3"},r.createElement("span",{className:"badge mr-2"},e.company),r.createElement("span",{className:"badge mr-2"},e.work),r.createElement("span",{className:"badge mr-2"},e.city)),r.createElement("p",{className:"mb-3"},e.condition),r.createElement("p",{className:"text-gray-500 dark:text-gray-300"},"数据更新于：",e.time)))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f3588ff4ded9af8e18cf.js.map