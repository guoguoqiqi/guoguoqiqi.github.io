(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{472:function(s,a,t){"use strict";t.r(a);var r=t(15),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"css-sprites-雪碧图或css精灵"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-sprites-雪碧图或css精灵"}},[s._v("#")]),s._v(" Css Sprites（雪碧图或css精灵）")]),s._v(" "),t("p",[s._v("雪碧图是网页图片处理的一种方式，它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去，这样一来，当访问该页面时，载入的图片就不会像以前那样一幅一幅地慢慢显示出来了。")]),s._v(" "),t("h4",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理：")]),s._v(" "),t("p",[s._v("将许多的小图片整合到一张大图片中，利用css中的background-image属性，background-position属性定位某个图片位置，来达到在大图片中引用某个部位的小图片的效果。")]),s._v(" "),t("h4",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点：")]),s._v(" "),t("ul",[t("li",[s._v("减少网页的http请求，提升网页加载速度。")]),s._v(" "),t("li",[s._v("合并多张小图片成大图，能减少字节总数（大图大小<=多张小图大小）.")])]),s._v(" "),t("h4",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点：")]),s._v(" "),t("ul",[t("li",[s._v("前期需要处理图片将小图合并，多些许工程量。")]),s._v(" "),t("li",[s._v("对于需要经常改变的图片维护起来麻烦。")])]),s._v(" "),t("h3",{attrs:{id:"base64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[s._v("#")]),s._v(" base64")]),s._v(" "),t("p",[s._v("base64是网络上最常见的用于传输8Bit字节代码的编码方式之一，要求把每三个8Bit的字节转换为四个6Bit的字节，Base64是网络上最常见的用于传输8Bit字节代码的编码方式之一。")]),s._v(" "),t("p",[s._v("通俗点讲：将资源原本二进制形式转成以64个字符基本单位，所组成的一串字符串。")]),s._v(" "),t("p",[s._v("比如一张图片转成base64编码后就像这样，图片直接以base64形式嵌入文件中")]),s._v(" "),t("p",[s._v("生成base64编码：")]),s._v(" "),t("p",[s._v("图片生成base64可以用一些工具，如在线工具，但在项目中这样一个图片这样生成是挺繁琐。")]),s._v(" "),t("p",[s._v("特别说下，webpack中的url-loader可以完成这个工作，可以对限制大小的图片进行base64的转换，非常方便。")]),s._v(" "),t("h4",{attrs:{id:"优点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[s._v("#")]),s._v(" 优点：")]),s._v(" "),t("ul",[t("li",[s._v("base64的图片会随着html或者css一起下载到浏览器,减少了请求.")]),s._v(" "),t("li",[s._v("可避免跨域问题")])]),s._v(" "),t("h4",{attrs:{id:"缺点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[s._v("#")]),s._v(" 缺点：")]),s._v(" "),t("ul",[t("li",[s._v("低版本的IE浏览器不兼容。")]),s._v(" "),t("li",[s._v("体积会比原来的图片大一点。")]),s._v(" "),t("li",[s._v("css中过多使用base64图片会使得css过大，不利于css的加载。")])]),s._v(" "),t("h4",{attrs:{id:"适用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[s._v("#")]),s._v(" 适用场景：")]),s._v(" "),t("p",[s._v("应用于小的图片几k的，太大的图片会转换后的大小太大，得不偿失。\n用于一些css sprites不利处理的小图片，如一些可以通过background-repeat平铺来做成背景的图片")])])}),[],!1,null,null,null);a.default=e.exports}}]);