(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{235:function(n,t,e){},275:function(n,t,e){"use strict";var i=e(235);e.n(i).a},377:function(n,t,e){"use strict";e.r(t);var i={type:"",downlink:"",rtt:"",effectiveType:""},o="undefined"!=typeof navigator?navigator:{},s={data:function(){return{online:!1,connection:i}},computed:{canUseConnection:function(){return o.connection}},methods:{onGetStatus:function(){this.canUseConnection?this.updateConnectionStatus():this.$message.error("浏览器不支持navigator.connection（>_<）...")},update:function(){this.connection=o.connection},bindEvents:function(){var n=this;if(window.addEventListener("online",function(t){console.log(t),n.updateOnlineStatus()}),window.addEventListener("offline",function(t){console.log(t),n.updateOnlineStatus()}),o.connection){var t=null;o.connection.addEventListener("change",function(e){t&&clearTimeout(t),t=setTimeout(function(){n.updateConnectionStatus(e)},500)})}},updateOnlineStatus:function(){this.online=o.onLine,console.log(this.online),this.online?this.$message.success("有网啦❛‿˂̵✧"):this.$message.error("掉线啦（>_<）...")},updateConnectionStatus:function(n){console.log(n),this.connection=o.connection||i,this.$notify.info({title:"提示",message:"当前网络："+(n?n.currentTarget.type:this.connection.type||"unknown")})}},mounted:function(){var n=this;setTimeout(function(){n.online=navigator.onLine},1e3),this.bindEvents()}},c=(e(275),e(1)),a=Object(c.a)(s,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"connection-wrapper"},[e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"info-bg"},[n._v("切换或者断开网络试试？")])])],1),e("div",{staticClass:"btn"},[e("el-button",{attrs:{size:"small"},on:{click:n.onGetStatus}},[n._v("获取网络连接状态")])],1),e("div",{staticClass:"linestatus"},[e("span",{staticClass:"point",class:{online:n.online}})]),n.canUseConnection?e("div",{staticClass:"network"},[e("div",{staticClass:"title"},[e("span",[n._v("当前网络")]),e("i",{staticClass:"el-icon-refresh",on:{click:n.update}})]),e("el-tag",{attrs:{type:"primary"}},[n._v("type: "+n._s(n.connection.type))]),e("el-tag",{attrs:{type:"success"}},[n._v("downlink: "+n._s(n.connection.downlink))]),e("el-tag",{attrs:{type:"info"}},[n._v("rtt: "+n._s(n.connection.rtt))]),e("el-tag",{attrs:{type:"warning"}},[n._v("effectiveType: "+n._s(n.connection.effectiveType))])],1):e("div",{staticClass:"network"},[e("div",[n._v("浏览器不支持navigator.connection")]),e("div",[n._v("无法获取当前所用网络")])])],1)},[],!1,null,"1e804266",null);t.default=a.exports}}]);