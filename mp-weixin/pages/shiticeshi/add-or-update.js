(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shiticeshi/add-or-update"],{"17dd":function(e,t,n){"use strict";n.r(t);var i=n("3613"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},3613:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,r,u,a){try{var o=e[u](a),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(i,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function o(e){u(a,i,r,o,s,"next",e)}function s(e){u(a,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("c1fa"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{xuehao:"",xingming:"",timu:"",timuleixing:"",defen:"",xuanxiang:"",dati:"",tupian:"",userid:""},user:{},ro:{xuehao:!1,xingming:!1,timu:!1,timuleixing:!1,defen:!1,xuanxiang:!1,dati:!1,tupian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=a(i.default.mark((function t(n){var r,u,a,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(u=t.sent,this.user=u.data,this.ruleForm.xuehao=this.user.xuehao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=15;break}return this.ruleForm.id=n.id,t.next=13,this.$api.info("shiticeshi",this.ruleForm.id);case 13:u=t.sent,this.ruleForm=u.data;case 15:if(!n.cross){t.next=58;break}a=e.getStorageSync("crossObj"),t.t0=i.default.keys(a);case 18:if((t.t1=t.t0()).done){t.next=58;break}if(o=t.t1.value,"xuehao"!=o){t.next=24;break}return this.ruleForm.xuehao=a[o],this.ro.xuehao=!0,t.abrupt("continue",18);case 24:if("xingming"!=o){t.next=28;break}return this.ruleForm.xingming=a[o],this.ro.xingming=!0,t.abrupt("continue",18);case 28:if("timu"!=o){t.next=32;break}return this.ruleForm.timu=a[o],this.ro.timu=!0,t.abrupt("continue",18);case 32:if("timuleixing"!=o){t.next=36;break}return this.ruleForm.timuleixing=a[o],this.ro.timuleixing=!0,t.abrupt("continue",18);case 36:if("defen"!=o){t.next=40;break}return this.ruleForm.defen=a[o],this.ro.defen=!0,t.abrupt("continue",18);case 40:if("xuanxiang"!=o){t.next=44;break}return this.ruleForm.xuanxiang=a[o],this.ro.xuanxiang=!0,t.abrupt("continue",18);case 44:if("dati"!=o){t.next=48;break}return this.ruleForm.dati=a[o],this.ro.dati=!0,t.abrupt("continue",18);case 48:if("tupian"!=o){t.next=52;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,t.abrupt("continue",18);case 52:if("userid"!=o){t.next=56;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,t.abrupt("continue",18);case 56:t.next=18;break;case 58:this.styleChange();case 59:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.defen||this.$validate.isIntNumer(this.ruleForm.defen)){e.next=3;break}return this.$utils.msg("得分应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("shiticeshi",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("shiticeshi",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},4034:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}))},b144:function(e,t,n){"use strict";n.r(t);var i=n("4034"),r=n("17dd");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("fa63");var a,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"133c7a00",null,!1,i["a"],a);t["default"]=s.exports},e65d:function(e,t,n){},fa63:function(e,t,n){"use strict";var i=n("e65d"),r=n.n(i);r.a},fab6:function(e,t,n){"use strict";(function(e){n("1935"),n("921b");i(n("66fd"));var t=i(n("b144"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["fab6","common/runtime","common/vendor"]]]);