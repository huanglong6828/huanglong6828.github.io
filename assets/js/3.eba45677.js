(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5],{362:function(t,e,n){},363:function(t,e,n){"use strict";n(83),n(30),n(118);var a=function(t,e){for(var n=e.split("."),a=n.length,i=0;null!=t&&i<a;)t=t[n[i++]];return i&&i===a?t:void 0};e.a={get:function(t,e,n){return n?a(t,"themeConfig.locales.".concat(n,".").concat(e))||a(t,"themeConfig.".concat(e))||a(t,"locales.".concat(n,".").concat(e))||t[e]:a(t,"themeConfig.".concat(e))||t[e]}}},370:function(t,e,n){},371:function(t,e,n){n(31),n(30),n(118),n(37),e.defaultLocales={"/":{lastUpdated:"Last Updated",editLinkText:"Edit this page",container:{tip:"TIP",warning:"WARNING",danger:"DANGER"}},"/zh/":{lastUpdated:"上次更新",editLinkText:"编辑此页面",container:{tip:"提示",warning:"注意",danger:"警告"}}},e.getDefaultLocales=function(t,n){var a=e.defaultLocales[t];return n.split(".").forEach((function(t){a=a[t]})),a}},372:function(t,e,n){"use strict";var a=n(362);n.n(a).a},373:function(t,e,n){},374:function(t,e,n){},384:function(t,e,n){"use strict";n.r(e);n(31),n(119),n(30),n(32),n(82),n(37);var a=n(29),i=n(363),s=n(371),o={data:function(){return{blocks:[]}},computed:{isEnchanceMode:function(){return!!this.$page.frontmatter.enhance},isBlockLayout:function(){return this.isEnchanceMode||!!this.blocks.length},pageClasses:function(){return{page__container:!0,"page--block-layout":this.isBlockLayout}},lastUpdated:function(){return!1!==this.$site.themeConfig.lastUpdated&&this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof(this.$site.themeConfig.lastUpdated||i.a.get(this.$site,"lastUpdated",this.$localePath))?this.$site.themeConfig.lastUpdated:Object(s.getDefaultLocales)(this.$localePath,"lastUpdated")},editLink:function(){if(!1===this.$page.frontmatter.editLink)return"";var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,o=t.docsBranch,r=void 0===o?"master":o,c=t.docsRepo,l=void 0===c?e:c,u=this.$page.path;return"/"===u.substr(-1)?u+="README.md":u+=".md",l&&n?(Object(a.b)(l)?l:"https://github.com/".concat(l)).replace(/\/$/,"")+"/edit/".concat(r)+(s?"/"+s.replace(/\/$/,""):"")+u:""},editLinkText:function(){return this.$site.themeConfig.editLinkText||Object(s.getDefaultLocales)(this.$localePath,"editLinkText")}},watch:{$route:function(t,e){t.path!==e.path&&(this.blocks.length=0,this.isEnchanceMode&&this.$nextTick(this.resolveLayout))}},mounted:function(){this.isEnchanceMode&&this.$nextTick(this.resolveLayout)},created:function(){this.$on("addBlock",this.addBlock)},methods:{resolveLayout:function(){var t=this.$el.children[0],e="";Array.from(t.children).forEach((function(t){!function(t){var e=t.tagName.toLowerCase();return"h1"===e||"h2"===e}(t)?e+=t.outerHTML:(e&&(e+='\n                </div>\n                <div class="content-block__examples">\n                </div>\n              </div>\n            </div>\n            '),e+='\n            <div class="content-block">\n              <div class="content-block__heading">\n                '.concat(t.outerHTML,'\n              </div>\n              <div class="content-block__body">\n                <div class="content-block__cont">\n          '))})),e+='\n                </div>\n                <div class="content-block__examples">\n                </div>\n              </div>\n            </div>\n      ',t.innerHTML=e},addBlock:function(t){this.blocks.push(t)}}},r=(n(372),n(2)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageClasses},[n("Content",{attrs:{custom:""}}),t._v(" "),t.lastUpdated||t.editLink?n("div",{staticClass:"content__footer-container"},[n("div",{staticClass:"content__footer"},[t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e(),t._v(" "),t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("svg",{attrs:{viewBox:"0 0 33 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16"}},[n("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"github",fill:"#000"}},[n("path",{attrs:{d:"M16.3,0 C7.3,0 -3.55271368e-15,7.3 -3.55271368e-15,16.3 C-3.55271368e-15,23.5 4.7,29.6 11.1,31.8 C11.9,31.9 12.2,31.4 12.2,31 L12.2,28.2 C7.7,29.2 6.7,26 6.7,26 C6,24.2 5,23.7 5,23.7 C3.5,22.7 5.1,22.7 5.1,22.7 C6.7,22.8 7.6,24.4 7.6,24.4 C9.1,26.9 11.4,26.2 12.3,25.8 C12.4,24.7 12.9,24 13.3,23.6 C9.7,23.2 5.9,21.8 5.9,15.5 C5.9,13.7 6.5,12.3 7.6,11.1 C7.4,10.7 6.9,9 7.8,6.8 C7.8,6.8 9.2,6.4 12.3,8.5 C13.6,8.1 15,8 16.4,8 C17.8,8 19.2,8.2 20.5,8.5 C23.6,6.4 25,6.8 25,6.8 C25.9,9 25.3,10.7 25.2,11.1 C26.2,12.2 26.9,13.7 26.9,15.5 C26.9,21.8 23.1,23.1 19.5,23.5 C20.1,24 20.6,25 20.6,26.5 L20.6,31 C20.6,31.4 20.9,31.9 21.7,31.8 C28.2,29.6 32.8,23.5 32.8,16.3 C32.6,7.3 25.3,0 16.3,0 L16.3,0 Z"}})])])])]):t._e()])]):t._e()],1)}),[],!1,null,null,null);e.default=c.exports},444:function(t,e,n){"use strict";var a=n(1),i=n(27),s=n(15),o=n(3),r=n(38),c=[],l=c.sort,u=o((function(){c.sort(void 0)})),d=o((function(){c.sort(null)})),h=r("sort");a({target:"Array",proto:!0,forced:u||!d||!h},{sort:function(t){return void 0===t?l.call(s(this)):l.call(s(this),i(t))}})},445:function(t,e,n){"use strict";var a=n(1),i=n(120),s=n(52),o=n(13),r=n(15),c=n(121),l=n(55),u=n(53),d=n(23),h=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,v=Math.min;a({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var n,a,u,d,h,p,g=r(this),_=o(g.length),m=i(t,_),C=arguments.length;if(0===C?n=a=0:1===C?(n=0,a=_-m):(n=C-2,a=v(f(s(e),0),_-m)),_+n-a>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=c(g,a),d=0;d<a;d++)(h=m+d)in g&&l(u,d,g[h]);if(u.length=a,n<a){for(d=m;d<_-a;d++)p=d+n,(h=d+a)in g?g[p]=g[h]:delete g[p];for(d=_;d>_-a+n;d--)delete g[d-1]}else if(n>a)for(d=_-a;d>m;d--)p=d+n-1,(h=d+a-1)in g?g[p]=g[h]:delete g[p];for(d=0;d<n;d++)g[d+m]=arguments[d+2];return g.length=_-a+n,u}})},446:function(t,e,n){var a=n(1),i=n(447);a({global:!0,forced:parseInt!=i},{parseInt:i})},447:function(t,e,n){var a=n(4),i=n(127).trim,s=n(128),o=a.parseInt,r=/^[+-]?0[Xx]/,c=8!==o(s+"08")||22!==o(s+"0x16");t.exports=c?function(t,e){var n=i(String(t));return o(n,e>>>0||(r.test(n)?16:10))}:o},448:function(t,e,n){"use strict";var a=n(370);n.n(a).a},449:function(t,e,n){"use strict";var a=n(373);n.n(a).a},450:function(t,e,n){"use strict";var a=n(374);n.n(a).a},453:function(t,e,n){"use strict";n.r(e);n(50),n(51),n(56),n(84);var a=n(0),i=n(81),s=n.n(i),o=(n(83),n(22),n(31),n(201),n(202),n(54),n(204),n(444),n(445),n(446),n(30),n(203),n(82),n(37),n(363));var r={name:"Sidebar",components:{NavLink:n(196).a},props:{items:{type:Object,required:!0}},data:function(){return{containerWidth:"100%",searchKeyword:""}},computed:{searchedOptions:function(){var t=this,e=[];return this.sidebars.forEach((function(t){t.to&&e.push({to:t.to,text:t.title}),t.headers&&t.headers.forEach((function(n){e.push({to:"".concat(t.to,"#").concat(n.slug),text:n.title})})),t.children&&t.children.forEach((function(t){e.push({to:t.to,text:t.title}),t.headers&&t.headers.forEach((function(n){e.push({to:"".concat(t.to,"#").concat(n.slug),text:n.title})}))}))})),e.filter((function(e){return(e.text||"").toLowerCase().includes(t.searchKeyword.toLowerCase())}))},shouldShowLangSelect:function(){return Object.keys(this.$site.locales||{}).length>1},languageSelectText:function(){return o.a.get(this.$site,"selectText",this.$localePath)||"languages"},currentPagePath:function(){return this.$page.path},currentRouteFullPath:function(){return decodeURIComponent(this.$route.fullPath)},localePathList:function(){var t=this;return Object.keys(this.$site.locales||{}).map((function(e){var n=t.$site.locales[e],a=o.a.get(t.$site,"label",e)||n.text||n.lang,i="";n.path===t.$localePath?i=t.$page.path:(i=t.$page.path.replace(t.$localePath,n.path),!t.$site.pages.some((function(t){return t.path===i}))&&(i=n.path));return{prop:a,value:i}}))},sidebarGroupOrder:function(){var t=this,e=o.a.get(this.$site,"sidebarGroupOrder",this.$localePath),n=e?e.filter((function(e){return!!t.items[e]})):Object.keys(this.items),a=n.indexOf("home");return-1!==a&&n.splice(a,1),n.sort(),n.unshift("home"),n},sidebars:function(){var t=this;return this.sidebarGroupOrder.map((function(e){return t.items[e]})).filter((function(t){return t}))}},mounted:function(){this.refreshContainerWidth(),this.checkActiveSidebarItem(),window.addEventListener("resize",this.refreshContainerWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.refreshContainerWidth)},methods:{title:function(t){var e=["http","https","cli","api"];return t.toLowerCase().replace(/(?:(?:(\s?(?:^|[.\(\)!?;:"-])\s*)(\w))|(\w))(\w*[’']*\w*)/g,(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return e.includes(t)?t.toUpperCase():n+(i||a).toUpperCase()+s}))},toggleLocale:function(t){this.$router.push(t)},refreshContainerWidth:function(){var t=this.$refs.container.parentNode.getBoundingClientRect().width;this.containerWidth=t?"".concat(t,"px"):"100%"},savePosition:function(){if(this.$refs.container){var t=this.$refs.container.scrollTop;window.localStorage.setItem("vuepress_theme_api_sidebar_position",t)}},restorePosition:function(){var t=parseInt(window.localStorage.getItem("vuepress_theme_api_sidebar_position"),10);t&&(this.$refs.container.scrollTop=t)},checkActiveSidebarItem:function(){var t=this.$refs.container.querySelector(".category--active");if(t){var e=document.documentElement.clientHeight,n=t.getBoundingClientRect().top;n<e?this.restorePosition():(this.$refs.container.scrollTop=n-100,this.savePosition())}else this.restorePosition()}}},c=(n(448),n(2)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"sidebar",style:{width:t.containerWidth},on:{click:t.savePosition}},[n("div",{staticClass:"group"},[n("div",{staticClass:"group__title"},[t._v("Search")]),t._v(" "),n("div",{staticClass:"group__body"},[n("Search",{attrs:{options:t.searchedOptions},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}})],1)]),t._v(" "),t.shouldShowLangSelect?n("div",{staticClass:"group"},[n("div",{staticClass:"group__title"},[t._v(t._s(t.languageSelectText))]),t._v(" "),n("div",{staticClass:"group__body"},[n("div",{staticClass:"sidebar__lang"},[n("Select",{attrs:{options:t.localePathList,value:t.currentPagePath},on:{change:t.toggleLocale}})],1)])]):t._e(),t._v(" "),t._l(t.sidebars,(function(e,a){return n("div",{key:e.to||a,staticClass:"group"},[n("div",{staticClass:"group__title"},[t._v("\n      "+t._s(t.sidebarGroupOrder[a].replace(/^\d+[_-]*/g,""))+"\n    ")]),t._v(" "),n("div",{staticClass:"group__body"},[e.to?n("div",{class:["group__category","category",{"category--selected":t.currentRouteFullPath===e.to,"category--active":t.currentRouteFullPath===e.to}]},[n("div",{staticClass:"category__label"},[n("NavLink",{staticClass:"category__link sidebar-link",attrs:{to:e.to}},[t._v(t._s(t.title(e.title||t.sidebarGroupOrder[a])))])],1)]):t._e(),t._v(" "),e.headers&&e.headers.length?n("div",t._l(e.headers,(function(a){return n("div",{key:e.to+"#"+a.slug,class:["group__category","category",{"category--selected":t.currentRouteFullPath===e.to+"#"+a.slug,"category--active":t.currentRouteFullPath===e.to+"#"+a.slug}]},[n("div",{staticClass:"category__label"},[n("NavLink",{staticClass:"category__link sidebar-link",attrs:{to:e.to+"#"+a.slug}},[t._v(t._s(t.title(a.title)))])],1)])})),0):t._e(),t._v(" "),e.children&&e.children.length?n("div",t._l(e.children,(function(e){return n("div",{key:""+e.to,class:["group__category","category",{"category--selected":!e.isLangNav&&t.$route.path===e.to,"category--active":!e.isLangNav&&t.currentRouteFullPath===e.to}]},[n("div",{staticClass:"category__label"},[n("NavLink",{staticClass:"category__link sidebar-link",attrs:{to:e.to}},[t._v(t._s(t.title(e.title)))])],1),t._v(" "),e.headers&&e.headers.length?n("div",t._l(e.headers,(function(a){return n("div",{key:e.to+"#"+a.slug,class:["category__headers",{"category--active":t.currentRouteFullPath===e.to+"#"+a.slug}]},[n("div",{staticClass:"category__header-item"},[n("NavLink",{staticClass:"category__link sidebar-link",attrs:{to:e.to+"#"+a.slug}},[t._v(t._s(t.title(a.title)))])],1)])})),0):t._e()])})),0):t._e()])])}))],2)}),[],!1,null,null,null).exports,u=n(452),d=n(384),h=n(383);var p={components:{Home:u.default,Sidebar:l,Page:d.default},data:function(){return{isSidebarOpen:!0,isMenuOpened:!1}},computed:{sidebarItems:function(){return t=this.$site,e=this.$localePath,n={},(a=o.a.get(t,"sidebar",e))?Object.assign(n,a):(t.pages.filter((function(n){return!t.locales||Object(h.e)(n.path,t.locales)===e})).forEach((function(t){if(Object(h.a)(t.path,e))n.home={title:t.title,to:t.path,children:[]};else{var a=Object(h.d)(t.path,e);n[a]||(n[a]={children:[]}),void 0===t.headers&&(t.headers=[]);var i=function(t){if(!t.length)return-1;for(var e=t[0].level,n=1,a=t.length;n<a;n++)t[n].level<e&&(e=t[n].level);return e}(t.headers);t.path==="".concat(e).concat(a,"/")?(n[a].title=t.title,n[a].to=t.path,n[a].headers=t.headers.filter((function(t){return t.level===i}))):n[a].children.push({title:t.title||Object(h.c)(t.path),to:t.path,headers:t.headers.filter((function(t){return t.level===i}))})}})),n);var t,e,n,a},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&Object.keys(this.sidebarItems).length},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-sidebar":!this.shouldShowSidebar},t]}},watch:{$route:function(){this.isMenuOpened=!1}},mounted:function(){s.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,n){t.path===e.path||a.a.component(t.name)||s.a.start(),n()})),this.$router.afterEach((function(){s.a.done()}))},created:function(){this.$ssrContext&&(this.$ssrContext.title=this.$title,this.$ssrContext.lang=this.$lang,this.$ssrContext.description=this.$page.description||this.$description)}},f=(n(449),n(450),Object(c.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme__container",class:t.pageClasses},[t.shouldShowSidebar?n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3 col-lg-2 sidebar__container"},[n("Menubar",{attrs:{open:t.isMenuOpened},on:{"update:open":function(e){t.isMenuOpened=e}}}),t._v(" "),n("Sidebar",{directives:[{name:"show",rawName:"v-show",value:t.isMenuOpened,expression:"isMenuOpened"}],attrs:{items:t.sidebarItems}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2)],1),t._v(" "),n("div",{staticClass:"col-md-9 col-lg-10 content__container"},[t.$page.frontmatter.layout?n("div",{staticClass:"custom__layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page")],1)]):t._e(),t._v(" "),t.shouldShowSidebar?t._e():n("div",[t.$page.frontmatter.layout?n("div",{staticClass:"custom__layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page")],1)])}),[],!1,null,null,null));e.default=f.exports}}]);