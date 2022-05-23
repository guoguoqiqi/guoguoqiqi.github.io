(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{423:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"产生的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产生的原因"}},[t._v("#")]),t._v(" 产生的原因")]),t._v(" "),a("p",[t._v("我们做移动端页面时一般都会设置meta viewport的content=“width=device-width”，\n这里就是把html视窗宽度大小设置等于设备宽度的大小，大多数手机的屏幕设备宽度都差不多，以iphoneX为例，屏幕宽度375px。")]),t._v(" "),a("p",[t._v("而UI给设计图的时候基本上都是给的二倍图甚至三倍图，假设设计图是750px的二倍图，在750px上设计了1px的边框，要拿到375px宽度的手机来显示，就相当于整体设计图缩小一倍，所以在375px手机上要以0.5px呈现才符合预期效果，然而css里最低只支持1px大小，不足1px就以1px显示，所以你看到的就显得边框较粗，实际上只是设计图整体缩小了，而1px的边框没有跟着缩小导致的。（ps：ios较新版已支持0.5px，安卓不支持，这里暂且忽略）")]),t._v(" "),a("p",[a("strong",[t._v("简而言之就是：")]),t._v("\n多倍的设计图设计了1px的边框，在手机上缩小呈现时，由于css最低只支持显示1px大小，导致边框太粗的效果。")]),t._v(" "),a("h3",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("background-image && boder-image")])])]),t._v(" "),a("p",[t._v("缺点：换个颜色还得换图,而且图片处理圆角会出现模糊的问题")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("border-shadow")])])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box-shadow-1px")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inset 0px -1px 1px -1px #c8c7cc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("伪元素 + scale缩放")])])]),t._v(" "),a("h4",{attrs:{id:"参考文章链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章链接"}},[t._v("#")]),t._v(" 参考文章链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6850418109522640910",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端1px像素问题的根本原因 | 优质解决方案"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);