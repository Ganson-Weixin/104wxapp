(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kaoshichengji/add-or-update"],{"05b1":function(e,t,n){},"0c70":function(e,t,n){"use strict";n.r(t);var i=n("d2a3"),r=n("1fba");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("6e07");var u,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"61303eb8",null,!1,i["a"],u);t["default"]=s.exports},"1fba":function(e,t,n){"use strict";n.r(t);var i=n("aef6"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"6c9a":function(e,t,n){"use strict";(function(e){n("1935"),n("921b");i(n("66fd"));var t=i(n("0c70"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"6e07":function(e,t,n){"use strict";var i=n("05b1"),r=n.n(i);r.a},aef6:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var o=e[a](u),s=o.value}catch(h){return void n(h)}o.done?t(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function o(e){a(u,i,r,o,s,"next",e)}function s(e){a(u,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("c1fa"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{jiaoshigonghao:"",jiaoshixingming:"",xuehao:"",xingming:"",ceshimingcheng:"",zhengqueshu:"",kaoshichengji:"",paiming:"",pingyu:"",tupian:"",userid:""},xuehaoOptions:[],xuehaoIndex:0,user:{},ro:{jiaoshigonghao:!1,jiaoshixingming:!1,xuehao:!1,xingming:!1,ceshimingcheng:!1,zhengqueshu:!1,kaoshichengji:!1,paiming:!1,pingyu:!1,tupian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=u(i.default.mark((function t(n){var r,a,u,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:return a=t.sent,this.user=a.data,this.ruleForm.jiaoshigonghao=this.user.jiaoshigonghao,this.ruleForm.jiaoshixingming=this.user.jiaoshixingming,t.next=9,this.$api.option("xuesheng","xuehao",{});case 9:if(a=t.sent,this.xuehaoOptions=a.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=19;break}return this.ruleForm.id=n.id,t.next=17,this.$api.info("kaoshichengji",this.ruleForm.id);case 17:a=t.sent,this.ruleForm=a.data;case 19:if(!n.cross){t.next=70;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 22:if((t.t1=t.t0()).done){t.next=70;break}if(o=t.t1.value,"jiaoshigonghao"!=o){t.next=28;break}return this.ruleForm.jiaoshigonghao=u[o],this.ro.jiaoshigonghao=!0,t.abrupt("continue",22);case 28:if("jiaoshixingming"!=o){t.next=32;break}return this.ruleForm.jiaoshixingming=u[o],this.ro.jiaoshixingming=!0,t.abrupt("continue",22);case 32:if("xuehao"!=o){t.next=36;break}return this.ruleForm.xuehao=u[o],this.ro.xuehao=!0,t.abrupt("continue",22);case 36:if("xingming"!=o){t.next=40;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,t.abrupt("continue",22);case 40:if("ceshimingcheng"!=o){t.next=44;break}return this.ruleForm.ceshimingcheng=u[o],this.ro.ceshimingcheng=!0,t.abrupt("continue",22);case 44:if("zhengqueshu"!=o){t.next=48;break}return this.ruleForm.zhengqueshu=u[o],this.ro.zhengqueshu=!0,t.abrupt("continue",22);case 48:if("kaoshichengji"!=o){t.next=52;break}return this.ruleForm.kaoshichengji=u[o],this.ro.kaoshichengji=!0,t.abrupt("continue",22);case 52:if("paiming"!=o){t.next=56;break}return this.ruleForm.paiming=u[o],this.ro.paiming=!0,t.abrupt("continue",22);case 56:if("pingyu"!=o){t.next=60;break}return this.ruleForm.pingyu=u[o],this.ro.pingyu=!0,t.abrupt("continue",22);case 60:if("tupian"!=o){t.next=64;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,t.abrupt("continue",22);case 64:if("userid"!=o){t.next=68;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,t.abrupt("continue",22);case 68:t.next=22;break;case 70:this.styleChange();case 71:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xuehaoChange:function(){var e=u(i.default.mark((function e(t){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.xuehaoIndex=t.target.value,this.ruleForm.xuehao=this.xuehaoOptions[this.xuehaoIndex],e.next=4,this.$api.follow("xuesheng","xuehao",{columnValue:this.ruleForm.xuehao});case 4:n=e.sent,n.data.xingming&&(this.ruleForm.xingming=n.data.xingming);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.zhengqueshu||this.$validate.isIntNumer(this.ruleForm.zhengqueshu)){e.next=3;break}return this.$utils.msg("正确数应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.kaoshichengji||this.$validate.isIntNumer(this.ruleForm.kaoshichengji)){e.next=6;break}return this.$utils.msg("考试成绩应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.paiming||this.$validate.isIntNumer(this.ruleForm.paiming)){e.next=9;break}return this.$utils.msg("排名应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("kaoshichengji",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("kaoshichengji",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},d2a3:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))}},[["6c9a","common/runtime","common/vendor"]]]);